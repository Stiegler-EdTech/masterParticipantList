export function getCityMatches(matches, value){
	if(value === "charlotte"){
		matches = matches.filter(s => s.getCity() === "charlotte")
	} else if(value === "raleigh"){
		matches = matches.filter(s => s.getCity() === "raleigh")
	} else if(value === "wilmington"){
		matches = matches.filter(s => s.getCity() === "wilmington")
	} else if(value === "detroit"){
		matches = matches.filter(s => s.getCity() === "detroit")
	} else if(value === "minneapolis"){
		matches = matches.filter(s => s.getCity() === "minneapolis")
	} else if(value === "dallas"){
		matches = matches.filter(s => s.getCity() === "dallas")
	} else if(value === "atlanta"){
		matches = matches.filter(s => s.getCity() === "atlanta")
	}
	return matches
}
