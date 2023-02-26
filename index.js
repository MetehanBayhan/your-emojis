

const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

let data = []


let getFromLocal = JSON.parse(localStorage.getItem("data"))

if(getFromLocal){
    data = getFromLocal
    renderEmojis()
}

function renderEmojis() {
    
    emojiContainer.innerHTML = ""
    for (let i = 0; i < data.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = data[i]
        emojiContainer.append(emoji)
    }
}

pushBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        data.push(emojiInput.value)
        emojiInput.value = ""
        localStorage.setItem("data", JSON.stringify(data))
        renderEmojis()
    }
})

unshiftBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        data.unshift(emojiInput.value)
        emojiInput.value = ""
        localStorage.setItem("data", JSON.stringify(data))
        renderEmojis()
    }
})

popBtn.addEventListener("click", function() {
    data.pop()
    localStorage.setItem("data", JSON.stringify(data))
    renderEmojis()
})

shiftBtn.addEventListener("click", function() {
    data.shift()
    localStorage.setItem("data", JSON.stringify(data))
    renderEmojis()
})

