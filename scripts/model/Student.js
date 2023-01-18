import { students, tardies, absenses } from '../view/view.js'
import { Capstone } from './Capstone.js'
import { Tardy } from './Tardy.js'
import { Absense } from './Absense.js'
import { Note } from './Note.js'

export class Student {
	constructor(userName, firstName, lastName, absenses, tardies, capstoneProject, notes, isOnProbation, hasMetWithStaff) {
		this.userName = userName;
		this.firstName = firstName;
		this.lastName = lastName;
		this.absenses = [];
		this.tardies = [];
		this.capstoneProject = capstoneProject;
		students.push(this);
		this.id = students.length - 1;
		this.notes = [];
		this.isOnProbation = false;
		this.hasMetWithStaff = false;
	}
	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
	setFirstName(name){
		this.firstName = name
	}
	getFirstName(){
		return this.firstName
	}
	setLastName(name){
		this.lastName = name
	}
	getLastName(){
		return this.lastName
	}
	getUserName(){
		return this.userName
	}
	getId(){
		return this.id
	}
	addAbsense(date, reason) {
		let newAbsense = new Absense(date, reason, this);
		this.absenses.push(newAbsense);
		newAbsense.id = this.absenses.length;
		absenses.push(newAbsense);
		return this.absenses;
	}
	getAbsenses() {
		return this.absenses;
	}
	addTardy(date, reason) {
		let newTardy = new Tardy(date, reason, this);
		this.tardies.push(newTardy);
		newTardy.id = this.tardies.length;
		tardies.push(newTardy);
		return this.tardies;
	}
	getTardies() {
		return this.tardies;
	}
	addCapstone(title, isGroup) {
		this.capstoneProject = new Capstone(title, isGroup, this);
	}
	changeCapstoneTitle(title) {
		this.capstoneProject.title = title;
	}
	changeCapstoneGroup(isGroup) {
		this.capstoneProject.isGroup = isGroup;
	}
	getCapstone() {
		return this.capstoneProject;
	}
	addNote(title, description) {
		let newNote = new Note(title, description, this);
		this.notes.push(newNote);
	}
	getNotes() {
		return this.notes;
	}
	addMentor(name) {
		this.mentor = name;
	}
	getMentor() {
		return this.mentor;
	}
	addElective(elective) {
		this.elective = elective;
	}
	getElective() {
		return this.elective;
	}
	addCity(city) {
		this.city = city;
	}
	getCity() {
		return this.city;
	}
	addCohort(cohort) {
		this.cohort = cohort;
	}
	getCohort() {
		return this.cohort;
	}
	setIsOnProbation(value){
		this.isOnProbation = value
	}
	getIsOnProbation(){
		return this.isOnProbation
	}
	setHasMetWithStaff(value){
		this.hasMetWithStaff = value
	}
	getHasMetWithStaff(){
		return this.hasMetWithStaff
	}
}
