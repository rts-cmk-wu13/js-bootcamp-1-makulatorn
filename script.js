
var quoteElement = document.querySelector('.quote');
var authorElement = document.querySelector('.author');

var quotes = [
    {quote: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening And live like it's heaven on earth.", author: "William W. Purkey"},
    {quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde"},
    {quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", author: "Marilyn Monroe"},
    {quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein"},
    {quote: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero"},
    {quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", author: "Bernard M. Baruch"},
    {quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", author: "Dr. Seuss"},
    {quote: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost"},
    {quote: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
    {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela"},
    {quote: "Life is what happens when you're busy making other plans.", author: "John Lennon"},
    {quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill"},
    {quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins"},
    {quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt"},
    {quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius"},
    {quote: "The best way to predict the future is to create it.", author: "Peter Drucker"},
    {quote: "Everything you can imagine is real.", author: "Pablo Picasso"},
    {quote: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama XIV"},
    {quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt"},
    {quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson"},
    {quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer"},
    {quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.", author: "Albert Einstein"},
    {quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt"},
    {quote: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi"},
    {quote: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
    {quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson"},
    {quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar"},
    {quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.", author: "Eleanor Roosevelt"},
    {quote: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington"},
    {quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", author: "Maya Angelou"}
];
console.log(quotes)

var previous;

function randomGenerate() {
    var randomNumber = Math.floor(Math.random() * quotes.length);

    if (randomNumber === previous) {
        return randomGenerate();
    }

    previous = randomNumber;

    quoteElement.innerHTML = '"' + quotes[randomNumber].quote + '"';
    authorElement.innerHTML = '- ' + quotes[randomNumber].author;
}

randomGenerate();