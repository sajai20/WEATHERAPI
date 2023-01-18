let weather = {
    apikey: "fbd34e47989deb2dbdc17652d009f074",
    fetchWeather: async function (city) {
        const maindata = await fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=" + this.apikey)
            .then((response) => response.json())
            .then((data) => {
                if (data.cod == '404') {
                    alert("Enter valid input");
                    document.querySelector('.search_bar').value = null;
                }
                else {
                    this.displayWeather(data);
                }
            });
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = `${temp}°C`;
        document.querySelector(".humidity").innerText = `Humidity : ${humidity}%`;
        document.querySelector(".wind").innerText = `Wind speed is : ${speed} km/h`;
        document.querySelector(".weather").classList.remove("loading");

    },
    serach: function () {
        this.fetchWeather(document.querySelector('.search_bar').value);
    }
};


document.querySelector(".search button").addEventListener('click', () => {
    weather.serach();
})

document.querySelector('.search_bar').addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.serach();
    }
})


// let city = "delhi";
// let data = weather.fetchWeather(city);
// console.log(data);



