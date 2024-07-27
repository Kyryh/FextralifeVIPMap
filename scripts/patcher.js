// Create the item entries in case they don't exist
for (let i = 0; i < 5; i++) {
    let key = "slot" + i + "items"
    if (!window.localStorage[key]) {
        window.localStorage[key] =  "{}"
    }
}

function getItems(key) {
    return JSON.parse(window.localStorage[key])
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
    let items = getItems("slot" + currentSlot + "items")[mapId] ?? []

    // Reformat the data before sending
    let formattedItems = items.map(function(i) {
        return {item: i}
    })

    callback(JSON.stringify(formattedItems))
}

// Add/remove checked/unchecked items
updateCompleted = function(isCompleted, mapId, itemId) {
    let key = "slot" + currentSlot + "items"
    let items = getItems(key)
    let mapItems = items[mapId] ?? []

    if (isCompleted) {
        mapItems.push(itemId)
    } else {
        let itemIndex = mapItems.indexOf(itemId)
        if (itemIndex !== -1) {
            mapItems.splice(itemIndex, 1);
        }
    }

    items[mapId] = mapItems

    window.localStorage[key] = JSON.stringify(items)
    return true
}

// Refresh the map, since it was generated before patching the methods
// Subscribing to DOMContentLoaded didn't work, so I had to use this hacky solution
function refresh() {
    if (map === null) {
        // If the map is null, wait a second before refreshing
        setTimeout(refresh, 1000)
    } else {
        // The map is loaded, refresh
        refreshSlot()
    }
}

refresh()
