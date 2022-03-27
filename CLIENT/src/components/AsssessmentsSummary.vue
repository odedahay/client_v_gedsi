<template>
  <div>
    <button
      @click="isOpen = true"
      class="button is-block is-primary mt-5">Summary
    </button>
    <div :class="['modal is-clipped', {'is-active': isOpen}]">
      <div class="modal-background"></div>
      <div class="modal-card max-width">
        <header class="modal-card-head">
          <p class="modal-card-title">Summary</p>
          <button
            @click="isOpen = false"
            class="delete"
            aria-label="close"></button>
        </header>
        <section class="modal-card-body modal-width">
          Summary table here!
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
.max-width{
    width:960px;
}
</style>