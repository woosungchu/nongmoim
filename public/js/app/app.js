'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home'),// First route is defaultRoute
            new Route('test')
        ]);
    }
    init();
}());
