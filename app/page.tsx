import Hero from '../components/Hero'
import testimonials from '../data/testimonials.json'
import { Star } from 'lucide-react'

const HomePage = () => {
  return (
    <div>
      <Hero />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Why Choose Me?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500" fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.reviewText}"</p>
                <p className="font-semibold text-right">
                  - {testimonial.clientName}, owner of {testimonial.dogName}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
