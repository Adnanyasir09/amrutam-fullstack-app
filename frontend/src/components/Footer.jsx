import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Linkedin
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#dfe8df] text-[#1c3c28] px-6 py-12 md:px-20 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        
        {/* Get in Touch */}
        <div>
          <h3 className="font-semibold mb-2">Get in touch</h3>
          <p className="mb-1">support@amrutam.global</p>
          <p className="mb-1">
            Amrutam Pharmaceuticals Pvt Ltd.,<br />
            chitragupt ganj, Nai Sadak, Lashkar,<br />
            Gwalior - 474001
          </p>
          <p className="mb-3">+91 9713171999</p>

          <div className="flex gap-3 mt-4">
            <Facebook className="w-6 h-6 text-white bg-[#4c6b58] rounded-full p-1 cursor-pointer" />
            <Instagram className="w-6 h-6 text-white bg-[#4c6b58] rounded-full p-1 cursor-pointer" />
            <Youtube className="w-6 h-6 text-white bg-[#4c6b58] rounded-full p-1 cursor-pointer" />
            <Twitter className="w-6 h-6 text-white bg-[#4c6b58] rounded-full p-1 cursor-pointer" />
            <Linkedin className="w-6 h-6 text-white bg-[#4c6b58] rounded-full p-1 cursor-pointer" />
            
          </div>
        </div>

        {/* Information */}
        <div>
          <h3 className="font-semibold mb-2">Information</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy for Mobile Apps</a></li>
            <li><a href="#" className="hover:underline">Shipping, return and cancellation Policy</a></li>
            <li><a href="#" className="hover:underline">International Delivery</a></li>
            <li><a href="#" className="hover:underline">For Businesses, Hotels, and Resorts</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">
            Subscribe to our Newsletter and join<br />
            Amrutam Family today!
          </h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 px-4 py-2 rounded-l-full border border-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="px-5 py-2 bg-black text-white rounded-r-full hover:bg-gray-800 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
