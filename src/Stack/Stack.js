 class Stack {
    constructor(elements) {
        if(Array.isArray(elements)) {
            this.elements = elements;
        }
        else {
            this.elements = [];
        }
    }

    isEmpty() {
        return this.elements.length === 0;
    }

    add() {
        return this.elements.push();
    }

    remove() {
        if(!this.isEmpty())
        return this.elements.pop();
    }

    size() {
        return this.elements.length();
    }

    top() {
        if(!this.isEmpty())
            return this.elements[this.elements.length() -1];
    }

    


}

module.exports = Stack;

//this.elements = Array.isArray(elements) ? elements : [];

