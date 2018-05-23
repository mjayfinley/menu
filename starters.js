let menuStarterItems = document.getElementById("menuStarterItems")
let menuEntreeItems = document.getElementById("menuEntreeItems")
let menuDessertItems = document.getElementById("menuDessertItems")

let starterArray = dishes.filter(function(dish){
  return dish.course == "Starters"
})

starterArray.forEach(function(name){
  let liItem = `<li>
                  <img src="${name.imageURL}">
                  <label>${name.title}</label>
                  <p>${name.description}</p>
                  <p>$${name.price}</p>
                </li>`
  menuStarterItems.innerHTML += liItem

})
/*
let filteredArray = dishes.filter(function(dish) {
  if (dish.course == "Starters"){
    filteredArray.forEach(function(name){
      let liItem = `<li>
                      <img src="${name.imageURL}">
                      <label>${name.title}</label>
                      <p>${name.description}</p>
                      <p>$${name.price}</p>
                    </li>`
      menuStarterItems.innerHTML += liItem
    })
  }
  else if (dish.course == "Entrees") {
    filteredArray.forEach(function(name){
      let liItem = `<li>
                      <img src="${name.imageURL}">
                      <label>${name.title}</label>
                      <p>${name.description}</p>
                      <p>$${name.price}</p>
                    </li>`
      menuEntreeItems.innerHTML += liItem
    })
  }
  else if (dish.course == "Desserts"){
    filteredArray.forEach(function(name){
      let liItem = `<li>
                      <img src="${name.imageURL}">
                      <label>${name.title}</label>
                      <p>${name.description}</p>
                      <p>$${name.price}</p>
                    </li>`
      menuDessertItems.innerHTML += liItem
    })
  }
})
*/
