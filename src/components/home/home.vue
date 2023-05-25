<template>
  <div class="home">
    <TarefaList></TarefaList>
  </div>
</template>
<router-view></router-view>
<script>
import TarefaList from "../TarefaList/TarefaList.vue";
import TarefaForm from "../TarefaForm/TarefaForm.vue";
import TarefaDetails from "../TarefaDetails/TarefaDetails.vue";
export default {
  name: 'Home',
  components: {
    TarefaForm,
    TarefaDetails,
    TarefaList
  },


};


</script>
