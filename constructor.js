function Dog(name, breed ,age,weightinKgs){
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.weightinKgs = weightinKgs;
    this.sound = function(){};
        this.eat = function(){};
        this.updateName = function(newname)

    // this.eat = function(){
    //     console.log("Chomp");
    // };
    // this.bark = function(){
    //     console.log("Woof!");
    };

const dogTheMarley = new Dog("Marley", "pit", 3, 30);
console.log(dogTheMarley);
