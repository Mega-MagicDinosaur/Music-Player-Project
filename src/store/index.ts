import { createStore } from 'vuex'

// if 'as boolean[]' is not specified 'never' type is assigned
// get filters from database eventually
const filters = [] as boolean[]

export default createStore({
  state: {
    current_slide: 0,

    fav_filter_toggle: false,
    filters_toggle: filters
  },
  getters: {
    get_current_slide: state => state.current_slide,
    get_fav_filter_toggle: state => state.fav_filter_toggle,
    get_filters_toggle: state => state.filters_toggle,
  },
  mutations: {
    set_current_slide(state, payload: number) {
      state.current_slide = payload
    },
    set_fav_filter(state, payload: boolean) {
      state.fav_filter_toggle = payload
    },
    set_filter(state, payload: {index: number, value: boolean}) {
      state.filters_toggle[payload.index] = payload.value
    },

    // note: this is toggle not set, so the state is changed into here
    toggle_fav_filter(state, payload: boolean) {
      state.fav_filter_toggle = !payload
    },
    toggle_filter(state, payload: {index: number, value: boolean}) {
      state.filters_toggle[payload.index] = !payload.value
    }
  },
  actions: {
  },
  modules: {
  }
})
