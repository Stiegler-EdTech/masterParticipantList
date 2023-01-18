export function getAbsenseMatches(matches, value){
	if(value === 0){
		matches = matches.filter(s => s.getAbsenses() === 0)
	} else if(value>0){
		for(let i=1; i<=10; i++){
			if(value === i){
				matches = matches.filter(s => s.getAbsenses() >= i)
			}
		}
	}
	return matches
}
