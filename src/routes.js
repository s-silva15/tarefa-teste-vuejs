import Home from './components/home/home';
import tarefaDetails from "./components/TarefaDetails/TarefaDetails.vue";
import tarefaForm from "./components/TarefaForm/TarefaForm.vue";
export const routes = [
  {path: '', component: Home, titulo: 'Home', listado: true},
  {path: '/details/:id', component: tarefaDetails, titulo: 'Detalhes da Tarefa', listado: false},
  {path: '/create', component: tarefaForm, titulo: 'Criar Tarefa', listado: true},
];
