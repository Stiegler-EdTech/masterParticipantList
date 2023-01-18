export function renderAddNoteButton(){
    let addButton = document.createElement("button")
    addButton.classList.add("add-note-button")
    addButton.classList.add("btn")
    addButton.classList.add("btn-lg")
    addButton.textContent = "+ Add Note"
    return addButton
}
export function renderNotesPanel(){
    let notesPanel = document.createElement("div")
    notesPanel.classList.add("student-notes-panel")
    return notesPanel
}
export function renderNotesPreview(){
    let notesPreview = document.createElement("div")
    notesPreview.classList.add("notes-preview")
    return notesPreview
}

export function renderNoteContainer(){
    let noteContainer = document.createElement("div")
    noteContainer.classList.add("note-container")
    let noteTitleContainer = document.createElement("div")
    noteTitleContainer.classList.add("note-title-container")
    let noteIcon = document.createElement("i")
    noteIcon.classList.add("bi")
    noteIcon.classList.add("bi-pencil-square")
    let noteTitle = document.createElement("div")
    noteTitle.classList.add("note-title")
    noteTitle.textContent = "Note Title"
    let arrowIcon = document.createElement("i")
    arrowIcon.classList.add("bi")
    arrowIcon.classList.add("bi-caret-right-fill")

    noteContainer.appendChild(noteTitleContainer)
    noteTitleContainer.appendChild(noteIcon)
    noteTitleContainer.appendChild(noteTitle)
    noteContainer.appendChild(arrowIcon)

    return noteContainer
}

export function renderNoteDetailsContainer(){
    let noteDetailsContainer = document.createElement("div")
    noteDetailsContainer.classList.add("note-details-container")

    let noteDetailsTitleContainer = document.createElement("div")
    noteDetailsTitleContainer.classList.add("note-details-title-container")

    let noteDetailsTitleLabel = document.createElement("label")
    noteDetailsTitleLabel.htmlFor = "note-details-title"
    noteDetailsTitleLabel.textContent = "Title"

    let noteDeatilsTitleInput = document.createElement("input")
    noteDeatilsTitleInput.type = "text"
    noteDeatilsTitleInput.name = "note-details-title"
    noteDeatilsTitleInput.id = "note-details-title"
    noteDeatilsTitleInput.classList.add("form-control")

    let noteDetailsContentContainer = document.createElement("div")
    noteDetailsContentContainer.classList.add("note-details-content-container")

    let noteDetailsContentLabel = document.createElement("label")
    noteDetailsContentLabel.htmlFor = "note-details-content"
    noteDetailsContentLabel.textContent = "Note"

    let noteDetailsContentTextarea = document.createElement("textarea")
    noteDetailsContentTextarea.name = "note-details-content"
    noteDetailsContentTextarea.id ="note-details-content"
    noteDetailsContentTextarea.classList.add("form-control")
    noteDetailsContentTextarea.cols = "100"
    noteDetailsContentTextarea.rows = "10"

    let noteDetailsFooter = document.createElement("div")
    noteDetailsFooter.classList.add("note-details-footer")

    let cancelButton = document.createElement("button")
    cancelButton.classList.add("btn")
    cancelButton.classList.add("btn-lg")
    cancelButton.classList.add("btn-danger")
    cancelButton.textContent = "Cancel"

    let saveButton = document.createElement("button")
    saveButton.classList.add("btn")
    saveButton.classList.add("btn-lg")
    saveButton.classList.add("btn-success")
    saveButton.textContent = "Save"

    noteDetailsContainer.appendChild(noteDetailsTitleContainer)
    noteDetailsTitleContainer.appendChild(noteDetailsTitleLabel)
    noteDetailsTitleContainer.appendChild(noteDeatilsTitleInput)
    noteDetailsContainer.appendChild(noteDetailsContentContainer)
    noteDetailsContentContainer.appendChild(noteDetailsContentLabel)
    noteDetailsContentContainer.appendChild(noteDetailsContentTextarea)
    noteDetailsContainer.appendChild(noteDetailsFooter)
    noteDetailsFooter.appendChild(cancelButton)
    noteDetailsFooter.appendChild(saveButton)

    return noteDetailsContainer;
}
