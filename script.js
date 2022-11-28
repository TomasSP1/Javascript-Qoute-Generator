let btn = document.querySelector('#new-qoute');
let qoute = document.querySelector('.qoute');
let person = document.querySelector('.person');

const qoutes = [
    {
        qoute: "The purpose of our lives is to be happy.",
        person: "Dalai Lama"
    },
    {
        qoute: "Life is what happens when you're busy making other plans.",
        person: "John Lennon"
    },
    {
        qoute: "Get busy living or get busy dying.",
        person: "Stephen King"
    },
    {
        qoute: "You only live once, but if you do it right, once is enough.",
        person: "Mae West"
    },
    {
        qoute: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        person: "Thomas A. Edison"
    },
    {
        qoute: "If you want to live a happy life, tie it to a goal, not to people or things.",
        person: "Albert Einstein"
    },
    {
        qoute: "Never let the fear of striking out keep you from playing the game.",
        person: "Babe Ruth"
    },
    {
        qoute: "Money and success don’t change people; they merely amplify what is already there.",
        person: "Will Smith"
    },
    {
        qoute: "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
        person: "Steve Jobs"
    },
    {
        qoute: "Not how long, but how well you have lived is the main thing.",
        person: "Seneca"
    }  
];

btn.addEventListener('click', function() {

    let random = Math.floor(Math.random() * qoutes.length);

    qoute.innerText = qoutes[random].qoute;
    person.innerText = qoutes[random].person
});