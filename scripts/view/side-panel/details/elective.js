export function renderElectiveGroup(){
    let electiveGroup = document.createElement("div")
    electiveGroup.classList.add("elective-group")
    let electiveGroupLabelAndEditButton = document.createElement("div")
    electiveGroupLabelAndEditButton.classList.add("label-and-edit-button")
    let electiveLabel = document.createElement("label")
    electiveLabel.htmlFor = "elective"
    electiveLabel.textContent = "Elective"
    let electiveAddButton = document.createElement("button")
    electiveAddButton.classList.add("add-btn")
    electiveAddButton.classList.add("btn")
    electiveAddButton.textContent = "Add"
    electiveGroup.appendChild(electiveGroupLabelAndEditButton)
    electiveGroupLabelAndEditButton.appendChild(electiveLabel)
    electiveGroupLabelAndEditButton.appendChild(electiveAddButton)
	let select = document.createElement("select")
	select.id = "elective"
	select.classList.add("edit-elective-group")
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
	electiveGroup.appendChild(select)
	select.appendChild(javascriptOption)
	select.appendChild(analyticsOption)
	select.appendChild(cyberOption)
	select.appendChild(managementOption)
    return electiveGroup
}


