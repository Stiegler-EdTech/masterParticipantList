export class Note {
	constructor(title, description, student) {
		this.title = title;
		this.description = description;
		this.student = student;
	}
	getNoteTitle(){
		return this.title
	}
	setNoteTitle(title){
		this.title = title
	}
	getNoteDescription(){
		return this.description
	}
	setNoteDescription(description){
		this.description = description
	}
}
