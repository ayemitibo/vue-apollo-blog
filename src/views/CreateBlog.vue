<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-6 order-md-last d-flex">
      <form
        action="#"
        class="bg-light p-5 contact-form w-100"
        @submit="createPost"
      >
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Blog Title"
            v-model="post.post_title"
          />
        </div>
        <div class="form-group">
          <input
            type="file"
            class="form-control"
            placeholder="Enter file"
            @input="selectImage"
          />
        </div>
        <div class="form-group">
          <input
            type="date"
            class="form-control"
            placeholder="Enter file"
            v-model="post.post_date"
          />
        </div>
        <div class="form-group">
          <textarea
            name=""
            v-model="post.post_detail"
            id=""
            cols="30"
            rows="7"
            class="form-control"
            placeholder="Message"
          ></textarea>
        </div>
        <div class="form-group">
          <input
            type="submit"
            value="Send Message"
            class="btn btn-primary py-3 px-5"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        post_title: "",
        post_image: "",
        post_detail: "",
        post_date: "",
      },
    };
  },
  methods: {
    async createPost(event) {
      try {
        event.preventDefault();
        console.log("here");
        await this.$store.dispatch("createPost", this.post);
      } catch (error) {}
    },
    selectImage(event) {
      this.post.post_image = event.target.files[0];
    },
  },
};
</script>

<style></style>
