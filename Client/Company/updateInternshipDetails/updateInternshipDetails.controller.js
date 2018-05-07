(function() {
    angular
        .module('ih-app')
        .controller('updateInternshipDetailsCtrl', updateInternshipDetailsCtrl);

    // internshipData is not a service, but a parameter which came from resolve while defining the modal in the internshipDetals.controller.js

    // internshipPosts is the service that is being used to fetch the data form the API.
    function updateInternshipDetailsCtrl($uibModalInstance, internshipPosts, internshipData) {
        var updateVm = this;

        updateVm.modal = {
            cancel: function() {
                $uibModalInstance.dismiss('cancel');
            }
        };

        //console.log('hi'+internshipData.internshipId);
        //console.log(internshipData);
        updateVm.internshipData = { data: internshipData.internshipInfo };
        //console.log( updateVm.internshipData.data.internship_title);

        updateVm.onSubmit = function() {
            // validating the form for all the fields have values or not
            updateVm.formError = '';

            if (!updateVm.formData.internship_title || !updateVm.formData.location || !updateVm.formData.category || !updateVm.formData.type || !updateVm.formData.stipend || !updateVm.formData.duration || !updateVm.formData.companyWebsite || !updateVm.formData.questionToSolve || !updateVm.formData.aboutInternship || !updateVm.formData.skillsRequired) {
                updateVm.formError = "All fields required, please try again!";
                return false; // this will prevent the form from being submitted
            } else {
                updateVm.updateInternshipDetails(updateVm.internshipData.internshipId, updateVm.formData);

                // bringing the data in the formData from ng-model in the form which is built in the view
                console.log(updateVm.formData);
                //return false;
            }

        };

        updateVm.updateInternshipDetails = function(internshipId, formData) {

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