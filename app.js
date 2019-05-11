class Animal{
    constructor(name){
        this.name = name;
        this.legs = 4;
    }
    walk(greeting){
        console.log(greeting + this.name + ' is walking');
    }
}















class Dog extends Animal {
    constructor(){        
        super('Dog');
        this.tail = true;
    }
    bark(){
        console.log(this.name + 'bow');
    }
}

const dg = new Dog();
console.log(dg);
dg.bark();
dg.walk('Hi!');
console.log(dg.name);







// const dog = new Animal('Dog');
// const cat = new Animal('Cat');
// dog.walk('Hello!');
// cat.walk('Hi!');
// // console.log(dog);
// // console.log(cat);