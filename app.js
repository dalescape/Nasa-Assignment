//need to pull picture from api for the day that was typed in
//need to change element h2 to the date that was requested
//url of image saved to local storage
//save input date in local storage

localStorage.setItem('date', '0000-00-00')

document.querySelector('button').addEventListener('click', getPic)

async function getPic() {

    let url = "https://api.nasa.gov/planetary/apod?api_key=";
    let api_key = "Tt4t4aBcSialnSYd3FalVdlK19DesZuKFm8GKI0T";
    let field = document.querySelector('#date')
    let date = "&date="+field.value
    const full = ("GET", url + api_key + date)

    let data = await fetch(full)
    let response = await data.json()
    
    document.querySelector('h2').innerHTML = response.date;
    document.querySelector('img').src = response.hdurl;
    document.querySelector('h3').innerHTML = response.title;
      
    
    localStorage.setItem('date', "Date: "+field.value)
    localStorage.setItem('url', " Full URL: "+full)
    localStorage.setItem('pic-url', " Picture URL: "+response.hdurl)
    const getStr = localStorage.getItem('date') + localStorage.getItem('url') + localStorage.getItem('pic-url')

    console.log(getStr)
    console.log(response)
    
}
   