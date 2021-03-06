<?php
	//head
	require 'components/head.php';
	//Navigation
	require 'components/nav.php';
?>


<div class="content-wrapper">
	<div class="container-fluid">
		
		<!-- Breadcrumbs-->
		<ol class="breadcrumb">
		<li class="breadcrumb-item">
			<a href="#">Company Profile</a>
		</li>
		</ol>
		
		<!-- COMPANY PROFILE BEGINS -->
		<div id="myProfile-form">
		    <form>
		        <div class="form-row">
		            <div class="form-group col-md-6">
		                <label for="companyName">Company Name</label>
		                <input type="text" name="companyName" class="form-control" id="companyName" placeholder="Comapny Name" readonly>
		            </div>
		            <div class="form-group col-md-6">
		                <label class="" for="location">Location</label>
		                <select class="custom-select" id="location">
		                  <option selected>Choose...</option>
		                  <option value="1">New Delhi</option>
		                  <option value="2">Banglore</option>
		                  <option value="3">Mumbai</option>
		                </select>
		            </div>
		        	<div class="form-group col-md-6">
		        	    <label for="establishmentDate">Date of Establishment</label>
		        	    <input type="date" class="form-control" id="establishmentDate" readonly>
		        	</div>

		        	<div class="form-group col-md-6">
		        	    <label for="Email">Company Email</label>
		        	    <input type="email" class="form-control" id="email" placeholder="abc@yourcompany.com">
		        	</div>

		        	<div class="form-group col-md-6">
		        	    <label for="employees">Number of Employees</label>
		        	    <select class="custom-select" id="employees">
		                  <option selected>Choose...</option>
		                  <option value="1">1-5</option>
		                  <option value="2">5-20</option>
		                  <option value="3">21-50</option>
		                  <option value="1">51-100</option>
		                  <option value="2">100-500</option>
		                  <option value="3">&gt;500</option>
		                </select>
		        	</div>

		        </div>

		        <div class="form-row">
		        <div class="form-group col-md-6">
		            <label for="description">Company Description</label>
		            <textarea name="description" class="form-control" id="description" placeholder="Company description"></textarea>
		        </div>
		        </div>

		    </form>
		    <button class="btn btn-primary" data-toggle="modal" data-target="#updateConfirmation" id="btn-update">Update</button>
		</div>
		<!--Form for company profile ends-->
		
		<!-- Profile Update Modal -->
		<div class="modal fade" id="updateConfirmation" tabindex="-1" role="dialog" aria-labelledby="updateConfirmationTitle" aria-hidden="true">
		    <div class="modal-dialog modal-dialog-centered" role="document">
		        <div class="modal-content">
		            <div class="modal-header">
		                <h5 class="modal-title" id="exampleModalLongTitle">Are You Sure?</h5>
		                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		    				<span aria-hidden="true">&times;</span>
						</button>
		            </div>
		            <div class="modal-body">
		                <p>Are you sure with your changes, because these will be reflected to your employer.</p>
		            </div>
		            <div class="modal-footer">
		                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
		                <button type="button" class="btn btn-primary">Save changes</button>
		            </div>
		        </div>
		    </div>
		</div>
	
	</div><!-- /.container-fluid-->
</div><!-- /.content-wrapper-->

<?php
	//footer
	require 'components/footer.php';
	//Logout Modal
	require 'components/logout.php';
	require 'components/scripts.php';
?>
