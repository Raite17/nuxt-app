<template>
  <el-card
    shadow="hover"
    :body-style="{padding: 0}"
    class="post"
  >
  <header slot="header" class="post-header">
    <h3>Post Title</h3>
    <small>
      <i class="el-icon-time"></i>
      {{new Date().toLocaleString()}}
    </small>
  </header>
  <div class="post-body">
      <img
          src="https://cdn.tripzaza.com/ru/destinations/files/2017/09/Berlin-e1505798693967.jpg"
          alt="post-image"
          class="post-image">
  </div>
  <footer class="post-footer">
    <el-button round @click="openPost">Открыть</el-button>
    <span>
      <i class="el-icon-message"></i>
      12
    </span>
  </footer>
  </el-card>
</template>

<script>
export default {
  methods: {
    openPost() {
      console.log('Open post')
    }
  }
}
</script>

<style lang="scss" scoped>
  .post {
    margin-bottom: 1.5rem;
  }

  .post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .post-body {
    // margin-bottom: 1rem;
  }

  .post-image{
    width: 100%;
    height: auto;
  }


  .post-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

  }
</style>
