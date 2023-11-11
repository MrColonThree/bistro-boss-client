import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row">
        <div className="text-center text-white md:w-1/2 bg-[#1F2937] py-20 space-y-4">
          <h1 className="text-3xl font-medium">CONTACT US</h1>
          <h4>123 ABS Street, Uni 21, Bangladesh</h4>
          <p>
            +88 123456789 <br />
            Mon - Fri: 08:00 - 22:00 <br />
            Sat - Sun: 10:00 - 23:00
          </p>
        </div>
        <div className="text-center text-white md:w-1/2 bg-[#111827] py-20 space-y-4">
          <h1 className="text-3xl font-medium">Follow US</h1>
          <h4>Join us on social media</h4>
          <div className="flex justify-center items-center text-xl gap-4">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className="footer footer-center p-4 bg-black text-white">
        <aside>
          <p>Copyright © CulinaryCloud. All rights reserved.</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
