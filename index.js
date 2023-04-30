const generatePayload = require("promptpay-qr");
const qrcode = require("qrcode-terminal");
const prompt = require("prompt-sync")();

const mobileNumber = prompt("What is your mobile number? {xxx-xxx-xxxx} : ");
const amount = +prompt("How much is your meal? : ");
const numOfPeople = +prompt("How many people? : ");
const perPerson = amount / numOfPeople;
const payload = generatePayload(mobileNumber, { amount: perPerson });

qrcode.generate(payload);

// const generatePayload = require("promptpay-qr");
// const qrcode = require("qrcode");
// const fs = require("fs");

// const mobileNumber = "095-782-3653";
// const IDCardNumber = "1-1029-00025-21-1";

// const amount = 0; //if 0 user can input amount but if > 0 the amount = that number
// const payload = generatePayload(mobileNumber, { amount }); // first Parameter can be Mobile || ID
// console.log(payload);

// // Convert to SVG QR Code
// const options = { type: "svg", color: { dark: "#000", light: "#fff" } };
// qrcode.toString(payload, options, (err, svg) => {
//   if (err) return console.log(err);
//   fs.writeFileSync("./qr.svg", svg);
//   console.log(svg);
// });
