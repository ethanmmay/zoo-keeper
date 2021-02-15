class Alligator {
    constructor(name, color, gender, weight, tailLengthInch, teethSize) {
        this.id = 0,
        this.name = name || ''
        this.color = color || ''
        this.gender = gender || ''
        this.weight = weight || 0
        this.tailLengthInch = tailLengthInch || 0
        this.teethSize = teethSize || ''
    }
    eat(food){
        console.log(`${this.name} is chomp chomping all the ${food}ies.`)
    }
}

export default Alligator;
