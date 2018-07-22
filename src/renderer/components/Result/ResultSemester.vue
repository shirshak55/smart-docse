<template>
  <div class="col-md-4">
    <div class="list-group list-group-transparent mb-0">
      <a href="#" v-for="(semester,index) in get_semesters" @click="set_semester(index+1)" class="list-group-item list-group-item-action d-flex align-items-center" :class="{active: is_active((index+1))}">
        <span class="icon mr-3"><i class="fe fe-inbox"></i></span>
        {{ semester }}
      </a>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters: resultSemesterGetter, mapActions: resultSemesterActions } = createNamespacedHelpers('ResultSemester')

export default {
  name: 'ResultSemester',
  computed: {
    ...resultSemesterGetter(['get_semesters', 'is_active'])
  },
  methods: {
    ...resultSemesterActions(['set_semester'])
  }
}
</script>

