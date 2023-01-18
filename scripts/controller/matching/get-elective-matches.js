export function getElectiveMatches(matches, value){
	if(value === "js"){
		matches = matches.filter(s => s.getElective() === "javascript")
	} else if(value === "da"){
		matches = matches.filter(s => s.getElective() === "analytics")
	} else if(value === "cs"){
		matches = matches.filter(s => s.getElective() === "cyber")
	} else if(value === "pm"){
		matches = matches.filter(s => s.getElective() === "manager")
	}
	return matches;
}
