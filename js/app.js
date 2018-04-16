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
    .when("/meetingSchedule", {
        templateUrl : "meetingSchedule.html"
    })
    .when("/teamRules", {
        templateUrl : "teamRules.html"
    })
    .when("/projectConcept", {
        templateUrl : "projectConcept.html"
    })
    .when("/userStories", {
        templateUrl : "userStories.html"
    })
    .when("/specifications", {
        templateUrl : "specifications.html"
    })
    .when("/platformSelection", {
        templateUrl : "platformSelection.html"
    })
    .when("/architectureDiagram", {
        templateUrl : "architectureDiagram.html"
    })
    .when("/ganttChart", {
        templateUrl : "ganttChart.html"
    })
    .when("/testPlan", {
        templateUrl : "testPlan.html"
    })
    .when("/clientHandoffPlan", {
        templateUrl : "clientHandoffPlan.html"
    })
    .when("/documentationPlan", {
        templateUrl : "documentationPlan.html"
    })
    .when("/home", {
        templateUrl : "home.html"
    });
});
