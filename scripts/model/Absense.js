export class Absense {
	constructor(date, reason, student) {
		this.date = date
		this.reason = reason;
		this.student = student.userName;
		this.id = student.getAbsenses();
	}
}
