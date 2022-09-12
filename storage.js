// Explore Localstorage and session storage with JSON

// this code is executed in browser, so you can see the result in storage.html file 

const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;

    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    // set any item is local Storage

    if (id && value) {
        // if id and value is truthy than set this iteam in local storage
        localStorage.setItem(id, value);
    }

    idInput.value = '';
    valueInput.value = '';

}
