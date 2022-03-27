
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

                        <button class="accordion">Section 1</button>
                        <div class="panel">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>

                        <button class="accordion">Section 2</button>
                        <div class="panel">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>

                        <button class="accordion">Section 3</button>
                        <div class="panel">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
            var acc = document.getElementsByClassName("accordion");
            var i;

            for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function() {

                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    } 
                });
            }

        }
    }
</script>

<style lang="scss">
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

.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
}

.active, .accordion:hover {
  background-color: #ccc;
}

.accordion:after {
  content: '\002B';
  color: #777;
  font-weight: bold;
  float: right;
  margin-left: 5px;
}

.active:after {
  content: "\2212";
}

.panel {
  padding: 0 18px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}

</style>
