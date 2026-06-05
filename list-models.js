const https = require('https');

const options = {
  hostname: 'generativelanguage.googleapis.com',
  port: 443,
  path: '/v1beta/models?key=AIzaSyDQ2kAalwGbDTHX7ye4EKtbsQJlHq4ko-I',
  method: 'GET'
};

const req = https.request(options, res => {
  let data = '';
  res.on('data', chunk => { data += chunk; });
  res.on('end', () => {
    try {
      const models = JSON.parse(data).models;
      models.forEach(m => {
        if (m.name.includes('flash')) console.log(m.name);
      });
    } catch(e) { console.log(data); }
  });
});

req.on('error', error => { console.error(error); });
req.end();
