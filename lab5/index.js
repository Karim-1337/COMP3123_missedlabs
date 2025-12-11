const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Route 1: Serve home.html file at /home
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

// Route 2: Return user.json data at /profile
app.get('/profile', (req, res) => {
    try {
        const userData = fs.readFileSync(path.join(__dirname, 'user.json'), 'utf8');
        const user = JSON.parse(userData);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error reading user data' });
    }
});

// Route 3: User authentication at /login
app.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;
        
        if (!username || !password) {
            return res.status(400).json({
                status: false,
                message: "Username and password are required"
            });
        }

        // Read user data from user.json
        const userData = fs.readFileSync(path.join(__dirname, 'user.json'), 'utf8');
        const user = JSON.parse(userData);

        // Check if username is valid
        if (user.username !== username) {
            return res.json({
                status: false,
                message: "User Name is invalid"
            });
        }

        // Check if password is valid
        if (user.password !== password) {
            return res.json({
                status: false,
                message: "Password is invalid"
            });
        }

        // If both are valid
        res.json({
            status: true,
            message: "User Is valid"
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Server error occurred"
        });
    }
});

// Route 4: Logout route with username parameter
app.get('/logout/:username', (req, res) => {
    const { username } = req.params;
    res.send(`<b>${username} successfully logged out.</b>`);
});

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(500).send('Server Error');
});

// Dynamic port binding
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

