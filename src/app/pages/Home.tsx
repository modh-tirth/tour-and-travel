import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Search, MapPin, Calendar, Users, Star, ArrowRight, Globe, Award, Shield, HeadphonesIcon } from "lucide-react";

export function Home() {
  const popularDestinations = [
    {
      id: 1,
      name: "Taj Mahal Tour",
      location: "Agra, India",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1080",
      price: "₹12,999",
      duration: "3 Days",
    },
    {
      id: 2,
      name: "Kerala Backwaters",
      location: "Kerala, India",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1080",
      price: "₹18,999",
      duration: "5 Days",
    },
    {
      id: 3,
      name: "Rajasthan Heritage",
      location: "Jaipur, India",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1080",
      price: "₹15,999",
      duration: "4 Days",
    },
    {
      id: 4,
      name: "Goa Beach Paradise",
      location: "Goa, India",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1080",
      price: "₹14,999",
      duration: "4 Days",
    },
  ];

  const features = [
    {
      icon: Globe,
      title: "100+ Destinations",
      description: "Explore incredible India from Kashmir to Kanyakumari",
    },
    {
      icon: Award,
      title: "Best Price Guarantee",
      description: "Affordable packages for every budget",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Your safety is our top priority",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Hindi & English support available",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1080"
            alt="India Travel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl mb-6">Discover Incredible India</h1>
          <p className="text-xl md:text-2xl mb-8">
            Explore India's rich heritage, diverse culture, and breathtaking landscapes
          </p>
          
          {/* Search Box */}
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 border-b md:border-b-0 md:border-r border-gray-300 pb-4 md:pb-0 md:pr-4">
                <MapPin className="w-5 h-5 text-blue-600" />
                <input
                  type="text"
                  placeholder="Where to?"
                  className="w-full outline-none text-gray-700"
                />
              </div>
              <div className="flex items-center gap-2 border-b md:border-b-0 md:border-r border-gray-300 pb-4 md:pb-0 md:pr-4">
                <Calendar className="w-5 h-5 text-blue-600" />
                <input
                  type="text"
                  placeholder="When?"
                  className="w-full outline-none text-gray-700"
                />
              </div>
              <div className="flex items-center gap-2 border-b md:border-b-0 md:border-r border-gray-300 pb-4 md:pb-0 md:pr-4">
                <Users className="w-5 h-5 text-blue-600" />
                <input
                  type="text"
                  placeholder="Travelers"
                  className="w-full outline-none text-gray-700"
                />
              </div>
              <Link
                to="/booking"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                Search
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Popular Indian Destinations</h2>
            <p className="text-xl text-gray-600">
              Discover the beauty and diversity of India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDestinations.map((destination) => (
              <div
                key={destination.id}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm">4.8</span>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-xl mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-3 flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {destination.location}
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl text-blue-600">{destination.price}</span>
                      <span className="text-gray-600 text-sm ml-2">per person</span>
                    </div>
                    <span className="text-gray-600 text-sm">{destination.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Destinations
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of happy travelers and create memories that last a lifetime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/tours"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Browse Tours
            </Link>
            <Link
              to="/booking"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}