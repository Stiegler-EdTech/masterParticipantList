import { disableAllButtons } from "../controller/disbleButtons"
import { enableAllButtons } from "../controller/enableButtons"

export function renderAddElectivePopUp(){
	let bodyContainer = document.querySelector(".body-container")
	let popup = document.createElement("div")
	popup.classList.add("add-elective-pop-up")
	let exitButton = document.createElement("button")
	exitButton.classList.add("exit-pop-up-button")
	exitButton.classList.add("btn")
	exitButton.textContent = "x"
	let header = document.createElement("h3")
	header.classList.add("pop-up-title")
	header.textContent = "Add Elective"
	let form = document.createElement("form")
	form.classList.add("form")
	let inputGroup = document.createElement("div")
	inputGroup.classList.add("input-group")
	let label = document.createElement("label")
	label.htmlFor = "new-elective"
	label.classList.add("input-group-text")
	label.textContent = "Elective"
	let select = document.createElement("select")
	select.id = "new-elective"
	select.classList.add("form-select")
	let javascriptOption = document.createElement("option")
	javascriptOption.value = "javascript"
	javascriptOption.textContent = "JavaScript Libraries"
	let analyticsOption = document.createElement("option")
	analyticsOption.value = "analytics"
	analyticsOption.textContent = "Data Analytics"
	let cyberOption = document.createElement("option")
	cyberOption.value = "cyber"
	cyberOption.textContent = "Cyber Security"
	let managementOption = document.createElement("option")
	managementOption.value = "management"
	managementOption.textContent = "Project Management"
	let submitButton = document.createElement("button")
	submitButton.classList.add("btn")
	submitButton.classList.add("btn-success")
	submitButton.classList.add("add-elective-button")
	submitButton.type = "button"
	submitButton.textContent = "Submit"
	bodyContainer.appendChild(popup)
	popup.appendChild(exitButton)
	popup.appendChild(header)
	popup.appendChild(form)
	form.appendChild(inputGroup)
	inputGroup.appendChild(label)
	inputGroup.appendChild(select)
	select.appendChild(javascriptOption)
	select.appendChild(analyticsOption)
	select.appendChild(cyberOption)
	select.appendChild(managementOption)
	form.appendChild(submitButton)
	disableAllButtons()
}

export function deleteAddElectivePopUp(){
	let electivePopUp = document.querySelector(".add-elective-pop-up")
	electivePopUp.parentElement.removeChild(electivePopUp)
	enableAllButtons()
}
