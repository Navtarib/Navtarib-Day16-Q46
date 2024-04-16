/*Q46 - Enhanced Laptop Object: Construct an object for a laptop including properties
make, model, year, and a method describe() that logs a sentence about the laptop.*/
// let laptop = {
//     make: "Dell",
//     model: "New Elite Series",
//     year: 2024,
//     describe: function () {
//       console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
//     },
//   };
//   laptop.describe();
//practice of the above code
// let laptop = {
//     make: "Hp",
//     model: "Elite Book",
//     year : 2024,
//     describe: function() {console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
//     },
// };
// laptop.describe();
//similar code
var car = {
    make: "Suzuki",
    model: "Every Wagon",
    year: "2024",
    describe: function () {
        console.log("This is a ".concat(this.year, " ").concat(this.make, " ").concat(this.model, "."));
    },
};
car.describe();
