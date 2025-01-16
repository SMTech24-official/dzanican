import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer id="footer" className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Left section */}
          <div className="space-y-6">
            <Image
              src={logo}
              alt="Gabtrans Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <p className="text-sm mb-4">
              To get exclusive updates and benefits
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter email"
                className="bg-transparent border-white text-white placeholder:text-white"
              />
              <Button className="bg-[#0095FF] hover:bg-[#0095FF]/90 text-white">
                Subscribe
              </Button>
            </div>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="hover:text-[#0095FF]">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-[#0095FF]">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="hover:text-[#0095FF]">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Company section */}
          <div>
            <h3 className="text-xl font-title mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-[#0095FF]">
                  News and blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#0095FF]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#0095FF]">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources section */}
          <div>
            <h3 className="text-xl mb-4 font-title">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/security" className="hover:text-[#0095FF]">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[#0095FF]">
                  FAQ&apos;s
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#0095FF]">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/terms&conditions" className="hover:text-[#0095FF]">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info section */}
          <div>
            <h3 className="text-xl mb-4 font-title">Contact Info</h3>
            <ul className="space-y-2">
              <li>
                Location: 332 New cross road, London, United Kingdom. SE14 6AG
              </li>
              <li>
                Email:{" "}
                <Link
                  href="mailto:info@gabtransukimited.com"
                  className="hover:text-[#0095FF]"
                >
                  info@gabtransukimited.com
                </Link>
              </li>
              <li>
                Phone:{" "}
                <Link href="tel:02045249931" className="hover:text-[#0095FF]">
                  020 4524 9931
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-12 pt-8 border-t border-white/10">
          © 2024 GABTRANS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
