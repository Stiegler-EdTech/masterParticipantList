import { getAllFilters } from '../view/filters.js';

function resetCheckboxes(){
	let filters = getAllFilters()
	let [probationCheckbox, electiveCheckbox, notesCheckbox, mentorCheckbox, metCheckbox, absenseOption, tardyOption, cityOption, cohortOption, electiveOption] = filters
	probationCheckbox? probationCheckbox.checked = false : probationCheckbox.checked = true;
	electiveCheckbox? electiveCheckbox.checked = false : electiveCheckbox.checked = true;
	notesCheckbox? notesCheckbox.checked = false : notesCheckbox.checked = true;
	mentorCheckbox? mentorCheckbox.checked = false : mentorCheckbox.checked = true;
	metCheckbox? metCheckbox.checked = false : metCheckbox.checked = true;
}
var show = true;
export function showCheckboxes() {
	var checkboxes = document.getElementById("checkBoxes");
	if (show) {
		checkboxes.style.display = "flex";
		show = false;
	} else {
		checkboxes.style.display = "none";
		show = true;
		resetCheckboxes()
	}
}
