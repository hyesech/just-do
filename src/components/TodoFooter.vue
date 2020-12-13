<template>
  <div class="clearAllContainer">
      <span class="clearAllBtn shadow" v-on:click="clearAllTodo">Clear All</span>
  </div>
</template>

<script>
export default {
    methods: {
        clearAllTodo(){
            this.$emit('clearAll')
        }
    },

}
</script>

<style scoped>
.clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 50px auto;

}
.clearAllBtn {
    color: #e20303;
    display: block;
}
</style>