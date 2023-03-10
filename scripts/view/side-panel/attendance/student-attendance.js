function makeElement(el, arr){
    let element = document.createElement(el)
    arr.map(cl => element.classList.add(cl))
    return element
}
function renderAttendancePanel(){
    let sidePanel = document.querySelector(".side-panel-container")
    let attendancePanel = makeElement("div", ["student-attendance-panel"])
    sidePanel.appendChild(attendancePanel)
    return attendancePanel
}
function renderViewPanel(){
    return makeElement("div", ["view-attendance-panel"])
}
function renderViewMainContent(){
    return makeElement("div", ["main-attendance-content"])
}
function renderAbsenseView(){
    return makeElement("div", ["absenses-view"])
}
function renderTardiesView(){
    return makeElement("div", ["tardies-view"])
}
function renderTitleAndAddButtonContainer(){
    return makeElement("div", ["attendance-title-and-add-button"])
}
function renderAttendanceTitle(titleName){
    let title = makeElement("div", ["attendance-title"])
    title.textContent = titleName
    return title;
}
function renderAddAtendanceButton(buttonText, buttonClass){
    let button = makeElement("button", [`add-${buttonClass}-btn`, "btn", "btn-md"])
    button.textContent = `+ Add ${buttonText}`
    return button
}
function renderAttendanceSummaryContainer(){
    return makeElement("div", ["attendance-summary"])
}
function renderTotalContainer(){
    return makeElement("div", ["total-container"])
}
function renderTotalTitle(){
    let totalTitle = makeElement("div", ["total-title"])
    totalTitle.textContent = "Total"
    return totalTitle
}
function renderTotalNumber(){
    let number = makeElement("div", ["total-number"])
    number.textContent = 0;
    return number
}
function renderExcusedOrUnexcusedContainer(type){
    return makeElement("div", [`${type}-container`])
}
function renderExcusedOrUnexcusedTitle(type, typeUpper){
    let title = makeElement("div", [`${type}-title`])
    title.textContent = typeUpper
    return title
}
function renderExcusedOrUnexcusedNumber(type){
    let number = makeElement("div", [`${type}-number`])
    number.textContent =0
    return number
}

function renderAttendanceTable(){
    return makeElement("div", ["attendance-table", "table"])
}
function renderTableHeaderContainer(){
    return makeElement("div", ["table-header"])
}
function renderTableHeaderTable(){
    return makeElement("table", ["table"])
}
function renderTableHeader(){
    return  makeElement("thead", [])
    // table.appendChild(head)
    // return table
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
    return table
}
export function renderAttendanceTableRow(date, reason){
    let tr = makeElement("tr", [])
    let dateTd = makeElement("td", [])
    dateTd.textContent = date
    let reasonTd = makeElement("td", [])
    reasonTd.textContent = reason
    tr.appendChild(dateTd)
    tr.appendChild(reasonTd)
    tr.classList.add("attendance-row")
    return tr;
}
function renderFooter(){
    return makeElement("div", ["attendance-footer"])
}
function renderCloseViewButton(){
    let button = makeElement("button", ["close-attendance-btn", "btn", "btn-large"])
    button.textContent = "Close"
    return button
}

function putTogetherAttendanceAndTitleButton(view, capital, lowercase, pluralCap){
    let titleAndAddButtonContainer = renderTitleAndAddButtonContainer()
    view.appendChild(titleAndAddButtonContainer)
    let title = renderAttendanceTitle(pluralCap)
    let addButton = renderAddAtendanceButton(capital, lowercase)
    titleAndAddButtonContainer.appendChild(title)
    titleAndAddButtonContainer.appendChild(addButton)
    return titleAndAddButtonContainer
}

function renderSummary(view){
    let summary = renderAttendanceSummaryContainer()
    let totalContainer = renderTotalContainer()
    let totalTitle = renderTotalTitle()
    let totalNumber = renderTotalNumber()
    view.appendChild(summary)
    summary.appendChild(totalContainer)
    totalContainer.appendChild(totalTitle)
    totalContainer.appendChild(totalNumber)
    return summary
}

function buildExcusedOrUnexcused(summary, type, typeUpper){
    let container = renderExcusedOrUnexcusedContainer(type)
    let title = renderExcusedOrUnexcusedTitle(type, typeUpper)
    let number = renderExcusedOrUnexcusedNumber(type)
    summary.appendChild(container)
    container.appendChild(title)
    container.appendChild(number)
}

