var ans;
var todos = [];

window.setTimeout(function() {
    while(ans != "quit"){
        ans = prompt("What would you like to do?");
        if(ans == "new"){
            ans = prompt("Enter a new todo");
            todos.push(ans);
            console.log(todos)
        } else if(ans == "list"){
            console.log(todos);
        }
    }
    console.log("You quit the app")
    // put all of your JS code from the lecture here
  }, 500);
