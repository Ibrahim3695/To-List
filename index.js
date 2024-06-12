const inputValue = document.getElementById("input-value")
const arrangeIcon = document.getElementById("arrange-icon")

const add = () => {

    if (inputValue.value.trim() === "") {
        alert("Insert your todo")
        return;
    }

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

    const edit = document.createElement("button")
    edit.className = "editBTN"
    edit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>`

    edit.addEventListener("click", () => {

        // console.log(sennCard)
        if (edit.textContent === "Save") {

            sennCard.textContent = inputValue.value

            inputValue.value = ""

            edit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>`


        } else {

            inputValue.value = sennCard.innerText;
            edit.textContent = "Save"

        }
    })

    const checkBox = document.createElement("input")
    checkBox.type = "checkbox"
    checkBox.className = "cheks"

    checkBox.addEventListener("click", function () {
        
        if (checkBox.checked) {
            sennCard.classList.add("checked");
        } else {
            sennCard.classList.remove("checked");
        }
    })



    listen.appendChild(sennCard)
    
    listen.appendChild(checkBox)
    listen.appendChild(edit)

    listen.appendChild(deleteButton)

    // cardMap.appendChild(listen)
    cardMap.insertBefore(listen,arrangeIcon, cardMap.firstChild);



    console.log(inputText)

    inputValue.value = ""

}
inputValue.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        add()
    }
})




