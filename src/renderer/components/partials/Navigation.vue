<template>
	<div class="header collapse d-lg-flex p-0" id="headerMenuCollapse">
	  <div class="container">
	    <div class="row align-items-center">
	      <div class="col-lg-3 ml-auto">
	        <form class="input-icon my-3 my-lg-0" novalidate="novalidate">
	          <input type="search" class="form-control header-search" placeholder="Search…" tabindex="1">
	          <div class="input-icon-addon">
	            <i class="fe fe-search"></i>
	          </div>
	        </form>
	      </div>
	      <div class="col-lg order-lg-first">
	        <ul class="nav nav-tabs border-0 flex-column flex-lg-row">
	          <li class="nav-item">
	            <router-link to="/dashboard" class="nav-link" active-class='active'><i class="fe fe-home"></i> Dashboard</router-link>
	          </li>
	           <li class="nav-item dropdown">
	            <router-link to="/news" class="nav-link" active-class='active'><i class="fe fe-check-cloud-dizzle"></i> News</router-link>
	          </li>
	          <li class="nav-item dropdown">
	            <router-link to="/result" class="nav-link" active-class='active'><i class="fe fe-check-square"></i> Result</router-link>
	          </li>
	          <li class="nav-item">
	            <router-link to="/contact" class="nav-link" active-class='active'><i class="fe fe-inbox"></i> Contact Us</router-link>
	          </li>
	          <li class="nav-item">
	            <router-link to="/about-us" class="nav-link" active-class='active'><i class="fe fe-airplay"></i> About Us</router-link>
	          </li>
	        </ul>
	      </div>
	    </div>
	  </div>
	</div>
</template>

<script>
export default{

}
</script>