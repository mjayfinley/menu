let dessertArray = dishes.filter(function(dish){
  return dish.course == "Desserts"
})

dessertArray.forEach(function(name){
  let liItem = `<li>
                  <img src="${name.imageURL}">
                  <label>${name.title}</label>
                  <p>${name.description}</p>
                  <p>$${name.price}</p>
                </li>`
  menuDessertItems.innerHTML += liItem

})
