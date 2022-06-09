setTimeout(function () {
    let input = prompt("Hello. Welcome to your To Do List. What would you like to do? \n Please type 'new', 'delete', or 'quit'.");
    const todos = ['Add an item to my list'];
    const s = undefined;
    todos[1] = s || '* empty *';
    todos[2] = s || '* empty *';
    todos[3] = s || '* empty *';
    todos[4] = s || '* empty *';
    todos[5] = s || '* empty *';
    todos[6] = s || '* empty *';
    todos[7] = s || '* empty *';
    todos[8] = s || '* empty *';
    todos[9] = s || '* empty *';
    todos[10] = s || '* empty *';
    todos[11] = s || '* empty *';
    todos[12] = s || '* empty *';
    todos[13] = s || '* empty *';
    todos[14] = s || '* empty *';
    const numberList = ['1. ', '2. ', '3. ', '4. ', '5. ', '6. ', '7. ', '8. ', '9. ', '10. ']
    while (input !== 'quit' && input !== 'q' && input !== 'Q' && input !== 'Quit' && input !== 'QUIT' && input !== 'stop' && input !== 'STOP' && input !== 'EXIT' && input !== 'exit' && input !== 'done' && input !== 'DONE') {

        if (input === 'new' || input === 'NEW' || input === 'New') {
            const newItem = prompt('You chose to add an item your to do list. What is it that you need to get done?');
            todos.unshift(newItem);
            console.log(`${newItem} was added to the list.`);
            input = prompt(`"${newItem}" was added! Please type 'new ', 'list', 'delete ', or 'quit'.`);
        } else if (input === 'list' || input === 'LIST') {
            console.log('** ** ** ** **');
            for (var i = 0; i < todos.length; i++) {
                console.log(`${i}: ${todos[i]}`);
                console.log('** ** ** ** **');
            }
            // const userList = todos.join(', ');
            const userList = `${numberList[0] + todos[0]} \n ${numberList[1] + todos[1]} \n ${numberList[2] + todos[2]} \n ${numberList[3] + todos[3]} \n ${numberList[4] + todos[4]} \n ${numberList[5] + todos[5]} \n ${numberList[6] + todos[6]} \n ${numberList[7] + todos[7]} \n ${numberList[8] + todos[8]} \n ${numberList[9] + todos[9]}`;
            input = prompt(`List refreshed. Here is the updated list: \n ${userList}\n Please type 'new', 'list', 'delete ', or 'quit'."`);
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

