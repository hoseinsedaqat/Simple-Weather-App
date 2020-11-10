class Weather {
    constructor() {
        this.apiKeys = '8b00f801553f4fd2efbcaffd9f41b42a';
    }
    async getWeather(city) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKeys}`);
        const resData = await response.json();
        return {
            resData
        }
    }
}