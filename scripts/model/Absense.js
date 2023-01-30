export class Absense {
	constructor(date, isExcused, student) {
		this.date = date
		this.isExcused = isExcused;
		this.student = student;
		this.id = student.getAbsenses().length;
	}

}
