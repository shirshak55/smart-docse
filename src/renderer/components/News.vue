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
			<div class="card" v-for="news in getAllNews">
				<div class="card-header">
					<h3 class='card-title'>{{ news.title}}</h3>
				</div>
				<div class="card-body d-flex flex-column">
          <img :src="news.cover_image_url" alt="">
					<p v-html="news.content"></p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers('news')

export default {
  name: 'news',
  created () {
    this.get_all_news()
  },
  computed: {
    ...mapGetters(['getAllNews'])
  },
  methods: {
    ...mapActions(['get_all_news'])
  }

}
</script>
