import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <footer className="bg-white text-gray-800 py-12 relative">
      <div className="geometric-blob w-[800px] h-[800px] -bottom-400 -right-400 opacity-30" />
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8 relative">
        <div className="col-span-1 md:col-span-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-16%20at%205.59.54%20PM-r95maSGSRoxQUXdB9ga58hqTrPuWut.jpeg"
            alt="Jobster - Connecting Talent, Empowering Teams"
            width={200}
            height={80}
            className="mb-4 object-contain"
          />
          <p className="text-sm text-gray-600">
            Jobster is committed to providing seamless recruitment, payroll, and reference checking solutions,
            empowering businesses to hire smarter and more efficiently.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">About Us</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" onClick={scrollToTop} className="text-gray-600 hover:text-orange-500 transition-colors">
                Homepage
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={scrollToTop}
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Our Work</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/our-work-hr"
                onClick={scrollToTop}
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                Manpower Solutions
              </Link>
            </li>
            <li>
              <Link
                href="/our-work-tech"
                onClick={scrollToTop}
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                IT Solutions
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Our Policies</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="https://jobstersg.azurewebsites.net/environmental-sustainability-policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                Our Environmental Sustainability Policy
              </Link>
            </li>
            <li>
              <Link
                href="https://jobstersg.azurewebsites.net/Jobster-Data-Protection-Policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                Our Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="https://jobstersg.azurewebsites.net/jobster-sustainability-report.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                Sustainability Report
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Our Certifications</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-gray-600">Progressive Wage Mark Accredited Company</li>
            <li className="text-gray-600">Data Protection Trustmark</li>
            <li className="text-gray-600">
              Licensed Employment Agency with the Ministry of Manpower, Singapore: Agency Licence No.: 06C5060
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

