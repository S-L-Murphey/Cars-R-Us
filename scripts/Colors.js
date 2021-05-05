/*first start by importing our get and set functions from the database
these are just copies of our data  */
import { getColors, setColor } from "./database.js"

//store a copy of our data in a variable
const colors = getColors()


/* 'document.' refers to anywhere on the DOM, we could be more specific in that
point if desired. We added an event listener to our entire document that listens
for a 'change' in the state.

The 'change event', which we have defined as event.target, only fires when the 
value is committed, such as by pressing the enter key, 
selecting a value from a list of options, and the like.
*/
document.addEventListener("change", (event) => {
    const changeEvent = event.target

    /*if our change event's HTML on the DOM starts with "color", we then take that event.target
    and split it at the value to get it's id which we store in the varaible [, colorId]. We do 
    this to be more specific on what we are targeting as many things could have the same number id.
    The .split method stores our targeted value as sub-strings into an array and resturns the array.
    So we reference that part of the array we want either by wrapping in [, colorId] or referencing
    the index position in the variable call */

    if (changeEvent.name === "color") {
        const colorId = changeEvent.value.split("--")
        setColor(parseInt(colorId[1]))
        //window.alert(`The user has selected color #${changeEvent.value}`)
    }
})

/*We need to put our output into html. In js, we do this by creating a function and exporting 
that function.  */
export const userColor = () => {
    let html = "<ul>"

    /*The .map method is used like a for loop. It creates a new array populated with the 
    results of calling a provided funciton on every element in the array. In this case, 
    the function has a parameter of color. Map iterates through each element of the colors 
    array and returns an array of the key 'color' in a list. */
    const colorSelection = colors.map((color) => {
        return `<li> 
        <input type="radio" name="color" value="color--${color.id}">${color.color}

        </li>`
    })

    /* the join method creates and returns a new string by concatenating all of
    the elements in an array. colorSelection returns an array of the color names in list form.
    Join concatenates them into one long string. We separate each element by use of an empty
    string "" which removes the commas that would otherwise be there.*/
    html += colorSelection.join("")
    html += "</ul>"
    return html
}