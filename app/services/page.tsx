import Link from 'next/link'
import services from '../../data/services.json'

const ServicesPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Services & Rates
          </h1>
          <p className="text-lg text-gray-700 mb-12 bg-secondary bg-opacity-10 p-4 rounded-lg">
            Proudly serving the downtown area. All services are tailored to
            your dog's individual needs.
          </p>
        </div>

        <div className="space-y-8 max-w-2xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-start"
            >
              <div className="flex-grow mb-4 sm:mb-0 sm:mr-8">
                <h2 className="text-2xl font-bold text-secondary mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
              <div className="text-left sm:text-right flex-shrink-0">
                <p className="text-2xl font-bold text-primary">
                  ${service.basePrice}
                </p>
                <p className="text-sm text-gray-500 mb-2">/ session</p>
                <Link
                  href="/contact"
                  className="text-primary font-semibold hover:underline"
                >
                  Contact to Book
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
