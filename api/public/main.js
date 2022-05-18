window.addEventListener('load', function(e) {

    /** @type {HTMLFormElement} */
    const form = this.document.getElementById('person-form');
    const button = this.document.getElementById('person-form-submit-button');

    button.addEventListener('click', async function (e) {
        if (form.checkValidity()) {
            const inputs = form.querySelectorAll('input');
            const object = {}
            // Example:
            // If input.name = 'height' and input.value = 168 then
            // object['height'] = 168 <=> object.height = 168
            for (const input of inputs) {
                const value = input.value;
                const name = input.name;
                object[name] = value; // Object.defineProperty(object, name, { value: value });
            }
            post(object);    
        } else {
            form.reportValidity();
        }
    });
});

const baseUrl = 'http://localhost:5012/v1/bmi';
async function post(body) {
    let response = null;
    try {
        response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    } catch (error) {
        console.error(error);
        throw Error('Not posible to request');
    }

    if (response) {
        switch (response.status) {
            case 200:
                return;
            default:
                throw Error('Could not post');
        }    
    }
}