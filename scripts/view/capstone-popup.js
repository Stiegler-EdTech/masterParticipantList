import { disableAllButtons } from "../controller/disbleButtons"
import { enableAllButtons } from "../controller/enableButtons"

export function renderAddCapstonePopUp(){
	let bodyContainer = document.querySelector(".body-container")
	let popup = document.createElement("div")
	popup.classList.add("add-capstone-pop-up")
	let exitButton = document.createElement("button")
	exitButton.classList.add("exit-pop-up-button")
	exitButton.classList.add("btn")
	exitButton.textContent = "x"
	let header = document.createElement("h3")
	header.classList.add("pop-up-title")
	header.textContent = "Add Capstone Project"
	let form = document.createElement("form")
	form.classList.add("form")
	let nameInputGroup = document.createElement("div")
	nameInputGroup.classList.add("input-group")
	let nameLabel = document.createElement("label")
	nameLabel.htmlFor = "new-capstone-name"
	nameLabel.classList.add("input-group-text")
	nameLabel.textContent = "Title"
	let input = document.createElement("input")
	input.id = "new-capstone-name"
	input.classList.add("form-control")
	let structureInputGroup = document.createElement("div")
	structureInputGroup.classList.add("input-group")
	let structureLabel = document.createElement("label")
	structureLabel.htmlFor = "new-structure"
	structureLabel.classList.add("input-group-text")
	structureLabel.textContent = "Structure"
	let select = document.createElement("select")
	select.id = "new-structure"
	select.classList.add("form-select")
	let trueOption = document.createElement("option")
	trueOption.value = "true"
	trueOption.textContent = "Group"
	let falseOption = document.createElement("option")
	falseOption.value = "false"
	falseOption.textContent = "Individual"
	let submitButton = document.createElement("button")
	submitButton.classList.add("btn")
	submitButton.classList.add("btn-success")
	submitButton.classList.add("add-capstone-button")
	submitButton.type = "button"
	submitButton.textContent = "Submit"

	bodyContainer.appendChild(popup)
	popup.appendChild(exitButton)
	popup.appendChild(header)
	popup.appendChild(form)
	form.appendChild(nameInputGroup)
	nameInputGroup.appendChild(nameLabel)
	nameInputGroup.appendChild(input)
	form.appendChild(structureInputGroup)
	structureInputGroup.appendChild(structureLabel)
	structureInputGroup.appendChild(select)
	select.appendChild(trueOption)
	select.appendChild(falseOption)
	form.appendChild(submitButton)
	disableAllButtons()
}

export function deleteAddCapstonePopUp(){
	let capstonePopUp = document.querySelector(".add-capstone-pop-up")
	capstonePopUp.parentElement.removeChild(capstonePopUp)
	enableAllButtons()
}
