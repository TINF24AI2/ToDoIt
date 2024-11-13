// This file will be used to make the backend connection and get the data from the backend
// All the IDs and are defined in this file in the add functions and will be used in the frontend to get the data from the backend

const supabase_ = window.supabase;

const supabaseUrl = 'https://tduuybbxvfriszfafjhd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkdXV5YmJ4dmZyaXN6ZmFmamhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzMjc1ODQsImV4cCI6MjA0NjkwMzU4NH0.DIN4MxbRq8FxARhtcN1L6D7CIkBsk4L_WeWvuFKR_Mg';
const supabase = supabase_.createClient(supabaseUrl, supabaseKey);

console.log({supabase})

// This function will be used to login the user
async function loginBack(username, password) {
    //Task 1: Make BackendConnector to the backend to login the user and set the session cookie and username cookie
    // Query the users table to find the user by username
    const { data, error } = await supabase
        .from('users')
        .select('id, encrypted_password')
        .eq('username', username)
        .single();

    if (error) {
        if (error.message === 'User not found') {
            return 2; // wrong username
        }
        console.error('Login error:', error.message);
        return 3; // other errors
    }

    // Compare the provided password with the stored encrypted password
    const isPasswordValid = await bcrypt.compare(password, data.encrypted_password);
    if (!isPasswordValid) {
        return 1; // wrong password
    }

    // Set session and username cookies
    document.cookie = `session=${data.id}; path=/`;
    document.cookie = `username=${username}; path=/`;
    document.cookie = `user_id=${data.id}; path=/`;

    return 0; // success
}

// This function will be used to register the user 
async function signupBack(username, password) {
    //Task 2: Make BackendConection to the backend to register the user and refers to login function to login the user
    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the new user into the users table
        const { data, error } = await supabase
            .from('users')
            .insert([
                { username: username, encrypted_password: hashedPassword }
            ]);

        if (error) {
            console.error('Signup error:', error.message);
            return -1; // failure
        }

        // Call the loginBack function to log the user in
        const loginResult = await loginBack(username, password);
        return loginResult; // return the result of the login function (0 for success)
    } catch (err) {
        console.error('Signup error:', err.message);
        return -1; // failure
    }
}

function logoutBack() {
    // Clear the session and username cookies
    document.cookie = 'session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    // Optionally, you can also handle any other cleanup tasks here
    console.log('User logged out successfully');
}

async function loadLists() {
    //Task 3: Make BackendConection to the backend to get all the lists refer to printList to print the lists
    try {
        // Fetch all lists from the backend
        const { data, error } = await supabase
            .from('lists')
            .select('id, name');

        if (error) {
            console.error('Error fetching lists:', error.message);
            return;
        }

        //print the indiviual lists by calling printList(listid, listname)
        data.forEach(list => {
            printList(list.id, list.name);
        });
    } catch (err) {
        console.error('Error:', err.message);
    }

    //Simulate backend connection for testing musst be removed in the final version
    // printList(6575567, "List 1");
    // printList(5675677, "List 2");
}

async function loadTodos(listId) {
    //Task 4: Make BackendConection to the backend to get the todos of a list refers to printTodo to print the todos
    // if listId is 0 do nothing
    if (listId === 0) {
        return;
    }

    try {
        let query = supabase.from('todos').select('id, checked, text, date');

        // if listId is 1 then print all the todos of today
        if (listId === 1) {
            const today = new Date().toISOString().split('T')[0];
            query = query.eq('date', today);
        }

        // if listID is 2 then print all the todos of this week
        if (listId === 2) {
            const today = new Date();
            const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay())).toISOString().split('T')[0];
            const endOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 6)).toISOString().split('T')[0];
            query = query.gte('date', startOfWeek).lte('date', endOfWeek);
        }

        // Fetch the todos from the backend
        const { data, error } = await query;

        if (error) {
            console.error('Error fetching todos:', error.message);
            return;
        }

        // Print the individual todos by calling printToDo(id, checked, text, date)
        data.forEach(todo => {
            printToDo(todo.id, todo.checked, todo.text, todo.date);
        });
    } catch (err) {
        console.error('Error:', err.message);
    }

    //Simulate backend connection for testing musst be removed in the final version
    /* if (listId == 1) {
        printToDo(1, false, "Todo of today", "2021-06-01");
        printToDo(2, true, "Todo of today", "2021-06-01");
    }else if (listId == 2) {
        printToDo(3, false, "Todo of this week", "2021-06-05");
        printToDo(4, true, "Todo of this week", "2021-06-05");
    }else if (listId == 6575567) {
        printToDo(5, false, "Todo of List 1", "2021-06-05");
        printToDo(6, true, "Todo of List 1", "2021-06-05");
    }else if (listId == 5675677) {
        printToDo(7, false, "Todo of List 2", "2021-06-05");
        printToDo(8, true, "Todo of List 2", "2021-06-05");
    }
    */
}

