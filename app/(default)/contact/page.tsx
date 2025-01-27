import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faGlobe, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function ContactPage() {
  return (
    <div>
      {/* Header Section */}
      <div className="relative bg-cover bg-center h-72" style={{ backgroundImage: "url('https://www.swegonairacademy.com/siteassets/4_updates_and_insights/4b_events_webinars/blue-house-with-green-ambitions-1408x452.jpeg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Contact Form and Info */}
      <div className="max-w-7xl mx-auto px-6  lg:ml-28 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Your Name</label>
              <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium">Your Email</label>
              <input type="email" placeholder="Email Address" className="w-full px-4 py-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium">Subject</label>
              <input type="text" placeholder="Subject" className="w-full px-4 py-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium">Your Message</label>
              <textarea placeholder="Message" className="w-full px-4 py-2 border rounded-md"></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Get in Touch */}
        <div className='ml-10'>
          <h2 className="text-2xl sm:text- font-semibold mb-4 ">Get In Touch</h2>
          <p className="text-sm text-gray-600 mb-6">
            If you have any questions or concerns, feel free to reach out to us.
          </p>
          <ul className="space-y-4 mt-10">
            <li className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faPhone} className="text-blue-600 w-5" />
              <span>+123-234-1234</span>
            </li>
            <li className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 w-5" />
              <span>hello@bluehouse.com</span>
            </li>
            <li className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faGlobe} className="text-blue-600 w-5" />
              <span>www.bluehouse.com</span>
            </li>
            <li className="flex items-center space-x-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600 w-5" />
              <span>No. 10 Akila Machunga Street, Jos 930105, Plateau</span>
            </li>
          </ul>
         {/* Follow Us On */}
<h3 className="mt-6 font-semibold">Follow Us On</h3>
<div className="flex space-x-4 mt-4">
  <a href="https://www.facebook.com/bluehousetechnologies" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faFacebook} className="text-blue-600 hover:text-blue-800 w-5" />
  </a>
  <a href="https://twitter.com/bluehousetechnologies" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faTwitter} className="text-blue-600 hover:text-blue-800 w-5" />
  </a>
  <a href="https://www.linkedin.com/company/bluehousetechnologies" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faLinkedin} className="text-blue-600 hover:text-blue-800 w-5" />
  </a>
  <a href="https://www.instagram.com/bluehousetechnologies" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} className="text-blue-600 hover:text-blue-800 w-5" />
  </a>
</div>

        </div>
      </div>

      {/* Map Section */}
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5141.710484826903!2d8.874437704411308!3d9.88415169936531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105373c079f53a81%3A0xf2615aa9896c9a77!2sBluehouse%20Technologies!5e0!3m2!1sen!2sng!4v1737722155263!5m2!1sen!2snghttps://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d5141.710484826903!2d8.874437704411308!3d9.88415169936531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x105373c079f53a81%3A0xf2615aa9896c9a77!2sBluehouse%20Technologies%2C%20No.%2010%20Akila%20Machunga%20Street%2C%20Jos%20930105%2C%20Plateau!3m2!1d9.8839905!2d8.8776209!5e0!3m2!1sen!2sng!4v1737722270854!5m2!1sen!2sng"
          className="w-full h-72"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
