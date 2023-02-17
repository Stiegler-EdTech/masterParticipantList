import { renderSidePanel } from './side-panel/student-panel.js';
import { removeSidePanel } from "../controller/side-panel/remove-side-panel.js";
import { Student } from "../model/Student.js";
import { renderDetailsPanel } from "./side-panel/details/student-details-panel.js";
import { renderAddNoteButton, renderNoteContainer, renderNoteDetailsContainer, renderNotesPanel, renderNotesPreview } from "./side-panel/notes/student-notes-panel.js";
import { renderStudentAttendance, renderAttendanceTableRow, renderEditPanel } from './side-panel/attendance/student-attendance.js';


function renderStudentRow() {
	let list = document.querySelector(".participant-list tbody");
	let newRow = document.createElement("tr");
	list.appendChild(newRow);
	return newRow;
}

function renderStudentId(student) {
	let idTd = document.createElement("td");
	idTd.textContent = `${student.id}`;
	idTd.classList.add("id");
	return idTd;
}

function renderStudentName(student) {
	let nameTd = document.createElement("td");
	nameTd.textContent = student.getFullName();
	nameTd.classList.add("name");
	return nameTd;
}

function renderStudentAbsenses(student) {
	let absensesTd = document.createElement("td");
	absensesTd.textContent = student.getAbsenses();
	absensesTd.classList.add("absenses");
	return absensesTd;
}

function renderStudentTardies(student) {
	let tardiesTd = document.createElement("td");
	tardiesTd.textContent = student.getTardies();
	tardiesTd.classList.add("tardies");
	return tardiesTd;
}

function enableInput(e, input){
	e.target.parentElement.parentElement.querySelector(`${input}`).disabled = false
}

function showUsernameOnForm(sidePanel, student){
	sidePanel.querySelector("#username").value = student.getUserName()
}

function showStudentIdOnForm(sidePanel, student){
	sidePanel.querySelector("#student-id").value = student.getId()
}

function showCityOnForm(sidePanel, student){
	sidePanel.querySelector("#city-info").value = student.getCity()[0].toUpperCase() + student.getCity().slice(1)
}

function showCohortOnForm(sidePanel, student){
	sidePanel.querySelector("#cohort-info").value = student.getCohort()
}

function showFirstNameOnForm(sidePanel, student){
	sidePanel.querySelector(".first-name-input").value = student.getFirstName()
}

function showLastNameOnForm(sidePanel, student){
	sidePanel.querySelector(".last-name-input").value = student.getLastName()
}

function showProbationStatusOnForm(sidePanel, student){
	sidePanel.querySelector("#probation").value = student.getIsOnProbation()
}

function showMetStatusOnForm(sidePanel, student){
	sidePanel.querySelector("#met").value = student.getHasMetWithStaff()
}

function resetActivePanelButton(e){
	let panelButtons = Array.from(document.querySelector(".panels").childNodes)
	let currentButton = e.target.classList[0]
	panelButtons.map(b => {
		if(Array.from(b.classList).includes(currentButton)){
			b.classList.add("active-panel")
		} else{
			b.classList.remove("active-panel")
		}
	})
}
function displayActivePanel(activePanel){
	let panels = Array.from(document.querySelector(".side-panel-container").childNodes)
	panels.map(panel => {
		if(panel.className !== "panels"){
			panel.style.display = "none"
		}
	})
	activePanel.style.display = "block"
	return activePanel;
}

function updateAbsenseView(student){
	document.querySelector(`#student${student.id}`).querySelector(".absenses").textContent = student.getAbsenses().length
	if(student.getAbsenses().length){
		student.getAbsenses().map(ab => {
			document.querySelector(".absenses-view .total-number").textContent = student.getAbsenses().length
			document.querySelector(".absenses-view .total-number").value = student.getAbsenses().length
			if(ab.isExcused){
				document.querySelector(".absenses-view .excused-number").textContent = student.getExcusedAbsenses().length
				document.querySelector(".absenses-view .excused-number").value = student.getExcusedAbsenses().length
			} else if(!ab.isExcused){
				document.querySelector(".absenses-view .unexcused-number").textContent = student.getUnexcusedAbsenses().length
				document.querySelector(".absenses-view .unexcused-number").value = student.getUnexcusedAbsenses().length
			}
		})
	}
}

