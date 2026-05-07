let myNote = []

const input = document.getElementById('note')
const addBtn = document.getElementById('addBtn')
const noteList = document.getElementById('noteList')
const noteFromStorage = JSON.parse(localStorage.getItem("myNote"))
const clearBtn = document.getElementById("delete-btn")
const saveTabBtn = document.getElementById("save-tab-btn")

if (noteFromStorage) {
    myNote = noteFromStorage
    render(myNote)
}

const tabs = [
    { URL: "https://www.linkedin.com/in/jamal-salama/" }
]

saveTabBtn.addEventListener("click", function () {
    myNote.push(tabs[0].URL)
    localStorage.setItem("myNote", JSON.stringify(myNote))
    render(myNote)
})

clearBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myNote = []
    render()

})




addBtn.addEventListener("click", function () {
    if (input.value.trim() !== "") {
        myNote.push(input.value)
    }
    input.value = ""
    localStorage.setItem("myNote", JSON.stringify(myNote))
    render()
})



function render(notes) {
    listItems = ""
    for (let i = 0; i < myNote.length; i++) {
        listItems += `
        <li>
        ${myNote[i]}
        </li>`

    }
    noteList.innerHTML = listItems
}
