export function getAllFilters(){
	let probationCheckbox = document.querySelector("#probation");
	let electiveCheckbox = document.querySelector("#elective");
	let notesCheckbox = document.querySelector("#notes");
	let mentorCheckbox = document.querySelector("#mentor");
	let metCheckbox = document.querySelector("#met");
	let absenseOption = document.querySelector("#absenses");
	let tardyOption = document.querySelector("#tardies");
	let cityOption = document.querySelector("#cities");
	let cohortOption = document.querySelector("#cohorts");
	let electiveOption = document.querySelector("#electives");
	return [probationCheckbox, electiveCheckbox, notesCheckbox, mentorCheckbox, metCheckbox, absenseOption, tardyOption, cityOption, cohortOption, electiveOption]
}

export function getAllFilterValues(){
	let filters = getAllFilters()
	let [probationCheckbox, electiveCheckbox, notesCheckbox, mentorCheckbox, metCheckbox, absenseOption, tardyOption, cityOption, cohortOption, electiveOption] = filters
	let probationCheckboxValue = probationCheckbox.checked;
	let electiveCheckboxValue = electiveCheckbox.checked;
	let notesCheckboxValue = notesCheckbox.checked;
	let mentorCheckboxValue = mentorCheckbox.checked;
	let metCheckboxValue = metCheckbox.checked;
	let absenseValue = parseInt(absenseOption[absenseOption.selectedIndex].value)
	let tardyValue = parseInt(tardyOption[tardyOption.selectedIndex].value)
	let cityValue = cityOption[cityOption.selectedIndex].value
	let cohortValue = cohortOption[cohortOption.selectedIndex].value
	let electiveValue = electiveOption[electiveOption.selectedIndex].value
	return [probationCheckboxValue, electiveCheckboxValue, notesCheckboxValue, mentorCheckboxValue, metCheckboxValue, absenseValue, tardyValue, cityValue, cohortValue, electiveValue]
}