function updateTardyView(student){
	document.querySelector(`#student${student.id}`).querySelector(".tardies").textContent = student.getTardies().length
	if(student.getTardies().length){
		student.getTardies().map(tar => {
			document.querySelector(".tardies-view .total-number").textContent = student.getTardies().length
			document.querySelector(".tardies-view .total-number").value = student.getTardies().length
			if(tar.isExcused){
				document.querySelector(".tardies-view .excused-number").textContent = student.getExcusedTardies().length
				document.querySelector(".tardies-view .excused-number").value = student.getExcusedTardies().length
			} else if(!tar.isExcused){
				document.querySelector(".tardies-view .unexcused-number").textContent = student.getUnexcusedTardies().length
				document.querySelector(".tardies-view .unexcused-number").value = student.getUnexcusedTardies().length
			}
		})
	}
}

function resetEditAttendanceView(){
	let editAbsense = document.querySelector(".edit-attendance-panel.edit-absense")
	let editTardy = document.querySelector(".edit-attendance-panel.edit-tardy")
	let viewPanel = document.querySelector(".view-attendance-panel")
	let reason = document.querySelector('input[name="reason"]:checked')

	editAbsense? editAbsense.style.display = "none" : null
	editTardy? editTardy.style.display = "none" : null
	viewPanel.style.display = "block"
	Array.from(document.querySelectorAll(".date-tool")).map(tool => tool.value = new Date().toISOString().split("T")[0])
	reason? reason.checked = false : null
	// Array.from(document.querySelectorAll('input[id="excused"]')).map(r => r.checked = true);
}


