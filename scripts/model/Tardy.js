export class Tardy {
	constructor(date, isExcused, student) {
		this.date = date
		this.isExcused = isExcused;
		this.student = student;
		this.id = student.getTardies().length-1;
	}
}
