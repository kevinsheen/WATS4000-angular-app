"use strict";angular.module("workspaceApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("workspaceApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("workspaceApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("workspaceApp").run(["$templateCache",function(a){a.put("views/about.html",'<p>This is the about view.</p> <div> <p>Hoping to one day make a print button exclusively for The Shadow right here: <a href="#" class="btn btn-success btn-lg"> <span class="glyphicon glyphicon-print"></span> Print! </a> </p> </div>'),a.put("views/main.html",'<div class="jumbotron"> <h1>The sun is shining, but the ice is slippery!</h1> <p class="lead"> <img src="images/yeoman.8cb970fb.png" alt="I\'m Yeoman"><br> Always a pleasure talking about The Shadow. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="container"> <h2>Who is "The Shadow?"</h2> <p>People often wonder what kind of evil lurks in the heart of men. Well, let\'s go ahead and ask the one and only Lamont Cranston (AKA The Shadow)! Let\'s also ask the supporting characters! Go on, <b>reach out to them!</b></p> <table class="table"> <thead> <tr> <th>Firstname</th> <th>Lastname</th> <th>Email</th> </tr> </thead> <tbody> <tr class="success"> <td>Lamont</td> <td>Cranston</td> <td>lamontisaboss@hotmail.com</td> </tr> <tr class="danger"> <td>Margo</td> <td>Lane</td> <td>mlane@yahoo.com</td> </tr> <tr class="info"> <td>Farley</td> <td>Claymore</td> <td>moreclay@aol.com</td> </tr> </tbody> </table> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>')}]);