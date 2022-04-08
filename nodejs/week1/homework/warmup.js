console.log("inside warmup file");

//Circle calculator

class Circle {
    constructor(radius){
        this.radius = radius;
    }

    getDiameter(){
        return this.radius * 2;
    }

    getCircumference(){
        return this.radius * 2;
    }

    getArea(){
    return this.radius * 2;
    }

};

const circle = new Circle(10);
circle.getDiameter(); // 20
circle.getCircumference();
circle.getArea();

//I have a problem when I run the code, it does not work (nodemon warmup.js)