<template>
	<div>
    <div class="alert alert-success alert-dismissible" v-if="get_success_message"><i class="fe fe-bell mr-2" aria-hidden="true"></i> {{ get_success_message }}</div>

    <div class="alert alert-danger" v-if="get_errors" v-for="(error,index) in get_errors" :key="index">{{ error[0] }}</div>

    <form class="card" @submit.prevent="send_contact_to_api">
      <div class="card-body">
              <div class="form-group">
                <label for="name" class="form-label">Your Name</label>
                <input type="text" class="form-control" id="name" placeholder="Enter Subject" v-model="name">
              </div>
              <div class="form-group">
                <label for="subject" class="form-label">Subject</label>
                <input type="text" class="form-control" id="subject" placeholder="Enter Subject" v-model="subject">
              </div>

              <div class="form-group">
                <label for="email" class="form-label">Email Address</label>
                <input type="text" class="form-control" id="email" placeholder="youremail@example.com" v-model="email">
              </div>

              <div class="form-group">
                <label for="content">Content</label>
                <textarea id="content" class="form-control" v-model="content"></textarea>
              </div>

              <button type="submit" class="btn btn-primary">Send</button>
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
    ...contactGetter(['get_name', 'get_subject', 'get_email', 'get_content', 'get_success_message', 'get_errors']),
    name: {
      set (name) {
        this.SET_NAME(name)
      },
      get () {
        return this.get_name
      }
    },
    subject: {
      set (subject) {
        this.SET_SUBJECT(subject)
      },
      get () {
        return this.get_subject
      }
    },
    email: {
      set (email) {
        this.SET_EMAIL(email)
      },
      get () {
        return this.get_email
      }
    },
    content: {
      set (content) {
        this.SET_CONTENT(content)
      },
      get () {
        return this.get_content
      }
    }
  },
  methods: {
    ...contactMutations(['SET_NAME', 'SET_EMAIL', 'SET_SUBJECT', 'SET_CONTENT']),
    ...contactActions(['send_contact_to_api'])
  }
}
</script>
