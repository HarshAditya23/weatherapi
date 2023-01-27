document.getElementById('btn_1').onclick = function () {
    var name_city = document.getElementById('name_city').value;
    console.log(name_city)
    const apitoken = '3610a4fed02c4852a08163631232601';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apitoken}&q=${name_city}`;
    console.log(url);
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            let output = `
            <div>
                <p>Location : <span id="output_api">${data.location.name}, ${data.location.region}, ${data.location.country}</span></p>
                <p>Temperature : <span id="output_api">${data.current.temp_c} °C</span></p>
                <p>Precipitation : <span id="output_api">${data.current.precip_mm} mm</span></p>
                <p>Humidity : <span id="output_api">${data.current.humidity} %</span></p>
                <p>Condition : <span id="output_api">${data.current.condition.text}</span></p>
                <img src=${data.current.condition.icon} />
            </div>
            `;
            console.log('printing data', data);
            document.getElementById('output_weather').innerHTML = output;
        }).catch((err) => console.log(err))
}

document.getElementById('btn_2').onclick = function () {
    var output_weather = document.getElementById("output_weather").value;
    output_weather.reset();
}