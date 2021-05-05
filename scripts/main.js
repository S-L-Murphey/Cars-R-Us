import { carsRUs } from "./carsRUs.js"

const mainContainer = document.querySelector("#container")

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderHTML()
})

const renderHTML = () => {
    mainContainer.innerHTML = carsRUs()
}


renderHTML()