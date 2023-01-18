// import { renderAddProbationPopUp, deleteAddProbationPopUp } from "../../view/probation-popup";
// import { findCurrentStudent } from "../../view/view";
// import { toggleAll } from "../toggle";



// function handleProbationButtonClick(currentStudent){
// 	renderAddProbationPopUp()
// 	document.querySelector("#new-probation").value = currentStudent.getIsOnProbation();
// };
// export function addStudentProbation(student, students) {
// 	let probationButton = document.querySelector(`.probation-btn-${student.id}`);
// 	probationButton.addEventListener("click", (e) => {
// 		let currentStudent = findCurrentStudent(e, students)
// 		handleProbationButtonClick(currentStudent)

// 		let probationPopUp = document.querySelector(".add-probation-pop-up");
// 		let exitButton = probationPopUp.querySelector(".exit-pop-up-button");
// 		exitButton.addEventListener("click", deleteAddProbationPopUp)

// 		let submitButton = document.querySelector(".add-probation-button");
// 		submitButton.addEventListener("click", (e) => {
// 			let selected = document.querySelector("#new-probation").value
// 			let isOnProbation;
// 			if(selected === "true"){
// 				isOnProbation = true
// 			} else if(selected === "false"){
// 				isOnProbation = false
// 			}
// 			currentStudent.setIsOnProbation(isOnProbation)
// 			deleteAddProbationPopUp()
// 			toggleAll(students)
// 		})
// 	})
// }
