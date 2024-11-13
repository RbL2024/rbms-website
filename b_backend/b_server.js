const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT ||  8917;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Atlas connection
const mongoURI = 'mongodb+srv://rbms2024:Rbmsdb7kagZ989!..@rbms.lnwpz.mongodb.net/RBMSmain'; // Replace with your connection string

mongoose.connect(mongoURI, {
  
})
.then(() => console.log('MongoDB Atlas connected'))
.catch(err => console.log(err));

// Sample Bike Schema
const bike_infos_schema = new mongoose.Schema({
    bike_id: {
        type: String,
        required: true
    },
    bike_name: {
        type: String,
        required: true
    },
    bike_type: {
        type: String,
        required: true
    },
    bike_rent_price: {
        type: String,
        required: true
    },
    bike_desc: {
        type: String,
    },
    bike_image_url: {
        type: String
    },
    bike_status: {
        type: String,
        default: 'vacant'
    },
    dateAdded: {
        type: Date,
        default: Date.now
    }

})

const  bike_infos = mongoose.model('bike_infos', bike_infos_schema);

// API endpoint to get bikes
app.get('/api/bikes', async (req, res) => {
  try {
    const adultBikes = await bike_infos
      .find({ bike_type: 'Adult_bicycle' })
      .limit(5)
      .sort({ someField: 1 }); // Replace 'someField' with the field you want to sort by, use 1 for ascending, -1 for descending

    const kidBikes = await bike_infos
      .find({ bike_type: 'Kid_bicycle' })
      .limit(5)
      .sort({ someField: 1 }); // Replace 'someField' with the field you want to sort by, use 1 for ascending, -1 for descending

    res.json({
      adultBikes,
      kidBikes
    });
  } catch (error) {
    console.error('Error fetching bikes:', error.message);
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});