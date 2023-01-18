// import { renderAddTardyPopUp, deleteAddTardyPopUp } from "../../view/tardy-popup";
// import { findCurrentStudent } from "../../view/view";
// import { toggleAll } from "../toggle";

// export function addStudentTardy(student, students) {
// 	let tardyButton = document.querySelector(`.tardy-btn-${student.id}`);
// 	tardyButton.addEventListener("click", (e) => {
// 		renderAddTardyPopUp()
// 		let currentStudent = findCurrentStudent(e, students)

// 		let tardyPopUp = document.querySelector(".add-tardy-pop-up");
// 		let exitButton = tardyPopUp.querySelector(".exit-pop-up-button");
// 		exitButton.addEventListener("click", deleteAddTardyPopUp)

// 		let submitButton = document.querySelector(".add-tardy-button");
// 		submitButton.addEventListener("click", (e) => {
// 			currentStudent.addTardy(document.querySelector("#new-tardy").value)
// 			document.querySelector(`#student${currentStudent.id}`).querySelector(".tardies").textContent = currentStudent.getTardies()
// 			deleteAddTardyPopUp()
// 			toggleAll(students)
// 		})
// 	})
// }
