<script setup>
  // GEDSI Component
  import SideNavbar from "../components/SideNavbar.vue"
  import TopNavbar from '../components/TopNavbar.vue'

  import { RouterLink, RouterView } from 'vue-router'
//   import HelloWorld from '@/components/HelloWorld.vue'
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
                       
                    </div>
                </div>
            </div>

            <div class="columns is-mobile">
             <div class="column is-four-fifths">

                 <div class="page-title mt-6 mb-3">
                    <h2 class="title-asssesstment">List of Partner Agencies</h2>
                </div>
            
                <table class="table is-rounded is-bordered mb-6">
                    <thead class="grey-bg">
                        <tr>
                            <th class="py-4">Assessment Title</th>
                            <th class="py-4">Last Update</th>
                            <th class="py-4">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="#">2021 DTI Baseline GEDSI Competency Assessment</a></td>
                            <td>15 Dec. 2021</td>
                            <td><span class="tag is-link is-light is-medium">Drafted</span></td>
                        </tr>
                        <tr>
                            <td><a href="#">2021 DTI Baseline GEDSI Capacity Assessment</a></td>
                            <td>15 Dec. 2021</td>
                            <td><span class="tag is-link is-light is-medium">Drafted</span></td>
                        </tr>
                    </tbody>
                </table>
            
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

.table{
     &.is-rounded{
        border-radius: $radius-rounded;
     }
     a{
         font-size: 1rem;
         color: #174A84;
     }
}
.table td, 
.table th{
  border: 1px solid #A5C9FF!important;
  border-radius: $radius-rounded;
}

.title-asssesstment{
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
}

.sub-asssesstment{
    font-family: 'Poppins', sans-serif;
    font-size: .85rem;
    font-weight: 300;
}

.round-stroke{
    border: 1px solid #A5C9FF;
}


</style>
