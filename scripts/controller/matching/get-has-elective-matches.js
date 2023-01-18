export function getHasElectiveMatches(matches, value){
	return matches.filter(s => Boolean(s.getElective()) === value)
}
