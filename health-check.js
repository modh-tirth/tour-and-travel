const http = require('http');

console.log('🧪 Starting Health Check Tests...\n');

// Test Backend
function testBackend() {
  return new Promise((resolve) => {
    const options = {
      hostname: 'localhost',
      port: 5000,
      path: '/',
      method: 'GET'
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        if (res.statusCode === 200) {
          console.log('✅ Backend Server: RUNNING on http://localhost:5000');
          console.log('   Response:', data);
          resolve(true);
        } else {
          console.log('❌ Backend Server: ERROR - Status', res.statusCode);
          resolve(false);
        }
      });
    });

    req.on('error', (error) => {
      console.log('❌ Backend Server: NOT RUNNING');
      console.log('   Error:', error.message);
      resolve(false);
    });

    req.end();
  });
}

// Test Frontend
function testFrontend() {
  return new Promise((resolve) => {
    const options = {
      hostname: 'localhost',
      port: 5173,
      path: '/',
      method: 'GET'
    };

    const req = http.request(options, (res) => {
      if (res.statusCode === 200) {
        console.log('✅ Frontend Server: RUNNING on http://localhost:5173');
        resolve(true);
      } else {
        console.log('❌ Frontend Server: ERROR - Status', res.statusCode);
        resolve(false);
      }
    });

    req.on('error', (error) => {
      console.log('❌ Frontend Server: NOT RUNNING');
      console.log('   Error:', error.message);
      resolve(false);
    });

    req.end();
  });
}

// Run Tests
async function runTests() {
  const backendOk = await testBackend();
  console.log('');
  const frontendOk = await testFrontend();
  
  console.log('\n' + '='.repeat(50));
  console.log('📊 TEST SUMMARY');
  console.log('='.repeat(50));
  console.log(`Backend:  ${backendOk ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Frontend: ${frontendOk ? '✅ PASS' : '❌ FAIL'}`);
  console.log('='.repeat(50));
  
  if (backendOk && frontendOk) {
    console.log('\n🎉 All servers are running! You can start manual testing.');
    console.log('   Frontend: http://localhost:5173');
    console.log('   Backend:  http://localhost:5000');
  } else {
    console.log('\n⚠️  Some servers are not running. Please start them:');
    if (!backendOk) console.log('   Backend:  cd backend && npm run dev');
    if (!frontendOk) console.log('   Frontend: npm run dev');
  }
}

runTests();
