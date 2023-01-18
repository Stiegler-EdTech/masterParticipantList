function renderUserNameGroup(){
    let userNameGroup = document.createElement("div")
    userNameGroup.classList.add("username-group")
    userNameGroup.classList.add("input-group")
    let userNameLabel = document.createElement("label")
    userNameLabel.htmlFor = "username"
    userNameLabel.classList.add("input-group-text")
    userNameLabel.textContent = "Username"
    let userNameInput = document.createElement("input")
    userNameInput.id = "username"
    userNameInput.classList.add("form-control")
    userNameInput.classList.add("username-input")
    userNameInput.type = "text"
    userNameInput.disabled = true;
    userNameGroup.appendChild(userNameLabel)
    userNameGroup.appendChild(userNameInput)
    return userNameGroup
}
function renderStudentIdGroup(){
    let studentIdGroup = document.createElement("div")
    studentIdGroup.classList.add("student-id-group")
    studentIdGroup.classList.add("input-group")
    let studentIdLabel = document.createElement("label")
    studentIdLabel.htmlFor = "student-id"
    studentIdLabel.classList.add("input-group-text")
    studentIdLabel.textContent = "ID"
    let studentIdInput = document.createElement("input")
    studentIdInput.id = "student-id"
    studentIdInput.classList.add("form-control")
    studentIdInput.classList.add("student-id-input")
    studentIdInput.type = "text"
    studentIdInput.disabled = true;
    studentIdGroup.appendChild(studentIdLabel)
    studentIdGroup.appendChild(studentIdInput)
    return studentIdGroup
}
export function renderIdentifierGroup(){
    let identifierGroup = document.createElement("div")
    identifierGroup.classList.add("identifier-group")
    let userNameGroup = renderUserNameGroup()
    identifierGroup.appendChild(userNameGroup)
    let studentIdGroup = renderStudentIdGroup()
    identifierGroup.appendChild(studentIdGroup)
    return identifierGroup
}
