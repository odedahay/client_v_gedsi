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
           <div class="row-main">
                <div class="row-main__col">
                    <div class="accordion-main">
                        <div class="tab">
                            <input type="checkbox" id="chck1" class="accordion-main__checkbox">
                            <label class="tab-label is-checked" for="chck1">
                                <div class="tab-label--sub">
                                    <h4>Domain 1: Developing and implementing GEDSI Policy</h4>
                                    <div class="columns">
                                        <div class="column is-3">
                                            <span class="label-indicator">13 of 13 indicators completed</span>
                                        </div>
                                        <div class="column">
                                            <span class="label-indicator">Average: <span class="orange-color is-size-6">1.72</span></span>
                                        </div>
                                    </div>
                                </div>

                            </label>
                            <div class="tab-content">
                                <div class="summary-content">
                                    <div class="columns is-vcentered mt-0 mb-0">
                                        <div class="column is-three-quarters">
                                            <p>1.01 Sex-disaggregated and reliable gender data</p>
                                        </div>
                                        <div class="column has-text-right">
                                            
                                        </div>
                                        <div class="column has-text-right pr-6">
                                            <p></p>
                                        </div>
                                </div>
                                <div class="columns is-vcentered mt-0 mb-0">
                                    <div class="column is-three-quarters">
                                        <p>1.02 Sex-disaggregated and reliable gender data</p>
                                    </div>
                                    <div class="column has-text-right">
                                        <button class="button is-success is-light is-border is-rounded-2">
                                            <font-awesome-icon icon="check" class="mr-0 ml-0"/>
                                        </button>
                                    </div>
                                    <div class="column has-text-right pr-6">
                                        <p>4</p>
                                    </div>
                                </div>
                                <div class="columns is-vcentered mt-0 mb-0">
                                    <div class="column is-three-quarters">
                                        <p>1.03 Sex-disaggregated and reliable gender data Sex-disaggregated and reliable gender data</p>
                                    </div>
                                    <div class="column has-text-right">
                                            <button class="button is-success is-light is-border is-rounded-2">
                                            <font-awesome-icon icon="check" class="mr-0 ml-0"/>
                                        </button>
                                    </div>
                                    <div class="column has-text-right pr-6">
                                        <p>4</p>
                                    </div>
                                </div>
                                <div class="columns is-vcentered mt-0 mb-0">
                                    <div class="column is-three-quarters">
                                        <p>1.04 Sex-disaggregated and reliable gender data</p>
                                    </div>
                                    <div class="column has-text-right">
                                            <button class="button is-success is-light is-border is-rounded-2">
                                            <font-awesome-icon icon="check" class="mr-0 ml-0"/>
                                        </button>
                                    </div>
                                    <div class="column has-text-right pr-6">
                                        <p>4</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="checkbox" id="chck2" class="accordion-main__checkbox">
                            <label class="tab-label" for="chck2">
                                <div class="tab-label--sub">
                                    <h4>Domain 2: GEDSI Laws & Policies (3 indicators)</h4>
                                    <div class="columns">
                                        <div class="column is-3">
                                            <span class="label-indicator">13 of 13 indicators completed</span>
                                        </div>
                                        <div class="column">
                                            <span class="label-indicator">Average: <span class="orange-color is-size-6">1.72</span></span>
                                        </div>
                                    </div>
                                </div>
                                
                            </label>
                            <div class="tab-content">
                                <div class="summary-content">
                                    <div class="columns is-vcentered mt-0 mb-0">
                                        <div class="column is-three-quarters">
                                            <p>1.01 Sex-disaggregated and reliable gender data</p>
                                        </div>
                                        <div class="column has-text-right">
                                            
                                        </div>
                                        <div class="column has-text-right pr-6">
                                            <p></p>
                                        </div>
                                </div>
                                <div class="columns is-vcentered mt-0 mb-0">
                                    <div class="column is-three-quarters">
                                        <p>1.02 Sex-disaggregated and reliable gender data</p>
                                    </div>
                                    <div class="column has-text-right">
                                        <button class="button is-success is-light is-border is-rounded-2">
                                            <font-awesome-icon icon="check" class="mr-0 ml-0"/>
                                        </button>
                                    </div>
                                    <div class="column has-text-right pr-6">
                                        <p>4</p>
                                    </div>
                                </div>
                                <div class="columns is-vcentered mt-0 mb-0">
                                    <div class="column is-three-quarters">
                                        <p>1.03 Sex-disaggregated and reliable gender data Sex-disaggregated and reliable gender data</p>
                                    </div>
                                    <div class="column has-text-right">
                                            <button class="button is-success is-light is-border is-rounded-2">
                                            <font-awesome-icon icon="check" class="mr-0 ml-0"/>
                                        </button>
                                    </div>
                                    <div class="column has-text-right pr-6">
                                        <p>4</p>
                                    </div>
                                </div>
                                <div class="columns is-vcentered mt-0 mb-0">
                                    <div class="column is-three-quarters">
                                        <p>1.04 Sex-disaggregated and reliable gender data</p>
                                    </div>
                                    <div class="column has-text-right">
                                            <button class="button is-success is-light is-border is-rounded-2">
                                            <font-awesome-icon icon="check" class="mr-0 ml-0"/>
                                        </button>
                                    </div>
                                    <div class="column has-text-right pr-6">
                                        <p>4</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab">
                            <input type="checkbox" id="chck3" class="accordion-main__checkbox">
                            <label class="tab-label" for="chck3">
                                <div class="tab-label--sub">
                                    <h4>Domain 3: GEDSI Laws & Policies (3 indicators)</h4>
                                    <div class="columns">
                                        <div class="column is-3">
                                            <span class="label-indicator">13 of 13 indicators completed</span>
                                        </div>
                                        <div class="column">
                                            <span class="label-indicator">Average: <span class="orange-color is-size-6">1.72</span></span>
                                        </div>
                                    </div>
                                </div>
                                
                            </label>
                            <div class="tab-content">
                                <div class="summary-content">
                                    <div class="columns is-vcentered mt-0 mb-0">
                                        <div class="column is-three-quarters">
                                            <p>1.01 Sex-disaggregated and reliable gender data</p>
                                        </div>
                                        <div class="column has-text-right">
                                            
                                        </div>
                                        <div class="column has-text-right pr-6">
                                            <p></p>
                                        </div>
                                </div>
                                <div class="columns is-vcentered mt-0 mb-0">
                                    <div class="column is-three-quarters">
                                        <p>1.02 Sex-disaggregated and reliable gender data</p>
                                    </div>
                                    <div class="column has-text-right">
                                        <button class="button is-success is-light is-border is-rounded-2">
                                            <font-awesome-icon icon="check" class="mr-0 ml-0"/>
                                        </button>
                                    </div>
                                    <div class="column has-text-right pr-6">
                                        <p>4</p>
                                    </div>
                                </div>
                                <div class="columns is-vcentered mt-0 mb-0">
                                    <div class="column is-three-quarters">
                                        <p>1.03 Sex-disaggregated and reliable gender data Sex-disaggregated and reliable gender data</p>
                                    </div>
                                    <div class="column has-text-right">
                                            <button class="button is-success is-light is-border is-rounded-2">
                                            <font-awesome-icon icon="check" class="mr-0 ml-0"/>
                                        </button>
                                    </div>
                                    <div class="column has-text-right pr-6">
                                        <p>4</p>
                                    </div>
                                </div>
                                <div class="columns is-vcentered mt-0 mb-0">
                                    <div class="column is-three-quarters">
                                        <p>1.04 Sex-disaggregated and reliable gender data</p>
                                    </div>
                                    <div class="column has-text-right">
                                            <button class="button is-success is-light is-border is-rounded-2">
                                            <font-awesome-icon icon="check" class="mr-0 ml-0"/>
                                        </button>
                                    </div>
                                    <div class="column has-text-right pr-6">
                                        <p>4</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
.max-width{
    width:1240px;
}
</style>