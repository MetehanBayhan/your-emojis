

const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

let data = ["👨‍💻", "🪨", "🌊"]
let getFromLocal = JSON.parse(localStorage.getItem("data"))


function renderEmojis() {
    localStorage.setItem("data", JSON.stringify(data))
    data = getFromLocal
    emojiContainer.innerHTML = ""
    for (let i = 0; i < data.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = data[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()

pushBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        data.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

unshiftBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        data.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

popBtn.addEventListener("click", function() {
    data.pop()
    renderEmojis()
})

shiftBtn.addEventListener("click", function() {
    data.shift()
    renderEmojis()
})

