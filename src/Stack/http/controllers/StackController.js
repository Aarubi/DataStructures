const Stack = require('../../Stack');

const stack = new Stack();

module.exports = {
    async AddController(request, response) {
        const { value } = request.body;

        stack.add(value);

        return response.json(value);
        
    },

    async SizeController(request, response) {
        const tam = stack.size();

        return response.json(tam);
    },

    async TopController(request, response) {
        const top = stack.top();

        return response.json(top);
    },

    async RemoveController(request, response) {

    }

};