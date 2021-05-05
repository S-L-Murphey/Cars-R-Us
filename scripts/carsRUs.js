import { userColor } from "./Colors.js"
import { userFabric } from "./Interiors.js"
import { userTech } from "./Technology.js"
import { userWheel } from "./Wheels.js"
import { Orders } from "./Orders.js"
import { addCustomOrder } from "./database.js"


document.addEventListener(
    "click",
    (event) => {
        const clickEvent = event.target
        if (clickEvent.id === "orderButton") {
            addCustomOrder()
        }
    }
)


export const carsRUs = () => {

    return `
    <h1>Cars For Sale</h1>

    <article class="choices">
    <section class= "choices__color options">
    <h2>Colors</h2>
    ${userColor()}
    </section>

    <section class="choices__fabric options">
    <h2>Fabrics</h2>
    ${userFabric()}
    </section>

    <section class="choices__tech options">
    <h2>Technology</h2>
    ${userTech()}
    </section>

    <section class="choices__wheel options">
    <h2>Wheels</h2>
    ${userWheel()}
    </section>
    </article>

    <article>
    <button id="orderButton">Your Order</button>
    </article>

    <article class="orders">
    ${Orders()}
    </article>

    `
}