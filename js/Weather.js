// import Weather class
const weather = new Weather;
// import UI class
const ui = new UI;
const btn = document.getElementById('btn');

btn.addEventListener("click", weatherData);

function weatherData(e) {
    const city = document.getElementById('city').value
    e.preventDefault();
    weather.getWeather(city).then(data => {
        if (city !== '') {
            if (data.resData.message === 'city not found') {
                ui.showAlert('City Not Found', 'alert red');
                ui.clearInput();
            } else {
                ui.showUiData(data.resData);
                ui.clearInput();
            }
        } else {
            ui.showAlert('Please Enter a City !!!', 'alert red');
        }
    })
}