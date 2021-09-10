'use stict';

function Route(name) {
    try {
        if(!name) {
            throw 'error: name parameter is mandatories';
        }
        this.constructor(name);
    } catch (e) {
        console.error(e);
    }
}

Route.prototype = {
    name: undefined,
    constructor: function (name) {
        this.name = name;
    },
    isActiveRoute: function (pathname) {
        return pathname.replace('/', '') === this.name;
    }
}
