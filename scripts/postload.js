let mapTitle = document.getElementById("mapA")

// Add buttons for deleting the stored data
for (let i = 0; i < 5; i++) {
    let button = document.createElement("button")
    button.onclick = () => {
        if (confirm("Do you really want to delete all of the data of slot " + (i+1) + "?")) {
            window.localStorage["slot" + i + "items"] =  "[]"
            location.reload()
        }
    }
    button.innerText = "Delete data from slot " + (i+1)
    mapTitle.parentElement.insertBefore(button, mapTitle)
}
