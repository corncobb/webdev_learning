var ans;
var todos = [];

window.setTimeout(function(){
    while(ans != "quit"){
        ans = prompt("What would you like to do?");
        if(ans == "new"){
            ans = prompt("Enter a new todo");
            todos.push(ans);
            console.log(ans + " added to list");
        } else if(ans == "list"){
            console.log("**********")
            for(var i = 0; i < todos.length; i++){
                console.log(i + ": " + todos[i]);
                }
            console.log("**********");
        } else if(ans == "delete"){
            ans = prompt("Enter index you would like to delete");
            var deleted = todos[ans];
            todos.splice(ans, 1);
            console.log("Successfully deleted " + deleted);
        }
    }
    console.log("You quit the app")
    // put all of your JS code from the lecture here
  }, 500);
