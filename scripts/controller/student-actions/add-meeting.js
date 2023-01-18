// import { renderAddMeetingPopUp, deleteAddMeetingPopUp } from "../../view/meeting-popup";
// import { findCurrentStudent } from "../../view/view";
// import { toggleAll } from "../toggle";


// function handleMeetingButtonClick(currentStudent){
// 	renderAddMeetingPopUp()
// 	document.querySelector("#new-meeting").value = currentStudent.getHasMetWithStaff();
// };
// export function addStudentMeeting(student, students) {
// 	let meetingButton = document.querySelector(`.meeting-btn-${student.id}`);
// 	meetingButton.addEventListener("click", (e) => {
// 		let currentStudent = findCurrentStudent(e, students)
// 		handleMeetingButtonClick(currentStudent)

// 		let meetingPopUp = document.querySelector(".add-meeting-pop-up");
// 		let exitButton = meetingPopUp.querySelector(".exit-pop-up-button");
// 		exitButton.addEventListener("click", deleteAddMeetingPopUp)

// 		let submitButton = document.querySelector(".add-meeting-button");
// 		submitButton.addEventListener("click", (e) => {
// 			let selected = document.querySelector("#new-meeting").value
// 			let hasMetWithStaff;
// 			if(selected === "true"){
// 				hasMetWithStaff = true
// 			} else if(selected === "false"){
// 				hasMetWithStaff = false
// 			}
// 			currentStudent.setHasMetWithStaff(hasMetWithStaff)
// 			deleteAddMeetingPopUp()
// 			toggleAll(students)
// 		})
// 	})
// }
