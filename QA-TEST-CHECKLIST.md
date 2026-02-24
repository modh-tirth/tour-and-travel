# Yatra India - QA Test Checklist

## 1. HOME PAGE TESTS

### Hero Section
- [ ] "सु स्वागतम" (Su Swagatam) displays correctly in Hindi
- [ ] Main heading "Discover Incredible India" is visible
- [ ] Background image loads properly
- [ ] Hero section is responsive on mobile/tablet/desktop

### Search Box
- [ ] "Where to?" autocomplete shows suggestions when typing
- [ ] Suggestions filter correctly (e.g., typing "taj" shows "Taj Mahal, Agra")
- [ ] Clicking a suggestion fills the input field
- [ ] Date picker opens and allows date selection
- [ ] Date picker prevents selecting past dates
- [ ] "Travelers" input accepts text
- [ ] "Search" button redirects to /booking page

### Features Section
- [ ] All 4 feature cards display (100+ Destinations, Best Price, Safe & Secure, 24/7 Support)
- [ ] Icons render correctly
- [ ] Text is readable and properly formatted

### Popular Destinations
- [ ] All 4 destination cards display (Taj Mahal, Kerala, Rajasthan, Goa)
- [ ] Images load correctly
- [ ] Prices show in ₹ (Indian Rupees)
- [ ] Star ratings (4.8) display
- [ ] "Book Now" button on each card redirects to /booking
- [ ] Hover effects work (image zoom, shadow increase)
- [ ] "View All Destinations" button redirects to /destinations

### CTA Section
- [ ] "Browse Tours" button redirects to /tours
- [ ] "Book Now" button redirects to /booking

---

## 2. NAVBAR TESTS

### Navigation Links
- [ ] "Yatra India" logo/text displays
- [ ] Logo redirects to home page
- [ ] "Home" link works and highlights when active
- [ ] "Tours" link works and highlights when active
- [ ] "Destinations" link works and highlights when active
- [ ] "About" link works and highlights when active
- [ ] "Contact" link works and highlights when active

### Authentication
- [ ] "Sign In" button shows when not logged in
- [ ] "Book Now" button shows when not logged in
- [ ] After login, user name displays
- [ ] After login, "Logout" button shows
- [ ] Logout functionality works

### Mobile Menu
- [ ] Hamburger menu icon shows on mobile
- [ ] Mobile menu opens/closes correctly
- [ ] All links work in mobile menu

---

## 3. TOURS PAGE TESTS

### Header
- [ ] "India Tour Packages" heading displays
- [ ] Subtitle text is visible

### Category Filters
- [ ] "All Tours" button shows all tours
- [ ] "Adventure" button filters adventure tours only
- [ ] "Beach" button filters beach tours only
- [ ] "Cultural" button filters cultural tours only
- [ ] "Luxury" button filters luxury tours only
- [ ] Active filter button is highlighted
- [ ] URL parameter updates (e.g., /tours?category=adventure)

### Tour Cards
- [ ] All 8 tour cards display correctly
- [ ] Images load properly
- [ ] Tour names, locations, durations display
- [ ] Prices show in ₹ (Indian Rupees)
- [ ] Star ratings and review counts show
- [ ] Highlights/tags display
- [ ] "Book Now" button redirects to /booking

### Footer Service Links
- [ ] Clicking "Adventure Tours" filters to adventure category
- [ ] Clicking "Beach Holidays" filters to beach category
- [ ] Clicking "Cultural Trips" filters to cultural category
- [ ] Clicking "Luxury Travel" filters to luxury category

---

## 4. DESTINATIONS PAGE TESTS

### Header
- [ ] "Explore India" heading displays
- [ ] Subtitle text is visible

### Destination Cards
- [ ] All 6 destinations display (Taj Mahal, Kerala, Jaipur, Goa, Ladakh, Varanasi)
- [ ] Images load correctly
- [ ] "Trending" badge shows on trending destinations
- [ ] Heart icon for favorites works (fills red when clicked)
- [ ] Location names and descriptions display
- [ ] Tour count shows (e.g., "12 tours available")
- [ ] "View Tours →" link works
- [ ] Hover effects work (image zoom, shadow)

