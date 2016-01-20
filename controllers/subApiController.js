"use strict";
var apiController = require('./apiController.js');

class subApiController extends apiController {
    /**
     *
     * @param {number} height
     * @param {number} width
     * @param {string} color
     */
    constructor(height, width, color) {
        /**
         * super() let you link the parameters from parent constructor
         * to parameters from child constructor
         * */
        super();

        super.height = height;
        super.width = width;
        this.color = color;
    }

    forwardStaticMethodFromParent() {
        super.calcArea();
    }

    printSizesAndColor() {
        return this.height + this.width + this.color;
    }

    getDefaultVariables() {
        return [this.height, this.width, this.color];
    }

    /**
     * It can be called without instantiation process
     * */

    static getDefaultVariables() {
        return [this.height, this.width, this.color];
    }

    get height() {
        return this.height.toUpperCase();
    }

    set height(newHeight){
        if(newHeight){
            this.height = newHeight;
        }
    }

}

module.exports = subApiController;