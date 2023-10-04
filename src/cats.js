const cats = [
    {
        name: "Sunni",
        age: 5
    },
    {
        name: "Pumpkin",
        age: 11
    }
]

const meow = () => "MEOW!!"

export default cats
export { meow };
// if the file is meant for one thing like this cats array its best to default export it instead of the {curly braces} method of export.