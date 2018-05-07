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

        detailsVm.popUpdateForm = function() {
            var modalInstance = $uibModal.open({
                animation: false,
                templateUrl: '/updateInternshipDetails/updateInternshipDetails.view.html',
                controller: 'updateInternshipDetailsCtrl as updateVm',
                size: 'lg',
                resolve: {
                    internshipData: function() {
                        return {
                            internshipId: detailsVm.internship_id,
                            internshipInfo: detailsVm.details.data
                        };
                    }
                }
            });

            modalInstance.result.then(function(selectedItem) {
                detailsVm.popUpdateForm.selected = selectedItem;
            }, function() {
                $log.info('modal-component dismissed at: ' + new Date());
            });
        };


        // modalInstance.result.then(function(response) {
        //     console.log('this is the response just before getting added: ' + response.data);
        //     // update the data of the internship
        //     //vm.data.location.reviews.push(response.data);
        // }, function(e) {
        //     console.log(e);
        // });





    }; // controller function: ENDS

})();