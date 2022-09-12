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

/* 

> when we need to add any object iteams in local storage we need to change it by JSON.stringify() to convert in objcet.

> When we need to get any iteam/iteams from Losal storage we need to use JSON.parse() to convert keys and values


const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);


const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

*/

