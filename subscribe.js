var http = require("https");

var options = {
  "method": "POST",
  "hostname": "api.sendgrid.com",
  "port": null,
  "path": "/v3/contactdb/recipients",
  "headers": {
    "authorization": "Bearer " + process.env.API_KEY,
    "cache-control": "no-cache",
    "postman-token": "9574088e-aa22-68f6-8c82-08bc4f70c487"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    var contactID = JSON.parse(body.toString()).persisted_recipients[0];
    // console.log(body.toString());
    var options = {
      "method": "POST",
      "hostname": "api.sendgrid.com",
      "port": null,
      "path": "/v3/contactdb/lists/348282/recipients/" + contactID,
      "headers": {
        "authorization": "Bearer " + process.env.API_KEY,
        "cache-control": "no-cache",
        "postman-token": "be7b80ea-94f3-95e1-15a8-676cfe5dd669"
      }
    };

    var req = http.request(options, function (res) {
      var chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function () {
        var body = Buffer.concat(chunks);
        // console.log(body.toString());
      });
    });

    req.end();
  });
});

var email = "{INSERT EMAIL}";
var last_name = "{INSERT LAST NAME}";

req.write("[\n  {\n    \"email\": \"" + email + "\",\n    \"last_name\": \"" + last_name + "\"\n  }\n]");
req.end();
