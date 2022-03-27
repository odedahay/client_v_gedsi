<script setup>

  // GEDSI Component
  import SideNavbar from "../components/SideNavbar.vue"
  import TopNavbar from '../components/TopNavbar.vue'

  import { RouterLink, RouterView } from 'vue-router'
  import HelloWorld from '@/components/HelloWorld.vue'

</script>

<template>

    <div class="columns mb-0">

        <SideNavbar />      

        <div class="container">
            <TopNavbar 
                 :title="'Profile'"
            />
            <form>
                <div class="columns is-mobile mt-3 mb-6">
                    <div class="column is-four-fifths">
                        <div class="card card-background-white is-shadowless mb-4">
                            <div class="card-content">
                                <div class="content card-background-white__card-content">
                                    <div class="columns is-vcentered mt-0 mb-0">
                                        <div class="column is-3">Email (User Name)</div>
                                        <div class="column">
                                            <div class="field">
                                                <div class="control">
                                                    <input class="input" type="text" placeholder="rcverdillo@dti.gov.ph">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="columns is-vcentered mt-0 mb-0">
                                        <div class="column is-3">Fist Name</div>
                                        <div class="column">
                                            <div class="field">
                                                <div class="control">
                                                    <input class="input" type="text" placeholder="Romell">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="columns is-vcentered mt-0 mb-0">
                                        <div class="column is-3">Last Name</div>
                                        <div class="column">
                                            <div class="field">
                                                <div class="control">
                                                    <input class="input" type="text" placeholder="Verdillo">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="columns is-vcentered mt-0 mb-0">
                                        <div class="column is-3">Middle Initial</div>
                                        <div class="column">
                                            <div class="field">
                                                <div class="control">
                                                    <input class="input" type="text" placeholder="C">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="column is-2">Name Suffix</div>
                                        <div class="column">
                                            <div class="field">
                                            <div class="control">
                                                    <div class="select is-fullwidth">
                                                    <select>
                                                        <option>Select dropdown</option>
                                                        <option>With options</option>
                                                    </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="columns is-vcentered mt-0 mb-0">
                                        <div class="column is-3">Position Type</div>
                                        <div class="column">
                                            <div class="field">
                                            <div class="control">
                                                    <div class="select">
                                                    <select>
                                                        <option>Select dropdown</option>
                                                        <option>With options</option>
                                                    </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="columns is-vcentered mt-0 mb-0">
                                        <div class="column is-3">GEDSI Assessment Role</div>
                                        <div class="column">
                                            <div class="field">
                                                <div class="control">
                                                    <input class="input" type="text" value="Assessment Role">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card card-background-grey is-shadowless">
                            <div class="card-content">
                                
                                <div class="content card-background-grey__card-content">
                                    <div class="columns ">
                                        <div class="column">
                                           <div class="field">
                                                <label class="label">Province</label>
                                                <div class="control">
                                                    <input class="input" type="text" value="Province">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="column">
                                            <div class="field">
                                                <label class="label">Position Level*</label>
                                                <div class="control">
                                                    <div class="select is-fullwidth">
                                                    <select>
                                                        <option>Select dropdown</option>
                                                        <option>With options</option>
                                                    </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="columns">
                                        <div class="column">
                                            <div class="field">
                                                <label class="label">Salary Grade*</label>
                                            <div class="control">
                                                    <div class="select is-fullwidth">
                                                    <select>
                                                        <option>Select dropdown</option>
                                                        <option>With options</option>
                                                    </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="column">
                                            <div class="field">
                                                <label class="label">Work Unit*</label>
                                                <div class="control">
                                                    <div class="select is-fullwidth">
                                                    <select>
                                                        <option>Select dropdown</option>
                                                        <option>With options</option>
                                                    </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="columns">
                                        <div class="column">
                                            <div class="field">
                                                <label class="label">Division*</label>
                                            <div class="control">
                                                    <div class="select is-fullwidth">
                                                    <select>
                                                        <option>Select dropdown</option>
                                                        <option>With options</option>
                                                    </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="column">
                                            <div class="field">
                                                <label class="label">Station*</label>
                                                <div class="control">
                                                    <div class="select is-fullwidth">
                                                    <select>
                                                        <option>Select dropdown</option>
                                                        <option>With options</option>
                                                    </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="columns">
                                        <div class="column">
                                            <div class="field">
                                                <label class="label">Province</label>
                                                <div class="control">
                                                    <input class="input" type="text" value="Province">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="column">
                                            <div class="field">
                                                <label class="label">Municipality*</label>
                                                <div class="control">
                                                    <input class="input" type="text" value="Municipality">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card card-background-white is-shadowless mb-4 mt-4">
                            <div class="card-content">
                                <div class="content card-background-white__card-content">
                                    <div class="columns ">
                                        <div class="column is-4">
                                            <div class="field">
                                                <label class="label">Position*</label>
                                                <div class="control">
                                                    <div class="select is-fullwidth">
                                                    <select>
                                                        <option>Select dropdown</option>
                                                        <option>With options</option>
                                                    </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="column ">
                                            <div class="field">
                                                <label class="label">Gender</label>
                                                <div class="control">
                                                    <label class="radio mr-2 ">
                                                        <input type="radio" name="answer">
                                                        Male
                                                    </label>
                                                    <label class="radio mr-2">
                                                        <input type="radio" name="answer">
                                                        Female
                                                    </label>
                                                    <label class="radio mr-2">
                                                        <input type="radio" name="answer">
                                                        Non-binary
                                                    </label>
                                                    <label class="radio">
                                                        <input type="radio" name="answer">
                                                        Prefer no to disclose
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="columns">
                                        <div class="column is-4">
                                            <div class="field">
                                                <label class="label">PWD</label>
                                                <div class="control">
                                                    <label class="radio mr-2">
                                                        <input type="radio" name="answer">
                                                        Yes
                                                    </label>
                                                    <label class="radio mr-2">
                                                        <input type="radio" name="answer">
                                                        No
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="column">
                                            <div class="field">
                                                <label class="label">Member of IP Group</label>
                                                <div class="control">
                                                    <label class="radio mr-2">
                                                        <input type="radio" name="answer">
                                                        Yes
                                                    </label>
                                                    <label class="radio mr-2">
                                                        <input type="radio" name="answer">
                                                        No
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="mt-4">I confirm that the above information is complete and accurate.</p>
                        <button class="button is-primary mt-5">Confirm</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style lang="scss"></style>
