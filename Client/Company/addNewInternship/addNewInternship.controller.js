(function() {
    angular
        .module('ih-app')
        .controller('addNewCtrl', addNewCtrl);

    function addNewCtrl(masterData, $ngConfirm, internshipPosts) {
        // for holding the view-modal data
        var addNewVm = this;

        addNewVm.pageHeader = {
            title: 'Post New Internship'
        };

        // data for the dropdowns
        addNewVm.masterData = {
            types: masterData.Types.data,
            locations: masterData.Locations.data,
            categories: masterData.Categories.data,
            numberOfEmployees: masterData.NumberOfEmployees.data
        };

        addNewVm.onSubmit = function() {
            // form validation and passing the form data to the function on the internshipPosts service to add in the db
            addNewVm.formError = '';
            companyId = 1;

            if (!addNewVm.formData.internship_title || !addNewVm.formData.location || !addNewVm.formData.category || !addNewVm.formData.type || !addNewVm.formData.stipend || !addNewVm.formData.duration || !addNewVm.formData.companyWebsite || !addNewVm.formData.questionToSolve || !addNewVm.formData.aboutInternship || !addNewVm.formData.skillsRequired) {
                console.log('empty field catched');
                addNewVm.formError = "All fields required, please try again!";
                return false; // this will prevent the form from being submitted
            } else {
                console.log('Form Data: ' + addNewVm.formData);
                // companyId will come form companyData service

                console.log('in onSubmit function');

                $ngConfirm({
                    title: 'Posting New Internship?',
                    content: 'Are you sure with the following details?',
                    buttons: {
                        Yes: {
                            text: 'Yes',
                            btnClass: 'btn-blue',
                            action: function(button) {

                                $ngConfirm('Congratulations, Internship Posted!');
                                addNewVm.postNewInternship(companyId, addNewVm.formData);
                                addNewVm.clearFields();
                                //return false; // prevent close;
                            }
                        },
                        close: function(button) {
                            // closes the modal
                        },
                    }
                });


            }
        };

        // sending form data to the service (api)
        addNewVm.postNewInternship = function(companyId, internshipData) {
            //function calls a funtion on the service to add a new internship on the db
            //internshipPosts.addNewInternship(companyId, internshipData);
            console.log('Internship Data: ' + internshipData);
            console.log('in postNewInternship function');
        }

        // to clear the form fields after posting internship
        addNewVm.clearFields = function() {
            addNewVm.formData.internship_title = '';
            addNewVm.formData.location = '';
            addNewVm.formData.category = '';
            addNewVm.formData.type = '';
            addNewVm.formData.stipend = '';
            addNewVm.formData.duration = '';
            addNewVm.formData.companyWebsite = '';
            addNewVm.formData.questionToSolve = '';
            addNewVm.formData.aboutInternship = '';
            addNewVm.formData.skillsRequired = '';
        };




    }
})();