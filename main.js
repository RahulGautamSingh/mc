const addBtn = document.querySelector(".add-btn")
const usersList = document.querySelector(".user-list") 
const inputField = document.querySelector("input")
let usersArr = []

function createUserCard(name)
{
    let card = document.createElement("div")
    card.classList.add("user-card")
    let username = document.createElement("p")
    username.innerText = name
    let delBtn = document.createElement("button")
    delBtn.innerText = "➖"
    delBtn.addEventListener('click',(e)=>{
        let index = usersArr.indexOf(name)
        usersArr.splice(index,1)
        usersList.removeChild(card)

    })
    card.appendChild(username)
    card.appendChild(delBtn)

    return card
}

addBtn.addEventListener('click',(e)=>{
        let name = inputField.value
        if(!usersArr.includes(name) && name!=="")
        {
            usersArr.push(name)
            let newUserCard = createUserCard(name)
            usersList.appendChild(newUserCard)
        }
        inputField.value=""
})