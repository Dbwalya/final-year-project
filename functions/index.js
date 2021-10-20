const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51JL4BdHnaQEJmDiPx9tNJow0IpxtaJWAukogA0Pf2xZ9ZGMkYAoXmCtM15vCUe2wyUK6lTUvXFHBKTr7IgC3596L00QyLrbiMJ"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("hello world"));

exports.api = functions.https.onRequest(app);
