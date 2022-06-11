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
            //Javascript checks to see if there are any items in the list so there is something to display.
            if (todos.length >= 1) {
                //Javascript tells the list to update and renumber itself based on what was entered.
                const userList = todos.map(function (todoItem) {
                    const todoItemNum = todos.indexOf(todoItem);
                    return `${todoItemNum + 1}. ${todoItem}\n`;
                }).join(' ');
                //The console confirms the list was refreshed.
                console.log('List refreshed.');
                //The prompt box gives the User a confirmation, shows them the updated list, and asks them to make another selection.
                input = prompt(`List refreshed. Here is the updated list: \n ${userList} \n Please type 'new', 'delete', or 'quit'."`);
                //When the list is empty, the user gets an error message and is asked to make another selection.
            } else {
                console.log('User tried to see the list, but there was nothing to show yet.');
                input = prompt("Your list is empty right now! First you need to add something to your list. \n Please type 'new', or 'quit'.");
            }//When the user wants to delete something...
        } else if (input === 'delete' || input === 'DELETE') {
            //Javascript checks to see if there are any items in the list so there is something to delete. 
            if (todos.length >= 2) {
                const userList = todos.map(function (todoItem) {
                    const todoItemNum = todos.indexOf(todoItem);
                    return `${todoItemNum + 1}. ${todoItem}\n`;
                }).join(' ');
                //If there is more than one item to delete, The prompt box asks the user which item they want to delete.
                const delItem = parseInt(prompt(`You chose to remove an item from your to do list. What item number do you want to delete?\n ${userList} \nPlease enter the number of the item you wish to delete.`) - 1);
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
                    input = prompt(`"${deleted}" was removed!\n Here is the updated list: \n ${userList} \n Please type 'new', 'delete ', or 'quit'.`);
                }//If Javascript can't find the item, the user gets a prompt to enter a different item number.
                else {
                    console.log('Unknown index');
                    input = prompt(`You must enter a number that is on the list. Please type 'new ', 'list', 'delete ', or 'quit'.`);
                };
            }
            else if (todos.length >= 1) {
                //If there is only one thing on the list, the app knows to delete that item.
                todos.fill('');
                //Confirmation is shown in the console
                console.log(`List cleared`);
                //The prompt box gives the user a confirmation, and asks for another selection.
                input = prompt(`Your list is now empty!\n Please type 'new', 'delete', or 'quit'.`);

            }
            else { //If the list is completely empty, the console logs an error and the user is asked for a different selection.
                console.log('User tried to delete an item, but there was nothing to delete.');
                input = prompt("Whoops! There is nothing to delete yet!\n First you need to add something to your list.\n Please ]type 'new', or 'quit'.");
            };
        }
        //In case the user enters anything that is not recognized by the program, they will get this error message and prompt for a different selection
        else {
            console.log('INVALID ENTRY');
            input = prompt("Invalid. Please type 'new ', 'list', 'delete ', or 'quit'.");
        };
    };
    //When the user wants to quit... the program ends immediately and console confirms the user quit.
    console.log('User quit.');
    //This is how many miliseconds the program waits to launch the first prompt box. This gives the page a chance to load all the code without a pause.
}, 600);

