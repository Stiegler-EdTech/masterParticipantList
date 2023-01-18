export function getTardyMatches(matches, value){
	if(value === 0){
		matches = matches.filter(s => s.getTardies() === 0)
	} else if(value>0){
		for(let i=1; i<=10; i++){
			if(value === i){
				matches = matches.filter(s => s.getTardies() >= i)
			}
		}
	}
	return matches
}
