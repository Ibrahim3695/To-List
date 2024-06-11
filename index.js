const inputValue = document.getElementById("input-value")
const add = () => {

    const cardMap = document.getElementById("card-map")

    const inputText = inputValue.value.trim()


    const listen = document.createElement("div")
    listen.className = "card-mapss"

    const sennCard = document.createElement("p")

    sennCard.innerText = inputText

    const deleteButton = document.createElement("button")
    deleteButton.className = "delete-button"
    deleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>`

    deleteButton.addEventListener("click", function () {
        listen.remove()
    })
 
    listen.appendChild(sennCard)

    listen.appendChild(deleteButton)

    // cardMap.appendChild(listen)
    cardMap.insertBefore(listen, cardMap.firstChild);

    if (inputValue.value === "") {
        alert("Insert your tod")
    }else{
        inputValue.value = null
    }

    console.log(inputText)

    inputValue.value = ""

}
inputValue.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault(add);
        add()
    }
})




