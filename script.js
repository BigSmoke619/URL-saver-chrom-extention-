const x = document.getElementById("save")
const lI = document.getElementById("list")
let input = document.getElementById("inputer")
let myleads = []

const storagevalues = JSON.parse(localStorage.getItem("leads"))

if (localStorage.getItem("leads")) {
    myleads = JSON.parse(localStorage.getItem("leads"))
    render()
}

let t = document.getElementById("tab")
t.addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        myleads.push(tabs[0].url)
        localStorage.setItem("leads", JSON.stringify(myleads))
        render()
    })

    console.log(myleads)
})

x.addEventListener("click", function() {
    myleads.push(input.value)
    render()
    localStorage.setItem("leads", JSON.stringify(myleads))
    input.value = ""
})


function render() {
    let listitem = "";
    for (let i = 0; i < myleads.length; i++) {
        listitem += `<li>
 <a target = '_blank' href=  '${myleads[i]}' >  ${myleads[i]} </a> 
 </li>`
    }
    lI.innerHTML = listitem
}

const d = document.getElementById("delete")
d.addEventListener("dblclick", function() {
    localStorage.clear()
    myleads = []
    render()
})