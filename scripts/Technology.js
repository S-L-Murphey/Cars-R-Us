import { getTech, setTech} from "./database.js"

const techPackages = getTech()

document.addEventListener("change", (event) => {
    const changeEvent = event.target
    if (changeEvent.name === "tech") {
        const techId = changeEvent.value.split("--")
        setTech(parseInt(techId[1]))
    }
    //window.alert(`The user has selected tech package #${changeEvent.value}`)
})


export const userTech = () => {
    let html = "<ul>"

    const techSelection = techPackages.map((tech) => {
        return `<li> 
        <input type="radio" name="tech" value="--${tech.id}">${tech.package}

        </li>`
    })

    html += techSelection.join("")
    html += "</ul>"

    return html
}