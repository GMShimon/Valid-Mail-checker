const checkEmail = () => {
    const validContainer = document.getElementById('valid-container');
    validContainer.innerHTML = '';

    const inputField = document.getElementById('email-input');
    const inputText = inputField.value;
    document.getElementById('valid').style.display = 'none';
    document.getElementById('invalid').style.display = 'none';

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputText)) {
        const h5 = document.createElement('h5');
        h5.innerText = `${inputText}`
        validContainer.appendChild(h5);
        document.getElementById('valid').style.display = 'block';
    }
    else {
        const h5 = document.createElement('h5');
        h5.innerText = `${inputText}`
        validContainer.appendChild(h5);
        document.getElementById('invalid').style.display = 'block';
    }
    inputField.value = '';
}