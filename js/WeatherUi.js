class UI {
    constructor() {
        this.showData = document.getElementById('data');
    }

    showUiData(city) {
        this.showData.innerHTML = `
            <ul class='list-group'>
                <li class='list-group-item'>Country: ${city.sys.country}</li>
                <li class='list-group-item'>City: ${city.name}</li>
                <li class='list-group-item'>Wind Speed: ${city.wind.speed} KM/h</li>
                <li class='list-group-item'>main Weather: ${city.weather[0]['main']}</li>
                <li class='list-group-item'>description Weather: ${city.weather[0]['description']}</li>
                <li class='list-group-item'>Tempreature Weather: ${city.main.temp}</li>
            </ul>
        `
    }

    showAlert(msg, className) {
        this.removeAlert()
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(msg));
        const form = document.querySelector('form');
        const beforeForm = document.querySelector('.form-group');
        form.insertBefore(div, beforeForm);
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    clearInput() {
        document.getElementById('city').value = '';
    }

    removeAlert() {
        const alert = document.querySelector('.alert');

        if (alert) {
            alert.remove();
        }
    }
}