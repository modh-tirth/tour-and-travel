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
      name: "Maldives Paradise Escape",
      category: "beach",
      location: "Maldives",
      duration: "7 Days / 6 Nights",
      groupSize: "2-10 people",
      price: "$2,499",
      rating: 4.9,
      reviews: 245,
      image: "https://images.unsplash.com/photo-1714412192114-61dca8f15f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzcxNTQ1MDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      highlights: ["Private villa", "Snorkeling", "Spa treatments", "Gourmet dining"],
    },
    {
      id: 2,
      name: "Swiss Alps Hiking Adventure",
      category: "adventure",
      location: "Switzerland",
      duration: "5 Days / 4 Nights",
      groupSize: "4-12 people",
      price: "$1,899",
      rating: 4.8,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1673505413397-0cd0dc4f5854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NzE1NjI3NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      highlights: ["Mountain trekking", "Cable car rides", "Local cuisine", "Expert guides"],
    },
    {
      id: 3,
      name: "Paris Cultural Experience",
      category: "cultural",
      location: "France",
      duration: "6 Days / 5 Nights",
      groupSize: "2-8 people",
      price: "$1,599",
      rating: 4.7,
      reviews: 312,
      image: "https://images.unsplash.com/photo-1725806760874-96040618865c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGVhbiUyMGNpdHklMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcxNTE2OTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      highlights: ["Louvre Museum", "Eiffel Tower", "Wine tasting", "Seine cruise"],
    },
    {
      id: 4,
      name: "Kyoto Temple Discovery",
      category: "cultural",
      location: "Japan",
      duration: "8 Days / 7 Nights",
      groupSize: "2-10 people",
      price: "$2,199",
      rating: 4.9,
      reviews: 278,
      image: "https://images.unsplash.com/photo-1684613998803-83fe7787db15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHRlbXBsZSUyMHRyYXZlbHxlbnwxfHx8fDE3NzE0OTEwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      highlights: ["Ancient temples", "Tea ceremony", "Geisha district", "Bamboo forest"],
    },
    {
      id: 5,
      name: "African Safari Expedition",
      category: "adventure",
      location: "Tanzania",
      duration: "9 Days / 8 Nights",
      groupSize: "4-8 people",
      price: "$3,299",
      rating: 5.0,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1729359035276-189519a4b072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZhcmklMjB3aWxkbGlmZSUyMGFmcmljYXxlbnwxfHx8fDE3NzE0OTg3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      highlights: ["Big Five safari", "Serengeti plains", "Ngorongoro crater", "Luxury camps"],
    },
    {
      id: 6,
      name: "Northern Lights Adventure",
      category: "adventure",
      location: "Iceland",
      duration: "6 Days / 5 Nights",
      groupSize: "2-12 people",
      price: "$2,799",
      rating: 4.8,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1648607560570-4ee80c5914c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3J0aGVybiUyMGxpZ2h0cyUyMGF1cm9yYXxlbnwxfHx8fDE3NzE0ODAyODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      highlights: ["Aurora hunting", "Ice caves", "Hot springs", "Glacier hiking"],
    },
    {
      id: 7,
      name: "Luxury Mediterranean Cruise",
      category: "luxury",
      location: "Mediterranean",
      duration: "10 Days / 9 Nights",
      groupSize: "2-4 people",
      price: "$4,999",
      rating: 4.9,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1667987566780-3b31fa5485c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0cmF2ZWwlMjBkZXN0aW5hdGlvbnxlbnwxfHx8fDE3NzE1ODQ4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      highlights: ["5-star yacht", "Private excursions", "Michelin dining", "Spa services"],
    },
    {
      id: 8,
      name: "Tropical Island Hopping",
      category: "beach",
      location: "Thailand",
      duration: "7 Days / 6 Nights",
      groupSize: "2-10 people",
      price: "$1,799",
      rating: 4.7,
      reviews: 289,
      image: "https://images.unsplash.com/photo-1714412192114-61dca8f15f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzcxNTQ1MDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      highlights: ["Island hopping", "Beach resorts", "Water sports", "Thai cuisine"],
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
          <h1 className="text-5xl mb-4">Tour Packages</h1>
          <p className="text-xl">
            Choose from our carefully curated travel experiences
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