const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Store waitlist in memory for this demo (In production, use a database like MongoDB or PostgreSQL)
const waitlist = {
    individual: [],
    business: []
};

// API Routes
app.post('/api/waitlist/individual', (req, res) => {
    const { fullName, email, reason, source } = req.body;
    
    if (!fullName || !email || !reason || !source) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const entry = {
        fullName,
        email,
        reason,
        source,
        timestamp: new Date()
    };

    waitlist.individual.push(entry);
    console.log('New Individual Entry:', entry);
    res.status(201).json({ message: 'Successfully joined the waitlist!' });
});

app.post('/api/waitlist/business', (req, res) => {
    const { fullName, email, reason, source, businessName, teamSize, country, website } = req.body;
    
    if (!fullName || !email || !reason || !source || !businessName || !teamSize || !country || !website) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const entry = {
        fullName,
        email,
        reason,
        source,
        businessName,
        teamSize,
        country,
        website,
        timestamp: new Date()
    };

    waitlist.business.push(entry);
    console.log('New Business Entry:', entry);
    res.status(201).json({ message: 'Business waitlist entry received!' });
});

// Serve the frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
