import { getCarType, setCarType } from "./database.js"

const vehicles = getCarType()

document.addEventListener("change", 
(event) => {
    const changeEvent = event.target
    if (changeEvent.name === "ride") {
        setCarType(parseInt(changeEvent.value))
    }
})


export const userVehicle = () => {
    let html = "<ul>"

    const userVehicle = vehicles.map( vehicle => {
        return `<li>
        <input type="radio" name="ride" value="${vehicle.id}"/>${vehicle.carStyle}
        </li>`
    })

    html += userVehicle.join("")
    html += "</ul>"
    return html
}