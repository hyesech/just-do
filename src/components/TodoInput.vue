<template>
<div class="inputBox shadow">
    <input type="text" placeholder="Memo your plan..." v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
        <i class="fas fa-plus addBtn"></i>
    </span>
</div>
  
</template>

<script>
export default {
    data: function(){
        return{
            newTodoItem: ""
        }
    },
    methods: {
        addTodo: function(){
            if (this.newTodoItem !== '') {
                this.$emit('addTodoItem', this.newTodoItem)
                this.clearInput()
            }            
        },
        clearInput: function(){
            this.newTodoItem = ""
        }
    },

}
</script>

<style scoped>
input:focus {
    outline: none;
}
.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    margin-bottom: 20px;

}
.inputBox input{
    border-style: none;
    font-size: 0.9rem;
}
.addContainer {
    float: right;
    background: linear-gradient(to right, #ffb10a, #f80000);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn {
    color: white;
    vertical-align: middle;
}
</style>