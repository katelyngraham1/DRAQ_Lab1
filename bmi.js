class BMI
{
    // constructor taking 2 agruments 
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }

    // method returning calculated BMI
    calculateBMI(){
        let bmi = this.weight/(this.height**2);
        return bmi;
    }
}

// instance of class BMI
let myBMI = new BMI(2, 90);
// invoke calculateBMI Method
let calc = myBMI.calculateBMI();
// Print 
console.log(calc);