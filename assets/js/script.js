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
        },
        remove_todo(todo){
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1);
        }
    }
})

/* El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array */