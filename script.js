let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
searchBtn.addEventListener("click", () =>{

    let countryName = countryInp.value;
    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true
    `;
    console.log(finalUrl);
    
    fetch(finalUrl)
    .then((res) => res.json())
    .then((data) => {

        console.log(data[0]);
        console.log(data[0].name.common);
        console.log(data[0].capital[0]);

        console.log(data[0].flags.svg);
        console.log(data[0].population);
        console.log(data[0].continents[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(Object.values(data[0].languages).toString().split(",").join(","));


        result.innerHTML =`
        <img src="${data[0].flags.svg}" class ="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
          <div class="data-wrapper">
              <h4>Capital:<span> ${data[0].capital[0]} </span></h4>
          </div>
        </div>
        <div class="wrapper">
          <div class="data-wrapper">
              <h4>Continents:<span> ${data[0].continents[0]} </span></h4>
          </div>
        </div>
        <div class="wrapper">
          <div class="data-wrapper">
              <h4>Population:<span> ${data[0].population} </span></h4>
          </div>
        </div>
        <div class="wrapper">
        <div class="data-wrapper">
            <h4>Currencies:<span> ${data[0].currencies[Object.keys(data[0].currencies)].name} </span></h4>
        </div>
      </div>
      <div class="wrapper">
        <div class="data-wrapper">
            <h4>Common Languages:<span> ${Object.values(data[0].languages).toString().split(",").join(",")} </span></h4>
        </div>
      </div>
        `;


    }).catch(() => {

      if (countryName.length == 0){
        result.innerHTML = `<h3 style= "color: red; font-size: 15px; font-weight: 400;" > The input field cann't be empty</h3>`;
      }

      else{
        result.innerHTML = `<h3 style= "color: red;  font-size: 15px; font-weight: 400;">Please enter a valid country name.</h3>`;
      }

    });

});