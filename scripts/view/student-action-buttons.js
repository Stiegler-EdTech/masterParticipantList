// export function renderStudentMentorButton(student) {
// 	let button = document.createElement("button");
// 	button.classList.add("btn");
// 	button.classList.add("mentor-btn");
// 	button.classList.add(`mentor-btn-${student.id}`)
// 	button.innerHTML = '<i class="bi bi-person-plus-fill"></i>';
// 	button.title = "mentor"
//     return button;
// }

// export function renderStudentCapstoneButton(student){
// 	let button = document.createElement("button")
// 	button.classList.add("btn")
// 	button.classList.add("capstone-btn")
// 	button.classList.add(`capstone-btn-${student.id}`)
// 	button.innerHTML = '<i class="bi bi-mortarboard-fill"></i>'
// 	button.title = "capstone"
// 	return button
// }

// export function renderStudentElectiveButton(student){
// 	let button = document.createElement("button")
// 	button.classList.add("btn")
// 	button.classList.add("elective-btn")
// 	button.classList.add(`elective-btn-${student.id}`)
// 	button.innerHTML = '<i class="bi bi-bookmark-star-fill"></i>'
// 	button.title = "elective"
// 	return button
// }

export function renderStudentTardyButton(student){
	let button = document.createElement("button")
	button.classList.add("btn")
	button.classList.add("tardy-btn")
	button.classList.add(`tardy-btn-${student.id}`)
	button.innerHTML = '<i class="bi bi-bell-fill"></i>'
	button.title = "tardy"
	return button
}
export function renderStudentAbsenseButton(student){
	let button = document.createElement("button")
	button.classList.add("btn")
	button.classList.add("absense-btn")
	button.classList.add(`absense-btn-${student.id}`)
	button.innerHTML = '<i class="bi bi-calendar-x"></i>'
	button.title = "absense"
	return button
}
// export function renderStudentNoteButton(student){
// 	let button = document.createElement("button")
// 	button.classList.add("btn")
// 	button.classList.add("note-btn")
// 	button.classList.add(`note-btn-${student.id}`)
// 	button.innerHTML = '<i class="bi bi-journal-text"></i>'
// 	button.title = "note"
// 	return button
// }
// export function renderStudentMeetingButton(student){
// 	let button = document.createElement("button")
// 	button.classList.add("btn")
// 	button.classList.add("meeting-btn")
// 	button.classList.add(`meeting-btn-${student.id}`)
// 	button.innerHTML = '<i class="bi bi-telephone-fill"></i>'
// 	button.title = "meeting"
// 	return button;
// }
// export function renderStudentProbationButton(student){
// 	let button = document.createElement("button")
// 	button.classList.add("btn")
// 	button.classList.add("probation-btn")
// 	button.classList.add(`probation-btn-${student.id}`)
// 	button.innerHTML = '<i class="bi bi-exclamation-octagon-fill"></i>'
// 	button.title = "probation"
// 	return button;
// }
