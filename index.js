
console.log("users: ", window.users);

console.log("todos: ", window.todos);


message = ""

for (const user of users){
    message += `Hi ${user.name} ${user.id} ${user.address.city}\n` 

}

alert(message)
const userNumber = Number(prompt("What's your Id?"))

let userName = ''
let toDoList = ''

for (user of users){
    if(userNumber === user.id){
    userName += user.name
alert (userName)
}
       for(todo of todos){
            if(userNumber === todo.userId){
                toDoList += todo.title


}
}
}

alert(toDoList)
console.log(userName)
console.log(toDoList)
