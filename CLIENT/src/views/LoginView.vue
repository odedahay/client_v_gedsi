<script setup>

  // GEDSI Component
  import SideNavbar from "../components/SideNavbar.vue"
  import TopNavbar from '../components/TopNavbar.vue'

  import { RouterLink, RouterView } from 'vue-router'
  import HelloWorld from '@/components/HelloWorld.vue'

</script>

<template>
		<div class="columns mb-0">

      <SideNavbar />      
  
			<div class="container">
         <TopNavbar />
          
          
          <div class="columns is-mobile is-centered is-vcentered mb-6">
            <div class="column is-5 is-vcentered">

              <form class="box">
                  <div class="top-form-header">
                    <p class="top-form-header__content">To use the GEDSI Scorecard System, login with the credentials emailed to you.</p>
                  </div>
                  <div class="field">
                    <label class="label">Username</label>
                    <div class="control">
                    <input class="input" type="email" placeholder="e.g. webmaster">
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                      <input class="input" type="password" placeholder="********">
                    </div>
                    <!-- <div class="field is-grouped is-grouped-right mt-1">
                      <p class="control">
                        <a class="is-primary is-size-6">
                          Forgot password
                        </a>
                      </p>
                    </div> -->
                  </div>
                  <button class="button is-primary mt-5">Sign in</button>
              </form>
            </div>
          </div>

			</div>
		</div>
</template>

<style lang="scss">
// @import 'node_modules/bulma/bulma.sass';
@import '@/assets/variables.scss';
//@import '@/assets/base.scss'; 

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
