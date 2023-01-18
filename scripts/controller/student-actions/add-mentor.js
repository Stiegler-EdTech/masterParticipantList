// import { renderAddMentorPopUp, deleteAddMentorPopUp } from "../../view/mentor-popup";
// import { findCurrentStudent } from "../../view/view";
// import { toggleAll } from "../toggle";


// function handleMentorButtonClick(currentStudent){
// 	let mentorName = currentStudent.getMentor();
// 	renderAddMentorPopUp()
// 	if (mentorName) {
// 		document.querySelector("#new-mentor-name").value = mentorName;
// 		document.querySelector("#new-mentor-name").placeholder = "";
// 	} else {
// 		document.querySelector("#new-mentor-name").placeholder = "Not assigned";
// 	}
// };

// export function addStudentMentor(student, students) {
// 	let mentorButton = document.querySelector(`.mentor-btn-${student.id}`)
// 	mentorButton.addEventListener("click", (e) => {
// 		let currentStudent = findCurrentStudent(e, students)
// 		handleMentorButtonClick(currentStudent)

// 		let mentorPopUp = document.querySelector(".add-mentor-pop-up");
// 		let exitButton = mentorPopUp.querySelector(".exit-pop-up-button");
// 		exitButton.addEventListener("click", deleteAddMentorPopUp);

// 		let submitButton = document.querySelector(".add-mentor-button");
// 		submitButton.addEventListener("click", () => {
// 			currentStudent.addMentor(document.querySelector("#new-mentor-name").value);
// 			deleteAddMentorPopUp();
// 			toggleAll(students)
// 		}, { once: true })
// 	})
// 	return mentorButton;
// }
