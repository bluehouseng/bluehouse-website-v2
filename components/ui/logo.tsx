import Link from "next/link";
export default function Logo() {
  return (
    <Link href='/' className='inline-flex' aria-label='Cruip'>
      <img
        src='https://bluehouse-dpf9chkb3-jotham-ardels-projects.vercel.app/assets/bluehouse-cd68d9d4.png'
        alt=''
        width='50%'
      />
    </Link>
  );
}
