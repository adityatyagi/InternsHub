(function() {
    angular
        .module('ih-app')
        .controller('internshipDetailsCtrl', internshipDetailsCtrl);


    // controller function: STARTS
    function internshipDetailsCtrl($routeParams, $uibModal, $log, internshipPosts) {

        var detailsVm = this;
        //detailsVm.animationsEnabled = true;

        detailsVm.internship_id = $routeParams.internshipId;
        //console.log('internship id: '+detailsVm.internship_id);

        detailsVm.pageHeader = {
            title: 'Review Internships'
        };

        //console.log(internshipPosts.internship.applications);

        // get details by internship-by-id
        detailsVm.details = {
            data: internshipPosts.internship
        };

        //console.log(detailsVm.details.data.internship_title);

        detailsVm.popUpdateForm = function() {
            var modalInstance = $uibModal.open({
                animation: false,
                templateUrl: '/updateInternshipDetails/updateInternshipDetails.view.html',
                controller: 'updateInternshipDetailsCtrl as updateVm',
                size: 'lg',
                resolve: {
                    internshipData: function() {
                        return {
                            //internshipId: detailsVm.internship_id,
                            internshipInfo: detailsVm.details.data
                        };
                    }
                }
            });


            // promise is coming as expected, but we dont need to work with the data for now.
            modalInstance.result
                .then(function(response) {
                    console.log('this is the response just before getting added: ' + JSON.stringify(response));
                    // update the data of the internship
                    //vm.data.location.reviews.push(response.data);
                }, function(e) {
                    console.log(e);
                });

        };

    }; // controller function: ENDS

})();