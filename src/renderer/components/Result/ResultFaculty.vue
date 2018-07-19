<template>
  <div class="btn btn-list">
    <button class="btn btn-primary" v-for="faculty in get_faculties" @click="set_faculty(faculty)" :class="{['btn-success']: is_active((faculty))}">{{ faculty }}</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters: resultFacultyGetter, mapActions: resultFacultyActions } = createNamespacedHelpers('ResultFaculty')

export default {
  name: 'ResultFaculty',
  computed: {
    ...resultFacultyGetter(['get_faculties', 'is_active'])
  },
  methods: {
    ...resultFacultyActions(['set_faculty'])
  }
}
</script>
