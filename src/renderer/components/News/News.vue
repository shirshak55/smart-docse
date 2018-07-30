<template>
	<div class='row'>
    <NewsType/>
		<div class="col-md-8">
			<div  class="card" v-for="news in getNewsByType" :key="news.title">
				<div class="card-header">
					<h3 class='card-title'>{{ news.title}}</h3>
				</div>
				<div class="card-body d-flex flex-column">
          <!-- <img :src="news.cover_image_url"> -->
					<p v-html="news.content"></p>
				</div>
			</div>
      <template v-if="getNewsByType.length === 0">
        <div class="card">
          <div class="card-body">
            Sorry. No News found on this type.
          </div>
        </div>
      </template>
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
