<template>
  <div class="TarefaList">
    <table class="table table-striped">
      <thead>
      <tr>
        <th>Título</th>
        <th>Descrição</th>
        <th>Concluído</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in tarefas" :key="item.id">
        <td>
          <router-link :to="'/details/' + item.id">{{ item.titulo }}</router-link>
        </td>
        <td>{{ item.descricao }}</td>
        <td>
          <input type="checkbox"
                 :id="'check_' + item.id"
                 @click="marcarTarefa(item.id)"
                 v-model="item.concluido"
                 class="form-check-input">
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Tarefalist',
  data() {
    return {
      titulo: 'Listas de Tarefas',
      tarefas: []
    };
  },
  created() {
    this.$http.get('http://127.0.0.1:8000/api/tarefas')
      .then(res => res.json())
      .then(tarefas => this.tarefas = tarefas)
      .catch(err => console.log(err));
  },
  methods: {
    marcarTarefa(id) {
      const tarefa = this.tarefas.find(item => item.id === id);
      if (tarefa) {
        tarefa.concluido = !tarefa.concluido;
        this.$http.put(`http://127.0.0.1:8000/api/tarefas/${id}`, { concluido: tarefa.concluido })
          .then(res => res.json())
          .catch(err => console.error(err));
      }
    }
  }
};
</script>

<style scoped>
.table {
  font-family: Arial, sans-serif;
  width: 100%;
}

.table th,
.table td {
  border: 1px solid #dddddd;
  padding: 8px;
}

.table th {
  background-color: #f5f5f5;
  text-align: left;
}

.form-check-input {
  margin-top: 0;
  margin-bottom: 0;
}
</style>
