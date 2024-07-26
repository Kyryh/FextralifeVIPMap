// Set the vip flag
iiv = true

// Store the map's sidebar
let sidebar = document.getElementById("sidebar").outerHTML

// Remove the initialized map
map.off()
map.remove()

// Re-add the sidebar
map._container.innerHTML = sidebar

// Re-initialize the interactive map
init()