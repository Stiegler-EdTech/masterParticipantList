export class Tardy {
	constructor(date, isExcused, student) {
		this.date = date
		this.isExcused = isExcused;
		this.student = student;
		this.id = student.getTardies().length;
	}
	getDate(){
		return this.date;
	}
	setDate(date){
		this.date = date
	}
	getIsExcused(){
		return this.isExcused
	}
	setIsExcused(isExcused){
		this.isExcused = this.isExcused
	}
	getID(){
		return this.id
	}
}
