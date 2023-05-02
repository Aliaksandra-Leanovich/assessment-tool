const express = require("express");
const { createPdf, fetchPdf, sendPdf } = require("./pdfController");
const pdfRoute = express.Router();

pdfRoute.post("/createPdf", createPdf);

pdfRoute.get("/fetchPdf", fetchPdf);

pdfRoute.post("/sendPdf", sendPdf);

module.exports = pdfRoute;
