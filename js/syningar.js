var cardContainer = document.querySelector(".card-container");

var shortMonthNames = ["jan", "feb", "mars", "apr", "Maí", "jún", "júl", "ág", "sept", "okt", "nóv", "des"];

// function sem ber saman dagana
function compareShowDateCards(showA, showB) {
    if (showA.nextShow > showB.nextShow) {
        return 1;
    }
    else if (showA.nextShow < showB.nextShow) {
        return -1;
    }
    else {
        return 0;
    }
  }

function addCard(play){

    var dateCard = '';
    for (var iDate = 0; iDate < play.dates.length; iDate ++) {

        var dateString  = `${play.dates[iDate].date.getDate()}.
                                   ${shortMonthNames[play.dates[iDate].date.getMonth()]}. 
                                   kl. ${play.dates[iDate].date.getHours()}:${pad(play.dates[iDate].date.getMinutes())}`;


        dateCard = dateCard + `<p>${dateString}</p>` //þetta sækir dagsetningu og tíma og setur inn í p tag fyrir hover á cards
    } 

    var card = 
    `<div class="card">
        <div class="small-button" />
        <a href="${play.buttonURL}">Kaupa miða</a></div>
         <div class="card-img">
             <img src="${play.photo}" alt="${play.name}">
         </div>
        <div class="card-title">    
             <h1>${play.name}</h1>
        </div> 
        <div class = "ghost-box">
            <h2>Næstu sýningar</h2>
            ${dateCard}
            <br>
            <br>
            <h3>Nánar</h3>
        </div>         
    </div> `;
    cardContainer.innerHTML += card;
}

function addCardonclick () {
    var cardElements = document.getElementsByClassName("card"); //býr til array með card

    for (i = 0; i < cardElements.length; i ++) {
        cardElements[i].onclick = showSyning;
    } //býr til onclick event fyrir öll card
}

function matchFutureShows(show) {
    return (show.nextShow != undefined); // athugar hvort sýning sé í framtíðinni
}

//max items er parameter
function loadCards(maxItems) {

    cardContainer.innerHTML = "";

    var futureShows = cards.filter(matchFutureShows).sort(compareShowDateCards);

    var itemsToShow = futureShows.length;

    if (maxItems > 0 && maxItems < itemsToShow) {
        itemsToShow = maxItems;
    } //segir hvað á að sýna mörg spjöld. setti 6 á forsíðuna, -1 á allar sýningar
      //af því þegar númerið er minna en 0 þá er ekki takmörkun á fjölda sýninga


    for (var i = 0; i < itemsToShow; i ++) {
        addCard(futureShows[i]) //bætir sýningum við í réttri röð þv´í búin að sortera þær ofar
    }

    addCardonclick();
}

var searchBox = document.querySelector("#search-box");

function matchPlay(play) {
    return  (show.nextShow  != undefined) &&
            (play.name.toLowerCase().includes(searchBox.value.toLowerCase()) ||
            play.description.toLowerCase().includes(searchBox.value.toLowerCase())
    );
}

function loadResults() {
    cardContainer.innerHTML = "";
    var matchedPlays = cards.filter(matchPlay); //matchedPlay eru filtered niðurstöðurnar

    for (i = 0; i < matchedPlays.length; i ++) {
        addCard(matchedPlays[i])
    }

    var resultLine = document.querySelector("#result-line");

    if (matchedPlays.length===0){
        resultLine.innerHTML = 'Leitin skilaði engum niðurstöðum';
    } // ef það er ekkert lenght á matchedPlays þýðir það að ekkert passar við leitina
    else
    {
        addCardonclick();   
        if (matchedPlays.length % 10 == 1 && matchedPlays.length != 11)
        {
            resultLine.innerHTML=`Leitin skilaði ${matchedPlays.length} niðurstöðu fyrir ${searchBox.value}`
        }
        else
        {
            resultLine.innerHTML=`Leitin skilaði ${matchedPlays.length} niðurstöðum fyrir ${searchBox.value}`
        }    
    }
    
    return false;
}




