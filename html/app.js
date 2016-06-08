(function() {
    'use strict';

    var app = angular.module('main', []);

    app.controller('NotesController', function() {
       this.posts = note_posts;
    });

    var note_posts = [
        {
            href: "/2016/03/24/awk.html",
            date: "24 Mar 2016",
            title: "Awk",
        },
        {
            href: "/2016/01/14/installing_spamassassin.html",
            date: "14 Jan 2016",
            title: "Installing Spamassassin",
        },
    ];
})();