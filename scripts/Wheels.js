import {getWheels, setWheel} from "./database.js"

const wheels = getWheels()

document.addEventListener("change", (event) => {
    const changeEvent = event.target
    if (changeEvent.name === "wheel") {
        const wheelId = changeEvent.value.split("--")
        setWheel(parseInt(wheelId[1]))
    }
    //window.alert(`The user has selected wheel #${changeEvent.value}`)
})


export const userWheel = () => {
    let html = "<ul>"

    const wheelSelection = wheels.map((wheel) => {
        return `<li> 
        <input type="radio" name="wheel" value="--${wheel.id}">${wheel.wheel}

        </li>`
    })

    html += wheelSelection.join("")
    html += "</ul>"

    return html
}