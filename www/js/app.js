(function() {
    'use strict';

    var app = angular.module('mainApp', [
        'ngRoute'
    ]);

    app.config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            
            $routeProvider
                .when('/', {templateUrl: '/partials/main.html'})
                .when('/404', {templateUrl: '/partials/404.html'})

                // Notes
                .when('/notes', {
                    templateUrl: '/partials/notes.html',
                    controller: 'NotesController'
                })
                .when('/notes/:noteId', {
                    templateUrl: '/partials/note.html',
                    controller: 'NotesController'
                })

                // Lists
                .when('/beer', {templateUrl: '/partials/beer.html'})
                .when('/wishlist', {templateUrl: '/partials/wishlist.html'})

                // Moria
                .when('/moria', { templateUrl: '/partials/moria.html' })
                .when('/moria/:filepath', {
                   templateUrl: function (urlattr) {
                       return '/partials/moria/' + urlattr.filepath;
                   }
                })

                // Fallthrough
                .otherwise({redirectTo: '/404'});
        }
    ]);
})();