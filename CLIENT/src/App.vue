<script setup>
  import WebHeader from "./components/WebHeader.vue"
  import WebFooter from "./components/WebFooter.vue"
</script>

<template>
  <div id="main_container">
    <web-header />
      <router-view />
    <web-footer />
  </div>

</template>


<style lang="scss">
@import 'node_modules/bulma/bulma.sass';
@import "node_modules/bulma-steps-component/bulma-steps.sass";
@import '@/assets/variables.scss';
@import '@/assets/base.scss'; 

.main-top-nav{
    align-items: stretch;
    background-color: #ededed;
    min-height: 3.5rem;
    position: relative;
    text-align: center;
    margin-top: 14px;
    margin-left: -15px;
    margin-right: -15px;

    &__title{
      font-size: 2rem;
      font-weight: 600;
      color: $primary-blue;
      padding-left: 20px;
      padding-top: 10px;
    }
}

.top-form-header{
  padding: 10px 30px 20px 30px;
  background-color: $primary-blue;
  margin-top: -20px;
  margin-left: -20px;
  margin-right: -20px;
  margin-bottom: 30px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  
  &__content{
    margin-top: 15px;
    color: #fff;
    font-size: 1.2rem;
  }

}

.columns.is-vcentered {
  margin-top: 3rem;
  display: flex;
  align-content: center; /* used this for multiple child */
  align-items: center; /* if an only child */
}

</style>
