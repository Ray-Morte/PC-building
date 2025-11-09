const contents = document.querySelectorAll('.program-line__content')
const closedescr = document.querySelectorAll(".program-line__descr")


contents.forEach((elem) => {
    const title = elem.querySelector(".program-line__title")
    const descr = elem.querySelector(".program-line__descr")
    
       closedescr.forEach((element) => {
    title.addEventListener("click", () =>  {
        element.classList.remove("active")
    })
    
    title.addEventListener("click", () =>  {
        descr.classList.add("active")
    })
    

})
})