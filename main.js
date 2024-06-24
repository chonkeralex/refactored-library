const library = []

const dialog = document.querySelector("#dialog")
const openBtn = document.querySelector("#add")
const closeBtn = document.querySelector("#cancel")
const submitBtn = document.querySelector("#create")
openBtn.addEventListener("click", () => {dialog.showModal()})
closeBtn.addEventListener("click", () => {dialog.close()})

class Book {
    constructor(title, author, pages, readStatus) {this.title = title, this.author = author, this.pages = pages, this.readStatus = readStatus}
}

class add {
    addBook() {
        const title = document.querySelector("#title").value
        const author = document.querySelector("#author").value
        const pages = document.querySelector("#pages").value
        const readStatus = document.querySelector("#read").checked ? "✓" : "X"
        if(title !== "" && author !== "" && pages !== "" ) {
            const book = new Book(title, author, pages, readStatus)
            library.push(book)
            showInstance.display()
            dialog.close()
            title.value = ""
            author.value = ""
            pages.value = ""
        }
    }
}

class show {
    display() {
        const container = document.querySelector("#container")
        container.innerHTML = ""
        library.map((book, index) => {
            const card = document.createElement("div")
            card.classList.add("card")
            card.innerHTML = `
                <p>Title: ${book.title}</p>
                <p>Author: ${book.author}</p>
                <p>Pages: ${book.pages}</p>
                <p>Read status: ${book.readStatus}</p>
                <div>
                    <button onclick = "toggleInstance.toggleStatus(${index})">Toggle read status</button>
                    <button onclick = "removeInstance.deleteCard(${index})">Delete</button>
                </div>
            `
            container.appendChild(card)
        })
    }
}


class toggle {
    toggleStatus(index) {
       library[index].readStatus = library[index].readStatus === "✓" ? "X" : "✓"
        showInstance.display()
    }
}

class remove {
    deleteCard(index) {
        library.splice(index, 1)
        showInstance.display()
    }
}

const addInstance = new add()
const showInstance = new show()
const toggleInstance = new toggle()
const removeInstance = new remove()

submitBtn.addEventListener("click", () => addInstance.addBook())