function buildTable(view){
    let table = renderAttendanceTable()
    let theaderContainer = renderTableHeaderContainer()
    let tableHeaderTable = renderTableHeaderTable()
    let theader = renderTableHeader()
    let dateHeader = renderTH("Date")
    let reasonHeader = renderTH("Reason")
    view.appendChild(table)
    table.appendChild(theaderContainer)
    theaderContainer.appendChild(tableHeaderTable)
    tableHeaderTable.appendChild(theader)
    theader.appendChild(dateHeader)
    theader.appendChild(reasonHeader)
    let tbodyContainer = renderTableBodyContainer()
    let tbody = renderTableBody()
    table.appendChild(tbodyContainer)
    tbodyContainer.appendChild(tbody)
    return table
}

function renderAbsenseSection(){
    let absensesView = renderAbsenseView()
    putTogetherAttendanceAndTitleButton(absensesView, "Absense", "absense", "Absenses")
    let summary = renderSummary(absensesView)
    buildExcusedOrUnexcused(summary, "excused", "Excused")
    buildExcusedOrUnexcused(summary, "unexcused", "Unexcused")
    buildTable(absensesView)
    return absensesView
}

function renderTardySection(){
    let tardiesView = renderTardiesView()
    putTogetherAttendanceAndTitleButton(tardiesView, "Tardy", "tardy", "Tardies")
    let summary = renderSummary(tardiesView)
    buildExcusedOrUnexcused(summary, "excused", "Excused")
    buildExcusedOrUnexcused(summary, "unexcused", "Unexcused")
    buildTable(tardiesView)
    return tardiesView
}

function buildNewReason(parent, lower, upper){
    let inputGroup = makeElement("div", [`${lower}-input-group`])
    parent.appendChild(inputGroup)

    let label = makeElement("label", ["radio"])
    label.htmlFor = lower
    label.textContent = upper
    inputGroup.appendChild(label)

    let input = makeElement("input", ["radio"])
    input.setAttribute("type", "radio")
    input.id = lower
    input.setAttribute("name", "reason")
    input.value = lower
    inputGroup.appendChild(input)
    return input;
}

export function renderEditPanel(type, typeUpper){
    let panel = document.querySelector(".student-attendance-panel")
    let editPanel = makeElement("div", ["edit-attendance-panel", `edit-${type}`])
    panel.appendChild(editPanel)

    let mainContent = makeElement("div", ["main-attendance-content"])
    editPanel.appendChild(mainContent)

    let panelTitle = makeElement("div", ["edit-panel-title"])
    panelTitle.textContent = `New ${typeUpper}`
    mainContent.appendChild(panelTitle)

    let newDateContainer = makeElement("div", ["new-date-container"])
    mainContent.appendChild(newDateContainer)

    let newDateTitle = makeElement("div", ["new-date-title"])
    newDateTitle.textContent = "Date"
    newDateContainer.appendChild(newDateTitle)

    let dateTool = makeElement("input", ["date-tool"])
    dateTool.type = "date"
    dateTool.value = new Date().toISOString().split("T")[0]
    newDateContainer.appendChild(dateTool)

    let newReasonContainer = makeElement("div", ["new-reason-container"])
    mainContent.appendChild(newReasonContainer)

    let newReasonTitle = makeElement("div", ["new-reason-title"])
    newReasonTitle.textContent = "Reason"
    newReasonContainer.appendChild(newReasonTitle)

    let newReasonInputGroup = makeElement("div", ["new-reason-input-group", "input-group"])
    newReasonContainer.appendChild(newReasonInputGroup)

    let excusedRadioButton = buildNewReason(newReasonInputGroup, "excused", "Excused")
    let unexcusedRadioButton = buildNewReason(newReasonInputGroup, "unexcused", "Unexcused")

    let editFooter = makeElement("div", ["attendance-footer"])
    editPanel.appendChild(editFooter)

    let cancelButton = makeElement("button", ["btn", "btn-danger", "cancel-attendance-btn"])
    cancelButton.textContent = "Cancel"
    editFooter.appendChild(cancelButton)

    let saveButton = makeElement("button", ["btn", "btn-success", "save-attendance-btn"])
    saveButton.textContent = "Save"
    editFooter.appendChild(saveButton)

    return editPanel
}

export function renderStudentAttendance(){
    let panel = renderAttendancePanel()
    let viewPanel = renderViewPanel()
    panel.appendChild(viewPanel)
    let viewMainContent = renderViewMainContent()
    viewPanel.appendChild(viewMainContent)
    let absensesView = renderAbsenseSection()
    let tardiesView = renderTardySection()
    viewMainContent.appendChild(absensesView)
    viewMainContent.appendChild(tardiesView)
    let footer = renderFooter()
    viewPanel.appendChild(footer)
    return panel
}
