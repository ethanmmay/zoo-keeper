import Alligator from "./models/Alligator.js";
import Monkey from "./models/Monkey.js"

let monkeys = []
let alligators = []

alligators.push(new Alligator("Ally", "Green", "F", 200, 60, "big"))
alligators.push(new Alligator("Avery", "Dark Green", "F", 220, 65, "large"))
monkeys.push(new Monkey("Marty", "Brown", "M", 160))
monkeys.push(new Monkey("Mandy", "Gold", "F", 150))

monkeys.forEach(m => m.eat("banana"))
alligators.forEach(a => a.eat("chicken"))