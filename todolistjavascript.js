setTimeout(function () {
    //First Prompt Upon Loading Page//
    let input = prompt("Hello! Welcome to your To Do List. What would you like to do first? \n Please type 'new', 'list', or 'quit'.");
    const todos = [];
    //Loop that keeps the app running until the user decides to quit.//
    while (input !== 'quit' && input !== 'q' && input !== 'Q' && input !== 'Quit' && input !== 'QUIT' && input !== 'stop' && input !== 'STOP' && input !== 'EXIT' && input !== 'exit' && input !== 'done' && input !== 'DONE') {
        //Logic that responses to the user's input//
        //When the user adds a new item...
        if (input === 'new' || input === 'NEW' || input === 'New') {
            const newItem = prompt('You chose to add an item your to do list. What is it that you need to get done?');
            todos.push(newItem); //Item is added to the list behind the scenes
            //The console confirms the item was added
            console.log(`${newItem} was added to the list.`);
            //Javascript tells the list to update and renumber itself based on what was entered.
            const userList = todos.map(function (todoItem) {
                const todoItemNum = todos.indexOf(todoItem);
                return `${todoItemNum + 1}. ${todoItem}\n`;
            }).join(' ');
            //The prompt box gives the User a confirmation, shows them the updated list, and asks them to make another selection.
            input = prompt(`"${newItem}" was added! \n Here is the updated list: \n ${userList}\n What next?\nPlease type 'new ', 'list', 'delete ', or 'quit'.`);
            //When the user wants to view their list...
        } else if (input === 'list' || input === 'LIST') {
            //Javascript tells the list to update and renumber itself based on what was entered.
            const userList = todos.map(function (todoItem) {
                const todoItemNum = todos.indexOf(todoItem);
                return `${todoItemNum + 1}. ${todoItem}\n`;
            }).join(' ');
            //The console confirms the list was refreshed.
            console.log('List refreshed.');
            //The prompt box gives the User a confirmation, shows them the updated list, and asks them to make another selection.
            input = prompt(`List refreshed. Here is the updated list: \n ${userList} \n Please type 'new', 'delete ', or 'quit'."`);
            //When the user wants to delete an item...
        } else if (input === 'delete' || input === 'DELETE') {
            //The prompt box asks the user which item they want to delete.
            const delItem = parseInt(prompt(`You chose to remove an item from your to do list. What item number do you want to delete?\n Please enter the number of the item you wish to delete.`) - 1);
            //Javascript checks to see if what the user entered is a number associated with the list.
            if (!Number.isNaN(delItem) && delItem < todos.length) {
                const deleted = todos.splice(delItem, 1);
                console.log(`${deleted} was removed.`);
                //Javascript tells the list to update and renumber itself based on what was entered.
                const userList = todos.map(function (todoItem) {
                    const todoItemNum = todos.indexOf(todoItem);
                    return `${todoItemNum + 1}. ${todoItem}\n`;
                }).join(' ');
                //The prompt box gives the user a confirmation, shows them the updated list, and asks for another selection.
                input = prompt(`"${deleted}" was removed!\n Here is the updated list: \n ${userList} \n Otherwise, please type 'new ', 'delete ', or 'quit'.`);
            }//If Javascript can't find the item, the user gets a prompt to enter a different item number.
            else {
                console.log('Unknown index');
                input = prompt(`TYou must enter a number that is on the list. Please type 'new ', 'list', 'delete ', or 'quit'.`);
            }
        } //In case the user enters anything that is not recognized by the program, they will get this error message and prompt for a different selection.
        else {
            console.log('INVALID ENTRY');
            input = prompt("Invalid. Please type 'new ', 'list', 'delete ', or 'quit'.");
        }

    }//When the user wants to quit... the program ends immediately and console confirms the user quit.
    console.log('User quit.');
    //This is how many miliseconds the program waits to launch the first prompt box. This gives the page a chance to load all the code without a pause.
}, 200);

