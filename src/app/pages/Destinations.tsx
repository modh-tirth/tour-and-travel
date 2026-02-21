import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { MapPin, TrendingUp, Heart } from "lucide-react";
import { useState } from "react";

export function Destinations() {
  const [likedDestinations, setLikedDestinations] = useState<number[]>([]);

  const destinations = [
    {
      id: 1,
      name: "Maldives",
      country: "Indian Ocean",
      description: "Crystal clear waters and pristine beaches await you in this tropical paradise.",
      tours: 12,
      image: "https://images.unsplash.com/photo-1714412192114-61dca8f15f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzcxNTQ1MDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      trending: true,
    },
    {
      id: 2,
      name: "Swiss Alps",
      country: "Switzerland",
      description: "Majestic mountains and charming villages in the heart of Europe.",
      tours: 15,
      image: "https://images.unsplash.com/photo-1673505413397-0cd0dc4f5854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NzE1NjI3NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      trending: false,
    },
    {
      id: 3,
      name: "Paris",
      country: "France",
      description: "The city of lights offers romance, culture, and unforgettable experiences.",
      tours: 18,
      image: "https://images.unsplash.com/photo-1725806760874-96040618865c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGVhbiUyMGNpdHklMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcxNTE2OTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      trending: true,
    },
    {
      id: 4,
      name: "Kyoto",
      country: "Japan",
      description: "Ancient temples, traditional gardens, and rich cultural heritage.",
      tours: 14,
      image: "https://images.unsplash.com/photo-1684613998803-83fe7787db15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHRlbXBsZSUyMHRyYXZlbHxlbnwxfHx8fDE3NzE0OTEwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      trending: true,
    },
    {
      id: 5,
      name: "Serengeti",
      country: "Tanzania",
      description: "Witness the great migration and experience the wild side of Africa.",
      tours: 10,
      image: "https://images.unsplash.com/photo-1729359035276-189519a4b072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZhcmklMjB3aWxkbGlmZSUyMGFmcmljYXxlbnwxfHx8fDE3NzE0OTg3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      trending: false,
    },
    {
      id: 6,
      name: "Iceland",
      country: "Nordic Region",
      description: "Land of fire and ice with stunning natural phenomena.",
      tours: 11,
      image: "https://images.unsplash.com/photo-1648607560570-4ee80c5914c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3J0aGVybiUyMGxpZ2h0cyUyMGF1cm9yYXxlbnwxfHx8fDE3NzE0ODAyODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      trending: true,
    },
  ];

  const toggleLike = (id: number) => {
    setLikedDestinations(prev => 
      prev.includes(id) 
        ? prev.filter(destId => destId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-4">Explore Destinations</h1>
          <p className="text-xl">
            Discover amazing places around the world waiting to be explored
          </p>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="relative h-72 overflow-hidden">
                <ImageWithFallback
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  {destination.trending && (
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      Trending
                    </span>
                  )}
                  <button
                    onClick={() => toggleLike(destination.id)}
                    className="ml-auto bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        likedDestinations.includes(destination.id)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-600"
                      }`}
                    />
                  </button>
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl mb-1">{destination.name}</h3>
                  <p className="flex items-center gap-1 text-sm">
                    <MapPin className="w-4 h-4" />
                    {destination.country}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4">{destination.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-sm text-gray-600">
                    {destination.tours} tours available
                  </span>
                  <button className="text-blue-600 hover:text-blue-700 transition-colors">
                    View Tours →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl mb-4">Can't Find Your Dream Destination?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let us create a custom itinerary just for you
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Request Custom Tour
          </button>
        </div>
      </div>
    </div>
  );
}
