import { FaInstagram, FaTiktok } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-10 mt-20 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 border-b border-[#f49620] pb-10">
        {/* About Us */}
        <div className="sm:col-span-2 md:col-span-1">
          <h2 className="text-2xl font-bold text-[#f49620] mb-4">About Us</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            Welcome to <strong>Adunibites</strong>, where passion meets flavour
            in the heart of Dublin. We celebrate Afro Fusion cuisine — a journey
            through taste and culture. Our mission is to share that love with
            the Dublin community.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#f49620] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/" className="hover:text-[#f49620] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#categories"
                className="hover:text-[#f49620] transition-colors"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/#categories"
                className="hover:text-[#f49620] transition-colors"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                href="/#testimonials"
                className="hover:text-[#f49620] transition-colors"
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-xl font-semibold text-[#f49620] mb-4">
            Connect with us
          </h3>
          <div className="flex space-x-5 text-2xl text-white">
            <Link
              href="https://instagram.com/adunibites"
              target="_blank"
              aria-label="Instagram"
              className="hover:text-[#f49620] transition-colors"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://tiktok.com/@adunibites"
              target="_blank"
              aria-label="TikTok"
              className="hover:text-[#f49620] transition-colors"
            >
              <FaTiktok />
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-300">
            Email: adunibites@gmail.com
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-400 mt-8">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-[#f49620]">Aduni Bites</span>. All rights
        reserved.
      </div>
    </footer>
  );
}