async function backendAddNewList(id, text) {
    // Task 5: Make BackendConnection to the backend to add a new todo
    try {
        // Get user_id from cookies
        const userId = getCookie('user_id');
        if (!userId) {
            console.error('User ID not found in cookies');
            return -1; // failure
        }
        // Insert the new list into the lists table
        const { data, error } = await supabase
            .from('lists')
            .insert([
                { user_id: userId, name: text, created_at: new Date().toISOString() }
            ]);

        if (error) {
            console.error('Error adding new list:', error.message);
            return -1; // failure
        }

        console.log('New list added successfully:', data);
        return 0; // success
    } catch (err) {
        console.error('Error:', err.message);
        return -1; // failure
    }
}

async function backendAddNewTodo(id, text) {
    // Task 6: Make BackendConnection to the backend to add a new todo
    try {
        // Get user_id from cookies
        const userId = getCookie('user_id');
        if (!userId) {
            console.error('User ID not found in cookies');
            return -1; // failure
        }

        // Insert the new todo into the todos table
        const { data, error } = await supabase
            .from('todos')
            .insert([
                { user_id: userId, list_id: listId, text: text, created_at: new Date().toISOString() }
            ]);

        if (error) {
            console.error('Error adding new todo:', error.message);
            return -1; // failure
        }

        console.log('New todo added successfully:', data);
        return 0; // success
    } catch (err) {
        console.error('Error:', err.message);
        return -1; // failure
    }
}

async function toggleTodoStatusBackend(id, checked) {
    // Task 7: Make BackendConnection to the backend to update the todo status
    try {
        // Update the checked status of the todo in the todos table
        const { data, error } = await supabase
            .from('todos')
            .update({ checked: checked })
            .eq('id', id);

        if (error) {
            console.error('Error updating todo status:', error.message);
            return -1; // failure
        }

        console.log('Todo status updated successfully:', data);
        return 0; // success
    } catch (err) {
        console.error('Error:', err.message);
        return -1; // failure
    }
}

async function changeDateOfToDo(todoId, date) {
    //Task 8: Make BackendConection to the backend to change the date of the todo
    try {
        // Update the date of the todo in the todos table
        const { data, error } = await supabase
            .from('todos')
            .update({ date: date })
            .eq('id', todoId);

        if (error) {
            console.error('Error updating todo date:', error.message);
            return -1; // failure
        }

        console.log('Todo date updated successfully:', data);
        return 0; // success
    } catch (err) {
        console.error('Error:', err.message);
        return -1; // failure
    }
}

async function backendDeleteTodo(id) {
    // Task 9: Make BackendConnection to the backend to delete the todo
    try {
        // Delete the todo from the todos table
        const { data, error } = await supabase
            .from('todos')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Error deleting todo:', error.message);
            return -1; // failure
        }

        console.log('Todo deleted successfully:', data);
        return 0; // success
    } catch (err) {
        console.error('Error:', err.message);
        return -1; // failure
    }
}

async function backendDeleteList(listId) {
    // Task 10: Make BackendConnection to the backend to delete the list
    // this function should also delete all the todos of the list
    try {
        // Delete all todos associated with the list
        let { data, error } = await supabase
            .from('todos')
            .delete()
            .eq('list_id', listId);

        if (error) {
            console.error('Error deleting todos:', error.message);
            return -1; // failure
        }

        // Delete the list from the lists table
        ({ data, error } = await supabase
            .from('lists')
            .delete()
            .eq('id', listId));

        if (error) {
            console.error('Error deleting list:', error.message);
            return -1; // failure
        }

        console.log('List and associated todos deleted successfully:', data);
        return 0; // success
    } catch (err) {
        console.error('Error:', err.message);
        return -1; // failure
    }
}