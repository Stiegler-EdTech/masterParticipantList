function renderFirstNameGroup(){
    let firstNameGroup = document.createElement("div")
    firstNameGroup.classList.add("first-name-group")
    firstNameGroup.classList.add("input-group")
    let firstNameLabel = document.createElement("label")
    firstNameLabel.htmlFor = "first-name"
    firstNameLabel.classList.add("input-group-text")
    firstNameLabel.textContent = "First"
    let firstNameInput = document.createElement("input")
    firstNameInput.id = "first-name"
    firstNameInput.classList.add("form-control")
    firstNameInput.classList.add("first-name-input")
    firstNameInput.type = "text"
    firstNameInput.disabled = true
    firstNameGroup.appendChild(firstNameLabel)
    firstNameGroup.appendChild(firstNameInput)
    return firstNameGroup
}
function renderLastNameGroup(){
    let lastNameGroup = document.createElement("div")
    lastNameGroup.classList.add("last-name-group")
    lastNameGroup.classList.add("input-group")
    let lastNameLabel = document.createElement("label")
    lastNameLabel.htmlFor = "last-name"
    lastNameLabel.classList.add("input-group-text")
    lastNameLabel.textContent = "Last"
    let lastNameInput = document.createElement("input")
    lastNameInput.id = "last-name"
    lastNameInput.classList.add("form-control")
    lastNameInput.classList.add("last-name-input")
    lastNameInput.type = "text"
    lastNameInput.disabled = true
    lastNameGroup.appendChild(lastNameLabel)
    lastNameGroup.appendChild(lastNameInput)
    return lastNameGroup
}
function renderFullNameGroup(){
    let firstNameGroup = renderFirstNameGroup()
    let lastNameGroup = renderLastNameGroup()
    let fullNameGroup = document.createElement("div")
    fullNameGroup.classList.add("full-name-group")
    fullNameGroup.appendChild(firstNameGroup)
    fullNameGroup.appendChild(lastNameGroup)
    return fullNameGroup
}
export function renderNameGroup(){
    let fullNameGroup = renderFullNameGroup()
    let nameGroup = document.createElement("div")
    nameGroup.classList.add("name-group")
    let nameGroupLabelAndEditButton = document.createElement("div")
    nameGroupLabelAndEditButton.classList.add("label-and-edit-button")
    let nameLabel = document.createElement("label")
    nameLabel.htmlFor = "name"
    nameLabel.textContent = "Name"
    let nameEditButton = document.createElement("button")
    nameEditButton.classList.add("edit-btn")
    nameEditButton.classList.add("btn")
    nameEditButton.textContent = "Edit"
    nameGroup.appendChild(nameGroupLabelAndEditButton)
    nameGroupLabelAndEditButton.appendChild(nameLabel)
    nameGroupLabelAndEditButton.appendChild(nameEditButton)
    nameGroup.appendChild(fullNameGroup)


    return nameGroup;
}



