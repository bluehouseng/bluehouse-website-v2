import axios from "axios";
import User from "@/model/user";
import dbConnect from "@/lib/mongoose";

export async function POST(request: Request) {
  await dbConnect();
  // Parse the request body
  const body = await request.json();
  const { name, email, stack, checkInTime, checkOutTime } = body;

  // check the db to see if the user has record for that day
  // doesn't - create a record
  // does checkOutTime
  //

  console.log({
    name,
    email,
    stack,
    checkInTime,
    checkOutTime,
  });
  try {
    const user = await User.findOneAndUpdate(
      {
        email,
        checkInTime,
      },
      { checkInTime, checkOutTime },
    );
    console.log(user);

    if (!user) {
      const newUser = new User({ name, email, stack, checkInTime });
      await newUser.save();
      return new Response(
        JSON.stringify({
          message: "User checked in.",
          success: true,
        }),
        {
          status: 201,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    // user.checkOutTime = checkOutTime;
    // await user.save();

    return new Response(
      JSON.stringify({
        message: "User checked out.",
        success: true,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Unable to update", err }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function GET(request: Request) {
  await dbConnect();
  const url = new URL(request.url);
  // Access query parameters
  const email = url.searchParams.get("email");

  console.log(email); // Lo

  try {
    if (!email) {
      return new Response(
        JSON.stringify({
          message: "Unable to get user history",
          success: false,
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const foundUser = await User.find({
      email,
    });

    return new Response(
      JSON.stringify({
        message: "User history",
        success: true,
        history: foundUser,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({
        message: "Sorry, something went wrong",
        success: false,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
