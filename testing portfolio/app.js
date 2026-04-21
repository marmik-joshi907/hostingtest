var app = angular.module('portfolioApp', ['ngRoute']);

// Routing configuration
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'HomeController'
        })
        .when('/about', {
            templateUrl: 'about.html',
            controller: 'AboutController'
        })
        .when('/projects', {
            templateUrl: 'projects.html',
            controller: 'ProjectsController'
        })
        .when('/contact', {
            templateUrl: 'contact.html',
            controller: 'ContactController'
        })
        .otherwise({
            redirectTo: '/'
        });
        
    // Optionally remove hashbang from urls if server supports it (we stick to hash routing for simple static sites)
    // $locationProvider.html5Mode(true); 
}]);

// Main Controller for Navbar and Global States
app.controller('MainController', ['$scope', '$location', '$window', function($scope, $location, $window) {
    $scope.menuOpen = false;
    $scope.isScrolled = false;

    // Check active link
    $scope.isActive = function(path) {
        return $location.path() === path;
    };

    // Toggle Mobile Menu
    $scope.toggleMenu = function() {
        $scope.menuOpen = !$scope.menuOpen;
    };

    $scope.closeMenu = function() {
        $scope.menuOpen = false;
    };

    // Listen to scroll to add backdrop to nav
    angular.element($window).bind("scroll", function() {
        if (this.pageYOffset > 50) {
            $scope.isScrolled = true;
        } else {
            $scope.isScrolled = false;
        }
        $scope.$apply();
    });
}]);

// Home Controller
app.controller('HomeController', ['$scope', function($scope) {
    $scope.title = "Hi, I'm a Developer";
    $scope.subtitle = "I build premium web applications.";
}]);

// About Controller
app.controller('AboutController', ['$scope', function($scope) {
    $scope.skills = [
        { name: 'AngularJS', level: 90, icon: 'ph-angular-logo' },
        { name: 'React', level: 85, icon: 'ph-atom' },
        { name: 'Node.js', level: 80, icon: 'ph-hexagon' },
        { name: 'Python', level: 75, icon: 'ph-file-py' },
        { name: 'UI/UX Design', level: 85, icon: 'ph-bezier-curve' }
    ];
}]);

// Projects Controller
app.controller('ProjectsController', ['$scope', function($scope) {
    $scope.projects = [
        {
            title: 'CogniSolve AI',
            description: 'A machine-learning powered complaint resolution system.',
            image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=600',
            tags: ['React', 'Python', 'XGBoost'],
            link: '#'
        },
        {
            title: 'SatIntel Platform',
            description: 'Satellite intelligence and tracking platform with realtime maps.',
            image: 'https://images.unsplash.com/photo-1541881470482-411aeb2c3ac0?auto=format&fit=crop&q=80&w=600',
            tags: ['Angular', 'WebGL', 'Node.js'],
            link: '#'
        },
        {
            title: 'SecureOptima',
            description: 'Backend optimizer detecting code vulnerabilities via regex.',
            image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=600',
            tags: ['FastAPI', 'Regex', 'Security'],
            link: '#'
        }
    ];
}]);

// Contact Controller
app.controller('ContactController', ['$scope', function($scope) {
    $scope.submitForm = function() {
        if ($scope.contactForm.$valid) {
            alert('Message Sent Successfully! We will get back to you soon.');
            $scope.user = {};
            $scope.contactForm.$setPristine();
        }
    };
}]);
