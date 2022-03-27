<script setup>
import ProfileModal from "../components/ProfileModal.vue"
</script>

<template>
    <div class="main-top-nav has-shadow">
        <div class="navbar-menu">
          <div class="navbar-start">
            <div class="navbar-item">
                <h1 class="main-top-nav__title">{{title}}</h1>
            </div>
          </div>
          <div class="navbar-end">
            <a class="navbar-item"><font-awesome-icon icon="comment" class="mr-3"/> Contact Us</a>
            <a class="navbar-item"><font-awesome-icon icon="gear" class="mr-3"/>Resources</a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link"><font-awesome-icon icon="user" class="mr-3"/> Username</a>
              <div class="navbar-dropdown">
                <!-- <a class="navbar-item">My Profile</a> -->
                <ProfileModal />
                <hr class="navbar-divider">
                <a class="navbar-item">Logout</a>
              </div>
            </div> 
          </div>
        </div>  
    </div>
      
</template>


<script>

 export default {
   props:{
     title:{
       type: String,
     },
   }
 }

// defineProps({
//   title: {
//     type: String,
//     required: true
//   }
// })
</script>
<style scoped>
.main-top-nav.has-shadow {
    -webkit-box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);
    box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);
}
</style>