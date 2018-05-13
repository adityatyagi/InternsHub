(function() {
    angular
        .module('ih-app')
        .controller('myProfileCtrl', myProfileCtrl);


    /* SERVICES 
        1. companyData: CRUD details of company
        2. masterData: to get the data for all the dropdown menus
    */
    function myProfileCtrl(companyData, masterData, $ngConfirm) {
        // for holding the view-modal data
        var myProfileVm = this;

        myProfileVm.onUpdate = function() {
            $ngConfirm({
                title: 'Confirm Update?',
                content: 'Are you sure you want to update?',
                buttons: {
                    Yes: {
                        text: 'Yes',
                        btnClass: 'btn-blue',
                        action: function(button) {
                            myProfileVm.onSubmit();
                            $ngConfirm('Information Updated.');
                            //return false; // prevent close;
                        }
                    },
                    close: function(button) {
                        // closes the modal
                    },
                }
            });
        }


        myProfileVm.pageHeader = {
            title: 'My Profile'
        };

        myProfileVm.masterData = {
            types: masterData.Types.data,
            locations: masterData.Locations.data,
            categories: masterData.Categories.data,
            numberOfEmployees: masterData.NumberOfEmployees.data
        };

        myProfileVm.companyData = {
            data: companyData.companyInfo
        }

        myProfileVm.onSubmit = function() {
            //validate that all the fields are filled
            if (!myProfileVm.companyData.data.c_name || !myProfileVm.companyData.data.c_location || !myProfileVm.companyData.data.c_yoe || !myProfileVm.companyData.data.c_email || !myProfileVm.companyData.data.c_num_of_employees || !myProfileVm.companyData.data.c_description) {
                alert('All fields are mandatory.')
            } else {
                // function to update the company model
                myProfileVm.updateCompanyDetails(myProfileVm.companyData.data.c_id, myProfileVm.companyData.data);
            }

        };

        myProfileVm.updateCompanyDetails = function(id, data) {
            // calling the companyData service to update the info
            console.log(id);
            console.log(data);
            console.log('Information Updated.')
        }

    }
})();