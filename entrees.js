let entreeArray = dishes.filter(function(dish){
  return dish.course == "Entrees"
})

entreeArray.forEach(function(name){
  let liItem = `<li>
                  <img src="${name.imageURL}">
                  <label>${name.title}</label>
                  <p>${name.description}</p>
                  <p>$${name.price}</p>
                </li>`
  menuEntreeItems.innerHTML += liItem

})
