export function getNotesMatches(matches, value){
	return matches.filter(s => Boolean(s.getNotes().length) === value)
}

