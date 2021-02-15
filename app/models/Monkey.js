class Monkey {
    constructor(name, color, gender, weight) {
        this.id = 0,
        this.name = name || ''
        this.color = color || ''
        this.gender = gender || ''
        this.weight = weight || 0
    }
    eat(food){
        console.log(`${this.name} is chomp chomping all the ${food}ies.`)
    }
}

export default Monkey;