### CTA Section
- [ ] "Request Custom Tour" button is visible and clickable

---

## 5. ABOUT PAGE TESTS

### Hero Section
- [ ] "About Yatra India" heading displays
- [ ] Background image loads
- [ ] Subtitle text is visible

### Stats Section
- [ ] All 4 stats display (25K+ Travelers, 100+ Destinations, 10+ Awards, 98% Satisfaction)
- [ ] Icons render correctly
- [ ] Background color is blue

### Our Story Section
- [ ] Story text displays correctly
- [ ] Mentions "Yatra India" and "2010"
- [ ] Side image loads
- [ ] Content is readable

### Values Section
- [ ] All 4 value cards display (Customer First, Excellence, Passion, Innovation)
- [ ] Icons render correctly
- [ ] Descriptions are readable

### Team Section
- [ ] Team member cards display
- [ ] Images load
- [ ] Names and roles show

### CTA Section
- [ ] "Explore Tours" button redirects to /tours

---

## 6. CONTACT PAGE TESTS

### Header
- [ ] "Get In Touch" heading displays
- [ ] Subtitle text is visible

### Contact Information
- [ ] Phone numbers display (+91 98765 43210, +91 98765 43211)
- [ ] Email addresses display (info@yatraindia.com, support@yatraindia.com)
- [ ] Address shows "Mumbai, Maharashtra 400001"
- [ ] Business hours display correctly
- [ ] Social media icons are visible

### Contact Form
- [ ] All form fields are present (Name, Email, Phone, Destination, Travelers, Date, Message)
- [ ] Required fields are marked with *
- [ ] Destination dropdown shows Indian destinations
- [ ] Date picker works
- [ ] Form validation works (required fields)
- [ ] "Send Message" button submits form
- [ ] Success message displays after submission
- [ ] Form clears after successful submission

### Map Section
- [ ] Google Maps embed loads
- [ ] Map shows Mumbai location
- [ ] Map is interactive (zoom, pan)

---

## 7. BOOKING PAGE TESTS

### Authentication Check
- [ ] Redirects to sign-in if not logged in
- [ ] Shows "Sign In Required" message
- [ ] "Sign In" button redirects to /signin

### Step 1: Personal Details
- [ ] All form fields display (First Name, Last Name, Email, Phone, Address, City, Country, Zip)
- [ ] Email pre-fills if user is logged in
- [ ] Form validation works
- [ ] "Continue to Payment" button advances to step 2

### Step 2: Payment
- [ ] Progress indicator shows step 2 active
- [ ] Security badge displays
- [ ] Card number, name, expiry, CVV fields present
- [ ] "Save card" checkbox works
- [ ] "Back" button returns to step 1
- [ ] "Pay ₹XX" button shows correct amount in rupees
- [ ] Payment card logos display (Visa, Mastercard, Amex)

### Order Summary
- [ ] Tour name displays (e.g., "Golden Triangle Tour")
- [ ] Duration shows correctly
- [ ] Number of travelers displays
- [ ] Price breakdown shows (per person, taxes, total)
- [ ] Total amount in ₹ (Indian Rupees)
- [ ] "Free Cancellation" badge shows

### Success Page
- [ ] Confirmation message displays
- [ ] Booking ID shows with "YI" prefix
- [ ] Booking details summary shows
- [ ] Total paid amount displays
- [ ] "Back to Home" button works
- [ ] "Print Receipt" button triggers print dialog

---

## 8. SIGN IN / SIGN UP TESTS

### Sign Up
- [ ] Sign up form displays
- [ ] Name, email, password fields present
- [ ] Form validation works
- [ ] "Sign Up" button creates account
- [ ] Redirects after successful signup
- [ ] Error message shows if email already exists

### Sign In
- [ ] Sign in form displays
- [ ] Email and password fields present
- [ ] Form validation works
- [ ] "Sign In" button logs in user
- [ ] Redirects after successful login
- [ ] Error message shows for invalid credentials
- [ ] "Sign Up" link redirects to signup page

---

## 9. FOOTER TESTS

