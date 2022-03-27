import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "../views/LoginView.vue"
import OverviewPage from "../views/OverviewPage.vue"
import ProfileView from "../views/ProfileView.vue"
import AssessmentsAgencies from "../views/AssessmentsAgency.vue"
import AssessmentsConsent from "../views/AssessmentsConsent.vue"
import AssessmentsScorecard from "../views/AssessmentsScorecard.vue"
import AssessmentsSummary from "../views/AssessmentsSummary.vue"

const router = createRouter({
  
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'overview',
      component: OverviewPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/assessments-agencies',
      name: 'assessmentsagencies',
      component: AssessmentsAgencies
    },
    {
      path: '/assessments-consent',
      name: 'assessmentsconsent',
      component: AssessmentsConsent
    },
    {
      path: '/assessments-scorecard',
      name: 'assessmentscorecard',
      component: AssessmentsScorecard
    },
    {
      path: '/assessments-summary',
      name: 'assessmentsummary',
      component: AssessmentsSummary
    },
    // {
    //   path: '/assessments-agencies',
    //   name: 'assessments',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AssessmentsAgency.vue')
    // }
  ]
})

export default router
