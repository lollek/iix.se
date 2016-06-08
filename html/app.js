(function() {
    'use strict';

    var app = angular.module('main', []);

    app.controller('NotesController', function() {
       this.notes = [
           {
               href: "/2016/03/24/awk.html",
               date: "24 Mar 2016",
               title: "Awk",
           },
       ];
    });
})();