
<script setup>
// GEDSI Component
import SideNavbar from "../components/SideNavbar.vue"
import TopNavbar from '../components/TopNavbar.vue'

// import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <div class="columns mb-0">
        <side-navbar />      
        <div class="container">
            <top-navbar 
                :title="'Assessments'"
            />
            <!-- Top -->
            <div class="columns is-mobile grey-bg-light">
                <div class="column is-four-fifths">
                    <div class="level mt-3">
                        <div class="level-left">
                            <div class="level-item">
                                <figure class="image is-64x64">
                                    <img class="is-rounded round-stroke" src="@/assets/img/dti_Logo.png">
                                </figure>
                            </div>
                            <div class="level-item">
                                <div>
                                    <h2 class="title-asssesstment mb-0">2021 DTI Baseline GEDSI Capacity Assessment </h2>
                                    <p class="sub-asssesstment">Assessment Period: 01 Dec. 2021 to 31 Dec. 2021</p>
                                    <p class="sub-asssesstment">Assessment Series No.: 2021023</p>
                                </div>
                            </div>
                        </div>
                        <div class="level-right">
                            <div class="level-item has-text-centered mr-5">
                                <div>
                                    <p class="heading">Days to<br>Deadline</p>
                                    <span class="tag is-link is-light is-light-status is-large">17 days</span>
                                </div>
                            </div>
                             <div class="level-item has-text-centered">
                                <div>
                                <p class="heading mb-5">Status</p>
                                <span class="tag is-warning is-light is-light-status is-large">Drafted</span>
                                </div>
                            </div>
                            <div class="level-item has-text-centered">
                                <div>
                                <p class="heading">39 of 39 Indicators<br>Completed</p>
                               <span class="tag is-success is-light is-light-status is-large">100%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             <div class="columns is-mobile grey-border-btm">
                <div class="column is-four-fifths">

                    <ul class="steps has-content-centered p-5">
                        <li class="steps-segment">
                            <span class="steps-marker"></span>
                            <div class="steps-content">
                            <p class="is-size-6">Informed Consent</p>
                            </div>
                        </li>
                        <li class="steps-segment">
                            <span class="steps-marker"></span>
                            <div class="steps-content">
                            <p class="is-size-6">Scorecard</p>
                            </div>
                        </li>
                        <li class="steps-segment is-active">
                            <span class="steps-marker"></span>
                            <div class="steps-content">
                            <p class="is-size-6">Summary</p>
                            </div>
                        </li>
                        </ul>
                </div>
            </div>

            <div class="columns is-mobile">
                <div class="column is-four-fifths">
                   
                    <div class="box is-shadowless">

                        <h3 class="title is-5">Identify which indicators are still pending completion. Click on the link to go that indicator in the Scorecard.</h3>

                        <h3 class="title is-6 has-text-right orange-color">Overall Score: 2.25</h3>


                        <div class="row-main">
                            <div class="row-main__col">
                                <div class="accordion-main">
                                    <div class="tab is-opened">
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
                        
                        <button class="button is-primary mt-5 mb-6">Confirm</button>
                    </div>
                   
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        mounted() {
            // var acc = document.getElementsByClassName("accordion");
            // var i;

            // for (i = 0; i < acc.length; i++) {
            //     acc[i].addEventListener("click", function() {

            //         this.classList.toggle("active");
            //         var panel = this.nextElementSibling;
                    
            //         if (panel.style.maxHeight) {
            //             panel.style.maxHeight = null;
            //         } else {
            //             panel.style.maxHeight = panel.scrollHeight + "px";
            //         } 
            //     });
            // }

        }
    }
</script>

<style lang="scss" scope>
@import '@/assets/variables.scss';
.grey-bg{
  background-color: $table-head-bg!important;
}

.grey-bg-light{
  background-color: $subheader-bg!important;
}

.orange-color{
    color: #F88410;
}

.tab-content .columns{
    border-bottom: 1px solid #A5C9FF;
}
.tab-content .columns:last-child{
    border-bottom: none;
}
.is-rounded-2{
  width: 37px;
  height: 37px;
  line-height: 37px;
  border-radius: 50%;
  font-size: 1.10rem;
  text-align: center;
  
}
.button.is-success.is-border{
    border: 1px solid #6cbe98;
}

.label-indicator{
    font-weight: 400;
    color: #174A84;
    font-size: 1rem;
}

.row-summary{
    display: flex;
    align-content: center;
    align-items: center;
    justify-items: center;
}

input.accordion-main__checkbox {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
// Layout
.row-main {
  display:flex;
  &__col {
    flex:1;
    &:last-child {
      margin-left: 0em;
    }
  }
  &__tabs {
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 4px 4px -2px rgba(0,0,0,0.5);
    }
}
/* Accordion styles */
.accordion-main {
  border-radius: 6px;
  overflow: hidden;
    // box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
  border: 1px solid #A5C9FF
}

.tab {
  width: 100%;
  color: white;
  overflow: hidden;
}
.tab-label {
  display: flex;
  justify-content: space-between;
  padding: 1em;
  background: #EAE7E7;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 1px;
  /* Icon */
}
.tab-label:hover {
  background: #DBDADA;
}
.tab-label::after {
  content: "❯";
  width: 1em;
  height: 1em;
  text-align: center;
  transition: all 0.35s;
  color: #3191EA;
}
.tab-label--sub{
    width: 100%;
}
.tab-content {
  max-height: 0;
  padding: 0 1em;
  color: #2c3e50;
  background: white;
  transition: all 0.35s;
}
.tab-close {
  display: flex;
  justify-content: flex-end;
  padding: 1em;
  font-size: 0.75em;
  background: #2c3e50;
  cursor: pointer;
}
.tab-close:hover {
  background: #1a252f;
}

input.accordion-main__checkbox:checked + .tab-label {
  background: #DBDADA;
}
input.accordion-main__checkbox:checked + .tab-label::after {
  transform: rotate(90deg);
}
input.accordion-main__checkbox:checked ~ .tab-content {
  max-height: 100vh;
  padding: 1em;
}

// for accordion is open 
.tab.is-opened .tab-content{
    max-height: 100vh;
    padding: 1em;
}

.tab.is-opened .tab-label.is-checked::after{
    transform: rotate(90deg);
}

</style>
