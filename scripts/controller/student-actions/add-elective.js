// import { renderAddElectivePopUp, deleteAddElectivePopUp } from "../../view/elective-popup";
// import { findCurrentStudent } from "../../view/view";
// import { toggleAll } from "../toggle";


// function handleElectiveButtonClick(currentStudent){
// 	renderAddElectivePopUp()

// 	if (currentStudent.getElective()) {
// 		document.querySelector("#new-elective").value = currentStudent.getElective();
// 		document.querySelector("#new-elective").placeholder = "";
// 	} else {
// 		document.querySelector("#new-elective").value = "Not assigned";
// 	}
// };
// export function addStudentElective(student, students) {
// 	let electiveButton = document.querySelector(`.elective-btn-${student.id}`);
// 	electiveButton.addEventListener("click", (e) => {
// 		let currentStudent = findCurrentStudent(e, students)
// 		handleElectiveButtonClick(currentStudent)

// 		let electivePopUp = document.querySelector(".add-elective-pop-up");
// 		let exitButton = electivePopUp.querySelector(".exit-pop-up-button");
// 		exitButton.addEventListener("click", deleteAddElectivePopUp)

// 		let submitButton = document.querySelector(".add-elective-button");
// 		submitButton.addEventListener("click", (e) => {
// 			currentStudent.addElective(document.querySelector("#new-elective").value)
// 			deleteAddElectivePopUp()
// 			toggleAll(students)
// 		})
// 	})
// }
