// import { disableAllButtons } from '../controller/disbleButtons.js'
// import { enableAllButtons } from '../controller/enableButtons.js'

// export function renderAddMentorPopUp(){
// 	let bodyContainer = document.querySelector(".body-container")
// 	let popup = document.createElement("div")
// 	popup.classList.add("add-mentor-pop-up")
// 	let exitButton = document.createElement("button")
// 	exitButton.classList.add("exit-pop-up-button")
// 	exitButton.classList.add("btn")
// 	exitButton.textContent = "x"
// 	let header = document.createElement("h3")
// 	header.classList.add("pop-up-title")
// 	header.textContent = "Add Mentor"
// 	let form = document.createElement("form")
// 	form.classList.add("form")
// 	let inputGroup = document.createElement("div")
// 	inputGroup.classList.add("input-group")
// 	let label = document.createElement("label")
// 	label.htmlFor = "new-mentor-name"
// 	label.classList.add("input-group-text")
// 	label.textContent = "Mentor Name"
// 	let input = document.createElement("input")
// 	input.id = "new-mentor-name"
// 	input.classList.add("form-control")
// 	let submitButton = document.createElement("button")
// 	submitButton.classList.add("btn")
// 	submitButton.classList.add("btn-success")
// 	submitButton.classList.add("add-mentor-button")
// 	submitButton.type = "button"
// 	submitButton.textContent = "Submit"

// 	bodyContainer.appendChild(popup)
// 	popup.appendChild(exitButton)
// 	popup.appendChild(header)
// 	popup.appendChild(form)
// 	form.appendChild(inputGroup)
// 	inputGroup.appendChild(label)
// 	inputGroup.appendChild(input)
// 	form.appendChild(submitButton)
// 	disableAllButtons()
// }

// export function deleteAddMentorPopUp(){
// 	let mentorPopUp = document.querySelector(".add-mentor-pop-up")
// 	mentorPopUp.parentElement.removeChild(mentorPopUp)
// 	enableAllButtons()
// }
