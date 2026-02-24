import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { MapPin, TrendingUp, Heart } from "lucide-react";
import { useState } from "react";

export function Destinations() {
  const [likedDestinations, setLikedDestinations] = useState<number[]>([]);

  const destinations = [
    {
      id: 1,
      name: "Taj Mahal",
      country: "Agra, Uttar Pradesh",
      description: "Marvel at the iconic symbol of love, one of the Seven Wonders of the World.",
      tours: 12,
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1080",
      trending: true,
    },
    {
      id: 2,
      name: "Kerala Backwaters",
      country: "Kerala",
      description: "Experience serene houseboat cruises through lush green landscapes.",
      tours: 15,
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1080",
      trending: false,
    },
    {
      id: 3,
      name: "Jaipur",
      country: "Rajasthan",
      description: "The Pink City offers majestic forts, palaces, and vibrant culture.",
      tours: 18,
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1080",
      trending: true,
    },
    {
      id: 4,
      name: "Goa Beaches",
      country: "Goa",
      description: "Sun, sand, and sea with Portuguese heritage and vibrant nightlife.",
      tours: 14,
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1080",
      trending: true,
    },
    {
      id: 5,
      name: "Ladakh",
      country: "Jammu & Kashmir",
      description: "High altitude desert with stunning landscapes and Buddhist monasteries.",
      tours: 10,
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1080",
      trending: false,
    },
    {
      id: 6,
      name: "Varanasi",
      country: "Uttar Pradesh",
      description: "Ancient spiritual city on the banks of the holy Ganges River.",
      tours: 11,
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1080",
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
          <h1 className="text-5xl mb-4">Explore India</h1>
          <p className="text-xl">
            Discover incredible destinations across India waiting to be explored
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
