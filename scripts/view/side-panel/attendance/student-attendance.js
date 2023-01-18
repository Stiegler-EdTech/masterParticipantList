function makeElement(el, arr){
    let element = document.createElement(el)
    arr.map(cl => el.classList.add(cl))
    return element
}
function renderAttendancePanelButton(){
    let panels = document.querySelector("panels")
    let attendancePanelButton = makeElement("button", ["attendance-panel", "btn"])
    attendancePanelButton.textContent = "Attendance"
    panels.appendChild(attendancePanelButton)
    return attendancePanelButton
}
function renderAttendancePanel(){
    let sidePanel = document.querySelector(".side-panel-container")
    let attendancePanel = makeElement("div", ["student-attendance-panel"])
    sidePanel.appendChild(attendancePanel)
    return attendancePanel
}
function renderViewPanel(){
    // let viewPanel = document.createElement("div")
    // let viewPanel = makeElement("div", ["view-attendance-panel"])
    // viewPanel.classList.add("view-attendance-panel")
    // return viewPanel
    return makeElement("div", ["view-attendance-panel"])
}
function renderViewMainContent(){
    // let mainContent = document.createElement("div")
    // let mainContent = makeElement("div", ["main-attendance-content"])
    // mainContent.classList.add("main-attendance-content")
    // return mainContent
    return makeElement("div", ["main-attendance-content"])
}
function renderAbsenseView(){
    // let absensesView = document.createElement("div")
    // let absensesView = makeElement("div", ["absenses-view"])
    // absensesView.classList.add("absenses-view")
    // return absensesView
    return makeElement("div", ["absenses-view"])
}
function renderTardiesView(){
    return makeElement("div", ["tardies-view"])
}
function renderTitleAndAddButtonContainer(){
    // let titleAndAddButtonContainer = makeElement("div", ["attendance-title-and-add-button"])
    // let titleAndAddButtonContainer = document.createElement("div")
    // titleAndAddButtonContainer.classList.add("attendance-title-and-add-button")
    // return titleAndAddButtonContainer
    return makeElement("div", ["attendance-title-and-add-button"])
}
function renderAttendanceTitle(titleName){
    let title = makeElement("div", ["attendance-title"])
    // let title = document.createElement("div")
    // title.classList.add("attendance-title")
    title.textContent = titleName
    return title;
}
function renderAddAtendanceButton(buttonText, buttonClass){
    button = makeElement("button", [`add-${buttonClass}-btn`, "btn", "btn-md"])
    // button = document.createElement("button")
    // button.classList.add(`add-${buttonClass}-btn`)
    // button.classList.add("btn")
    // button.classList.add("btn-md")
    button.textContent = `+ Add ${buttonText}`
    return button
}
function renderAttendanceSummaryContainer(){
    // let attendanceSummary = document.createElement("div")
    // attendanceSummary.classList.add("attendance-summary")
    // return attendanceSummary
    return makeElement("div", ["attendance-summary"])
}
function renderTotalContainer(){
    // let totalContainer = document.createElement("div")
    // totalContainer.classList.add("total-container")
    // return totalContainer
    return makeElement("div", ["total-container"])
}
function renderTotalTitle(){
    // let totalTitle = document.createElement("div")
    // totalTitle.classList.add("total-title")
    let totalTitle = makeElement("div", ["total-title"])
    totalTitle.textContent = "Total"
    return totalTitle
}
function renderTotalNumber(){
    let number = makeElement("div", ["total-number"])
    number.textContent = 0;
    return number
}
function renderExcusedContainer(){
    return makeElement("div", ["excused-container"])
}
function renderExcusedTitle(){
    let title = makeElement("div", ["excused-title"])
    title.textContent = "Excused"
    return title
}
function renderExcusedNumber(){
    let number = makeElement("div", ["excused-number"])
    number.textContent =0
    return number
}
function renderUnexcusedTitle(){
    let title = makeElement("div", ["unexcused-title"])
    title.textContent = "Excused"
    return title
}
function renderUnexcusedNumber(){
    let number = makeElement("div", ["unexcused-number"])
    number.textContent = 0
    return number
}
function renderAttendanceTable(){
    return makeElement("div", ["attendance-table", "table"])
}
function renderTableHeaderContainer(){
    return makeElement("div", ["table-header"])
}
function renderTableHeader(){
    let table = makeElement("table", ["table"])
    let head = makeElement("thead", [])
    table.appendChild(head)
    return head
}
function renderTH(text){
    let th = makeElement("th", [])
    th.scope = "col"
    th.textContent = text
    return th
}
function renderTableBodyContainer(){
    return makeElement("div", ["table-body"])
}
function renderTableBody(){
    let table = makeElement("table", ["table", "table-striped"])
    let tbody = makeElement("tbody", [])
    table.appendChild(tbody)
    return tbody
}
function renderFooter(){
    return makeElement("div", ["attendance-footer"])
}
function renderCloseViewButton(){
    let button = makeElement("button", ["close-attendance-btn", "btn", "btn-large"])
    button.textContent = "Close"
    return button
}

