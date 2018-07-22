<template>
	<div class="row">
    <ResultSemester></ResultSemester>
    <div class="col-md-8 mt-4">
      <ResultFaculty></ResultFaculty>
      <div class="card" v-for="resultSet in getFilteredResults">
        <div class="card-header">
          <h3 class="card-title">"{{ resultSet.subject }}" Results For {{ resultSet.semester}} Semester For {{ resultSet.faculty }}</h3>
        </div>
        <div class="table-responsive">
          <table class="table card-table table-vcenter text-nowrap">
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="result in resultSet.result_data">
                <td>{{ result.name }}</td>
                <td>{{ result.roll }}</td>
                <td>{{ result.marks }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
	</div>
</template>

<script>
import ResultSemester from './ResultSemester'
import ResultFaculty from './ResultFaculty'
import { createNamespacedHelpers } from 'vuex'
const { mapGetters: resultGetter, mapActions: resultActions } = createNamespacedHelpers('Result')

export default {
  name: 'Result',
  components: {
    ResultSemester,
    ResultFaculty
  },
  created () {
    this.get_all_results()
  },
  computed: {
    ...resultGetter(['getFilteredResults'])
  },
  methods: {
    ...resultActions(['get_all_results'])
  }
}
</script>
