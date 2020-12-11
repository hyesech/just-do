<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeTodoItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue"
import TodoInput from "./components/TodoInput.vue"
import TodoList from "./components/TodoList.vue"
import TodoFooter from "./components/TodoFooter.vue"

export default {
  data: function() {
    return {
      todoItems: []
    }
  },
  methods: {
    addOneItem: function(todoItem){
      const obj = {completed: false, item: todoItem}
      localStorage.setItem(todoItem, JSON.stringify(obj))
      this.todoItems.push(obj);
    },
    removeOneItem: function(todoItem, index){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem: function(todoItem, index){
      // todoItem.completed = !todoItem.completed;
      // props로 내린 값을 다시 가져와서 쓰지 말고 여기 있는 data에 접근하는 방식을 쓰자
      this.todoItems[index].completed = !this.todoItems[index].completed;

    // localStorage 갱신 코드: update 기능이 따로 없어서
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    },
    clearAllItems: function(){
      localStorage.clear();
      this.todoItems = [];
    }      
  },
  created: function(){
    if(localStorage.length > 0){
      for(let i = 0; i < localStorage.length; i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  },
  components:{
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
    }
}

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
  
}

body {
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}

</style>
