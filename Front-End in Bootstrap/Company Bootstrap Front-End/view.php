<?php
	//head
	require 'components/head.php';
	//Navigation
	require 'components/nav.php';
?>

<style type="text/css">
	.internship-post {
		text-decoration: none;
		color: #555;
		transition: .5s;
		border: 1px #ddd solid !important;
		margin-bottom: 20px;
	}
	.internship-post:hover {
		text-decoration: none;
		color: #222;
		background: #ddd;
	}
	.post-header {

	}
	.internship-title {
		margin-bottom: 0;
	}
	.internship-info {

	}
</style>

<div class="content-wrapper">
	<div class="container-fluid">
		
		<!-- Breadcrumbs-->
		<ol class="breadcrumb">
		<li class="breadcrumb-item">
			<a href="#">Review postings</a>
		</li>
		</ol>
		
		 <div class="content">

				<!-- Internship post-->
				<a href="statistics.php" class="internship-post border border-secondary rounded-right d-block">
					<div class="post-header d-flex">
						<div class="mr-auto p-2">
							<h4 class="internship-title">Web development (MEAN Stack)</h4>
						</div>

						<div class="apply-by p-2">
							<p>Posted on <span class="i-postDate">20 March, 2018</span></p>
						</div>

					</div>

					<div class="internship-info">
						<ul>
							<li><strong>Stipend: </strong>Rs. 5,000</li>
							<li><strong>Number of Applications: </strong>15</li>
							<li><strong>Type: </strong>In-Office</li>
						</ul>
					</div>
				</a>
								<!-- Internship post-->
				<a href="statistics.php" class="internship-post border border-secondary rounded-right d-block">
					<div class="post-header d-flex">
						<div class="mr-auto p-2">
							<h4 class="internship-title">Web development (MEAN Stack)</h4>
						</div>

						<div class="apply-by p-2">
							<p>Posted on <span class="i-postDate">20 March, 2018</span></p>
						</div>

					</div>

					<div class="internship-info">
						<ul>
							<li><strong>Stipend: </strong>Rs. 5,000</li>
							<li><strong>Number of Applications: </strong>15</li>
							<li><strong>Type: </strong>In-Office</li>
						</ul>
					</div>
				</a>

				<!-- Internship post-->
				<a href="statistics.php" class="internship-post border border-secondary rounded-right d-block">
					<div class="post-header d-flex">
						<div class="mr-auto p-2">
							<h4 class="internship-title">Web development (MEAN Stack)</h4>
						</div>

						<div class="apply-by p-2">
							<p>Posted on <span class="i-postDate">20 March, 2018</span></p>
						</div>

					</div>

					<div class="internship-info">
						<ul>
							<li><strong>Stipend: </strong>Rs. 5,000</li>
							<li><strong>Number of Applications: </strong>15</li>
							<li><strong>Type: </strong>In-Office</li>
						</ul>
					</div>
				</a>

		</div>
		<!--Form for company profile ends-->
		
	</div><!-- /.container-fluid-->
</div><!-- /.content-wrapper-->

<?php
	//footer
	require 'components/footer.php';
	//Logout Modal
	require 'components/logout.php';
	require 'components/scripts.php';
?>
