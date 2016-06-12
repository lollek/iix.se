(function() {
    'use strict';

    var app = angular.module('mainApp', [
        'ngRoute'
    ]);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when("/", {templateUrl: "/partials/main.html"})
            
            // Notes
            .when("/notes", {
                templateUrl: "/partials/notes.html",
                controller: "NotesController"
            })
            .when("/notes/:noteId", {
                templateUrl: "/partials/note.html",
                controller: "NotesController"
            })
            
            // Beerlist
            .when("/beer", {templateUrl: "/partials/beer.html"})
            
            // Wishlist
            .when("/wishlist", {templateUrl: "/partials/wishlist.html"})
            
            // Moria
            .when("/moria", {templateUrl: "/partials/moria.html"})
            .when("/moria/:name", {
                templateUrl: function(urlattr) {
                    return "/partials/moria/" + urlattr.name;
                }
            })
            
            // Fallthrough
            .otherwise({redirectTo: "/"});
    }]);
})();