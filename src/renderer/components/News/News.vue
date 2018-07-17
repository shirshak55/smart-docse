<template>
	<div class='row'>
    <NewsType/>
		<div class="col-md-9">
			<div class="card" v-for="news in getNewsByType">
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
import NewsType from './NewsType'

const { mapGetters: newsGetter, mapActions: newsActions } = createNamespacedHelpers('News')

export default {
  name: 'news',
  components: {
    NewsType
  },
  created () {
    this.get_all_news()
  },
  computed: {
    ...newsGetter(['getNewsByType'])
  },
  methods: {
    ...newsActions(['get_all_news'])

  }

}
</script>
