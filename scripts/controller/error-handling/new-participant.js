export function validateTextInput(id){
    let selector = document.querySelector(`#${id}`)
    let lengthCheck = selector.length>2
    let beginsWithANumber = parseInt(firstName[0])
    if(!lengthCheck || !beginsWithANumber){
        console.log("error")
    }

}



