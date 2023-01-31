import { renderIdentifierGroup } from './identifiers.js'
import { renderNameGroup } from './fullName.js'
import { renderProbationGroup } from './probation.js'
import { renderMetGroup } from './met.js'
import { renderMentorGroup } from './mentor.js'
import { renderCapstoneGroup } from './capstone.js'
import { renderElectiveGroup } from './elective.js'
import { renderCityAndCohortGroup } from './city-and-cohort.js'


export function renderDetailsFooter(){
    let footer = document.createElement("div")
    footer.classList.add("side-panel-footer")
    let exitButton = document.createElement("button")
    exitButton.classList.add("btn")
    exitButton.classList.add("btn-danger")
    exitButton.classList.add("btn-lg")
    exitButton.textContent = "Cancel"
    let saveButton = document.createElement("button")
    saveButton.classList.add("btn")
    saveButton.classList.add("btn-success")
    saveButton.classList.add("btn-lg")
    saveButton.textContent = "Save"
    footer.appendChild(exitButton)
    footer.appendChild(saveButton)
    return footer;
}
export function renderDetailsPanel(){
    let detailsPanel = document.createElement("div")
    detailsPanel.classList.add("student-details-panel")
    detailsPanel.classList.add("add-scroll")
    let identifierGroup = renderIdentifierGroup()
    let cityAndCohortGroup = renderCityAndCohortGroup()
    detailsPanel.appendChild(identifierGroup)
    detailsPanel.appendChild(cityAndCohortGroup)
    let nameGroup = renderNameGroup()
    detailsPanel.appendChild(nameGroup)
    let probationGroup = renderProbationGroup()
    detailsPanel.appendChild(probationGroup)
    let metGroup = renderMetGroup()
    detailsPanel.appendChild(metGroup)
    let mentorGroup = renderMentorGroup()
    detailsPanel.appendChild(mentorGroup)
    let capstoneGroup = renderCapstoneGroup()
    detailsPanel.appendChild(capstoneGroup)
    let electiveGroup = renderElectiveGroup()
    detailsPanel.appendChild(electiveGroup)
    let footer = renderDetailsFooter()
    detailsPanel.appendChild(footer)
    return detailsPanel;
}

