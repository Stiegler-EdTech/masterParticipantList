export function showNewParticipantPopUp() {
	document.querySelector(".new-participant-pop-up").style.display = "block";
}

export function hideNewParticipantPopUp() {
	document.querySelector(".new-participant-pop-up").style.display = "none";
	document.querySelector("#new-first-name").value = "";
	document.querySelector("#new-last-name").value = "";
	document.querySelector("#new-cohort").selectedIndex = 0;
	document.querySelector("#new-city").selectedIndex = 0;
}
