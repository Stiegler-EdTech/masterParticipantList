export function renderProbationGroup(){
    let probationGroup = document.createElement("div")
    probationGroup.classList.add("probation-group")
    let probationGroupLabelAndEditButton = document.createElement("div")
    probationGroupLabelAndEditButton.classList.add("label-and-edit-button")
    let probationLabel = document.createElement("label")
    probationLabel.htmlFor = "probation"
    probationLabel.textContent = "Probation"
    let probationEditButton = document.createElement("button")
    probationEditButton.classList.add("edit-btn")
    probationEditButton.classList.add("btn")
    probationEditButton.textContent = "Edit"
    let probationSelect = document.createElement("select")
    probationSelect.classList.add("form-select")
    probationSelect.name = "probation"
    probationSelect.htmlFor = "probation"
    probationSelect.id = "probation"
    probationSelect.disabled = true;
    let probationTrueOption = document.createElement("option")
    probationTrueOption.value = "true"
    probationTrueOption.textContent = "Active"
    let probationFalseOption = document.createElement("option")
    probationFalseOption.value = "false"
    probationFalseOption.textContent = "Inactive"
    probationFalseOption.selected = true;
    probationGroup.appendChild(probationGroupLabelAndEditButton)
    probationGroupLabelAndEditButton.appendChild(probationLabel)
    probationGroupLabelAndEditButton.appendChild(probationEditButton)
    probationGroup.appendChild(probationSelect)
    probationSelect.appendChild(probationTrueOption)
    probationSelect.appendChild(probationFalseOption)
    return probationGroup;
}
