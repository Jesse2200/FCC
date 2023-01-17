const randomQuotes = [
    {
        quote: "Those whom do not know Pain, will never understand true Peace.",
        author: "Pain"
    },
    {
        quote: "The selfish intent of wanting to preserve peace initiates wars, and Hatred is Born in order to protect Love.",
        author: "Madara Uchiha"
    },
    {
        quote: "Those who break the rules are scum, but those who abandon their friends are worse than scum.",
        author: "Kakashi Hatake"
    },
    {
        quote: "We should Love not Fall in Love, because everything that falls gets Broken.",
        author: "Toad Sage Jiraya"
    },
    {
        quote: "It is foolish to Fear what we yet to see and Know.",
        author: "Itachi Uchiha"
    },
    {
        quote: "If you belive in your Dreams, I will prove that you can achive Anything just by working hard.",
        author: "Rock Lee"
    },
    {
        quote: "No man chooses evil, he ony mistakes it for happienes, the good he seeks.",
        author: "Sasuke Uchiha"
    },
    {
        quote:"Dattebayo!",
        author: "Naruto Uzumaki"
    },
];


let generateRand = () => {
    let index = Math.floor(Math.random() * randomQuotes.length); 
    
    document.getElementById("text").innerText = randomQuotes[index].quote;
    document.getElementById("author").innerText = randomQuotes[index].author;

}