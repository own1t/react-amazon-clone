const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

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

app.get("/", (request, response) => res.status(200).send("hello world"));

// Listen command
exports.api = functions.https.onRequest(app);
