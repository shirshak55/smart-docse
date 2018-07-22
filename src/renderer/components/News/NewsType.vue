<template>
  <div class="col-md-4">
    <div class="list-group list-group-transparent mb-0">
      <a href="#" v-for="type in get_types" @click="set_type(type)" class="list-group-item list-group-item-action d-flex align-items-center" :class="{active: is_active((type))}">
        <span class="icon mr-3"><i class="fe fe-inbox"></i></span>
        {{ type }}
      </a>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters: newsTypeGetter, mapActions: newsTypeActions } = createNamespacedHelpers('NewsType')

export default {
  name: 'NewsType',
  created () {
  },
  computed: {
    ...newsTypeGetter(['get_types', 'is_active'])
  },
  methods: {
    ...newsTypeActions(['set_type'])
  }
}
</script>
