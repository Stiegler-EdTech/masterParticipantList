import { getVisibleDOMStudents } from "../view/view"
import { getAllMatches } from "./matching/get-all-matches"
import { getAllFilters } from "../view/filters"


export function toggleAll(students){
	let visibleDOMStudents = getVisibleDOMStudents()
	let filters = getAllFilters()
	let [probationCheckbox, electiveCheckbox, notesCheckbox, mentorCheckbox, metCheckbox, absenseOption, tardyOption, cityOption, cohortOption, electiveOption] = filters
	let checkBoxes = [probationCheckbox, electiveCheckbox, notesCheckbox, mentorCheckbox, metCheckbox]
	let options = [absenseOption, tardyOption, cityOption, cohortOption, electiveOption]
	let whatIsChecked = checkBoxes.filter(c => c.checked ===true).map(i => i.id);
	let whatIsSelected = options.filter(o => o[o.selectedIndex].value != -1).map(i => i.id)
	let selectedFilters = [...whatIsChecked, ...whatIsSelected]
	let allDOMStudents = Array.from(document.querySelector("tbody").childNodes)
	let comboFiltered = students;

	comboFiltered = getAllMatches(selectedFilters, comboFiltered)

	allDOMStudents.map(s => {
		s.style.display = "table-row"
	})

	visibleDOMStudents = getVisibleDOMStudents()
	comboFiltered = comboFiltered.map(s => s.id)

	visibleDOMStudents.map(s => {
		let id = parseInt(s.id.slice(-1))
		if(!comboFiltered.includes(id)){
			s.style.display = "none"
		}
	})
	comboFiltered = []
}
