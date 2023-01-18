export function renderCapstoneGroup(){
    let capstoneGroup = document.createElement("div")
    capstoneGroup.classList.add("capstone-group")
    let capstoneGroupLabelAndEditButton = document.createElement("div")
    capstoneGroupLabelAndEditButton.classList.add("label-and-edit-button")
    let capstoneLabel = document.createElement("label")
    capstoneLabel.htmlFor = "new-capstone-name"
    capstoneLabel.textContent = "Capstone Project"
    let capstoneAddButton = document.createElement("button")
    capstoneAddButton.classList.add("add-btn")
    capstoneAddButton.classList.add("btn")
    capstoneAddButton.textContent = "Add"
    capstoneGroup.appendChild(capstoneGroupLabelAndEditButton)
    capstoneGroupLabelAndEditButton.appendChild(capstoneLabel)
    capstoneGroupLabelAndEditButton.appendChild(capstoneAddButton)
	let editCapstoneGroup = document.createElement("div")
	editCapstoneGroup.classList.add("edit-capstone-group")
	let capstoneNameInputGroup = document.createElement("div")
	capstoneNameInputGroup.classList.add("title-group")
	capstoneNameInputGroup.classList.add("input-group")
	let capstoneNameLabel = document.createElement("label")
	capstoneNameLabel.htmlFor = "title"
	capstoneNameLabel.classList.add("input-group-text")
	capstoneNameLabel.textContent = "Title"
	let input = document.createElement("input")
	input.id = "title"
	input.classList.add("title-control")
	input.classList.add("form-control")
	let select = document.createElement("select")
	select.id = "type"
	select.name = "type"
	select.classList.add("form-select")
	let trueOption = document.createElement("option")
	trueOption.value = "true"
	trueOption.textContent = "Group"
	let falseOption = document.createElement("option")
	falseOption.value = "false"
	falseOption.textContent = "Individual"
	capstoneGroup.appendChild(editCapstoneGroup)
	editCapstoneGroup.appendChild(capstoneNameInputGroup)
	capstoneNameInputGroup.appendChild(capstoneNameLabel)
	capstoneNameInputGroup.appendChild(input)
	editCapstoneGroup.appendChild(select)
	select.appendChild(falseOption)
	select.appendChild(trueOption)
    return capstoneGroup
}

