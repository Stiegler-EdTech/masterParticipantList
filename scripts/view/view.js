// Imports of the classes and functions
import { Student } from '../model/Student.js';
import { renderNewStudent } from './student-controller.js';
import { getAllFilters } from './filters.js';
import { showCheckboxes } from '../controller/checkboxes.js';
import { toggleAll } from '../controller/toggle.js';
import {showNewParticipantPopUp, hideNewParticipantPopUp} from './new-participant-popup.js'
import { closeSidePanel } from '../controller/side-panel/exit-button.js';



export function findCurrentStudent(e, students){
	return students[parseInt(e.target.closest("tr").children[0].textContent)]
}


export function isUserNameUnique(user, students) {
	let userNames = [];
	let answer;
	if (students.length != 0) {
		students.forEach((student) => {
			userNames.push(student.userName)
			if (userNames.includes(user)) {
				answer = false;
			} else {
				answer = true;
			}
		});
	} else {
		answer = true
	}
	return answer;
}
let userNameN = 1;


export function takeNewParticipantInput(students){
	let newFirstName = document.querySelector("#new-first-name").value;
	let newLastName = document.querySelector("#new-last-name").value;
	let newCohort = document.querySelector("#new-cohort").value;
	let newCity = document.querySelector("#new-city").value;
	let userName = `${newFirstName.toLowerCase()}${newLastName.toLowerCase()}`;
	if (!isUserNameUnique(userName, students)) {
		userNameN++;
		userName += userNameN;
	}
	let newStudent = new Student(userName, newFirstName, newLastName);
	newStudent.addCity(newCity);
	newStudent.addCohort(newCohort);
	return newStudent;
}


export function getVisibleDOMStudents(){
	return Array.from(document.querySelector("tbody").childNodes).filter(s => s.style.display === "table-row" || s.style.display === "")
}

export let students = [];
export let capstoneProjects = [];
export let absenses = [];
export let tardies = [];
let newParticipantButton = document.querySelector("#add-new-participant");
let exitButton = document.querySelector(".exit-pop-up-button");
let submitButton = document.querySelector(".new-participant-button");
let list = document.querySelector(".participant-list tbody");
let additionalFilters = document.querySelector(".selectBox")
const starpiURL = `https://strapi-dev.stiegleredtech.org` || `http://strapi-dev.stiegleredtech.org`


let filters = getAllFilters()
let [probationCheckbox, electiveCheckbox, notesCheckbox, mentorCheckbox, metCheckbox, absenseOption, tardyOption, cityOption, cohortOption, electiveOption] = filters

const populateStudentArray = (studentArray) => {

	fetch(`${starpiURL}/api/students`)
	.then((data) => data.json())
	.then(response => {
		response.data.forEach(student => {
			let studentObj = student.attributes
			let userName = `${studentObj.firstname.toLowerCase()}${studentObj.lastname.toLowerCase()}`;
			let newStudent = new Student(userName, studentObj.firstname, studentObj.lastname)
			newStudent.addCity(studentObj.city);
			newStudent.addCohort(studentObj.cohort);
			// studentArray.push(newStudent);
		})
	});
}

const renderAllStudents = (studentArray) => {
	studentArray.forEach((student) => renderNewStudent(student));
}

export function runApp(){
	newParticipantButton.addEventListener("click", showNewParticipantPopUp);
	exitButton.addEventListener("click", hideNewParticipantPopUp);
	additionalFilters.addEventListener("click", showCheckboxes)

	submitButton.addEventListener("click", (e) => {
		let newStudent = takeNewParticipantInput(students)
		renderNewStudent(newStudent);
		hideNewParticipantPopUp();
		toggleAll(students)
	});

	absenseOption.addEventListener("change", () => {toggleAll(students)});
	tardyOption.addEventListener("change", () => {toggleAll(students)});
	cityOption.addEventListener("change", () => {toggleAll(students)});
	cohortOption.addEventListener("change", () => {toggleAll(students)});
	electiveOption.addEventListener("change", () => {toggleAll(students)});
	probationCheckbox.parentElement.addEventListener("change", () => {toggleAll(students)})
	electiveCheckbox.parentElement.addEventListener("change", () => {toggleAll(students)})
	notesCheckbox.parentElement.addEventListener("change", () => {toggleAll(students)})
	mentorCheckbox.parentElement.addEventListener("change", () => {toggleAll(students)})
	metCheckbox.parentElement.addEventListener("change", () => {toggleAll(students)})
	additionalFilters.addEventListener("click", () => {toggleAll(students)})


	populateStudentArray(students);
	setTimeout(() => {
		renderAllStudents(students)
		console.log(students);
	}, 1500);
	// renderAllStudents(students);

}





