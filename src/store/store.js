import Vue from "vue";
import Vuex from "vuex";

// Vue의 플러그인을 사용하는 부분
// Vue 전역에, 그러니까 global functionallity를 사용하고 싶을 때 이것을 씁니다.
Vue.use(Vuex);

const storage = {
  // 속성 method임 로컬스토리지에 저장된 데이터를 가져와서 배열로 돌려주는 것임.
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  }
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  },
  mutations: {
    addOneItem(state, todoItem) {
      const obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    }
  }
});
