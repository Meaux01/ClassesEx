// Exercise Inheritance
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
    driving(){
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
// pw1.driving()
// pw2.driving()
// chef1.wave(pw1)
// chef2.breathing()
// pw2.eat()
// chef2.cooking()

// Exercise Bank Account

class BankAccount {
    constructor(ownerName, balance,){
        this.name = ownerName
        this.balance = balance
        this.acctNum = Math.floor(Math.random()*10000000)
        // this.acctNum = acctNum
    }
    static genAcctNum(){
        this.acctNum = Math.floor(Math.random()*10000000)
        return this.acctNum
    }
    deposit(num){
        return this.balance += num
        // console.log(`I am depositing this amount ${num}`)
    }
    withdraw(amount){ 
       this.withdraw === true ? console.log(`I am withdrawing this amount ${amount} from you current ${this.balance}`) : console.log('You can not withdraw from this account')
       this.balance = this.balance - amount
    }
}
class CheckingAccount extends BankAccount{
    withdraw (amount){
            this.withdraw = true
            super.withdraw()
            if (amount > this.balance){
                this.withdraw = true
            }else if(amount <= this.balance){// overdraft feature
                this.withdraw = true 
                console.log(`I am withdrawing this amount ${amount} from you current ${this.balance}`)
            }
        }
}

class SavingsAccount extends BankAccount{
    withdraw (){
        this.withdraw = false
        super.withdraw()
    }
}
console.log(BankAccount.genAcctNum())
const ch1 = new CheckingAccount ('Bob', 2000)
const ch2 = new CheckingAccount ('Sharen', 50)
const sa1 = new SavingsAccount ('bob', 200)
console.log(ch1)
console.log(sa1)
ch1.deposit(250)
ch2.withdraw(250)
sa1.withdraw()
console.log(ch2.balance)