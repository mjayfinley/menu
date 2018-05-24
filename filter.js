let listItems = document.getElementById("listItems")
let menu = ''



let fullMenuButton = document.getElementById("fullMenuButton")
let startersMenuButton = document.getElementById("startersMenuButton")
let entreesMenuButton= document.getElementById("entreesMenuButton")
let dessertsMenuButton = document.getElementById("dessertsMenuButton")


function fullMenu() {
  listItems.innerHTML = ''
  dishes.forEach(function(dish) {
    let liItem = `<li>
                    <img src="${dish.imageURL}">
                    <label>${dish.title}</label>
                    <p>${dish.description}</p>
                    <p>$${dish.price}</p>
                  </li>`

    listItems.innerHTML += liItem
  })
}


function filterMenu(menu) {
  listItems.innerHTML = ''
  dishes.filter(function(dish) {
    if (dish.course == menu) {
      let liItem = `<li>
                      <img src="${dish.imageURL}">
                      <label>${dish.title}</label>
                      <p>${dish.description}</p>
                      <p>$${dish.price}</p>
                    </li>`

      listItems.innerHTML += liItem
    }
  })
}

fullMenu()

fullMenuButton.addEventListener('click',function(){
  fullMenu()
})

startersMenuButton.addEventListener('click',function(){
  filterMenu("Starters")
})

entreesMenuButton.addEventListener('click',function(){
  filterMenu("Entrees")
})

dessertsMenuButton.addEventListener('click',function(){
  filterMenu("Desserts")
})
