<template>
  <div class="TarefaDetails">
    <div class="form-group">
      <label for="exampleInputEmail1">Titulo</label>
      <input v-model="tarefaUpdate.titulo">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Descrição</label>
      <input v-model="tarefaUpdate.descricao">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Concluído</label>
      <select v-model="tarefaUpdate.concluido">
        <option selected value="0">Não</option>
        <option value="1">Sim</option>
      </select>
    </div>
    <button @click="editTarefa" class="btn btn-primary">Update</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tarefaUpdate: {
        titulo: '',
        descricao: '',
        concluido: '',
      }
    }
  },
  name: 'Tarefaform',
  mounted() {
    const id = this.$route.params.id;
    console.log(id)
    this.$http.get('http://127.0.0.1:8000/api/tarefas/' + id)
      .then(res => {
        this.tarefaUpdate = res.body
      });
  },
  methods: {
    editTarefa() {
      this.$http.put('http://127.0.0.1:8000/api/tarefas/' + this.$route.params.id, this.tarefaUpdate)
        .then(response => {
          // Aqui você pode lidar com a resposta da requisição
          // Por exemplo, você pode acessar o corpo da resposta usando response.body
          this.$router.push('/');

        })
        .catch(error => {
          // Aqui você pode lidar com os erros da requisição
          console.error(error);
        });
    }

  }
};
</script>


<style>
/* Style inputs, select elements and textareas */
input[type=text], select, textarea {
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
