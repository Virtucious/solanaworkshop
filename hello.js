var cowsay = require("cowsay");

const quote = require("inspirational-quotes");
const speak = quote.getRandomQuote();
console.log(
  cowsay.say({
    text: speak,
    e: "--",
    T: "X ",
    mode: "d",
  })
);
