export function disableAllButtons(){
    let buttons = Array.from(document.querySelector(".actions").querySelectorAll("button"))
    return buttons.map(b => b.disabled = true)
}


