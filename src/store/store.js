import Vue from "vue";
import Vuex from "vuex";

// Vue의 플러그인을 사용하는 부분
// Vue 전역에, 그러니까 global functionallity를 사용하고 싶을 때 이것을 씁니다.
Vue.use(Vuex);

export const store = new Vuex.Store({});
