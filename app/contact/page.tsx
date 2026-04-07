import { Phone, Mail } from 'lucide-react'

const ContactPage = () => {
  return (
    <div className="bg-background min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-4">
            I'd love to meet you and your pup!
          </h1>
          <p className="text-lg text-gray-700 mb-12">
            The best way to get started is to reach out directly. Let's find the perfect service for your best friend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Call or Text Card */}
          <a
            href="tel:+1234567890"
            className="group bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="bg-secondary text-white p-4 rounded-full mb-6">
              <Phone size={40} />
            </div>
            <h2 className="text-2xl font-bold text-secondary mb-2">
              Call or Text Me
            </h2>
            <p className="text-gray-600 mb-4">
              For the quickest response, please call or text.
            </p>
            <span className="text-lg font-semibold text-primary group-hover:underline">
              (123) 456-7890
            </span>
          </a>

          {/* Email Card */}
          <a
            href="mailto:hello@pawsandplay.com"
            className="group bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="bg-secondary text-white p-4 rounded-full mb-6">
              <Mail size={40} />
            </div>
            <h2 className="text-2xl font-bold text-secondary mb-2">
              Send an Email
            </h2>
            <p className="text-gray-600 mb-4">
              For non-urgent inquiries, feel free to send an email.
            </p>
            <span className="text-lg font-semibold text-primary group-hover:underline">
              hello@pawsandplay.com
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
