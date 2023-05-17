// HTTP Request
// GET https://api.nasa.gov/planetary/apod

// Example query
// https://api.nasa.gov/planetary/apod?api_key=QoadcdJXXwv1FZTwqNzSI4Rm5dxju2Fav5p5U2dg

//Example query with date:
// https://api.nasa.gov/planetary/apod?api_key=QoadcdJXXwv1FZTwqNzSI4Rm5dxju2Fav5p5U2dg&date=1998-10-19

// document.querySelector("button").addEventListener("click",getFetch)
//For Today's button



document.querySelector('#getAPODBtn').addEventListener("click",getFetch)




async function getFetch() {


    const date = document.querySelector("input[type='date']").value
    console.log(date)
    const url = "https://api.nasa.gov/planetary/apod?api_key=QoadcdJXXwv1FZTwqNzSI4Rm5dxju2Fav5p5U2dg" + "&date=" + date 
            
  
    let data = await fetch(url);
    let imageInfo = await data.json();
    getImage(imageInfo)

}
    function getImage(imageInfo) {
        document.querySelector("img").src = imageInfo.hdurl;
    
        document.querySelector(".info").innerText = imageInfo.title + "\n " +  imageInfo.explanation;
      
}





// document.querySelector("button").addEventListener("click", getFetch);
// document.querySelector("#checkbox").addEventListener("click", checkingTheBox);

// let checkbox  = document.querySelector('#checkbox')
// console.log(checkbox.checked)

// async function getFetch() {
//     const choice = document.querySelector("input").value;
//     const url = "https://pokeapi.co/api/v2/pokemon/" + choice;
  
//     let data = await fetch(url);
//     let pokemonInfo = await data.json();
//     // return the name of input if found
//     tellName(pokemonInfo);
//     whatType(pokemonInfo);
//     checkingTheBox(pokemonInfo);
//     // callback fns to return the data
//     // showPicture(pokemonInfo);
//     // showShinyPicture(pokemonInfo);
//   }
  
//   function checkingTheBox(pokemonInfo) {
//     let checkbox = document.querySelector("#checkbox").checked;
//     // it returns Boolean value
//     if (checkbox) {
//       showShinyPicture(pokemonInfo);
//       ƒ;
//     } else {
//       showPicture(pokemonInfo);
//     }
//   }
//   // checkingTheBox()
  
  
//   // --> need to check if I need to show something different if there is no match?  It will stay as "Name?" right now
  
//   function tellName(pokemonInfo) {
//     document.querySelector(".name").innerText = `Name: ${pokemonInfo.name}`;
//   }
//   function whatType(pokemonInfo) {
//     console.log(pokemonInfo.types[0].type.name);
//     document.querySelector(".type").innerText = `Type: ${pokemonInfo.types[0].type.name}`;
//   }
//   function showPicture(pokemonInfo) {
//     document.querySelector("img").src = pokemonInfo.sprites.front_default;
//   }
//   function showShinyPicture(pokemonInfo) {
//     document.querySelector("img").src = pokemonInfo.sprites.front_shiny;
//   }