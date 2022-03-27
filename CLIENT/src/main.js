import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleInfo, faFileLines, faChartLine, faComment, faGear, faUser, faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faCircleInfo, faFileLines, faChartLine, faComment, faGear, faUser, faAngleRight, faAngleLeft)

const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
