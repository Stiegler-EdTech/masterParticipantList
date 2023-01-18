export function renderMentorGroup(){
    let mentorGroup = document.createElement("div")
    mentorGroup.classList.add("mentor-group")
    let mentorGroupLabelAndEditButton = document.createElement("div")
    mentorGroupLabelAndEditButton.classList.add("label-and-edit-button")
    let mentorLabel = document.createElement("label")
    mentorLabel.htmlFor = "mentor"
    mentorLabel.textContent = "Mentor Name"
    let mentorAddButton = document.createElement("button")
    mentorAddButton.classList.add("add-btn")
    mentorAddButton.classList.add("btn")
    mentorAddButton.textContent = "Add"
    mentorGroup.appendChild(mentorGroupLabelAndEditButton)
    mentorGroupLabelAndEditButton.appendChild(mentorLabel)
    mentorGroupLabelAndEditButton.appendChild(mentorAddButton)
    let editMentorGroup = document.createElement("div")
    editMentorGroup.classList.add("edit-mentor-group")
    let mentorInput = document.createElement("input");
    mentorInput.htmlFor = "mentor"
    mentorInput.id = "mentor"
    mentorInput.type = "text"
    mentorInput.classList.add("mentor-name-input")
    mentorInput.classList.add("form-control")
    mentorGroup.appendChild(editMentorGroup)
    editMentorGroup.appendChild(mentorInput)
    return mentorGroup
}

