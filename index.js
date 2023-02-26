

const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")
const getFromLocal = JSON.parse(localStorage.getItem("data"))

let data = 	["👨‍💻","🪨","🌊"]

if(getFromLocal){
    data = getFromLocal
    renderEmojis(data)
} else {
    renderEmojis(data)
}

function renderEmojis(arr) {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < arr.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = arr[i]
        emojiContainer.append(emoji)
    }
}

pushBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        data.push(emojiInput.value)
        emojiInput.value = ""
        localStorage.setItem("data", JSON.stringify(data))
        renderEmojis(data)
    }
})

unshiftBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        data.unshift(emojiInput.value)
        emojiInput.value = ""
        localStorage.setItem("data", JSON.stringify(data))
        renderEmojis(data)
    }
})

popBtn.addEventListener("click", function() {
    data.pop()
    localStorage.setItem("data", JSON.stringify(data))
    renderEmojis(data)
})

shiftBtn.addEventListener("click", function() {
    data.shift()
    localStorage.setItem("data", JSON.stringify(data))
    renderEmojis(data)
})

