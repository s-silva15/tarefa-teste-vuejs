<template>
  <div class="TarefaForm">
    <div class="form-group">
      <label for="exampleInputEmail1">Titulo</label>
      <input v-model="tarefaForm.titulo">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Descrição</label>
      <input v-model="tarefaForm.descricao">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Concluído</label>
      <select v-model="tarefaForm.concluido">
        <option selected value="0">Não</option>
        <option value="1">Sim</option>
      </select>
    </div>
    <button @click="createTarefa" class="btn btn-primary">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tarefaForm: {
        titulo: '',
        descricao: '',
        concluido: '',
      }
    }
  },
  name: 'Tarefaform',
  methods: {
    createTarefa(){
      this.$http.post('http://127.0.0.1:8000/api/tarefas', this.tarefaForm)
        .then(res => res.json());
    }
  }
};
</script>


<style>
/* Style inputs, select elements and textareas */
input[type=text], select, textarea{
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
}

/* Style the label to display next to the inputs */
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

/* Style the submit button */
input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

/* Style the container */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

/* Floating column for labels: 25% width */
.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

/* Floating column for inputs: 75% width */
.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}
</style>
