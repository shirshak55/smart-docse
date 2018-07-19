<template>
	<div class="row">
    <ResultSemester></ResultSemester>
    <div class="col-md-8">
      <h1 class="page-title">Result Section</h1>
      <ResultFaculty></ResultFaculty>
    </div>
	</div>
</template>

<script>
import ResultSemester from './ResultSemester'
import ResultFaculty from './ResultFaculty'

export default {
  name: 'Result',
  components: {
    ResultSemester,
    ResultFaculty
  }
}
</script>
