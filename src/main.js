import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faChevronUp, faTrashAlt, faCartPlus, faShoppingCart, faChevronLeft, faChevronRight, faRss, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCodepen, faStripeS, faYoutube, faInstagram, faLinkedin, faGithub, faTwitter, faDribbble, faGithubAlt, faTwitch, faDiscord } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Vuex from "vuex";

import store from "./state/Store";
import * as types from '@/state/Mutations';

config.autoAddCss = false;
library.add(faCodepen, faTrashAlt, faCartPlus, faShoppingCart, faDiscord, faYoutube, faGithubAlt, faGithub, faLinkedin,
  faTwitter, faDribbble, faStripeS, faTwitch, faInstagram, faChevronUp, faTimes, faChevronLeft, faChevronRight, faRss, faBars)

import "~/assets/main.scss";
import 'prismjs/themes/prism-okaidia.css'

import DefaultLayout from '~/layouts/Default.vue'
import AddBottomLayout from '~/layouts/AddBottom.vue'

export default function (Vue, { appOptions, router, head, isClient }) {

  Vue.use(Vuex)
  appOptions.store = store

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('AddBottomLayout', AddBottomLayout)
  Vue.component('font-awesome', FontAwesomeIcon)

  head.link.push({
    rel: 'stylesheet',
    href: '//fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700'
  });

  router.beforeEach((to, from, next) => {
    store.dispatch(types.NAV_CLOSE);
    next()
  })
}