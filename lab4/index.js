const express = require("express");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files in /public (instruction.html will be at /instruction.html)
app.use(express.static("public"));

// GET /hello
app.get("/hello", (req, res) => {
  res.type("text/plain").send("Hello Express JS");
});

// GET /user (query parameters)
app.get("/user", (req, res) => {
  const firstname = req.query.firstname || "Tigran";
  const lastname = req.query.lastname || "Khachaturyan";
  res.json({ firstname, lastname });
});

// POST /user/:firstname/:lastname (path parameters)
app.post("/user/:firstname/:lastname", (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

// POST /users (body – array of users)
app.post("/users", (req, res) => {
  const users = Array.isArray(req.body) ? req.body : [];
  res.json(users);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

