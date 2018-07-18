<template>
	<div>
		<h3 class='card-title'>Contact</h3>

    <form class="card">
      <div class="card-body">
          <div class="alert alert-danger">Sending spam mail can result expulsion and legal punishments</div>
              <div class="form-group">
                <label for="subject" class="form-label">Subject</label>
                <input type="text" class="form-control" id="subject" placeholder="Enter Subject" v-model="subject">
              </div>

              <div class="form-group">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" class="form-control" id="email" placeholder="youremail@example.com" v-model="email">
              </div>

              <div class="form-group">
                <label for="content">Content</label>
                <textarea id="content" class="form-control" v-model="content"></textarea>
              </div>
      </div>
    </form>
	</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters: contactGetter, mapActions: contactActions, mapMutations: contactMutations } = createNamespacedHelpers('Contact')

export default {
  name: 'contact',
  computed: {
    ...contactGetter(['get_name', 'get_subject', 'get_email', 'get_content']),
    content: {
      set(content){
        this.SET_CONTENT(content)
      },
      get() {
        this.get_name
      }
    }
  },
  methods: {
    ...contactMutations(['SET_NAME', 'SET_EMAIL', 'SET_SUBJECT', 'SET_CONTENT'])
    ...contactActions(['send_contact_to_api'])
  }
}
</script>
