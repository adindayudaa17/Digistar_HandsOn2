const http = require("http");

// Middleware function to log incoming requests
const logRequest = (req, res, next) => {
  const now = new Date();
  console.log(`[${now.toISOString()}] ${req.method} ${req.url}`);
  next();
};

const server = http.createServer((req, res) => {
  // Call the logging middleware
  logRequest(req, res, () => {
    // Handle different routes
    if (req.url == "/") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end("<h2> Hello Digistar </h2>");
    } else if (req.url == "/info") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end(
        `HTTP version: ${req.httpVersion}\nMethod: ${req.method}\nURL: ${req.url}`
      );
    } else if (req.url == "/submit" && req.method == "POST") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Data submitted successfully!");
    } else if (req.url == "/about") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end("<h2>Hello, Ini Halaman About Digistar!</h2>");
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      res.end("<h2>Page Not Found</h2>");
    }
  });
});

server.listen(3000, () => {
  console.log("Server running at http://127.0.1.1:3000/");
});
