<script setup>
  // GEDSI Component
  import SideNavbar from "../components/SideNavbar.vue"
  import TopNavbar from '../components/TopNavbar.vue'

  import { RouterLink, RouterView } from 'vue-router'
 
</script>

<template>

    <div class="columns mb-0">

        <SideNavbar />      

        <div class="container">
            <TopNavbar 
                :title="'Assessments'"
            />

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
                                <span class="tag is-warning is-light is-light-status is-large">Not Started</span>
                                </div>
                            </div>
                            <div class="level-item has-text-centered">
                                <div>
                                <p class="heading">0 of 39 Indicators<br>Completed</p>
                               <span class="tag is-success is-light is-light-status is-large">10%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             <div class="columns is-mobile grey-border-btm">
                <div class="column is-four-fifths">

                    <ul class="steps has-content-centered p-5">
                        <li class="steps-segment is-active">
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
                        <li class="steps-segment">
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
                        <h2 class="title is-3">Guidelines</h2>
                        <p class="mb-5">This questionnaire will gather data on GEDSI competencies that are critical to effective GEDSI mainstreaming in organisations. GEDSI competencies will be assessed as Basic, Intermediate, Advanced, and Superior. The general descriptions of the competency levels are found below and are also represented in each of the competency indicators in the GEDSI Competency. Score card worksheet. Please rate each statement by rating each indicator from 1 4 based on the descriptors provided in the GEDSI Competency Scorecard worksheet. Justify your score by indicating your evidence for the rating provided, as means for verification. An informed consent form is provided here for the participants to answer prior to administering the GEDSI Competency Scorecard worksheet.</p>
                        <h2 class="title is-3">Read carefully and indicate your agreement to the terms and conditions below.</h2>
                         <p class="mb-5">Please tick the box next to each statement that you understand and agree with. If there is anything that you do not understand, or would like to know more about, please ask for more information. You will be allowed to proceed with the assessment only after indicating your agreement with all statements. </p>


                        <label class="checkbox">
                            <input type="checkbox">
                            I have read or have had the overview of this survey read to me, in a language that I understand, and I understand the purposes, procedures and risks of this survey.
                        </label>
                        <label class="checkbox">
                        <input type="checkbox">
                          I understand that after I sign and return this consent form it will be kept by the survey facilitator
                        </label>
                        
                        <label class="checkbox">
                        <input type="checkbox">
                         I have read or have had the overview of this survey read to me, in a language that I understand, and I understand the purposes, procedures and risks of this survey.
                        </label>

                        <label class="checkbox">
                        <input type="checkbox">
                         I have had an opportunity to ask questions and I am satisfied with the answers I have received.
                        </label>

                        <label class="checkbox">
                        <input type="checkbox">
                        I freely agree to participate in this survey
                        </label>

                        <label class="checkbox">
                        <input type="checkbox">
                            I have been informed that the findings from the survey will be used to inform policy and programs of my agency and I fully support this.
                        </label>

                        <hr class="navbar-divider">
                        <p class="mt-5">I confirm that the above information is complete and accurate.</p>
                        <button class="button is-primary mt-5 mb-6">Confirm</button>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/variables.scss';

.grey-bg{
  background-color: $table-head-bg!important;
}

.grey-bg-light{
  background-color: $subheader-bg!important;
}

.tag:not(body).is-link.is-light-status{
    border: 1px solid #bcc8fb;
    font-weight: 600;
    font-size: 1.1rem;
    padding-top: 5px;
}
.tag:not(body).is-warning.is-light-status{
    border: 1px solid #ffe491;
    font-weight: 600;
    font-size: 1.1rem;
    padding-top: 5px;
}

.tag:not(body).is-success.is-light-status{
    border: 1px solid #6cbe98;
    font-weight: 600;
    font-size: 1.1rem;
    padding-top: 5px;
}

.grey-border-btm{
     border-bottom: 10px solid $subheader-bg!important;
}

.checkbox{
    line-height: 1.55;
}

input[type='checkbox'] {
    // -webkit-appearance:none;
    width:18px;
    height:18px;
    background:white;
    border-radius:5px;
    border:1px solid #bcc8fb;
    margin-right: 5px;
}

</style>
