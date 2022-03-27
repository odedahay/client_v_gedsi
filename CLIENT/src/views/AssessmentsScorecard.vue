<script setup>
  // defualt
  import WebHeader from "../components/WebHeader.vue"
  import WebFooter from "../components/WebFooter.vue"

  // GEDSI Component
  import SideNavbar from "../components/SideNavbar.vue"
  import TopNavbar from '../components/TopNavbar.vue'
  import AssessmentsSummary from "../components/AsssessmentsSummary.vue"
  import ProfileModal from '../components/ProfileModal.vue'

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
                                <span class="tag is-warning is-light is-light-status is-large">Drafted</span>
                                </div>
                            </div>
                            <div class="level-item has-text-centered">
                                <div>
                                <p class="heading">13 of 39 Indicators<br>Completed</p>
                               <span class="tag is-success is-light is-light-status is-large">33%</span>
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
                        <li class="steps-segment is-active">
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
            <div class="columns is-mobile mt-5 mb-5">
                <div class="column is-3 mt-6">
                    <ul class="vertical-position steps is-small is-vertical">
                        <li class="steps-segment is-active">
                            <span href="#" class="steps-marker"></span>
                            <div class="steps-content">
                            <p class="is-size-5">Domain 1:</p>
                            <p>GEDSI Laws & Policies (3 indicators)</p>
                            </div>
                        </li>
                        <li class="steps-segment">
                            <span href="#" class="steps-marker"></span>
                            <div class="steps-content">
                            <p class="is-size-5">Domain 2:</p>
                            <p>Development & Implementing GEDSI Policies (24 indicators)</p>
                            </div>
                        </li>
                        <li class="steps-segment">
                            <span class="steps-marker"></span>
                            <div class="steps-content">
                            <p class="is-size-5">Domain 3:</p>
                            <p>Development & Implementing GEDSI Plans (25 indicators)</p>
                            </div>
                        </li>
                        <li class="steps-segment">
                            <span class="steps-marker"></span>
                            <div class="steps-content">
                            <p class="is-size-5">Domain 4:</p>
                            <p>Leadership (3 Indicators)</p>
                            </div>
                        </li>
                        <li class="steps-segment">
                            <span class="steps-marker"></span>
                            <div class="steps-content">
                            <p class="is-size-5">Domain 5:</p>
                            <p>Human Resources Managements & Development (27 indicators)</p>
                            </div>
                        </li>
                    </ul>
                      <hr class="navbar-divider">
                        <!-- <button class="button is-primary mt-5 mb-6">Summary</button> -->   
                        <AssessmentsSummary />
    
                    <!-- <div class="box is-shadowless"></div> -->
                </div>
                <div class="column is-8">
                    <div class="box">
                        <h3 class="title">1.01 Sex-disaggregated and reliable gender data</h3>

                        <ol class="question-box">
                            <li class="question-item is-clicked">Transactional: No sex and gender data available.</li>
                            <li class="question-item">Process-defined: Statics available on sex but no gender data available.</li>
                            <li class="question-item">Integrated: Complete database on sex and gender that generate less than 3 knowledge products(e.g. case studies, briefers, fact sheets, etc.) on gender development.</li>
                            <li class="question-item">Strategic: Complete and disaggregated database on sex and gender that generates 3 or more knowledge products (e.g. case studies, briefers, fact sheets, etc.) on gender and development</li>
                        </ol>
                        <p class="mt-2 is-size-6">Evidence for Rating/Means of Verification (Optional)</p>
                        <div class="file has-name">
                        <label class="file-label">
                            <input class="file-input" type="file" name="resume">
                            <span class="file-cta">
                            <span class="file-icon">
                                <i class="fas fa-upload color-font"></i>
                            </span>
                            <span class="file-label">
                                Choose a file…
                            </span>
                            </span>
                            <span class="file-name"></span>
                        </label>
                        </div>
                         <p class="mt-5 is-size-6">Remarks</p>
                        <textarea class="textarea " placeholder="e.g. Hello world"></textarea>
                        <div class="border-separator"></div>
                        <div class="level mt-3">
                            <div class="level-left">
                               <button class="button is-success is-light"> <font-awesome-icon icon="angle-left" class="mr-4" />Previous</button>
                            </div>
                            <div class="level-right">
                                 <button class="button is-primary">Next <font-awesome-icon icon="angle-right" class="ml-4" /></button>
                            </div>
                        </div>
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


.vertical-position{
    &.steps:not(.is-hollow) .steps-marker:not(.is-hollow), 
    &.steps:not(.is-hollow) .steps-segment.is-active .steps-marker:not(.is-hollow){
        background-color: #296FA8;
    }
}

.vertical-position .steps-segment.is-active:after{
     background-color: #296FA8;
}

.vertical-position .steps-segment:after{
    background-color: #296FA8;
}
.vertical-position .steps-segment.is-active ~ .vertical-position .steps-segment:after,
.vertical-position .steps-segment.is-active:after{
     background-color: #dbdbdb;
}

.navbar-divider{
    height: 1px!important;
}

.question-box{
    padding: 10px 0 10px 20px;
    counter-reset: my-awesome-counter;
    list-style: none;
    padding-left: 40px;
}

.question-item{
    counter-increment: my-awesome-counter;
    position: relative;
    padding:5px 0 0 10px;
    font-size: 1.15rem;
    cursor: pointer;
    margin: 0 0 1.15rem 0;
    transition:all .3s ease-out;
}

.question-item:hover{
 color: #257953
}

.question-box .question-item.is-clicked::before{
    font-weight: 400;
     color: #012C51;
    background-color: #00D1B2;
}

.question-box .question-item::before {
  content: counter(my-awesome-counter);
  color: #012C51;
  font-size: 1.5rem;
  font-weight: 400; 
  position: absolute;
  --size: 28px;
  left: calc(-1 * var(--size) - 10px);
  line-height: 1.6;
//   width: var(--size);
//   height: var(--size);
  height: 1.35em;
  width: 1.35em;
  top: 4px;
  background-color: #DBDBDB;
  border-radius: 50%;
  text-align: center;
  transition: all .3s ease-in-out;
}

.question-box .question-item:hover::before {
    color: #257953
}
.color-font,
.file-label,
.file-cta, 
.file-name{
    color: #012C51;
}
.file-name{
    color: #296FA8;
}


.border-separator{
    margin: 40px 0;
    border-bottom: 1px solid #dbdbdb;
}
.steps-content {
    p{
        font-size: 1rem;
    }
}
</style>
