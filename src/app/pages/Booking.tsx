import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import {
  CreditCard,
  Calendar,
  Users,
  MapPin,
  Lock,
  CheckCircle,
  Shield,
  ArrowLeft,
} from "lucide-react";

export function Booking() {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  const [step, setStep] = useState(1);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Booking Details
  const [bookingDetails, setBookingDetails] = useState({
    destination: "Golden Triangle Tour",
    travelers: 2,
    date: "",
    duration: "6 Days / 5 Nights",
    price: 24999,
  });

  // Personal Details
  const [personalDetails, setPersonalDetails] = useState({
    firstName: user?.name || "",
    lastName: "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
  });

  // Payment Details
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    saveCard: false,
  });

  const handlePersonalDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalDetails({
      ...personalDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentDetails({
      ...paymentDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Save booking
      const bookingData = {
        tourName: bookingDetails.destination,
        destination: bookingDetails.destination,
        startDate: bookingDetails.date,
        numberOfTravelers: bookingDetails.travelers,
        totalPrice: grandTotal,
        customerName: `${personalDetails.firstName} ${personalDetails.lastName}`,
        customerEmail: personalDetails.email,
        customerPhone: personalDetails.phone,
        status: 'confirmed'
      };
      const bookingRes = await fetch('http://localhost:5001/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });
      const booking = await bookingRes.json();

      // Save payment
      const paymentData = {
        bookingId: booking.data._id,
        amount: grandTotal,
        paymentMethod: 'card',
        cardNumber: paymentDetails.cardNumber.slice(-4),
        cardHolderName: paymentDetails.cardName
      };
      await fetch('http://localhost:5001/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paymentData)
      });

      setTimeout(() => {
        setPaymentSuccess(true);
      }, 2000);
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  const totalPrice = bookingDetails.price * bookingDetails.travelers;
  const taxes = totalPrice * 0.1;
  const grandTotal = totalPrice + taxes;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <Lock className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl mb-4">Sign In Required</h2>
          <p className="text-gray-600 mb-6">
            Please sign in to continue with your booking
          </p>
          <button
            onClick={() => navigate("/signin")}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
          <h1 className="text-4xl mb-4">Booking Confirmed!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your booking. We've sent a confirmation email to{" "}
            {personalDetails.email}
          </p>

          <div className="bg-blue-50 rounded-lg p-6 mb-8 text-left">
            <h3 className="text-lg mb-4">Booking Details</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span>Booking ID:</span>
                <span className="font-semibold">YI{Date.now()}</span>
              </div>
              <div className="flex justify-between">
                <span>Destination:</span>
                <span className="font-semibold">{bookingDetails.destination}</span>
              </div>
              <div className="flex justify-between">
                <span>Travelers:</span>
                <span className="font-semibold">{bookingDetails.travelers}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Paid:</span>
                <span className="font-semibold text-blue-600">
                  ${grandTotal.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate("/")}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </button>
            <button
              onClick={() => window.print()}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Print Receipt
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <h1 className="text-4xl mb-2">Complete Your Booking</h1>
          <p className="text-gray-600">Secure payment gateway powered by Yatra India</p>
        </div>

        {/* Progress Steps */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            <div className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                1
              </div>
              <span className="ml-3">Details</span>
            </div>
            <div className="flex-1 h-1 mx-4 bg-gray-200">
              <div
                className={`h-full transition-all ${
                  step >= 2 ? "bg-blue-600" : "bg-gray-200"
                }`}
                style={{ width: step >= 2 ? "100%" : "0%" }}
              ></div>
            </div>
            <div className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                2
              </div>
              <span className="ml-3">Payment</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl mb-6">Personal Information</h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setStep(2);
                  }}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={personalDetails.firstName}
                        onChange={handlePersonalDetailsChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={personalDetails.lastName}
                        onChange={handlePersonalDetailsChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={personalDetails.email}
                        onChange={handlePersonalDetailsChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={personalDetails.phone}
                        onChange={handlePersonalDetailsChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2">Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={personalDetails.address}
                      onChange={handlePersonalDetailsChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm mb-2">City *</label>
                      <input
                        type="text"
                        name="city"
                        value={personalDetails.city}
                        onChange={handlePersonalDetailsChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Country *</label>
                      <input
                        type="text"
                        name="country"
                        value={personalDetails.country}
                        onChange={handlePersonalDetailsChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Zip Code *</label>
                      <input
                        type="text"
                        name="zipCode"
                        value={personalDetails.zipCode}
                        onChange={handlePersonalDetailsChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Continue to Payment
                  </button>
                </form>
              </div>
            )}

            {step === 2 && (
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Shield className="w-6 h-6 text-green-600" />
                  <h2 className="text-2xl">Secure Payment</h2>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mb-6 flex items-start gap-3">
                  <Lock className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div className="text-sm text-blue-900">
                    Your payment information is encrypted and secure. We never store your
                    card details.
                  </div>
                </div>

                <form onSubmit={handleSubmitPayment} className="space-y-6">
                  <div>
                    <label className="block text-sm mb-2">Card Number *</label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="cardNumber"
                        value={paymentDetails.cardNumber}
                        onChange={handlePaymentDetailsChange}
                        required
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2">Cardholder Name *</label>
                    <input
                      type="text"
                      name="cardName"
                      value={paymentDetails.cardName}
                      onChange={handlePaymentDetailsChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm mb-2">Expiry Date *</label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={paymentDetails.expiryDate}
                        onChange={handlePaymentDetailsChange}
                        required
                        placeholder="MM/YY"
                        maxLength={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">CVV *</label>
                      <input
                        type="text"
                        name="cvv"
                        value={paymentDetails.cvv}
                        onChange={handlePaymentDetailsChange}
                        required
                        placeholder="123"
                        maxLength={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="saveCard"
                      checked={paymentDetails.saveCard}
                      onChange={(e) =>
                        setPaymentDetails({
                          ...paymentDetails,
                          saveCard: e.target.checked,
                        })
                      }
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label className="ml-2 text-sm text-gray-600">
                      Save card for future bookings
                    </label>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Pay ₹{grandTotal.toFixed(2)}
                    </button>
                  </div>
                </form>

                <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='25'%3E%3Crect width='40' height='25' rx='3' fill='%231434CB'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Arial' font-size='10' font-weight='bold'%3EVISA%3C/text%3E%3C/svg%3E"
                    alt="Visa"
                    className="h-8"
                  />
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='25'%3E%3Crect width='40' height='25' rx='3' fill='%23EB001B'/%3E%3Ccircle cx='15' cy='12.5' r='8' fill='%23FF5F00'/%3E%3Ccircle cx='25' cy='12.5' r='8' fill='%23F79E1B'/%3E%3C/svg%3E"
                    alt="Mastercard"
                    className="h-8"
                  />
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='25'%3E%3Crect width='40' height='25' rx='3' fill='%23016FD0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Arial' font-size='8' font-weight='bold'%3EAMEX%3C/text%3E%3C/svg%3E"
                    alt="Amex"
                    className="h-8"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h3 className="text-xl mb-6">Order Summary</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <div className="font-semibold">{bookingDetails.destination}</div>
                    <div className="text-sm text-gray-600">
                      {bookingDetails.duration}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-blue-600" />
                  <div>
                    <span className="font-semibold">{bookingDetails.travelers}</span>
                    <span className="text-gray-600"> Travelers</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <div className="text-gray-600">
                    {bookingDetails.date || "Select date"}
                  </div>
                </div>
              </div>

              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Price per person × {bookingDetails.travelers}
                  </span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Taxes & Fees</span>
                  <span>₹{taxes.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 flex justify-between items-center">
                  <span className="text-lg">Total</span>
                  <span className="text-2xl text-blue-600">
                    ₹{grandTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg text-sm text-green-800">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-semibold">Free Cancellation</span>
                </div>
                <p className="text-xs">Cancel up to 24 hours before departure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
