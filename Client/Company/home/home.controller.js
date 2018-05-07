(function(){
    angular
        .module('ih-app')
        .controller('homeCtrl', homeCtrl);
    
    function homeCtrl(){
        var homeVm = this;
        
        homeVm.pageHeader = {
            title: 'This is the Dashboard.'
        };
    }
})();