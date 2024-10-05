import { User, Phone, MapPin, Mail, Link as LinkIcon, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[rgba(9,42,73)] text-gray-300 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 bg-coral-400 text-white px-4 py-2 rounded-lg w-fit">
              <User size={20} />
              <span className="font-bold">ABOUT US</span>
            </div>
            <h2 className="text-xl font-semibold text-[15px]">Moon SEZ Consultants Pvt. Ltd.</h2>
            <p className="text-[12px]">
              MOON SEZ Group is engaged into the business of Providing vide range of SEZ 
              Consultancy services to Developers/Co-developers/Units etc. in SEZ right from 
              SEZ Approvals, Compliances, Material clearance from Customs, SEIS/MEIS etc.
            </p>
            <p className="text-[12px]">
              MOON SEZ Group is having a dedicated team of professional spread across 16 different locations in India. We are headquartered in Pune with registered office in Mumbai and operating from our service branches located at Bangalore, Gandhinagar, Gurgaon, Indore, Kesurdi Mangalore, Nagpur, Noida, Phaltan.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-2 bg-orange-300 text-white px-4 py-2 rounded-lg w-fit">
              <Phone size={20} />
              <span className="font-bold">QUICK CONTACT</span>
            </div>
            <div className="space-y-2 text-[12px]">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+91 020 6791 6565</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>ratan@sezindia.co.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>ashish@sezindia.co.in</span>
              </div>
              <div className="space-y-1">
                <Link href="https://www.moonsez.com" className="flex items-center space-x-2 hover:text-white">
                  <LinkIcon size={16} />
                  <span>www.moonsez.com</span>
                </Link>
                <Link href="https://www.sezindia.co.in" className="flex items-center space-x-2 hover:text-white">
                  <LinkIcon size={16} />
                  <span>www.sezindia.co.in</span>
                </Link>
                <Link href="https://www.ifscconsultants.com" className="flex items-center space-x-2 hover:text-white">
                  <LinkIcon size={16} />
                  <span>www.ifscconsultants.com</span>
                </Link>
                <Link href="https://www.moonveda.com" className="flex items-center space-x-2 hover:text-white">
                  <LinkIcon size={16} />
                  <span>www.moonveda.com</span>
                </Link>
                <Link href="https://www.moonfta.com" className="flex items-center space-x-2 hover:text-white">
                  <LinkIcon size={16} />
                  <span>www.moonfta.com</span>
                </Link>
              </div>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="bg-orange-300 p-2 rounded-md hover:bg-orange-400">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="bg-orange-300 p-2 rounded-md hover:bg-orange-400">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="bg-orange-300 p-2 rounded-md hover:bg-orange-400">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="bg-orange-300 p-2 rounded-md hover:bg-orange-400">
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center space-y-4">
          <button className="flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300">
            <MapPin size={20} />
            <span className="font-bold">GET IN TOUCH</span>
          </button>
          <div className="text-center">
            <h3 className="font-semibold">Head Office:</h3>
            <p className="text-[12px]">
              Office No 311,312, Pride Purple Square, Kalewadi Phata, Wakad, Pune-411057
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}