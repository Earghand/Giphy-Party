  
console.log("page loaded");

const GifForm = document.querySelector("form");
const GifArea = document.querySelector("#Gif-Area");

// 1. control form submit behavior with JS
GifForm.addEventListener("submit", getGifs);
const MY_API_KEY = "fXxksIPrVF39IaPTOliAaI0Ou9FqTqOp";

async function getGifs(event) {
    console.log("got gifs")
  event.preventDefault();
  const GifInput = event.target.vals;
  const Gifs = GifInput.value;
//   const pokemon = pokemonInput.value;
  const apiUrl = "http://api.giphy.com/v1/gifs/search?api_key=" + MY_API_KEY + "&q=" + Gifs;
  
//   // 2. On form submit, go to the pokemon API 
  const response = await fetch(apiUrl);
  const responseData = await response.json();
  console.log(responseData);
//   // 3. Get data on the pokemon and
//   //   put the image of the pokemon on the page
  getResults(responseData);
console.log("hello");
}

function getResults(GifData) {
    console.log()
    console.log(GifData.data[0].images.original.url);
    for(let i = 0; i<GifData.data.length; i+=1) {
        let uri = GifData.data[i].images.original.url;
        GifArea.innerHTML += `<img src='${uri}'/>`
        console.log(GifData.data[i].images.original.url)
    }
    // // const uri = GifData.data[0].images.original.url
    // const uri = GifData.data[0].images.original.url;
    // GifArea.innerHTML = `<img src='${GifData.data[0].images.original.url}'/>`
    // console.log(GifArea);

} 