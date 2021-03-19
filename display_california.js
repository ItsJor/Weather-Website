function myFunction_1(){
    var value = parseFloat (document.getElementById("radius").value);
    document.getElementById("diameter").innerHTML = 2 * value;
    document.getElementById("area").innerHTML = (value*value) * (Math.PI);
    document.getElementById("circumference").innerHTML= 2 * (Math.PI) * value;
}

function load_weather()
{
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            myFunction(this);
        }
    };
    xhttp.open("GET", "https://w1.weather.gov/xml/current_obs/KLAX.xml", true);
    xhttp.send();
}

function myFunction(xml)
{
    var xmlDoc = xml.responseXML;

    document.getElementById("loc").innerHTML =
        xmlDoc.getElementsByTagName("location")[0].childNodes[0].nodeValue;
    document.getElementById("wea").innerHTML =
        xmlDoc.getElementsByTagName("weather")[0].childNodes[0].nodeValue;
    document.getElementById("temp").innerHTML =
        xmlDoc.getElementsByTagName("temperature_string")[0].childNodes[0].nodeValue;
    document.getElementById("wind_str").innerHTML =
        xmlDoc.getElementsByTagName("wind_string")[0].childNodes[0].nodeValue;
    document.getElementById("hum").innerHTML =
        xmlDoc.getElementsByTagName("relative_humidity")[0].childNodes[0].nodeValue;
    document.getElementById("stat_id").innerHTML =
        xmlDoc.getElementsByTagName("station_id")[0].childNodes[0].nodeValue;
    document.getElementById("obs_time").innerHTML =
        xmlDoc.getElementsByTagName("observation_time")[0].childNodes[0].nodeValue;
    document.getElementById("wind_dir").innerHTML =
        xmlDoc.getElementsByTagName("wind_dir")[0].childNodes[0].nodeValue;
    document.getElementById("dew").innerHTML =
        xmlDoc.getElementsByTagName("dewpoint_string")[0].childNodes[0].nodeValue;
    document.getElementById("vis").innerHTML =
        xmlDoc.getElementsByTagName("visibility_mi")[0].childNodes[0].nodeValue;
}