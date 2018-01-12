app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html"
    })
    .when("/meetingNotes", {
        templateUrl : "meetingNotes.html"
    })
    .when("/contactUs", {
        templateUrl : "contactUs.html"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});
