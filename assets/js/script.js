/* Componente de VUE */

const app = new Vue({
    el: "#todo", 
    data:{
        title: "Todo List Vue",
        message: "Crea una tarea nueva",
        todos: [],
        todo: "",
    },
    methods:{
        add_todo (){
            if(this.todo != ""){
                this.todos.push(this.todo)
                this.todo="";  // Para limpiar el input
            }
        }
    }
})