export function getMetMatches(matches, value){
	return matches.filter(s => Boolean(s.getHasMetWithStaff()) === value)
}
