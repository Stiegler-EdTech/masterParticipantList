import { getAllFilterValues } from '../../view/filters.js'
import { getProbationMatches } from './get-probation-matches.js'
import { getHasElectiveMatches } from './get-has-elective-matches.js'
import { getNotesMatches } from './get-notes-matches.js'
import { getMentorMatches } from './get-mentor-matches.js'
import { getMetMatches } from './get-met-matches.js'
import { getAbsenseMatches } from './get-absense-matches.js'
import { getTardyMatches } from './get-tardy-matches.js'
import { getCityMatches } from './get-city-matches.js'
import { getCohortMatches } from './get-cohort-matches.js'
import { getElectiveMatches } from './get-elective-matches.js'


export function getAllMatches(filters, matches){
	let filterValues = getAllFilterValues()
	let [probationCheckboxValue, electiveCheckboxValue, notesCheckboxValue, mentorCheckboxValue, metCheckboxValue, absenseValue, tardyValue, cityValue, cohortValue, electiveValue] = filterValues
	filters.map(c => {
		switch(c){
			case "probation":
				matches = getProbationMatches(matches, probationCheckboxValue)
				break;
			case "elective":
				matches = getHasElectiveMatches(matches, electiveCheckboxValue)
				break;
			case "notes":
				matches = getNotesMatches(matches, notesCheckboxValue)
				break;
			case "mentor":
				matches = getMentorMatches(matches, mentorCheckboxValue)
				break;
			case "met":
				matches = getMetMatches(matches, metCheckboxValue)
				break;
			case "absenses":
				matches = getAbsenseMatches(matches, absenseValue)
				break;
			case "tardies":
				matches = getTardyMatches(matches, tardyValue)
				break;
			case "cities":
				matches = getCityMatches(matches, cityValue)
				break;
			case "cohorts":
				matches = getCohortMatches(matches, cohortValue)
				break;
			case "electives":
				matches = getElectiveMatches(matches, electiveValue)
				break;
			default:
				break;
		}
	})
	return matches
}
