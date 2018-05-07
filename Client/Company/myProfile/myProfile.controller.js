(function (){
    angular
    .module('ih-app')
    .controller('myProfileCtrl', myProfileCtrl);

function myProfileCtrl(){
    // for holding the view-modal data
    var myProfileVm = this;
    
    myProfileVm.pageHeader = {
        title: 'My Profile'
    };
}
})();
