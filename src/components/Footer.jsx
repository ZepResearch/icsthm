import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t-2 border-orange-400 bg-[url('https://res.cloudinary.com/dtsuvx8dz/image/upload/v1734199287/samples/fxpubw3p6ryt2aidmluy.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="bg-black/80">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0 md:w-1/3">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/ictmh.png"
                  alt="ICTMH Logo"
                  width={200}
                  height={80}
                />
              </Link>
              {/* <h2 className="text-xl font-bold text-orange-600 mb-4">
                International Conference on Tourism Management and Hospitality
              </h2> */}
              <div className="flex space-x-4  ml-3 mb-4">
                <a href="https://www.facebook.com/people/Zep-Research/61561809783777/" className="text-primary hover:text-primary/80">
                  <Facebook size={24} />
                </a>
                <a href="" className="text-primary hover:text-primary/80">
                  <Instagram size={24} />
                </a>
                <a href="https://x.com/i/flow/login?redirect_after_login=%2FZepresearch#" className="text-primary hover:text-primary/80">
                  <Twitter size={24} />
                </a>
                <a href="https://www.linkedin.com/company/zep-research/" className="text-primary hover:text-primary/80">
                  <Linkedin size={24} />
                </a>
                <a href="https://www.youtube.com/@Zepresearch" className="text-primary hover:text-primary/80">
                  <Youtube size={24} />
                </a>
              </div>
              <div className="flex space-x-4  ml-3 mb-4">
                <div className="space-y-2 text-sm font-medium text-white">
                  <div className="flex items-center">
                    <Mail className="mr-2 text-primary" />
                    <span>info@icsthm.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-2 text-primary" />
                    <span>+91 8260080050</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 text-primary" />
                    <span>Bangkok, Thailand</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:w-2/3">
              <div className="space-y-4 text-white">
                <h3 className="text-lg font-semibold text-orange-600">About</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/about-conference"
                      className="hover:text-orange-500 transition-colors"
                    >
                      Conference
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-zep-research"
                      className="hover:text-orange-500 transition-colors"
                    >
                      Zep Research
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/committee"
                      className="hover:text-orange-500 transition-colors"
                    >
                      Committee
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sponsorship"
                      className="hover:text-orange-500 transition-colors"
                    >
                      Sponsorship
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      href="/about-speakers"
                      className="hover:text-orange-500 transition-colors"
                    >
                      Speakers
                    </Link>
                  </li> */}
                </ul>
              </div>
              <div className="space-y-4 text-white" >
                <h3 className="text-lg font-semibold text-orange-600">
                  Call for Papers
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/theme-and-topics"
                      className="hover:text-orange-500 transition-colors"
                    >
                      Theme and Topics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/papers-format"
                      className="hover:text-orange-500 transition-colors"
                    >
                      Papers Format
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/mode-of-presentation"
                      className="hover:text-orange-500 transition-colors"
                    >
                      Mode of Presentation
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 text-white">
                <h3 className="text-lg font-semibold text-orange-600">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li></li>
                  <li>
                    <Link
                      href="/submission"
                      className="hover:text-orange-500 transition-colors"
                    >
                      Submission
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/venue"
                      className="hover:text-orange-500 transition-colors"
                    >
                      Venue
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-orange-500 transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/awards"
                      className="hover:text-orange-500 transition-colors"
                    >
                      Award
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/registration"
                      className="hover:text-orange-500 transition-colors"
                    >
                      Registration
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 text-white">
                <h3 className="text-lg font-semibold text-orange-600">
                  Legal Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/terms-and-conditions"
                      className="hover:text-orange-500 transition-colors"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cancellation-policy"
                      className="hover:text-orange-500 transition-colors"
                    >
                      Cancellation Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="hover:text-orange-500 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-orange-200 text-center">
            <p className="text-sm text-orange-50  ">
              &copy; {new Date().getFullYear()} International Conference on
              Tourism Management and Hospitality. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

