// console.log('%c HI', 'color: firebrick')

//fetches photos of dogs
fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json())
    .then(images => {
      // console.log(images);
      getEachImage(images);
    })


function getEachImage(images){
  let image = images.message;
  image.forEach(imgURL => {
    console.log(imgURL);
    let img = document.createElement("img")
    img.src  = `${imgURL}`
    document.getElementById("dog-image-container").appendChild(img)
    
  })
}


//fetches breed list
fetch('https://dog.ceo/api/breeds/list/all')
.then(response => response.json())
.then(breeds => {
  // console.log(breeds);
  getEachBreed(breeds);
  dogSelect(breeds);
})


function getEachBreed(breeds){
  let messageObject = breeds.message
  // console.log(messageObject)
  for (let breed of Object.entries(messageObject)){
    
    // console.log(breed)
    let li = document.createElement("li")
    li.textContent = breed
    document.getElementById("dog-breeds").appendChild(li)
    li.addEventListener("click",() => li.style.color = "red")
  }
}


  function dogSelect(breeds) {
    let selection = document.getElementById("breed-dropdown");
    console.log(selection);
    selection.addEventListener("change", (event) => {
    let selectionValue = event.target.value;
    console.log(selectionValue)
    let messageObject = breeds.message
    // for (let breed of Object.keys(messageObject)){
      // console.log(breed.startsWith(selectionValue))
    let filteredBreedList = Object.keys(messageObject).filter(filteredBreed => {
      return filteredBreed.startsWith(selectionValue)
      })
      
      createOnScreenFilteredList(filteredBreedList)
  // }
  //  ) }
    } 
    )
  }
  

  

  function createOnScreenFilteredList(filteredBreedList){
    
    // let filteredBreedObject = Object.assign({},[filteredBreedList])
    // console.log(filteredBreedObject)
    console.log(filteredBreedList)
    filteredBreedList.forEach(breedList => {
    let li = document.createElement("li")
    li.textContent = breedList
    document.getElementById("dog-breeds").appendChild(li)
    li.addEventListener("click",() => li.style.color = "red")
  }
    )
}