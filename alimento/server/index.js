const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const stripe=require("stripe")("sk_test_51NkQrDSCQwihxT84P2KfI9pOdSVK2dDfMJfqXjCf0HrgWlRFdSnJa1GBo6WHgOYmuYDWVaGjc5KT4NnU9Jqc1P6s00NVc5iFGq")
const nodemailer = require('nodemailer');
const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'Gmail', // Update with your email service
  auth: {
    user: 'prit.s.patel03@gmail.com', // Replace with your email address
    pass: 'egbd hode sfdo hbmq', // Replace with your email password or app password
  },
});
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/prit', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });


// Define MongoDB schemas and models
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  mobileno: String,
  address: String,
  pass: String,
  date: { type: Date, default: Date.now },
});

const cardDetailsSchema = new mongoose.Schema({
  donation: Number,
  total: Number,
  name: String,
  cardnumber: String,
  expirydate: String,
  cvv: String,
});

const User = mongoose.model('User', userSchema);
const CardDetails = mongoose.model('CardDetails', cardDetailsSchema);

// Send email endpoint


// Endpoint for saving user data
app.post('/db', async (req, res) => {
  try {
    const { username, email, mobileno, address, pass } = req.body;
    const newUser = new User({
      username,
      email,
      mobileno,
      address,
      pass,
    });
    await newUser.save();
    res.status(201).send('User data saved successfully');
  } catch (error) {
    console.error('Error saving user data:', error);
    res.status(500).send('Error saving user data');
  }
});

// Endpoint for saving card details
app.post('/dbcard', async (req, res) => {
  try {
    const { donation, total, name, cardnumber, expirydate, cvv } = req.body;
    const newCardDetails = new CardDetails({
      donation,
      total,
      name,
      cardnumber,
      expirydate,
      cvv,
    });
    await newCardDetails.save();
    res.status(201).send('Card details saved successfully');
  } catch (error) {
    console.error('Error saving card details:', error);
    res.status(500).send('Error saving card details');
  }
});
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { cart,itemQuantity,totalprice,email } = req.body;

    // Create a Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: cart.map((item) => ({
        price_data: {
          currency: 'inr',
          product_data: {
            name: item.name,
            images: [item.url], // Image URL
          },
          unit_amount: item.price * 100, // Amount in cents
        },
        quantity: itemQuantity, // Assuming quantity is always 1 for each item
      })),
      mode: 'payment',
      success_url: 'http://localhost:3000/',
      cancel_url: 'http://localhost:3000/shop',
    });
  if(session){
    const mailOptions = {
      from: 'prit.s.patel03@gmail.com', // Replace with your email address
      to: email, // Use the recipient's email address
      subject: 'Payment Confirmation',
      text: `Thank you for your purchase.\nYour order has been accepted by Alimento.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {  
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  }

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
