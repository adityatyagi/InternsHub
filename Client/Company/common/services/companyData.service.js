(function() {
    angular
        .module('ih-app')
        .service('companyData', companyData);

    function companyData() {


        //fetch compnay details using id
        var companyInfo = {
            c_id: '1',
            c_name: 'NotesHub',
            c_location: 'New Delhi',
            c_yoe: '2016',
            c_email: 'support@noteshub.co.in',
            c_num_of_employees: '21-50',
            c_description: 'This is a sample description for of the company'
        }

        return {
            companyInfo: companyInfo
        }
    }
})();