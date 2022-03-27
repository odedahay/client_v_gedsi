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
                    :title="'Overview'"
            />

            <div class="columns is-mobile mt-3 mb-6">
                <div class="column is-four-fifths">
                    <div class="card card-background-grey is-shadowless">
                        <div class="card-content">
                            <div class="content card-background-grey__card-content">
                                <h2 class="title">Mabuhay and welcome to the GEDSI Scorecard System!</h2>
                                <p>The Australia Awards and Alumni Engagement Program –Philippines (AAAEP-P) is a strong advocate for the mainstreaming of Gender, Equity, Disability and Social Inclusion (GEDSI) in civil service agencies. A critical component of efforts to build the GEDSI capability and competency is the collection and analysis of progress and performance data based on the GEDSI Capability Scorecard and GEDSI Competency Scorecard. Partner agencies are equipped with the GEDSI Scorecard System to facilitate a data-driven and targeted approach to the planning, monitoring and coordination of GEDSI initiatives.
                                </p>
                                <p>The GEDSI Scorecard System (GSS) is a tool provided to the Agency HR Contact to efficiently administer the GEDSI Capability Assessment and GEDSI Competency Assessment across Work Units and Divisions. Agency Respondents access the GSS to provide progress and performance indicator ratings based on the GEDSI Capability Scorecard and Competency Scorecard.</p>
                                <p>If you are an Agency HR Contact or an Agency Respondent, you can login to the GSS with the username and password provided. You may contact the Administrator for assistance or feedback. </p>
                                
                                <button class="button is-primary mt-5" @click="gotoLogin()">Sign in</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<style lang="scss">
// @import 'node_modules/bulma/bulma.sass';
@import '@/assets/variables.scss';
// @import '@/assets/base.scss'; 


.card-background-white{
    background-color: #fff!important;

    &__card-content{
        display: block;
        background-color: #fff!important;
        padding: 20px 20px!important;
    }
}

.card-background-grey{
    background-color: #F7F7F7!important;

    &__card-content{
        display: block;
        background-color: #F7F7F7!important;
        padding: 20px 20px!important;
    }
}
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

.columns.is-vcentered {
  margin-top: 3rem;
  display: flex;
  align-content: center;
  align-items: center; 
}

</style>
