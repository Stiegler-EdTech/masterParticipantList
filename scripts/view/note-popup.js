// import { disableAllButtons } from '../controller/disbleButtons.js'
// import { enableAllButtons } from '../controller/enableButtons.js'

// export function renderAddNotePopUp(){
// 	let bodyContainer = document.querySelector(".body-container")
// 	let popup = document.createElement("div")
// 	popup.classList.add("add-note-pop-up")
// 	let exitButton = document.createElement("button")
// 	exitButton.classList.add("exit-pop-up-button")
// 	exitButton.classList.add("btn")
// 	exitButton.textContent = "x"
// 	let header = document.createElement("h3")
// 	header.classList.add("pop-up-title")
// 	header.textContent = "Add Note"
// 	let form = document.createElement("form")
// 	form.classList.add("form")
// 	let titleInputGroup = document.createElement("div")
// 	titleInputGroup.classList.add("input-group")
// 	let titleLabel = document.createElement("label")
// 	titleLabel.htmlFor = "new-note-name"
// 	titleLabel.classList.add("input-group-text")
// 	titleLabel.textContent = "Title"
// 	let input = document.createElement("input")
// 	input.id = "new-note-name"
// 	input.classList.add("form-control")
// 	let textInputGroup = document.createElement("div")
// 	textInputGroup.classList.add("input-group")
// 	textInputGroup.classList.add("form-floating")
// 	let textArea = document.createElement("textarea")
// 	textArea.classList.add("form-control")
// 	textArea.placeholder = "Write Notes Here"
// 	textArea.id = "new-note"
// 	textArea.cols = "30"
// 	textArea.rows = "10"

// 	let submitButton = document.createElement("button")
// 	submitButton.classList.add("btn")
// 	submitButton.classList.add("btn-success")
// 	submitButton.classList.add("add-note-button")
// 	submitButton.type = "button"
// 	submitButton.textContent = "Submit"

// 	bodyContainer.appendChild(popup)
// 	popup.appendChild(exitButton)
// 	popup.appendChild(header)
// 	popup.appendChild(form)
// 	form.appendChild(titleInputGroup)
// 	titleInputGroup.appendChild(titleLabel)
// 	titleInputGroup.appendChild(input)
// 	form.appendChild(textInputGroup)
// 	textInputGroup.appendChild(textArea)
// 	form.appendChild(submitButton)
// 	disableAllButtons()
// }

// export function deleteAddNotePopUp(){
// 	let notePopUp = document.querySelector(".add-note-pop-up")
// 	notePopUp.parentElement.removeChild(notePopUp)
// 	enableAllButtons()
// }
