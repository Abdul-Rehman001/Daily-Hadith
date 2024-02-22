const quote = document.querySelector('.hadith')
const person = document.querySelector('.person')
const btn = document.querySelector('#new-quote')
const apiUrl = "https://random-hadith-generator.vercel.app/bukhari/";
const refrence = document.querySelector('.refrence');

async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();

    console.log(data);
    quote.innerHTML = data.data.hadith_english;
    person.innerHTML = data.data.header;
    refrence.innerHTML = data.data.refno;

}
getQuote(apiUrl);
