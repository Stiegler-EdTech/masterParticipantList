function renderCityGroup(){
    let cityGroup = document.createElement("div")
    cityGroup.classList.add("city-group")
    cityGroup.classList.add("input-group")
    let cityLabel = document.createElement("label")
    cityLabel.htmlFor = "city-info"
    cityLabel.classList.add("input-group-text")
    cityLabel.textContent = "City"
    let cityInput = document.createElement("input")
    cityInput.id = "city-info"
    cityInput.classList.add("form-control")
    cityInput.classList.add("city-info-input")
    cityInput.type = "text"
    cityInput.disabled = true;
    cityGroup.appendChild(cityLabel)
    cityGroup.appendChild(cityInput)
    return cityGroup
}
function renderCohortGroup(){
    let cohortGroup = document.createElement("div")
    cohortGroup.classList.add("cohort-group")
    cohortGroup.classList.add("input-group")
    let cohortLabel = document.createElement("label")
    cohortLabel.htmlFor = "cohort-info"
    cohortLabel.classList.add("input-group-text")
    cohortLabel.textContent = "Cohort"
    let cohortInput = document.createElement("input")
    cohortInput.id = "cohort-info"
    cohortInput.classList.add("form-control")
    cohortInput.classList.add("cohort-info-input")
    cohortInput.type = "text"
    cohortInput.disabled = true;
    cohortGroup.appendChild(cohortLabel)
    cohortGroup.appendChild(cohortInput)
    return cohortGroup
}
export function renderCityAndCohortGroup(){
    let cityAndCohortGroup = document.createElement("div")
    cityAndCohortGroup.classList.add("city-and-cohort-group")
    let cityGroup = renderCityGroup()
    cityAndCohortGroup.appendChild(cityGroup)
    let cohortIdGroup = renderCohortGroup()
    cityAndCohortGroup.appendChild(cohortIdGroup)
    return cityAndCohortGroup
}
