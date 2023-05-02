const pdf = require("html-pdf");
const path = require("path");
const nodemailer = require("nodemailer");
const fs = require("fs");
const pdfTemplate = require("./documents/index");
const env = require("dotenv");
const { EMAIL, PASSWORD } = require("./env.js");

env.config();

exports.createPdf = (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile("report.pdf", (err) => {
    if (err) {
      console.log(err);
    }
    res.send("pdf generated");
  });
};

exports.fetchPdf = (req, res) => {
  res.sendFile(path.join(__dirname, "report.pdf"));
};

exports.sendPdf = (req, res) => {
  pathToAttachment = path.join(__dirname, "report.pdf");
  attachment = fs.readFileSync(pathToAttachment).toString("base64");

  let smtpTransport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "Gmail",
    port: 465,
    secure: true,
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
    tls: { rejectUnauthorized: false },
  });

  smtpTransport.sendMail(
    {
      from: EMAIL,
      to: EMAIL,
      subject: "Testing report",
      html: `
        Testing report.`,
      attachments: [
        {
          content: attachment,
          filename: "report.pdf",
          contentType: "application/pdf",
          path: pathToAttachment,
        },
      ],
    },
    function (error, info) {
      if (error) {
        console.log(error);
      } else {
        res.send("Mail has been sended to your email. Check your mail");
      }
    }
  );
};
