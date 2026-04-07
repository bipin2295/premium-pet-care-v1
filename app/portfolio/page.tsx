import Image from 'next/image'
import dogs from '../../data/dogs.json'

const PortfolioPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-primary mb-4">
          Happy Tails Gallery
        </h1>
        <p className="text-lg text-center text-gray-700 mb-12">
          A few of our beloved clients enjoying their adventures.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dogs.map((dog) => (
            <div
              key={dog.id}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={dog.imageUrl}
                alt={`A photo of ${dog.name}`}
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <h3 className="text-2xl font-bold">{dog.name}</h3>
                <p className="text-lg">{dog.breed}</p>
                <p className="text-sm mt-2">
                  Favorite Route: {dog.favoriteRoute}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PortfolioPage