export function renderNewStudent(student) {
	let newRow = renderStudentRow();
	newRow.classList.add("student-row");
	let idTd = renderStudentId(student);
	let nameTd = renderStudentName(student);
	let absensesTd = renderStudentAbsenses(student);
	let tardiesTd = renderStudentTardies(student);
	newRow.id = `student${idTd.textContent}`;
	newRow.appendChild(idTd);
	newRow.appendChild(nameTd);
	newRow.appendChild(absensesTd);
	newRow.appendChild(tardiesTd);

	updateAbsenseView(student)
	updateTardyView(student)

	newRow.addEventListener("click", (e) => {
		if(document.querySelector(".side-panel")){
			Array.from(document.querySelector(".input-group.filter").querySelectorAll("select")).map(s => s.disabled = true)
		} else{
			Array.from(document.querySelector(".input-group.filter").querySelectorAll("select")).map(s => s.disabled = true)
			document.querySelector("#add-new-participant").disabled = true;
			if((document.querySelector(".side-panel"))){
				document.querySelector(".body-container").removeChild(document.querySelector(".side-panel"))
			}
			let sidePanel = renderSidePanel()
			let detailsPanel = renderDetailsPanel()
			sidePanel.appendChild(detailsPanel)
			showUsernameOnForm(sidePanel, student)
			showStudentIdOnForm(sidePanel, student)
			showCityOnForm(sidePanel, student)
			showCohortOnForm(sidePanel, student)
			showFirstNameOnForm(sidePanel, student)
			showLastNameOnForm(sidePanel, student)
			showProbationStatusOnForm(sidePanel, student)
			showMetStatusOnForm(sidePanel, student)

			let notesButton = document.querySelector(".notes-panel")
			let notesPanel = renderNotesPanel()
			let notesPreview = renderNotesPreview()
			let addNoteButton = renderAddNoteButton()
			let noteDetailsContainer = renderNoteDetailsContainer()
			let detailsPanelButton = document.querySelector(".details-panel.btn")
			let notesPanelButton = document.querySelector(".notes-panel.btn")
			let editingNote;

			let attendancePanelButton = document.querySelector(".attendance-panel")
			let attendancePanel = renderStudentAttendance()
			attendancePanel.style.display = "none"

			let viewPanel = document.querySelector(".view-attendance-panel")

			let editAbsense = renderEditPanel("absense", "Absense")
			editAbsense.style.display = "none"

    		let editTardy = renderEditPanel("tardy", "Tardy")
			editTardy.style.display = "none"

			if(student.getMentor()){
				sidePanel.querySelector("#mentor").value = student.getMentor()
				sidePanel.querySelector("#mentor").disabled = true;
				document.querySelector(".mentor-group button").textContent = "Edit"
			} else if(!student.getMentor()){
				document.querySelector(".edit-mentor-group").style.display = "none"
			}
			if(student.getCapstone()){
				sidePanel.querySelector("#title").value = student.getCapstone().getTitle()
				sidePanel.querySelector("#type").value = student.getCapstone().getIsGroup()
				sidePanel.querySelector("#title").disabled = true;
				sidePanel.querySelector("#type").disabled = true;
				document.querySelector(".capstone-group button").textContent = "Edit"
			} else if(!student.getCapstone()){
				document.querySelector(".edit-capstone-group").style.display = "none"
			}
			if(student.getElective()){
				sidePanel.querySelector("#elective").value = student.getElective()
				sidePanel.querySelector("#elective").disabled = true;
				document.querySelector(".elective-group button").textContent = "Edit"
			} else if(!student.getElective()){
				document.querySelector(".edit-elective-group").style.display = "none"
			}

			detailsPanel.addEventListener("click", (e) => {
				let button = e.target.classList[0]
				let groupName = e.target.parentElement.parentElement.className
				let group = e.target.parentElement.parentElement
				if(button.includes("edit-btn")){
					if(groupName === "name-group"){
						enableInput(e, ".first-name-input")
						enableInput(e, ".last-name-input")
					} else if(groupName === "probation-group"){
						enableInput(e, "#probation")
					} else if(groupName === "met-group"){
						enableInput(e, "#met")
					}
				} else if(button.includes("add-btn")){
					if(groupName === "mentor-group"){
						document.querySelector(".mentor-group button").textContent = "Cancel"
						document.querySelector(".mentor-group button").className = ""
						document.querySelector(".mentor-group button").classList.add("cancel-btn")
						document.querySelector(".mentor-group button").classList.add("btn")
						document.querySelector(".edit-mentor-group").style.display = "block"
						sidePanel.querySelector("#mentor").disabled = false;
					} else if(groupName === "capstone-group"){
						document.querySelector(".capstone-group button").textContent = "Cancel"
						document.querySelector(".capstone-group button").className = ""
						document.querySelector(".capstone-group button").classList.add("cancel-btn")
						document.querySelector(".capstone-group button").classList.add("btn")
						document.querySelector(".edit-capstone-group").style.display = "flex"
						sidePanel.querySelector("#title").disabled = false;
						sidePanel.querySelector("#type").disabled = false;
					} else if(groupName === "elective-group"){
						document.querySelector(".elective-group button").textContent = "Cancel"
						document.querySelector(".edit-elective-group").style.display = "block"
						document.querySelector(".elective-group button").className = ""
						document.querySelector(".elective-group button").classList.add("cancel-btn")
						document.querySelector(".elective-group button").classList.add("btn")
						sidePanel.querySelector("#elective").disabled = false;
					}
				} else if(button === "cancel-btn"){
					if(groupName === "mentor-group"){
						if(student.getMentor()){
							sidePanel.querySelector("#mentor").disabled = true
							document.querySelector(".mentor-group button").textContent = "Edit"
							document.querySelector(".mentor-group button").className = ""
							document.querySelector(".mentor-group button").classList.add("add-btn")
							document.querySelector(".mentor-group button").classList.add("btn")
						} else {
							document.querySelector(".edit-mentor-group").style.display = "none"
							document.querySelector(".mentor-group button").textContent = "Add"
							document.querySelector(".mentor-group button").className = ""
							document.querySelector(".mentor-group button").classList.add("add-btn")
							document.querySelector(".mentor-group button").classList.add("btn")
						}
					} else if(groupName === "capstone-group"){
						if(student.getCapstone()){
							sidePanel.querySelector("#title").disabled = true;
							sidePanel.querySelector("#type").disabled = true;
							document.querySelector(".capstone-group button").textContent = "Edit"
							document.querySelector(".capstone-group button").className = ""
							document.querySelector(".capstone-group button").classList.add("add-btn")
							document.querySelector(".capstone-group button").classList.add("btn")
						} else{
							document.querySelector(".edit-capstone-group").style.display = "none"
							document.querySelector(".capstone-group button").textContent = "Add"
							document.querySelector(".capstone-group button").className = ""
							document.querySelector(".capstone-group button").classList.add("add-btn")
							document.querySelector(".capstone-group button").classList.add("btn")
						}
					} else if(groupName === "elective-group"){
						if(student.getElective()){
							sidePanel.querySelector("#elective").disabled = true;
							document.querySelector(".elective-group button").className = ""
							document.querySelector(".elective-group button").classList.add("add-btn")
							document.querySelector(".elective-group button").classList.add("btn")
							document.querySelector(".elective-group button").textContent = "Edit"
						} else{
							document.querySelector(".edit-elective-group").style.display = "none"
							document.querySelector(".elective-group button").className = ""
							document.querySelector(".elective-group button").classList.add("add-btn")
							document.querySelector(".elective-group button").classList.add("btn")
							document.querySelector(".elective-group button").textContent = "Add"
						}
					}
				}
				else if(Array.from(e.target.classList).includes("btn-success")){
					document.querySelector("#add-new-participant").disabled = false;
					let firstName = sidePanel.querySelector(".first-name-input").value
					let lastName = sidePanel.querySelector(".last-name-input").value

					let probationStatus = sidePanel.querySelector("#probation").value
					if(probationStatus === "true"){
						probationStatus = true
					} else if(probationStatus === "false"){
						probationStatus = false
					}

					let hasMetWithStaff = sidePanel.querySelector("#met").value
					if(hasMetWithStaff === "true"){
						hasMetWithStaff = true
					} else if(hasMetWithStaff === "false"){
						hasMetWithStaff = false
					}

					let mentorName = sidePanel.querySelector("#mentor").value
					let capstoneTitle = sidePanel.querySelector("#title").value
					let capstoneStructure = sidePanel.querySelector("#type")[sidePanel.querySelector("#type").selectedIndex].value
					let elective = sidePanel.querySelector("#elective")[sidePanel.querySelector("#elective").selectedIndex].value

					student.setIsOnProbation(probationStatus)
					student.setHasMetWithStaff(hasMetWithStaff)
					if(mentorName !== ""){
						student.addMentor(mentorName)
					}
					if(Array.from(document.querySelector(".capstone-group button").classList).includes("cancel-btn")){
						student.addCapstone(capstoneTitle, capstoneStructure)
					}
					if(Array.from(document.querySelector(".elective-group button").classList).includes("cancel-btn")){
						student.addElective(elective)
					}
					if(!document.querySelector("#first-name").disabled){
						student.setFirstName(firstName)
						student.setLastName(lastName)
						let match = Array.from(document.querySelectorAll(".participant-list tr")).filter(s => parseInt(s.id.slice(-1)) == student.getId())
						match[0].querySelector(".name").textContent = student.getFullName()
					}
					removeSidePanel()
				} else if(Array.from(e.target.classList).includes("btn-danger")){
					removeSidePanel()
					document.querySelector("#add-new-participant").disabled = false;
					Array.from(document.querySelector(".input-group.filter").querySelectorAll("select")).map(s => s.disabled = false)
				}
			})

			notesButton.addEventListener("click", (e) => {
				displayActivePanel(notesPanel)
				resetActivePanelButton(e)
				attendancePanel.style.display = "none"
				editAbsense.style.display = "none"
				editTardy.style.display = "none"
				viewPanel.style.display = "none"
				sidePanel.appendChild(notesPanel)
				notesPanel.appendChild(notesPreview)
				notesPreview.appendChild(addNoteButton)
				addNoteButton.style.display = "block"
				if(notesPanel.childElementCount>1){
					notesPanel.removeChild(noteDetailsContainer)
				}
				for(let i=student.getNotes().length-1; i>=0; i--){
					let noteContainer = renderNoteContainer()
					notesPreview.appendChild(noteContainer)
					noteContainer.querySelector(".note-title").textContent = student.getNotes()[i].getNoteTitle()
				}

				notesPanel.addEventListener("click", (e) => {
					if(Array.from(e.target.classList).includes(`${addNoteButton.classList[0]}`)){
						notesPanel.appendChild(noteDetailsContainer)
						addNoteButton.style.display = "none"
						notesPreview.innerHTML = ""
						notesPanel.removeChild(notesPreview)
						noteDetailsContainer.className = "note-details-container"
						sidePanel.querySelector("#note-details-title").value = ""
						sidePanel.querySelector("#note-details-content").value = ""
					}
					if(Array.from(e.target.classList).includes("bi-caret-right-fill")){
						e.target.parentElement.classList.add("edit-mode")
						let noteTitle = e.target.previousSibling.querySelector(".note-title").textContent
						let selectedNote = student.getNotes().filter(n=> n.getNoteTitle() == noteTitle)[0]
						notesPanel.appendChild(noteDetailsContainer)
						noteDetailsContainer.classList.add("edit-mode")
						addNoteButton.style.display = "none"
						notesPreview.innerHTML = ""
						notesPanel.removeChild(notesPreview)
						sidePanel.querySelector("#note-details-title").value = selectedNote.getNoteTitle()
						sidePanel.querySelector("#note-details-content").value = selectedNote.getNoteDescription()
						editingNote = selectedNote
					}
					if(Array.from(e.target.classList).includes("btn-success")){
						let noteTitle = sidePanel.querySelector("#note-details-title").value
						let noteContent = sidePanel.querySelector("#note-details-content").value
						if(!document.querySelector(".note-details-container.edit-mode")){
							student.addNote(noteTitle, noteContent)
							sidePanel.querySelector("#note-details-title").value = ""
							sidePanel.querySelector("#note-details-content").value = ""
						} else if(document.querySelector(".note-details-container.edit-mode")){
							editingNote.setNoteTitle(noteTitle)
							editingNote.setNoteDescription(noteContent)
						}
						notesPanel.removeChild(noteDetailsContainer)
						notesPanel.appendChild(notesPreview)
						notesPreview.prepend(addNoteButton)
						addNoteButton.style.display = "block"
						for(let i=student.getNotes().length-1; i>=0; i--){
							let noteContainer = renderNoteContainer()
							noteContainer.querySelector(".note-title").textContent = student.getNotes()[i].getNoteTitle()
							notesPreview.appendChild(noteContainer)
						}
					}
					if(Array.from(e.target.classList).includes("btn-danger")){
						notesPanel.removeChild(noteDetailsContainer)
						notesPanel.appendChild(notesPreview)
						notesPreview.appendChild(addNoteButton)
						addNoteButton.style.display = "block"
						Array.from(document.querySelectorAll(".note-container")).map(n => n.className = "note-container")
						for(let i=student.getNotes().length-1; i>=0; i--){
							let noteContainer = renderNoteContainer()
							noteContainer.querySelector(".note-title").textContent = student.getNotes()[i].getNoteTitle()
							notesPreview.appendChild(noteContainer)
						}
					}
				})
			})
			detailsPanelButton.addEventListener("click", (e) => {
				displayActivePanel(detailsPanel)
				resetActivePanelButton(e)
				notesPreview.innerHTML = ""
				notesPanel.innerHTML = ""
				attendancePanel.style.display = "none"
				editAbsense.style.display = "none"
				editTardy.style.display = "none"
				viewPanel.style.display = "none"
				sidePanel.removeChild(notesPanel)
				if(document.querySelector(".side-panel-container").childElementCount>3){
					if(noteDetailsContainer){
						document.querySelector(".side-panel-container").removeChild(noteDetailsContainer)
						notesPanel.removeChild(noteDetailsContainer)
					}
				}
			})
			attendancePanelButton.addEventListener("click", (e) => {
				displayActivePanel(attendancePanel)
				resetActivePanelButton(e)
				notesPreview.innerHTML = ""
				notesPanel.innerHTML = ""
				updateAbsenseView(student)
				updateTardyView(student)
				viewPanel.style.display = "block"
				if(student.getAbsenses().length){
					let tbody = document.querySelector(".absenses-view tbody")
					tbody.innerHTML = ""
					student.getAbsenses().map(absense =>{
						let reason;
						if(absense.getIsExcused()){
							reason = "Excused"
						} else if(!absense.getIsExcused()){
							reason = "Unexcused"
						}
						let row = renderAttendanceTableRow(absense.getDate(), reason)
						tbody.prepend(row)
						row.id = `absense-${absense.getID()}`
						// row.classList.add("absense-row")
					})
				}
				if(student.getTardies().length){
					let tbody = document.querySelector(".tardies-view tbody")
					tbody.innerHTML = ""
					student.getTardies().map(tardy =>{
						let reason;
						if(tardy.getIsExcused()){
							reason = "Excused"
						} else if(!tardy.getIsExcused()){
							reason = "Unexcused"
						}
						let row = renderAttendanceTableRow(tardy.getDate(), reason)
						tbody.prepend(row)
						row.id = `tardy-${tardy.getID()}`
						// row.classList.add("tardy-row")
					})
				}
				// Array.from(document.querySelectorAll('input[id="excused"]')).map(r => {r.checked = true});

				attendancePanel.addEventListener("click", (e) => {
					if(Array.from(e.target.classList).includes("add-absense-btn")){
						viewPanel.style.display = "none"
						editAbsense.style.display = "flex"
						document.querySelector(".edit-absense").querySelector(".edit-panel-title").textContent = 'New Absense'
					} else if(Array.from(e.target.classList).includes("add-tardy-btn")){
						document.querySelector(".edit-tardy").querySelector(".edit-panel-title").textContent = 'New Tardy'
						viewPanel.style.display = "none"
						editTardy.style.display = "flex"
					}
					else if(Array.from(e.target.classList).includes("cancel-attendance-btn")){
						resetEditAttendanceView()
					}else if(Array.from(e.target.classList).includes("save-attendance-btn")){

						// if(document.querySelector(".edit-panel-title").textContent.includes("Edit")){
						// 	let titleType = document.querySelector(".edit-panel-title").textContent.split(" ")[1]
						// 	document.querySelector(".edit-panel-title").textContent = `New ${titleType}`
						// 	document.querySelector(".editing").querySelectorAll("td")[0].textContent = selectedDate;
						// 	document.querySelector(".editing").querySelectorAll("td")[1].textContent = reason;
						// 	document.querySelector(".editing").classList.remove("editing")
						// } else{
							if(editAbsense.style.display === "flex"){
								let selectedDate = document.querySelector(".edit-absense").querySelector(".date-tool").value
								let reason = document.querySelector(".edit-absense").querySelector('input[name="reason"]:checked').previousElementSibling.textContent
								let isExcused;
								if(reason === "Excused"){
									isExcused = true;
								} else if(reason === "Unexcused"){
									isExcused = false;
								}
								if(document.querySelector(".edit-absense").querySelector(".edit-panel-title").textContent.includes("Edit")){
									// let titleType = document.querySelector(".edit-absense").querySelector(".edit-panel-title").textContent.split(" ")[1]
									// document.querySelector(".edit-absense").querySelector(".edit-panel-title").textContent = `New ${titleType}`
									document.querySelector(".editing").querySelectorAll("td")[0].textContent = selectedDate;
									document.querySelector(".editing").querySelectorAll("td")[1].textContent = reason;
									document.querySelector(".editing").classList.remove("editing")
								} else{
									let absense = student.addAbsense(selectedDate, isExcused)
									// console.log(absense)
									updateAbsenseView(student)
									let tbody = document.querySelector(".absenses-view tbody")
									let row = renderAttendanceTableRow(selectedDate, reason)
									tbody.prepend(row)
									row.id = `absense-${absense.getID()}`
									// row.classList.add("absense-row")
								}
							} else if(editTardy.style.display === "flex"){
								let selectedDate = document.querySelector(".edit-tardy").querySelector(".date-tool").value
								let reason = document.querySelector(".edit-tardy").querySelector('input[name="reason"]:checked').previousElementSibling.textContent
								let isExcused;
								if(reason === "Excused"){
									isExcused = true;
								} else if(reason === "Unexcused"){
									isExcused = false;
								}
								if(document.querySelector(".edit-tardy").querySelector(".edit-panel-title").textContent.includes("Edit")){
									// let titleType = document.querySelector(".edit-tardy").querySelector(".edit-panel-title").textContent.split(" ")[1]
									// document.querySelector(".edit-tardy").querySelector(".edit-panel-title").textContent = `New ${titleType}`
									document.querySelector(".editing").querySelectorAll("td")[0].textContent = selectedDate;
									document.querySelector(".editing").querySelectorAll("td")[1].textContent = reason;
									document.querySelector(".editing").classList.remove("editing")
								} else{
									let tardy = student.addTardy(selectedDate, isExcused)
									// console.log(tardy)
									updateTardyView(student)
									let tbody = document.querySelector(".tardies-view tbody")
									let row = renderAttendanceTableRow(selectedDate, reason)
									tbody.prepend(row)
									row.id = `tardy-${tardy.getID()}`
									// row.classList.add("tardy-row")
								}
							}
						// }
						resetEditAttendanceView()
					}else if(Array.from(e.target.classList).includes("attendance-row")|| Array.from(e.target.parentElement.classList).includes("attendance-row")){
						let editingType = e.target.parentElement.id.split("-")[0]
						e.target.parentElement.classList.add("editing")
						viewPanel.style.display = "none"
						if(editingType === "absense"){
							editAbsense.style.display = "flex"
							let editingDate = e.target.parentElement.querySelectorAll("td")[0].textContent
							let editingReason = e.target.parentElement.querySelectorAll("td")[1].textContent.toLowerCase()
							editAbsense.querySelector(".date-tool").value = editingDate
							document.querySelector(".edit-absense").querySelector(".edit-panel-title").textContent = "Edit Absence"
							document.querySelector(".edit-absense").querySelector(".date-tool").value = editingDate;
							document.querySelector(".edit-absense").querySelector(`input[id="${editingReason}"`).checked = true
						}
						if(editingType === "tardy"){
							editTardy.style.display = "flex"
							let editingDate = e.target.parentElement.querySelectorAll("td")[0].textContent
							let editingReason = e.target.parentElement.querySelectorAll("td")[1].textContent.toLowerCase()
							editTardy.querySelector(".date-tool").value = editingDate
							document.querySelector(".edit-tardy").querySelector(".edit-panel-title").textContent = "Edit Tardy"
							document.querySelector(".edit-tardy").querySelector(".date-tool").value = editingDate;
							document.querySelector(".edit-tardy").querySelector(`input[id="${editingReason}"`).checked = true
						}
						// e.target.parentElement.classList.remove("editing")
					}
				})


			})
		}
	})

}
