const quotes = [
    "You will never always be motivated, so you must learn to be disciplined.",
    "The only way out is through.",
    "Don’t wish it were easier. Wish you were better.",
    "You become what you give your attention to.",
    "Be so busy improving yourself that you have no time to criticize others.",
    "Your future is hidden in your daily routine.",
    "Stop shrinking to fit places you've outgrown.",
    "You are not behind. You’re on your own path. Stop comparing.",
    "A lion doesn’t concern himself with the opinion of sheep.",
    "You were not born to be mediocre."
];


let lastIndex = -1;

function getNewQuote() {
  let index;
  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (index === lastIndex);
  lastIndex = index;
  document.getElementById("quotewrite").innerText = quotes[index];
}

document.getElementById("quotebtn").addEventListener("click", getNewQuote);
