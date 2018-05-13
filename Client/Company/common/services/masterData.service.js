(function() {
    angular
        .module('ih-app')
        .service('masterData', masterData);

    function masterData() {

        //get Locations
        var Locations = {
            data: ['New Delhi', 'Banglore', 'Mumbai']
        }

        // get Categories
        var Categories = {
            data: ['Web Development', 'Graphic design', 'UX Design']
        }

        // get Types
        var Types = {
            data: ['In-Office', 'Work from Home', 'Part-time']
        }

        // number of employees
        var NumberOfEmployees = {
            data: ['1-5', '5-20', '21-50', '51-100', '100-500', 'more than 500']
        }

        return {
            Locations: Locations,
            Categories: Categories,
            Types: Types,
            NumberOfEmployees: NumberOfEmployees
        }
    }
})();