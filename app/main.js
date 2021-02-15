import Alligator from "./models/Alligator.js";
import Monkey from "./models/Monkey.js"

let ally = new Alligator("Ally", "Green", "F", 200, 60, "big")
let avery = new Alligator("Avery", "Dark Green", "F", 220, 65, "large")
let marty = new Monkey("Marty", "Brown", "M", 160)
let mandy = new Monkey("Mandy", "Gold", "F", 150)

let monkeys = [marty, mandy]
let alligators = [ally, avery]

monkeys[0].eat("banana")
alligators[1].eat("chicken")