function renderAbsensesSection(){

}

function renderStudentAttendance(){
    let attendancePanelButton = renderAttendancePanelButton()
    let panel = renderAttendancePanel()
    let viewPanel = renderViewPanel()
    panel.appendChild(viewPanel)
    //remember to append the edit panel here

    let viewMainContent = renderViewMainContent()
    viewPanel.appendChild(viewMainContent)

    let absensesView = renderAbsenseView()
    let tardiesView = renderTardiesView()
    viewMainContent.appendChild(absensesView)

    let titleAndAddButtonContainer = renderTitleAndAddButtonContainer()
    absensesView.appendChild(titleAndAddButtonContainer)

    let attendanceTitle = renderAttendanceTitle("Absenses")
    let addAttendanceButton = renderAddAtendanceButton("Absense", "absense")
    titleAndAddButtonContainer.appendChild(attendanceTitle)
    titleAndAddButtonContainer.appendChild(addAttendanceButton)

    let summary = renderAttendanceSummaryContainer()
    let totalContainer = renderTotalContainer()
    let totalTitle = renderTotalTitle()
    let totalNumber = renderTotalNumber()
    absensesView.appendChild(summary)
    summary.appendChild(totalContainer)
    totalContainer.appendChild(totalTitle)
    totalContainer.appendChild(totalNumber)

    let excusedContainer = renderExcusedContainer()
    let exucsedTitle = renderExcusedTitle()
    let excusedNumber = renderExcusedNumber()
    summary.appendChild(excusedContainer)
    excusedContainer.appendChild(exucsedTitle)
    excusedContainer.appendChild(excusedNumber)

    let unexcusedContainer = renderUnexcusedContainer()
    let unexucsedTitle = renderUnexcusedTitle()
    let unexcusedNumber = renderUnexcusedNumber()
    summary.appendChild(unexcusedContainer)
    unexcusedContainer.appendChild(unexucsedTitle)
    unexcusedContainer.appendChild(unexcusedNumber)

    let table = renderAttendanceTable()
    let theaderContainer = renderTableHeaderContainer()
    let theader = renderTableHeader()
    let dateHeader = renderTH("Date")
    let reasonHeader = renderTH("Reason")
    absensesView.appendChild(table)
    table.appendChild(theaderContainer)
    theaderContainer.appendChild(theader)
    theader.appendChild(dateHeader)
    theader.appendChild(reasonHeader)

    let tbodyContainer = renderTableBodyContainer()
    let tbody = renderTableBody()
    table.appendChild(tbodyContainer)
    tbodyContainer.appendChild(tbody)

    viewMainContent.appendChild(tardiesView)

    let footer = renderFooter()
    viewPanel.appendChild(footer)






}


