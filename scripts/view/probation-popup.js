import { disableAllButtons } from '../controller/disbleButtons.js'
import { enableAllButtons } from '../controller/enableButtons.js'

export function renderAddProbationPopUp(){
	let bodyContainer = document.querySelector(".body-container")
	let popup = document.createElement("div")
	popup.classList.add("add-probation-pop-up")
	let exitButton = document.createElement("button")
	exitButton.classList.add("exit-pop-up-button")
	exitButton.classList.add("btn")
	exitButton.textContent = "x"
	let header = document.createElement("h3")
	header.classList.add("pop-up-title")
	header.textContent = "Probation Status"
	let form = document.createElement("form")
	form.classList.add("form")
	let inputGroup = document.createElement("div")
	inputGroup.classList.add("input-group")
	let label = document.createElement("label")
	label.htmlFor = "new-probation"
	label.classList.add("input-group-text")
	label.textContent = "Status"
	let select = document.createElement("select")
	select.id = "new-probation"
	select.classList.add("form-select")
	let excusedOption = document.createElement("option")
	excusedOption.value = "false"
	excusedOption.textContent = "False"
	let unexcusedOption = document.createElement("option")
	unexcusedOption.value = "true"
	unexcusedOption.textContent = "True"
	let submitButton = document.createElement("button")
	submitButton.classList.add("btn")
	submitButton.classList.add("btn-success")
	submitButton.classList.add("add-probation-button")
	submitButton.type = "button"
	submitButton.textContent = "Submit"

	bodyContainer.appendChild(popup)
	popup.appendChild(exitButton)
	popup.appendChild(header)
	popup.appendChild(form)
	form.appendChild(inputGroup)
	inputGroup.appendChild(label)
	inputGroup.appendChild(select)
	select.appendChild(excusedOption)
	select.appendChild(unexcusedOption)
	form.appendChild(submitButton)
	disableAllButtons()
}

export function deleteAddProbationPopUp(){
	let probationPopUp = document.querySelector(".add-probation-pop-up")
	probationPopUp.parentElement.removeChild(probationPopUp)
	enableAllButtons()
}
