const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");

const SECRET_KEY =
  "sk_test_51HQfDYGvGTXqbPTwWAIxIXq0LgUqusLFIjddbfZ5TbRHBlgoTGJnzNM0Dqfui0xjyBBopgIMeAnXZ6SxVYeNAmOF00PlZNwEjd";

const stripe = require("stripe")(SECRET_KEY);

// API

// App config

const app = express();

// Middleware

app.use(cors({ origin: true }));
app.use(express.json());

// API routes

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Endpoint
// http://localhost:5001/clone-824ab/us-central1/api
