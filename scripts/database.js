const database = {
    colors: [
        {
            id: 1,
            color: "Silver",
            price: 100.00
        },{
            id: 2, 
            color: "Midnight Blue",
            price: 200.00
        }, {
            id: 3, 
            color: "Firebrick Red",
            price: 199.99
        }, {
            id: 4, 
            color: "Spring Green",
            price: 147.47
        }
    ],
    interior: [
        {
            id: 1, 
            fabric: "Beige Fabric",
            price: 500.00
        },{
            id: 2,
            fabric: "Charcoal Fabric",
            price: 600.00
        },{
            id: 3, 
            fabric: "White Leather",
            price: 1000.00
        },{
            id: 4,
            fabric: "Black Leather",
            price: 1800.00
        }
    ],
    technology: [
        {
            id: 1, 
            package: "Basic Package",
            price: 2000.00
        },{
            id: 2,
            package: "Navigation Package",
            price: 2500.00
        }, {
            id: 3, 
            package: "Visibility Package",
            price: 3000.00
        }, {
            id: 4,
            package: "Ultra Package",
            price: 3500.00
        }
    ],
    wheels: [
        {
            id: 1,
            wheel: "17-inch Pair Radial",
            price: 500.00
        },{
            id: 2,
            wheel: "17-inch Pair Radial Black",
            price: 550.00
        },{
            id: 3,
            wheel: "18-inch Spoke Silver",
            price: 750.00
        },{
            id: 4,
            wheel: "18-inch Spoke Black",
            price: 999.99
        }
    ],
    carType:[
        {
            id: 1,
            carStyle: "Car",
        },
        {
            id: 2, 
            carStyle: "SUV",
        },{
            id: 3, 
            carStyle: "Truck"
        },
    ],
    customOrders: [
        {
            id: 1,
            colorId: 2,
            interiorId: 3,
            technologyId: 1,
            wheelsId: 4,
            carTypeId: 2,
            timestamp: 1614659931693
        }
    ],
    /* Setting Orders: In this application, when the user chooses one the radio
buttons, they are changing the state of the app. We need a place to store that
state. State is always stored in your database for your app. Why is this not an
array like the other objects. */
    orderBuilder: {},
}

export const getColors = () => {
    return [...database.colors]
}
export const getFabric = () => {
    return [...database.interior]
}
export const getTech = () => {
    return [...database.technology]
}
export const getWheels = () => {
    return [...database.wheels]
}
export const getCarType = () => {
    return [...database.carType]
}
export const getOrders = () => {
    return [...database.customOrders]
}

/* We have the orderBuilder key in our database, but we still need to a way
for users to store their choices. We use the primary keys of the other objects
to save the state of the user choices to orderBuilder. The following set functions
are responsible for setting the state.*/

/* we will see in the use of these setters in the if statements, 
that the id parameter */
export const setColor = (id) => {
    database.orderBuilder.colorId = id
}

export const setFabric = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTech = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelsId = id
}

export const setCarType = (id) => {
    database.orderBuilder.carTypeId = id
}


/////
/*We need something to modify permanent state with the user's choices. 
When state changed for the app, we need to regenerate the HTML to display
the new state to the user. When the user clicks the button, we need to 
store their choices permanently. We will do this by storing their choices
in the customOrder array using a function addCustomOrder. */

export const addCustomOrder = () => {
    //Copy the current state of user choices i.e. what is in the orderBuilder
    //this takes all the set function results and puts them in an object called neworder
    const newOrder = {...database.orderBuilder}

    //Add a new primary key to the object
    /*This assigns the newOrder.id by popping off the last object of the customOrders,
    referring to it's id key and then adding 1 to it.*/
    newOrder.id = [...database.customOrders].pop().id + 1

    //Add a timestamp to the newOrder
    newOrder.timestamp = Date.now()

    //Now add the new order to the custom orders array

    database.customOrders.push(newOrder)

    //Reset the temporary state for user choices
    //Now that we have captured state and pushed it to customOrders Array
    //we need to reset that orderBuilder state 
    database.orderBuilder = {}

    /* The CustomEvent() constructor creates a new CustomEvent. The CustomEvent interface represents 
    events initialized by an app for any purpose. So for our CustomEvent, the name of it is 
    "stateChanged", which must match up with our eventListener
    for this function.(see main.js) */

    const myCustomEvent = new CustomEvent("stateChanged")


    //Broadcast a notification that permanent state has changed/

    /*Dispatches an event at the specified EventTarget, invoking the affected EventListener 
    in the appropriate order. The 'event' being dispatched here is what is in the parentheses.
    
    See carsRUs module for invoking of the addCustomOrder function. */
    document.dispatchEvent(myCustomEvent)
}