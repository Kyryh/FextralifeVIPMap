// Create the item entries in case they don't exist
for (let i = 0; i < 5; i++) {
    let key = "slot" + i + "items"
    if (!window.localStorage[key]) {
        window.localStorage[key] =  "[]"
    }
}

// // Not actually needed
// // It supposedly returns the same data of loadSlotData, 
// // and there's a bunch of calls for this but they don't
// // seem to be used by anything??? idk, i'll keep this
// // commented out just in case i need it
//
// loadUData = function(mapId, userId, callback) {
//     callback("{}")
// }

// Patch the loadSlotData to return the data stored locally
// instead of making a call to the fextralife server
// This is needed because the server responds with 403 for non-vip users
loadSlotData = function(mapId, userId, callback) {
    callback(window.localStorage["slot" + currentSlot + "items"])
}

// Add/remove checked/unchecked items
updateCompleted = function(isCompleted, mapId, itemId) {
    let key = "slot" + currentSlot + "items"
    let items = JSON.parse(window.localStorage[key])

    if (isCompleted) {
        items.push({"item": itemId})
    } else {
        items = items.filter(item => item["item"] != itemId)
    }

    window.localStorage[key] = JSON.stringify(items)
    return true
}

// Refresh the map, since it was generated before patching the methods
refreshSlot()
