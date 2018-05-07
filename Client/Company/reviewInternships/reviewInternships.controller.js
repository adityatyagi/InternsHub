(function (){
    angular
    .module('ih-app')
    .controller('reviewCtrl', reviewCtrl);

function reviewCtrl($scope, internshipPosts){
    // using vm variable to hold the view-modal data
    var reviewVm = this;
    
    reviewVm.pageHeader = {
        title: 'Review postings'
    };
    
    
    reviewVm.internshipsByCompany = {
        internships: internshipPosts.internships
    };
}
    
})();
