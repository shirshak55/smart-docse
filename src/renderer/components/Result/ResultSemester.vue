<template>
  <div class="col-md-3">
    <div class="list-group list-group-transparent mb-0">
      <a href="#" v-for="semester in get_semesters" @click="set_semester(semester)" class="list-group-item list-group-item-action d-flex align-items-center" :class="{active: is_active((semester))}">
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

