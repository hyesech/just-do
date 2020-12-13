<template>
<div class="inputBox shadow">
    <input type="text" placeholder="Memo your plan..." v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
        <i class="fas fa-plus addBtn"></i>
    </span>

    <!-- Modal -->
    <Modal v-if="showModal" @click="showModal = false">
        <div slot="header">
            <i class="closeModalBtn fas fa-times" v-on:click="showModal = false"></i>
            <h3>경고오!</h3>
        </div>
        <div slot="body">할 일을 입력하세용</div>
    </Modal>

</div>
  
</template>

<script>
import Modal from "./common/Modal";

export default {
    data(){
        return{
            newTodoItem: "",
            showModal: false
        }
    },
    methods: {
        addTodo(){
            if (this.newTodoItem !== '') {
                this.$emit('addTodoItem', this.newTodoItem)
                this.clearInput()
            } else {
                this.showModal = !this.showModal;
            }
        },
        clearInput(){
            this.newTodoItem = ""
        }
    },
    components: {
        Modal: Modal
    }

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
.closeModalBtn {
    color: #ffb10a;
}
</style>