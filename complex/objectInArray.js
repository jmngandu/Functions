let data = [
    {
        player: "Jane",
        score: 52
    }, {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
const janeBtn = document.getElementById("jane-btn")
// Use addEventListener() to listen for button clicks
janeBtn.addEventListener("click", function () {
    console.log(data[0].score)
})
