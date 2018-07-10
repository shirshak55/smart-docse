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
	            <a href="/" class="nav-link active"><i class="fe fe-home"></i> Dashboard</a>
	          </li>
	          <li class="nav-item dropdown">
	            <a href="javascript:void(0)" class="nav-link" data-toggle="dropdown"><i class="fe fe-box"></i> News</a>
	            <div class="dropdown-menu dropdown-menu-arrow">
	              <a href="/news/relvant" class="dropdown-item ">Relvant</a>
	              <a href="/news/ku-news" class="dropdown-item ">KU News</a>
	              <a href="/news/docse-news" class="dropdown-item ">DOCSE News</a>
	            </div>
	          </li>
	          <li class="nav-item dropdown">
	            <a href="/result" class="nav-link"><i class="fe fe-check-square"></i> Result</a>
	          </li>
	          <li class="nav-item">
	            <a href="contact" class="nav-link"><i class="fe fe-image"></i> Contact Us</a>
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