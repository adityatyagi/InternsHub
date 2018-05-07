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
			<a href="#">Add new internships</a>
		</li>
		</ol>
		
		<!-- Add Internship form BEGINS -->
		<div id="addNew-form">
			<form>
				<div class="form-row">
					<div class="form-group col-md-6">
						<label for="companyName">Title of Internship</label>
						<input type="text" name="title" class="form-control" id="title" placeholder="Title of Internship" readonly>
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
						<label class="" for="category">Category</label>
						<select class="custom-select" id="category">
						  <option selected>Choose...</option>
						  <option value="1">Web development</option>
						  <option value="2">Graphic design</option>
						  <option value="3">UX Design</option>
						</select>
					</div>
					<div class="form-group col-md-6">
						<label class="" for="type">Type</label>
						<select class="custom-select" id="Type">
						  <option selected>Choose...</option>
						  <option value="1">In-office</option>
						  <option value="2">Work from Home</option>
						  <option value="3">Part-time</option>
						</select>
					</div>
					
					<div class="form-group col-md-6">
						<label for="stipend">Stipend</label>
						<span class="col-md-9 pull-right">
						<input type="checkbox" name="unpaid" id="unpaid"/>
						<label for="unpaid">unpaid</label>
						</span>
						<input type="number" name="stipend" class="form-control" id="stipend">
					</div>
					
					<div class="form-group col-md-6">
						<label class="" for="duration">Duration</label>
						<input type="number" class="form-control" id="duration" placeholder="duration in months" max="12">
					</div>

					<div class="form-group col-md-6">
						<label for="website">Company website</label>
						<input type="website" class="form-control" id="website" placeholder="Company Webiste (if available)">
					</div>

				</div>

				<div class="form-row">
				<div class="form-group col-12">
					<label for="question">Question to Solve</label>
					<textarea name="question" class="form-control" id="question" placeholder="Question to solve"></textarea>
				</div>
				<div class="form-group col-12">
					<label for="about">Abbout the Internship</label>
					<textarea name="about" class="form-control" id="about" placeholder="About the internship"></textarea>
				</div>
				<div class="form-group col-12">
					<label for="skills">Skills required</label>
					<textarea name="skills" class="form-control" id="skills" placeholder="Skills required for the internship"></textarea>
				</div>
				</div>

			</form>
			<button class="btn btn-success pull-right" data-toggle="modal" data-target="#addInternshipConfirmation" id="">Post internship</button>
		</div>
		<!--Form for add internship ends-->
		
		<!-- Add internship confirm Modal -->
		<div class="modal fade" id="addInternshipConfirmation" tabindex="-1" role="dialog" aria-labelledby="updateConfirmationTitle" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLongTitle">Are You Sure?</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
						<button type="button" class="btn btn-primary">Yes, Post now</button>
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

<script>
$('input[name="unpaid"]').change(function(){
	if(!$('#stipend').attr('readonly'))
		$('#stipend').attr("readonly","readonly");
	else {
		$('#stipend').removeAttr("readonly");	
	}
});
</script>
