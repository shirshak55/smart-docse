<template>
	<div class='row'>
		<div class="col-md-3">
			<div class="list-group list-group-transparent mb-0">
				<router-link to="/news/all" class="list-group-item list-group-item-action d-flex align-items-center" active-class='active'>
					<span class="icon mr-3"><i class="fe fe-inbox"></i></span>
					All News
				</router-link>
				<router-link to="/news/ku" class="list-group-item list-group-item-action d-flex align-items-center" active-class='active'>
					<span class="icon mr-3"><i class="fe fe-inbox"></i></span>
					KU Related News
				</router-link>
				<router-link to="/news/ku" class="list-group-item list-group-item-action d-flex align-items-center" active-class='active'>
					<span class="icon mr-3"><i class="fe fe-inbox"></i></span>
					DOCSE Related News
				</router-link>
				<router-link to="/news/ku" class="list-group-item list-group-item-action d-flex align-items-center" active-class='active'>
					<span class="icon mr-3"><i class="fe fe-inbox"></i></span>
					Other News
				</router-link>
			</div>
		</div>
		
		<div class="col-md-9">
			<div class="card">
				<div class="card-header">
					<h3 class='card-title'>KU closing today</h3>
				</div>
				<div class="card-body">
					<p>We heard KU will be closed for saturday</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'news'
}
</script>