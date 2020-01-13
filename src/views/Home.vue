<template>
  <div class="page-wrapper">
    <h1 class="home-page-title">How it works</h1>
    <ol>
      <li>Choose Your Language</li>
      <li>Choose Your level</li>
      <li>Choose how many words You'd like to learn per day</li>
      <li>Learn Your first word or replace it with another one</li>
      <li>Check the Video</li>
    </ol>
    <img alt="logo-bento" class="logo" src="@/assets/img/bento-starter.svg" />
    <a
      rel="noopener"
      class="documentation-link"
      target="_blank"
      href="/products"
      >Try now →</a
    >
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head() {
    return {
      title: {
        inner: 'Home'
      },
      meta: [
        {
          name: 'description',
          content: `${this.appTitle} home page`,
          id: 'desc'
        }
      ]
    }
  },
  computed: mapState('app', ['appTitle'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    width: 123px;
    margin-bottom: 3rem;
  }

  .home-page-title {
    text-align: center;
  }

  .documentation-link {
    display: inline-block;
    font-size: 1.2rem;
    color: #fff;
    background-color: #5d6788;
    padding: 0.8rem 1.6rem;
    border-radius: 4px;
    transition: background-color 0.1s ease;
    box-sizing: border-box;
    text-decoration: none;
    width: fit-content;
    font-weight: 500;
  }
}
</style>
