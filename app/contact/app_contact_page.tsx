export default function Contact() {
  return (
    <div className="min-h-screen py-20 px-4 md:px-0">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">Get in Touch</h1>
        <p className="text-xl mb-12 animate-fade-in">
          Get in touch with us today to ensure your business is powered by top-tier talent and seamless HR solutions.
        </p>
        <div className="grid md:grid-cols-2 gap-12 animate-fade-in">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Office Address</h2>
            <p className="text-lg mb-8">
              808 French Road, Kitchener Complex, #07-161<br />
              Singapore 200808
            </p>
            <h2 className="text-2xl font-semibold mb-4">Email Us</h2>
            <p className="text-lg mb-8">Email: sales@jobster.com.sg</p>
            
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
            <p className="text-lg mb-8">
              Monday to Friday: 9:00 AM – 6:00 PM<br />
              Closed on Weekends and Public Holidays
            </p>
            <p className="text-lg">
              Feel free to reach out and let us know how we can assist with your recruitment and payroll needs. We look forward to connecting with you soon!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

