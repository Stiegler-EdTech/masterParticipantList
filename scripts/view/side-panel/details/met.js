export function renderMetGroup(){
    let metGroup = document.createElement("div")
    metGroup.classList.add("met-group")
    let metGroupLabelAndEditButton = document.createElement("div")
    metGroupLabelAndEditButton.classList.add("label-and-edit-button")
    let metLabel = document.createElement("label")
    metLabel.htmlFor = "met"
    metLabel.textContent = "Met With Staff"
    let metEditButton = document.createElement("button")
    metEditButton.classList.add("edit-btn")
    metEditButton.classList.add("btn")
    metEditButton.textContent = "Edit"
    let metSelect = document.createElement("select")
    metSelect.classList.add("form-select")
    metSelect.name = "met"
    metSelect.htmlFor = "met"
    metSelect.id = "met"
    metSelect.disabled = true;
    let metTrueOption = document.createElement("option")
    metTrueOption.value = "true"
    metTrueOption.textContent = "True"
    let metFalseOption = document.createElement("option")
    metFalseOption.value = "false"
    metFalseOption.textContent = "False"
    metFalseOption.selected = true
    metGroup.appendChild(metGroupLabelAndEditButton)
    metGroupLabelAndEditButton.appendChild(metLabel)
    metGroupLabelAndEditButton.appendChild(metEditButton)
    metGroup.appendChild(metSelect)
    metSelect.appendChild(metTrueOption)
    metSelect.appendChild(metFalseOption)
    return metGroup;
}
