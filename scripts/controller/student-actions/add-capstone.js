// import { renderAddCapstonePopUp, deleteAddCapstonePopUp } from "../../view/capstone-popup";
// import { findCurrentStudent } from "../../view/view";
// import { toggleAll } from "../toggle";


// function handleCapstoneButtonClick(currentStudent){
// 	renderAddCapstonePopUp()
// 	if (currentStudent.getCapstone()) {
// 		document.querySelector("#new-capstone-name").value = currentStudent.getCapstone().getTitle();
// 		document.querySelector("#new-capstone-name").placeholder = "";
// 		document.querySelector("#new-structure").value = currentStudent.getCapstone().getIsGroup()
// 	} else {
// 		document.querySelector("#new-capstone-name").placeholder = "Not assigned";
// 		document.querySelector("#new-structure").value = "Not Assigned"
// 	}
// };

// export function addStudentCapstone(student, students) {
// 	let capstoneButton = document.querySelector(`.capstone-btn-${student.id}`);
// 	capstoneButton.addEventListener("click", (e) => {
// 		let currentStudent = findCurrentStudent(e, students)
// 		handleCapstoneButtonClick(currentStudent)

// 		let capstonePopUp = document.querySelector(".add-capstone-pop-up");
// 		let exitButton = capstonePopUp.querySelector(".exit-pop-up-button");
// 		exitButton.addEventListener("click", deleteAddCapstonePopUp)

// 		let submitButton = document.querySelector(".add-capstone-button");
// 		submitButton.addEventListener("click", (e) => {
// 			let title =document.querySelector("#new-capstone-name").value
// 			let isGroup = document.querySelector("#new-structure").value
// 			currentStudent.addCapstone(title, isGroup)
// 			deleteAddCapstonePopUp()
// 			toggleAll(students)
// 		});
// 	});
// }
