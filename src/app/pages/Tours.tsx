import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { MapPin, Calendar, Users, Star, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";

export function Tours() {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const categories = [
    { id: "all", label: "All Tours" },
    { id: "adventure", label: "Adventure" },
    { id: "beach", label: "Beach" },
    { id: "cultural", label: "Cultural" },
    { id: "luxury", label: "Luxury" },
  ];

  const tours = [
    {
      id: 1,
      name: "Golden Triangle Tour",
      category: "cultural",
      location: "Delhi-Agra-Jaipur",
      duration: "6 Days / 5 Nights",
      groupSize: "2-15 people",
      price: "₹24,999",
      rating: 4.9,
      reviews: 345,
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1080",
      highlights: ["Taj Mahal", "Red Fort", "Amber Fort", "City Palace"],
    },
    {
      id: 2,
      name: "Kerala Backwaters Cruise",
      category: "beach",
      location: "Kerala",
      duration: "5 Days / 4 Nights",
      groupSize: "2-10 people",
      price: "₹18,999",
      rating: 4.8,
      reviews: 289,
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1080",
      highlights: ["Houseboat stay", "Ayurvedic spa", "Tea plantations", "Beach resorts"],
    },
    {
      id: 3,
      name: "Rajasthan Royal Heritage",
      category: "cultural",
      location: "Rajasthan",
      duration: "7 Days / 6 Nights",
      groupSize: "2-12 people",
      price: "₹29,999",
      rating: 4.9,
      reviews: 412,
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1080",
      highlights: ["Palace hotels", "Camel safari", "Folk dance", "Desert camping"],
    },
    {
      id: 4,
      name: "Goa Beach Holiday",
      category: "beach",
      location: "Goa",
      duration: "4 Days / 3 Nights",
      groupSize: "2-8 people",
      price: "₹14,999",
      rating: 4.7,
      reviews: 378,
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1080",
      highlights: ["Beach resorts", "Water sports", "Nightlife", "Portuguese heritage"],
    },
    {
      id: 5,
      name: "Himalayan Adventure",
      category: "adventure",
      location: "Himachal Pradesh",
      duration: "8 Days / 7 Nights",
      groupSize: "4-12 people",
      price: "₹32,999",
      rating: 5.0,
      reviews: 256,
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1080",
      highlights: ["Trekking", "Mountain views", "Adventure sports", "Local culture"],
    },
    {
      id: 6,
      name: "Ladakh Bike Expedition",
      category: "adventure",
      location: "Ladakh",
      duration: "10 Days / 9 Nights",
      groupSize: "4-10 people",
      price: "₹45,999",
      rating: 4.9,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1080",
      highlights: ["Bike expedition", "Pangong Lake", "Monasteries", "High passes"],
    },
    {
      id: 7,
      name: "Luxury Palace Tour",
      category: "luxury",
      location: "Udaipur-Jodhpur",
      duration: "5 Days / 4 Nights",
      groupSize: "2-6 people",
      price: "₹59,999",
      rating: 4.9,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1080",
      highlights: ["Heritage hotels", "Private tours", "Fine dining", "Spa treatments"],
    },
    {
      id: 8,
      name: "Andaman Island Paradise",
      category: "beach",
      location: "Andaman & Nicobar",
      duration: "6 Days / 5 Nights",
      groupSize: "2-10 people",
      price: "₹27,999",
      rating: 4.8,
      reviews: 289,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1080",
      highlights: ["Scuba diving", "Beach resorts", "Island hopping", "Water sports"],
    },
  ];

  const filteredTours = selectedCategory === "all" 
    ? tours 
    : tours.filter(tour => tour.category === selectedCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-4">India Tour Packages</h1>
          <p className="text-xl">
            Explore incredible India with our curated travel experiences
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tours Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <ImageWithFallback
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm">{tour.rating}</span>
                  <span className="text-gray-500 text-sm">({tour.reviews})</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl mb-2">{tour.name}</h3>
                
                <div className="space-y-2 mb-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{tour.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{tour.groupSize}</span>
                  </div>
                </div>

                <div className="border-t pt-4 mb-4">
                  <p className="text-sm text-gray-600 mb-2">Highlights:</p>
                  <div className="flex flex-wrap gap-2">
                    {tour.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-sm text-gray-600">From</span>
                    <div className="text-2xl text-blue-600">{tour.price}</div>
                  </div>
                  <button
                    onClick={() => navigate("/booking")}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}