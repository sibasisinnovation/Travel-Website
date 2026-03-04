const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const cities = ["Delhi", "Mumbai", "Goa", "Udaipur"];

app.get('/api/search', (req, res) => {
    const query = req.query.q;
    const result = cities.filter(city =>
        city.toLowerCase().includes(query.toLowerCase())
    );

    if (result.length > 0) {
        res.json({ message: "City Found: " + result.join(", ") });
    } else {
        res.json({ message: "No city found." });
    }
});

app.post('/api/book', (req, res) => {
    const { name, email, city } = req.body;
    console.log("Booking:", name, email, city);

    res.json({ message: `Thank you ${name}, your tour to ${city} is booked!` });
});

app.listen(5000, () => console.log("Server running on port 5000"));