### Company Info
- [ ] "Yatra India" name displays
- [ ] Company description shows
- [ ] Social media icons are present and clickable

### Quick Links
- [ ] "Tour Packages" link redirects to /tours
- [ ] "Destinations" link redirects to /destinations
- [ ] "About Us" link redirects to /about
- [ ] "Contact" link redirects to /contact

### Services
- [ ] "Adventure Tours" link redirects to /tours?category=adventure
- [ ] "Beach Holidays" link redirects to /tours?category=beach
- [ ] "Cultural Trips" link redirects to /tours?category=cultural
- [ ] "Luxury Travel" link redirects to /tours?category=luxury

### Contact Info
- [ ] Phone: +91 98765 43210
- [ ] Email: info@yatraindia.com
- [ ] Address: Mumbai, Maharashtra 400001

### Copyright
- [ ] "© 2026 Yatra India Travel. All rights reserved." displays

---

## 10. RESPONSIVE DESIGN TESTS

### Mobile (320px - 767px)
- [ ] All pages render correctly
- [ ] Navigation collapses to hamburger menu
- [ ] Search box stacks vertically
- [ ] Destination cards stack in single column
- [ ] Forms are usable
- [ ] Buttons are tappable (min 44px)

### Tablet (768px - 1023px)
- [ ] All pages render correctly
- [ ] Destination cards show in 2 columns
- [ ] Navigation shows all links
- [ ] Forms layout properly

### Desktop (1024px+)
- [ ] All pages render correctly
- [ ] Destination cards show in 4 columns
- [ ] Full navigation displays
- [ ] Content is centered and readable

---

## 11. PERFORMANCE TESTS

- [ ] Home page loads in < 3 seconds
- [ ] Images are optimized and load quickly
- [ ] No console errors in browser
- [ ] Smooth scrolling and animations
- [ ] No layout shifts during page load

---

## 12. BROWSER COMPATIBILITY TESTS

- [ ] Chrome (latest version)
- [ ] Firefox (latest version)
- [ ] Safari (latest version)
- [ ] Edge (latest version)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## 13. ACCESSIBILITY TESTS

- [ ] All images have alt text
- [ ] Form labels are properly associated
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Focus indicators are visible
- [ ] Color contrast meets WCAG standards
- [ ] Screen reader compatible

---

## 14. BACKEND API TESTS

### Authentication
- [ ] POST /api/auth/signup creates new user
- [ ] POST /api/auth/signin returns JWT token
- [ ] Duplicate email returns error

### Tours
- [ ] GET /api/tours returns all tours
- [ ] GET /api/tours/:id returns specific tour

### Bookings
- [ ] POST /api/bookings creates booking
- [ ] GET /api/bookings/user/:userId returns user bookings

---

## 15. SECURITY TESTS

- [ ] Passwords are hashed (not stored in plain text)
- [ ] JWT tokens are used for authentication
- [ ] CORS is properly configured
- [ ] No sensitive data in console logs
- [ ] XSS protection in place
- [ ] Input validation on all forms

---

## TEST EXECUTION INSTRUCTIONS

1. **Start Backend Server:**
   ```bash
   cd backend
   npm install
   npm run dev
   ```

2. **Start Frontend Server:**
   ```bash
   npm install
   npm run dev
   ```

3. **Access Website:**
   - Open browser to `http://localhost:5173` (or port shown in terminal)

4. **Test Each Section:**
   - Go through each checklist item
   - Mark [ ] as [x] when test passes
   - Note any failures or bugs

5. **Report Issues:**
   - Document any bugs found
   - Include steps to reproduce
   - Add screenshots if applicable

---

## CRITICAL BUGS (Must Fix Before Launch)

- [ ] Any broken navigation links
- [ ] Payment processing errors
- [ ] Authentication failures
- [ ] Data not saving
- [ ] Images not loading
- [ ] Mobile layout broken

## NICE TO HAVE (Can Fix Later)

- [ ] Minor UI alignment issues
- [ ] Performance optimizations
- [ ] Additional features
- [ ] Enhanced animations

---

**Test Date:** _____________
**Tester Name:** _____________
**Browser/Device:** _____________
**Pass Rate:** _____ / _____ tests passed
