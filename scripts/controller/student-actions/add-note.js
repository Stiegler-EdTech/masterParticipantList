// import { renderAddNotePopUp, deleteAddNotePopUp } from "../../view/note-popup";
// import { findCurrentStudent } from "../../view/view";
// import { toggleAll } from "../toggle";


// export function addStudentNote(student, students) {
// 	let noteButton = document.querySelector(`.note-btn-${student.id}`);
// 	noteButton.addEventListener("click", (e) => {
// 		renderAddNotePopUp()
// 		let currentStudent = findCurrentStudent(e, students)

// 		let notePopUp = document.querySelector(".add-note-pop-up");
// 		let exitButton = notePopUp.querySelector(".exit-pop-up-button");
// 		exitButton.addEventListener("click", deleteAddNotePopUp)

// 		let submitButton = document.querySelector(".add-note-button");
// 		submitButton.addEventListener("click", (e) => {
// 			let title = document.querySelector("#new-note-name").value
// 			let description = document.querySelector("#new-note").value
// 			currentStudent.addNote(title, description)
// 			// document.querySelector(`#student${currentStudent.id}`).querySelector(".notes").innerHTML = currentStudent.getNotes()
// 			deleteAddNotePopUp()
// 			toggleAll(students)
// 		})
// 	})
// }
