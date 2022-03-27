
<template>
  <div>
    <a @click="isOpen = true" class="navbar-item">Profile </a>
    <div :class="['modal is-clipped', {'is-active': isOpen}]">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Profile</p>
          <button
            @click="isOpen = false"
            class="delete"
            aria-label="close"></button>
        </header>
        <section class="modal-card-body modal-width">
            <div class="columns is-vcentered mt-0 mb-0">
               <div class="column is-4"><p>Email (User Name)</p></div>
               <div class="column"><span class="button is-light"><p>rcverdillo@dti.gov.ph</p></span></div>
            </div>
            <div class="columns is-vcentered mt-0 mb-0">
               <div class="column is-4"><p>Fist Name</p></div>
               <div class="column"><span class="button is-light"><p>Romell</p></span></div>
           </div>
            <div class="columns is-vcentered mt-0 mb-0">
               <div class="column is-4"><p>Last Name</p></div>
               <div class="column"><span class="button is-light"><p>Verdillo</p></span></div>
           </div>
            <div class="columns is-vcentered mt-0 mb-0">
               <div class="column is-4"><p>Middle Initial</p></div>
               <div class="column"><span class="button is-light"><p>C</p></span></div>
               <div class="column"><span class="button is-light"><p>MR</p></span></div>
           </div>
            <div class="columns is-vcentered mt-0 mb-0">
               <div class="column is-4"><p>Position Type</p></div>
               <div class="column"><span class="button is-light"><p>Respondent</p></span></div>
           </div>
            <div class="columns mt-0 mb-0">
               <div class="column is-4"><p>GEDSI Assessment Role</p></div>
               <div class="column"><span class="button is-light"><p>Respondent</p></span></div>
           </div>
           <hr>            
          <div class="columns">
               <div class="column">
                   <p>Position</p>
                   <span class="button is-light"><p>Marketing</p></span>
               </div>
               <div class="column">
                   <p>Position Level</p>
                   <span class="button is-light"><p>Manager</p></span>
               </div>
           </div>
            <div class="columns">
               <div class="column">
                   <p>Salary Grade</p>
                   <span class="button is-light"><p>XXX</p></span>
               </div>
               <div class="column">
                   <p>Work Unit</p>
                   <span class="button is-light"><p>XXX</p></span>
               </div>
           </div>
            <div class="columns">
               <div class="column">
                   <p>Division</p>
                   <span class="button is-light"><p>XXX</p></span>
               </div>
               <div class="column">
                   <p>Station</p>
                   <span class="button is-light"><p>XXX</p></span>
               </div>
           </div>
            <div class="columns">
               <div class="column">
                   <p>Province</p>
                   <span class="button is-light"><p>XXX</p></span>
               </div>
               <div class="column">
                   <p>Municipality</p>
                   <span class="button is-light"><p>XXX</p></span>
               </div>
           </div>
        </section>
        <footer class="modal-card-foot">
          <button @click="isOpen = false" class="button is-success">Close</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isOpen: false
      }
    }
  }
</script>

<style scoped>

.modal-card{
    text-align: left;
}
.max-width{
    width:960px;
}
</style>