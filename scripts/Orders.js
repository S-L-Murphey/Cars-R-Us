import { getOrders, getColors, getFabric, getTech, getWheels } from "./database.js"

const buildOrderListItem = (order) => {

    const colors = getColors()
    const fabrics = getFabric()
    const techs = getTech()
    const wheels = getWheels()

    const foundColor = colors.find(
        (color) => {
            return color.id === order.colorId
        })
    const foundInterior = fabrics.find(
        (fabric) => {
            return fabric.id === order.interiorId
        })
    const foundTech = techs.find(
        (tech) => {
            return tech.id === order.technologyId
        })
    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelsId
        }
)

    const totalCost = (foundColor.price + foundInterior.price + foundTech.price + foundWheels.price)

    return `<li> 
            Order #${order.id} costs a total of $${totalCost.toFixed(2)}
    </li>`
};
 
export const Orders = () => {
    const orders = getOrders()
    
    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)



    html += listItems.join("")
    html += "</ul>"

    return html


}
