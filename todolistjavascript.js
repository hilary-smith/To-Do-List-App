setTimeout(function () {
    let input = prompt('Hello. Welcome to your To Do List. What would you like to do?');
    const todos = ['Add an item to my list'];
    while (input !== 'quit' && input !== 'q' && input !== 'Q' && input !== 'Quit' && input !== 'QUIT' && input !== 'stop' && input !== 'STOP' && input !== 'EXIT' && input !== 'exit' && input !== 'done' && input !== 'DONE') {

        if (input === 'new' || input === 'NEW' || input === 'New') {
            const newItem = prompt('You chose to add an item your to do list. What is it that you need to get done?');
            todos.push(newItem);
            console.log(`${newItem} was added to the list.`);
            input = prompt(`"${newItem}" was added! Please type 'new ', 'list', 'delete ', or 'quit'.`);
        } else if (input === 'list' || input === 'LIST') {
            console.log('** ** ** ** **');
            for (var i = 0; i < todos.length; i++) {
                console.log(`${i}: ${todos[i]}`);
                console.log('** ** ** ** **');
            }
            const userList = todos.join(', ');
            input = prompt(`List refreshed. Here is the updated list: \n ${userList}\n\n Please type 'new ', 'list', 'delete ', or 'quit'."`);
        } else if (input === 'delete' || input === 'DELETE') {
            let indexNum = todos.length - 1;
            const delItem = parseInt(prompt(`You chose to remove an item from your to do list. What item number do you want to delete?\n Please enter an index number between 0 and ${indexNum}`));
            if (!Number.isNaN(delItem) && delItem < todos.length) {
                const deleted = todos.splice(delItem, 1);
                console.log(`${deleted} was removed.`);
                input = prompt(`"${deleted}" was removed! Please type 'new ', 'list', 'delete ', or 'quit'.`);
            }
            else {
                console.log('Unknown index');
                input = prompt(`Unknown index. Please type 'new ', 'list', 'delete ', or 'quit'.`);
            }
        }
        else {
            console.log('INVALID ENTRY');
            input = prompt("Invalid. Please type 'new ', 'list', 'delete ', or 'quit'.");
        }

    }
    console.log('Okay quitting now. Come back soon!');
}, 200);

