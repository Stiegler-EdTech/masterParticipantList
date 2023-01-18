export function enableAllButtons(){
    let buttons = Array.from(document.querySelector(".actions").querySelectorAll("button"))
    return buttons.map(b => b.disabled = false)
}


