import { getFabric, setFabric } from "./database.js"

const fabrics = getFabric()

document.addEventListener("change", (event) => {
    const changeEvent = event.target
    if (changeEvent.name === "fabric") {
        const [, fabricId] = changeEvent.value.split("--")
        setFabric(parseInt(fabricId))
    }
    //window.alert(`The user has selected fabric #${changeEvent.value}`)
})


export const userFabric = () => {
    let html = "<ul>"

    const fabricSelection = fabrics.map((fabric) => {
        return `<li> 
        <input type="radio" name="fabric" value="--${fabric.id}">${fabric.fabric}

        </li>`
    })

    html += fabricSelection.join("")
    html += "</ul>"

    return html
}