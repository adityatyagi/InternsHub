<?php
	//head
	require 'components/head.php';
	//Navigation
	require 'components/nav.php';
?>

<style type="text/css">
	#leaderboard td,
	#leaderboard th {
		vertical-align: middle;
	}
	.submission-tile {

	}
	.submission-name {
		font-size: 18px;
		font-weight: bold;
	}
	.submission-rank {
		width: 50px;
	}
</style>

<div class="content-wrapper">
	<div class="container-fluid">
		
		<!-- Breadcrumbs-->
		<ol class="breadcrumb">
		<li class="breadcrumb-item">
			<a class="btn btn-primary" href="#">Statistics</a>
			<a class="btn btn-default" href="review.php">Review Internship</a>
		</li>
		</ol>
		
		<div class="pb-2" id="">
			<div class="card card-body">
				<h5>Leaderboard</h5>

				<table class="table" id="leaderboard">
					<thead class="thead-dark">
						<tr>
							<th scope="col">Rank</th>
							<th scope="col">Name</th>
							<th scope="col">Mail</th>
							<th scope="col">Status</th>
							<th scope="col">Email</th>
						</tr>
					</thead>
					<tbody>
						<tr class="table-success">
							<th scope="row">1</th>
							<td>Aditya Tyagi</td>
							<td>tyagi@gmail.com</td>
							<td>Accepted</td>
							<td><button class="btn btn-success" disabled="">Sent</button></td>
						</tr>
						<tr class="table-success">
							<th scope="row">2</th>
							<td>Aditya Tyagi</td>
							<td>tyagi@gmail.com</td>
							<td>Accepted</td>
							<td><button class="btn btn-success">Send mail</button></td>
						</tr>
						<tr class="table-success">
							<th scope="row">3</th>
							<td>Aditya Tyagi</td>
							<td>tyagi@gmail.com</td>
							<td>Accepted</td>
							<td><button class="btn btn-success">Send mail</button></td>
						</tr>
						<tr>
							<th scope="row">4</th>
							<td>Pranav Tyagi</td>
							<td>tyagi@gmail.com</td>
							<td>Decision Pending</td>
							<td></td>
						</tr>
						<tr>
							<th scope="row">5</th>
							<td>Saksham Tyagi</td>
							<td>tyagi@gmail.com</td>
							<td>Decision Pending</td>
							<td></td>
						</tr>
						<tr>
							<th scope="row">6</th>
							<td>Anant Tyagi</td>
							<td>tyagi@gmail.com</td>
							<td>Decision Pending</td>
							<td></td>
						</tr>
						<tr class="table-danger">
							<th scope="row">7</th>
							<td>Ayush Tyagi</td>
							<td>tyagi@gmail.com</td>
							<td>Rejected</td>
							<td><button class="btn btn-danger" disabled="">Rejected</button></td>
						</tr>
					</tbody>
				</table>
			</div>
			</div>

			<div class="" id="">
				<div class="card card-body">
				<h5>Submissions</h5>
				<div class="card mb-2 submission-tile">
				  <div class="card-header">
				    <span class="submission-name">
				    	Parv Jain
				    </span>
				    <form class="pull-right m-0">
				    	<label for="rank" class="m-0">Rank</label>
				    	<input class="submission-rank" type="number" name="rank" max="10" min="1">
				    </form>
				  </div>
				  <div class="card-body">
				    <div class="form-row">
						<div class="form-group col-md-3">
						<label for="companyName">Solution link</label>
						</div>

						<div class="form-group col-md-6">
						<input type="text" name="title" class="form-control" id="title" placeholder="Drive link" value="https://drive.google.com/sdvckjd6sdtfft" readonly>
						</div>
						<div class="form-group col-md-3">
							<a href="https://drive.google.com/sdvckjd6sdtfft" class="w-100 btn btn-default">View</a>
						</div>
					</div>
					<div class="form-row">
						<div class="form-group col-md-3">
						<label for="companyName">Resume</label>
						</div>
						<div class="form-group col-md-9">
							<a href="#" class="w-100 btn btn-primary">Click here to view resume</a>
						</div>
					</div>
				  </div>
				  <div class="card-footer text-muted">
				    Applied on 
				    <span class="submission-date">
				    	April 11, 2018
				    </span>
				    <button class="btn btn-success pull-right mx-1 submission-accept" data-toggle="modal" data-target="#acceptSubmissionConfirmation">Accept</button>
				    <button class="btn btn-danger pull-right mx-1 submission-reject">Reject</button>
				  </div>
				</div>
				<div class="card mb-2 alert-danger submission-tile">
				  <div class="card-header">
				    <span class="submission-name">
				    	Parv Jain
				    </span>
				    <form class="pull-right m-0">
				    	<label for="rank" class="m-0">Rank</label>
				    	<input class="submission-rank" type="number" name="rank" max="10" min="1">
				    </form>
				  </div>
				  <div class="card-body">
				    <div class="form-row">
						<div class="form-group col-md-3">
						<label for="companyName">Solution link</label>
						</div>

						<div class="form-group col-md-6">
						<input type="text" name="title" class="form-control" id="title" placeholder="Drive link" value="https://drive.google.com/sdvckjd6sdtfft" readonly>
						</div>
						<div class="form-group col-md-3">
							<a href="https://drive.google.com/sdvckjd6sdtfft" class="w-100 btn btn-default">View</a>
						</div>
					</div>
					<div class="form-row">
						<div class="form-group col-md-3">
						<label for="companyName">Resume</label>
						</div>
						<div class="form-group col-md-9">
							<a href="#" class="w-100 btn btn-primary">Click here to view resume</a>
						</div>
					</div>
				  </div>
				  <div class="card-footer text-muted">
				    Applied on 
				    <span class="submission-date">
				    	April 11, 2018
				    </span>
				    <button class="btn btn-success pull-right mx-1 submission-accept" data-toggle="modal" data-target="#acceptSubmissionConfirmation">Accept</button>
				    <button class="btn btn-danger pull-right mx-1 submission-reject">Reject</button>
				  </div>
				</div>
				</div>
			</div>
				
		<!-- Update confirmation Modal -->
		<div class="modal fade" id="acceptSubmissionConfirmation" tabindex="-1" role="dialog" aria-labelledby="updateConfirmationTitle" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLongTitle">Are you sure to accept?</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
						<button type="button" class="btn btn-primary" id="accept-confirm">Yes</button>
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
	$(document).ready(function(){
		$(document).on('click','.submission-accept',function() {

			$(this).parents('.submission-tile').addClass('alert-success');
			$(this).parents('.submission-tile').removeClass('alert-danger');
		});
		$(document).on('click','.submission-reject',function() {
			$(this).parents('.submission-tile').addClass('alert-danger');
			$(this).parents('.submission-tile').removeClass('alert-success');
		});
	});

</script>
