const button = document.querySelector('.button');

button.addEventListener('click', action);

function action(e){
    const buttonText = e.target.textContent;

    fetch(`http://localhost:5000/poop/${buttonText}/`, {
        method: 'GET',
        mode: 'cors'
    })
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log(error))
}





