class Person {
    constructor(name, dob, cob){// dob - date of birth cob - city of birth
        this.name = name
        this.dob = dob
        this.cob = cob
    } 
    wave(){
        console.log(`Waving at ${this.name}.`)
    }
    breathing(){
        console.log('Taking a breath')
    }
    eat(){
        console.log('What should I eat today?')
    }
}
class PostalWorker extends Person{
    constructor(name, dob, cob){
    super(name, dob, cob)
    this.route = ['Peachtree St', 'Courtland St', 'Juniper St']
    }
    driving(route){
        console.log(`This is my route for today: ${this.route}`)
        }

}
const pw1 = new PostalWorker ('Mrs. Blue', '06/22/1990', 'Altanta')
const pw2 = new PostalWorker ('Mr. Brown', '07/18/1986', 'Chicago')
class Chef extends Person{
    constructor(name, dob, cob){
        super(name, dob, cob)
        this.foods = ['Salmon', 'Turkey Legs', 'Lamb']
    }
    cooking(){
        console.log(`I am cooking one of these options today ${this.foods}`)
        
    }
} 
const chef1 = new Chef ('Ms. Southern', '05/24/75', 'Savannah')
const chef2 = new Chef ('Mr. West', '02/18/80', 'New York')
pw1.driving()
pw2.driving()
chef1.wave(pw1)
chef2.breathing()
pw2.eat()
chef2.cooking()