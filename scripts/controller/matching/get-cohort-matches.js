export function getCohortMatches(matches, value){
	if(value === "c5"){
		matches = matches.filter(s => s.getCohort() === "c5")
	} else if(value === "c4"){
		matches = matches.filter(s => s.getCohort() === "c4")
	}
	return matches;
}
