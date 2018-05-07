(function (){
    angular
    .module('ih-app')
    .controller('addNewCtrl', addNewCtrl);

function addNewCtrl(){
    // for holding the view-modal data
    var addNewVm = this;
    
    addNewVm.pageHeader = {
        title: 'Add New Internship'
    };
}
})();