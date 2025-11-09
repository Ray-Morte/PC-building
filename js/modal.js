const modalBtn = document.querySelector(".modal__button")
const modal = document.querySelector(".modal")
const order = document.querySelector(".course__button")
const X = document.querySelector("#X")

modalBtn.addEventListener("click", () => {
    modal.style.display = "flex"
})
order.addEventListener("click", () => {
    modal.style.display = "flex"
})

X.addEventListener("click", () => {
        modal.style.display = ""
        }
    )        