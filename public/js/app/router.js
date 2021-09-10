'use strict';

function Router(routes) {
    try {
        if (!routes) {
            throw 'error: routes param is mandatory';
        }
        this.constructor(routes);
        this.init();
    } catch (e) {
        console.error(e);
    }
}

Router.prototype = {
    routes: undefined,
    rootElem: undefined,
    constructor: function (routes) {
        this.routes = routes;
        this.rootElem = document.getElementById('app');
    },
    init: function () {
        var r = this.routes;
        (function(scope, r) {
            window.addEventListener('popstate', function (e) {
                scope.hasChanged(scope, r);
                console.log('popstate');
            });
        })(this, r);
        this.hasChanged(this, r);
    },
    hasChanged: function(scope, r){
        if (window.location.pathname.length > 1) {
            for (var i = 0, length = r.length; i < length; i++) {
                var route = r[i];
                if(route.isActiveRoute(window.location.pathname.substr(1))) {
                    scope.goToRoute(route);
                }
            }
        } else {
          scope.goToRoute(r[0]);// First route is defaultRoute
        }
    },
    goToRoute: function (route) {
        (function(scope) {
            var url = '../../html/' + route.name + '.html',
                scriptEl = undefined,
                xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    scriptEl = document.createElement('script');
                    scriptEl.src = '../js/views/' + route.name + '.js';

                    //js를 실행시킨 후 HTML overwrite
                    scope.rootElem.appendChild(scriptEl);
                    scope.rootElem.innerHTML = this.responseText;
                }
            };
            xhttp.open('GET', url, true);
            xhttp.send();

        })(this);

        //gtag 나중에 설정
        //if(gtag) gtag('config', 'UA-83009418-3', {'page_title' : route.name, 'page_path': '/#'+route.name });
    }
};
