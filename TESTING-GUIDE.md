# Automated Testing Guide - Yatra India

## Setup Complete! ✅

Playwright has been installed and configured with 5 test suites covering:
- Home Page (10 tests)
- Navigation (7 tests)
- Tours Page (8 tests)
- Contact Page (6 tests)
- Footer (6 tests)

**Total: 37 automated tests**

---

## How to Run Tests

### 1. Start Backend Server (Terminal 1)
```powershell
cd "e:\tour and travel\backend"
npm run dev
```

### 2. Run Tests (Terminal 2)

**Run all tests:**
```powershell
cd "e:\tour and travel"
npm test
```

**Run tests with UI (Interactive Mode):**
```powershell
npm run test:ui
```

**Run specific test file:**
```powershell
npx playwright test tests/home.spec.js
```

**Run tests in headed mode (see browser):**
```powershell
npx playwright test --headed
```

**Run tests in debug mode:**
```powershell
npx playwright test --debug
```

---

## View Test Results

After tests complete, view the HTML report:
```powershell
npm run test:report
```

This opens a detailed report showing:
- ✅ Passed tests
- ❌ Failed tests
- Screenshots of failures
- Test execution time
- Detailed logs

---

## Test Coverage

### Home Page Tests (`tests/home.spec.js`)
- ✅ Hindi welcome message displays
- ✅ Main heading visible
- ✅ Autocomplete suggestions work
- ✅ Date picker functions
- ✅ Feature cards display
- ✅ Destination cards show
- ✅ Prices in Indian Rupees
- ✅ Book Now navigation
- ✅ View All Destinations link

### Navigation Tests (`tests/navigation.spec.js`)
- ✅ Logo displays
- ✅ All nav links work (Home, Tours, Destinations, About, Contact)
- ✅ Sign In button shows
- ✅ Page titles display correctly

### Tours Page Tests (`tests/tours.spec.js`)
- ✅ Page heading displays
- ✅ Category filters present
- ✅ Adventure filter works
- ✅ Beach filter works
- ✅ Cultural filter works
- ✅ Prices in rupees
- ✅ Tour highlights show
- ✅ Book Now navigation

### Contact Page Tests (`tests/contact.spec.js`)
- ✅ Page heading displays
- ✅ Contact info shows (phone, email, address)
- ✅ Form fields present
- ✅ Indian destinations in dropdown
- ✅ Form submission works
- ✅ Google Maps displays

### Footer Tests (`tests/footer.spec.js`)
- ✅ Company name displays
- ✅ Contact info shows
- ✅ Quick links work
- ✅ Service category filters work
- ✅ Copyright text displays

---

## Continuous Integration

Tests can run automatically on:
- Every code commit
- Pull requests
- Scheduled intervals

---

## Troubleshooting

**Error: "Browser not found"**
```powershell
npx playwright install
```

**Error: "Port already in use"**
- Make sure backend is running on port 5000
- Make sure frontend is running on port 5173

**Tests failing?**
1. Check if both servers are running
2. Run tests in headed mode to see what's happening: `npx playwright test --headed`
3. Check the HTML report for details: `npm run test:report`

---

## Next Steps

1. **Run the tests now:**
   ```powershell
   npm test
   ```

2. **Review the report:**
   ```powershell
   npm run test:report
   ```

3. **Fix any failing tests**

4. **Add more tests as needed**

---

## Test Results Summary

After running tests, you'll get output like:

```
Running 37 tests using 1 worker

  ✓ home.spec.js:7:3 › should display Hindi welcome message (1.2s)
  ✓ home.spec.js:11:3 › should display main heading (0.8s)
  ✓ home.spec.js:15:3 › should show autocomplete suggestions (1.5s)
  ...

  37 passed (45s)
```

**This is your automated QA report!** 🎉
