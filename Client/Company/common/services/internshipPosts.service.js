(function() {

    //registering the service with the angular app
    angular
        .module('ih-app')
        .service('internshipPosts', internshipPosts);

    function internshipPosts() {

        // GET: get all the internsips
        var internshipsByCompany = {
            internships: [{
                _id: '1',
                internship_title: 'NodeJs Internship',
                posted_on: '21-05-2018',
                stipend: 'Rs. 10,000',
                no_of_applications: '5',
                type: 'In-Office',
                location: 'Banglore',
                duration: '6',
                category: 'Web Development',
                questionToSolve: 'This is a sample question.',
                aboutInternship: 'this is sample text for about the internship',
                skillsRequired: 'these are the skills required for this internship',
                companyWebsite: 'noteshub.co.in',
                applications: [{
                        applicant_id: '001',
                        applicant_name: 'Aditya Tyagi',
                        applicant_email: 'tyagi.aditya844747@gmail.com',
                        applicant_dateOfApplying: '22/05/2018',
                        applicant_resume: 'aditya_tyagi.pdf',
                        applicant_solutionLink: 'https://drive.google.com/drive/folders/0ByWO0aO1eI_MaExzRWZ2S0dndjQ?sort=13&direction=a',
                        applicant_status: 'Accepted',
                        applicant_rank: '1'
                    },
                    {
                        applicant_id: '002',
                        applicant_name: 'Parv Jain',
                        applicant_email: 'parvJain16@gmail.com',
                        applicant_dateOfApplying: '22/05/2018',
                        applicant_resume: 'parvJain.pdf',
                        applicant_solutionLink: 'https://drive.google.com/drive/folders/0ByWO0aO1eI_MaExzRWZ2S0dndjQ?sort=13&direction=a',
                        applicant_status: 'Pending',
                        applicant_rank: '2'
                    },
                    {
                        applicant_id: '003',
                        applicant_name: 'Shivam Aggarwal',
                        applicant_email: 'ShivamAggarwal@gmail.com',
                        applicant_dateOfApplying: '22/05/2018',
                        applicant_resume: 'Shivam Aggarwal.pdf',
                        applicant_solutionLink: 'https://drive.google.com/drive/folders/0ByWO0aO1eI_MaExzRWZ2S0dndjQ?sort=13&direction=a',
                        applicant_status: 'Pending',
                        applicant_rank: '3'
                    },
                    {
                        applicant_id: '004',
                        applicant_name: 'PranavTyagi',
                        applicant_email: 'pranavTyagi',
                        applicant_dateOfApplying: '22/05/2018',
                        applicant_resume: 'pranavTyagi.pdf',
                        applicant_solutionLink: 'https://drive.google.com/drive/folders/0ByWO0aO1eI_MaExzRWZ2S0dndjQ?sort=13&direction=a',
                        applicant_status: 'Rejected',
                        applicant_rank: '4'
                    }

                ]
            }, {
                _id: '2',
                internship_title: 'PHP Internship',
                posted_on: '21-05-2018',
                stipend: 'Rs. 10,000',
                no_of_applications: '5',
                type: 'In-Office',
                location: 'Banglore',
                duration: '6',
                category: 'Web Development',
                questionToSolve: 'This is a sample question.',
                aboutInternship: 'this is sample text for about the internship',
                skillsRequired: 'these are the skills required for this internship',
                companyWebsite: 'noteshub.co.in',
                applications: [{
                        applicant_id: '001',
                        applicant_name: 'Aditya Tyagi',
                        applicant_email: 'tyagi.aditya844747@gmail.com',
                        applicant_dateOfApplying: '22/05/2018',
                        applicant_resume: 'aditya_tyagi.pdf',
                        applicant_solutionLink: 'https://drive.google.com/drive/folders/0ByWO0aO1eI_MaExzRWZ2S0dndjQ?sort=13&direction=a',
                        applicant_status: 'Accepted',
                        applicant_rank: '1'
                    },
                    {
                        applicant_id: '002',
                        applicant_name: 'Parv Jain',
                        applicant_email: 'parvJain16@gmail.com',
                        applicant_dateOfApplying: '22/05/2018',
                        applicant_resume: 'parvJain.pdf',
                        applicant_solutionLink: 'https://drive.google.com/drive/folders/0ByWO0aO1eI_MaExzRWZ2S0dndjQ?sort=13&direction=a',
                        applicant_status: 'Pending',
                        applicant_rank: '2'
                    },
                    {
                        applicant_id: '003',
                        applicant_name: 'Shivam Aggarwal',
                        applicant_email: 'ShivamAggarwal@gmail.com',
                        applicant_dateOfApplying: '22/05/2018',
                        applicant_resume: 'Shivam Aggarwal.pdf',
                        applicant_solutionLink: 'https://drive.google.com/drive/folders/0ByWO0aO1eI_MaExzRWZ2S0dndjQ?sort=13&direction=a',
                        applicant_status: 'Pending',
                        applicant_rank: '3'
                    },
                    {
                        applicant_id: '004',
                        applicant_name: 'PranavTyagi',
                        applicant_email: 'pranavTyagi',
                        applicant_dateOfApplying: '22/05/2018',
                        applicant_resume: 'pranavTyagi.pdf',
                        applicant_solutionLink: 'https://drive.google.com/drive/folders/0ByWO0aO1eI_MaExzRWZ2S0dndjQ?sort=13&direction=a',
                        applicant_status: 'Rejected',
                        applicant_rank: '4'
                    }

                ]
            }, {
                _id: '3',
                internship_title: 'ASP.Net Internship',
                posted_on: '21-05-2018',
                stipend: 'Rs. 10,000',
                no_of_applications: '5',
                type: 'In-Office',
                location: 'Banglore',
                duration: '6',
                category: 'Web Development',
                questionToSolve: 'This is a sample question.',
                aboutInternship: 'this is sample text for about the internship',
                skillsRequired: 'these are the skills required for this internship',
                companyWebsite: 'noteshub.co.in',
                applications: [{
                        applicant_id: '001',
                        applicant_name: 'Aditya Tyagi',
                        applicant_email: 'tyagi.aditya844747@gmail.com',
                        applicant_dateOfApplying: '22/05/2018',
                        applicant_resume: 'aditya_tyagi.pdf',
                        applicant_solutionLink: 'https://drive.google.com/drive/folders/0ByWO0aO1eI_MaExzRWZ2S0dndjQ?sort=13&direction=a',
                        applicant_status: 'Accepted',
                        applicant_rank: '1'
                    },
                    {
                        applicant_id: '002',
                        applicant_name: 'Parv Jain',
                        applicant_email: 'parvJain16@gmail.com',
                        applicant_dateOfApplying: '22/05/2018',
                        applicant_resume: 'parvJain.pdf',
                        applicant_solutionLink: 'https://drive.google.com/drive/folders/0ByWO0aO1eI_MaExzRWZ2S0dndjQ?sort=13&direction=a',
                        applicant_status: 'Pending',
                        applicant_rank: '2'
                    },
                    {
                        applicant_id: '003',
                        applicant_name: 'Shivam Aggarwal',
                        applicant_email: 'ShivamAggarwal@gmail.com',
                        applicant_dateOfApplying: '22/05/2018',
                        applicant_resume: 'Shivam Aggarwal.pdf',
                        applicant_solutionLink: 'https://drive.google.com/drive/folders/0ByWO0aO1eI_MaExzRWZ2S0dndjQ?sort=13&direction=a',
                        applicant_status: 'Pending',
                        applicant_rank: '3'
                    },
                    {
                        applicant_id: '004',
                        applicant_name: 'PranavTyagi',
                        applicant_email: 'pranavTyagi',
                        applicant_dateOfApplying: '22/05/2018',
                        applicant_resume: 'pranavTyagi.pdf',
                        applicant_solutionLink: 'https://drive.google.com/drive/folders/0ByWO0aO1eI_MaExzRWZ2S0dndjQ?sort=13&direction=a',
                        applicant_status: 'Rejected',
                        applicant_rank: '4'
                    }

                ]
            }]
        }



        // GET: internship by id
        var internshipById = {
            _id: '1',
            internship_title: 'NodeJs Internship',
            posted_on: '21-05-2018',
            stipend: 'Rs. 10,000',
            no_of_applications: '5',
            type: 'In-Office',
            location: 'Banglore',
            duration: '6',
            category: 'Web Development',
            questionToSolve: 'This is a sample question.',
            aboutInternship: 'this is sample text for about the internship',
            skillsRequired: 'these are the skills required for this internship',
            companyWebsite: 'noteshub.co.in',
            applications: [{
                    _id: '1',
                    applicant_id: '001',
                    applicant_name: 'Aditya Tyagi',
                    applicant_email: 'tyagi.aditya844747@gmail.com',
                    applicant_dateOfApplying: '22/05/2018',
                    applicant_resume: 'aditya_tyagi.pdf',
                    applicant_solutionLink: 'https://drive.google.com/drive/folders/0ByWO0aO1eI_MaExzRWZ2S0dndjQ?sort=13&direction=a',
                    applicant_status: 'Accepted',
                    applicant_rank: 3
                },
                {
                    _id: '2',
                    applicant_id: '002',
                    applicant_name: 'Parv Jain',
                    applicant_email: 'parvJain16@gmail.com',
                    applicant_dateOfApplying: '22/05/2018',
                    applicant_resume: 'parvJain.pdf',
                    applicant_solutionLink: 'https://drive.google.com/drive/folders/0ByWO0aO1eI_MaExzRWZ2S0dndjQ?sort=13&direction=a',
                    applicant_status: 'Pending',
                    applicant_rank: 2
                },
                {
                    _id: '3',
                    applicant_id: '003',
                    applicant_name: 'Shivam Aggarwal',
                    applicant_email: 'ShivamAggarwal@gmail.com',
                    applicant_dateOfApplying: '22/05/2018',
                    applicant_resume: 'Shivam Aggarwal.pdf',
                    applicant_solutionLink: 'https://drive.google.com/drive/folders/0ByWO0aO1eI_MaExzRWZ2S0dndjQ?sort=13&direction=a',
                    applicant_status: 'Pending',
                    applicant_rank: 1
                },
                {
                    _id: '4',
                    applicant_id: '004',
                    applicant_name: 'PranavTyagi',
                    applicant_email: 'pranavTyagi@gmail.com',
                    applicant_dateOfApplying: '22/05/2018',
                    applicant_resume: 'pranavTyagi.pdf',
                    applicant_solutionLink: 'https://drive.google.com/drive/folders/0ByWO0aO1eI_MaExzRWZ2S0dndjQ?sort=13&direction=a',
                    applicant_status: 'Rejected',
                    applicant_rank: 4
                }

            ]
        }



        // POST: add new internship using a company id.
        var addNewInternship = function(companyId, internshipData) {
            //call to api for adding new internship with the companyid and internship data
        }

        return {
            internships: internshipsByCompany.internships,
            internship: internshipById
        };
    }

})();