function patcher(script) {
    // TODO
    console.log(script)
}

let scripts = document.getElementsByTagName("script")

// only get scripts without a src attribute
let filtered_scripts = [...scripts].filter(s => !s.src)

// patch the last script
patcher(filtered_scripts[1])
