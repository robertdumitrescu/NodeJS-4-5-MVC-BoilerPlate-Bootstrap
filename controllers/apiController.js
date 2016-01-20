"use strict";
class apiController {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }

    get area() {
        return this.calcArea();
    }

    static getPolygonName(first_name, last_name) {
        return first_name + last_name;
    }

}


module.exports = apiController;