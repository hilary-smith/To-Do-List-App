setTimeout(function () {
    let input = prompt("Hello! Welcome to your To Do List. What would you like to do? \n Please type 'new', 'list', 'delete', or 'quit'.");
    const todos = ['Add an item to my list'];

    while (input !== 'quit' && input !== 'q' && input !== 'Q' && input !== 'Quit' && input !== 'QUIT' && input !== 'stop' && input !== 'STOP' && input !== 'EXIT' && input !== 'exit' && input !== 'done' && input !== 'DONE') {

        if (input === 'new' || input === 'NEW' || input === 'New') {
            const newItem = prompt('You chose to add an item your to do list. What is it that you need to get done?');
            todos.push(newItem);
            console.log(`${newItem} was added to the list.`);
            input = prompt(`"${newItem}" was added! Please type 'new ', 'list', 'delete ', or 'quit'.`);
        } else if (input === 'list' || input === 'LIST') {
            todos.forEach(function (todoItem) {
                const todoItemNum = todos.indexOf(todoItem);
                console.log(`${todoItemNum + 1}. ${todoItem}`);
            });
            const userList = todos.map(function (todoItem) {
                const todoItemNum = todos.indexOf(todoItem);
                return `${todoItemNum + 1}. ${todoItem}\n`;
            }).join(' ');

            input = prompt(`List refreshed. Here is the updated list: \n ${userList} \n Please type 'new', 'list', 'delete ', or 'quit'."`);


        } else if (input === 'delete' || input === 'DELETE') {
            const delItem = parseInt(prompt(`You chose to remove an item from your to do list. What item number do you want to delete?\n Please enter an index number between 1 and 10.`) - 1);
            if (!Number.isNaN(delItem) && delItem < todos.length) {
                const deleted = todos.splice(delItem, 1);
                console.log(`${deleted} was removed.`);
                input = prompt(`"${deleted}" was removed!\n Type 'list' to see your new list. \n Otherwise, please type 'new ', 'delete ', or 'quit'.`);
            }
            else {
                console.log('Unknown index');
                input = prompt(`That is not on your list. Please type 'new ', 'list', 'delete ', or 'quit'.`);
            }
        }
        else {
            console.log('INVALID ENTRY');
            input = prompt("Invalid. Must be an index number between 1 and 10. Please type 'new ', 'list', 'delete ', or 'quit'.");
        }

    }
    console.log('Okay quitting now. Come back soon!');
}, 200);

