export function getMentorMatches(matches, value){
	return matches.filter(s => Boolean(s.getMentor()) === value)
}
