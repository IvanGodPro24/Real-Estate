import { btnSign, inputUsername, inputPassword } from "./elements.mjs";
import redirection from "../controller/redirection.mjs";

btnSign.addEventListener('click', (event) => {
    const form = event.target.closest('form');

    if (form.checkValidity()) {
        event.preventDefault();

        const username = inputUsername.value;
        const password = inputPassword.value;

        if (username === 'Penwiman' && password === 'Z0jj3wDuXFzvMMnVQiC0Z0jj3wDuXFzvMMnVQiC0') {
            redirection('welcome.html', username, password);
        } else {
            redirection('welcome-for-guest.html', username, password);
        }
    }
});