import { capstoneProjects } from '../view/view.js';
export class Capstone {
	constructor(title, isGroup, student) {
		this.title = title;
		this.isGroup = isGroup;
		this.student = student;
		capstoneProjects.push(this);
		this.id = capstoneProjects.length;
	}
	setTitle(title) {
		this.title = title;
	}
	setIsGroup(isGroup) {
		this.isGroup = isGroup;
	}
	getTitle(){
		return this.title
	}
	getIsGroup(){
		return this.isGroup;
	}
}
