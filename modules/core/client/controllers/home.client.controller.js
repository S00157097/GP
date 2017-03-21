'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    var vm = this;
    this.authentication = Authentication;

    //Description for storages, categories, forms and records
    $scope.descript = [
      {
        head: "Create Storages and Categories",
        image: 'http://localhost:3000/images/storages.png',
        text: "Simple way to create Storages and Categories insinde your Storage. If you have your account and you are logged in, open menu on left side and select Storages."
      },
      {
        head: "Create and Edit Forms",
        image: 'http://localhost:3000/images/form.png',
        text: "After creating Storage and Category, you can create form simply clicking on Edit Form. There just drag and drop necessary element and add data which will be used in records."
      },
      {
        head: "Enter records and view your data",
        image: 'http://localhost:3000/images/record.png',
        text: "After form is created you can add you records, click on plus button and enter yor data. You will see entered data in the table format."
      }
    ];

    //Developers
    $scope.dev = [
      {
        image: 'http://localhost:3000/images/Dima.jpg',
        name: "Dmitrijs Savostjanovs",
        description: "some text goes here"
      },
      {
        image: 'http://localhost:3000/images/Misha.jpg',
        name: "Mihails Gromovs",
        description: "some text goes here"
      },
      {
        image: 'http://localhost:3000/images/Patrick.jpg',
        name: "Patrick Romhanyi",
        description: "some text goes here"
      },
      {
        image: 'http://localhost:3000/images/Sean.jpg',
        name: "Sean Kiernan",
        description: "some text goes here"
      }
    ];

    // Display 3 icons
    this.services = [
      { heading: 'Statistics', icon: 'multiline_chart', text: 'Build statistics based on you entered data.' },
      { heading: 'Open Source API', icon: 'cloud_download', text: 'Convert your data into JSON format and use it anywhere you want.' },
      { heading: 'Flexible Storage', icon: 'storage', text: 'Create storages in any way you like, no relationship needed.' }
    ];
  }]);
