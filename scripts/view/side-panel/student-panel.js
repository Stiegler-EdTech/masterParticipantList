import { renderDetailsPanel } from './details/student-details-panel.js'
import { renderDetailsFooter } from './details/student-details-panel.js'

function renderSidePanelBox(){
    let bodyContainer = document.querySelector(".body-container")
    let sidePanel = document.createElement("div")
    sidePanel.classList.add("side-panel")
    bodyContainer.appendChild(sidePanel)
    return sidePanel
}
function renderSidePanelContainer(){
    let sidePanel = renderSidePanelBox()
    let sidePanelContainer = document.createElement("div")
    sidePanelContainer.classList.add("side-panel-container")
    sidePanel.appendChild(sidePanelContainer)
    return sidePanelContainer
}

function renderPanelButtons(){
    let panels = document.createElement("div")
    panels.classList.add("panels")
    let detailsButton = document.createElement("button")
    detailsButton.classList.add("details-panel")
    detailsButton.classList.add("btn")
    detailsButton.classList.add("active-panel")
    detailsButton.textContent = "Details"
    let notesButton = document.createElement("button")
    notesButton.classList.add("notes-panel")
    notesButton.classList.add("btn")
    notesButton.textContent = "Notes"
    let attendanceButton = document.createElement("button")
    attendanceButton.classList.add("attendance-panel")
    attendanceButton.classList.add("btn")
    attendanceButton.textContent = "Attendance"
    panels.appendChild(detailsButton)
    panels.appendChild(notesButton)
    panels.appendChild(attendanceButton)
    return panels
}

// add a conditional here to choose between details and notes
export function renderSidePanel(){
    let panels = renderPanelButtons()
    let sidePanelContainer = renderSidePanelContainer()
    sidePanelContainer.appendChild(panels)
    let sidePanel = sidePanelContainer.parentElement
    return sidePanelContainer
}
