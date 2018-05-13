(function() {
    angular
        .module('ih-app')
        .controller('updateInternshipDetailsCtrl', updateInternshipDetailsCtrl);

    // internshipData is not a service, but a parameter which came from resolve while defining the modal in the internshipDetals.controller.js

    // internshipPosts is the service that is being used to fetch the data form the API.
    // masterData is the service to get the data for all the dropdown menus
    function updateInternshipDetailsCtrl($uibModalInstance, internshipPosts, masterData, internshipData) {
        var updateVm = this;

        //console.log(internshipData.internshipInfo.internship_title);
        //console.log(masterData);

        updateVm.modal = {
            cancel: function() {
                $uibModalInstance.dismiss('cancel');
            }
        };


        //console.log('hi'+internshipData.internshipId);
        //console.log(internshipData);

        //details for ineternships
        updateVm.internshipData = { data: internshipData.internshipInfo };

        // data for the dropdowns
        updateVm.masterData = {
            types: masterData.Types.data,
            locations: masterData.Locations.data,
            categories: masterData.Categories.data
        };

        //console.log( updateVm.internshipData.data.internship_title);

        //console.log(updateVm.internshipData.data.location);

        updateVm.onSubmit = function() {
            // validating the form for all the fields have values or not
            updateVm.formError = '';

            if (!updateVm.internshipData.data.internship_title || !updateVm.internshipData.data.location || !updateVm.internshipData.data.category || !updateVm.internshipData.data.type || !updateVm.internshipData.data.stipend || !updateVm.internshipData.data.duration || !updateVm.internshipData.data.companyWebsite || !updateVm.internshipData.data.questionToSolve || !updateVm.internshipData.data.aboutInternship || !updateVm.internshipData.data.skillsRequired) {
                updateVm.formError = "All fields required, please try again!";
                return false; // this will prevent the form from being submitted
            } else {
                updateVm.updateInternshipDetails(updateVm.internshipData.internshipId, updateVm.internshipData.data);
                // bringing the data in the formData from ng-model in the form which is built in the view
                console.log(updateVm.internshipData.data);
                //return false;
            }

        };

        updateVm.updateInternshipDetails = function(internshipId, updatedInternshipInfo) {

            // using the internshipPosts service to call the method that calls the API to update info of internship - can also be the addInternship

            /* locatorData.addReviewById(locationid, {
                 rating: formData.rating,
                 reviewText: formData.reviewText
             }).then(function(response) {
                 vm.modal.close(response);
             }, function(e) {
                 console.log(e);
                 vm.formError = "Your review has not been saved, try again!";
             });
             return false;*/
        };



        /*updateVm.modal = {
            close: function(result) {
                $uibModalInstance.close(result); //this will send a promise to the parent controller which is internshipDetails.controller.js
            },
            cancel: function() {
                $uibModalInstance.dismiss('cancel');
            }
        }*/

    } // Controller Function: ENDS

})();