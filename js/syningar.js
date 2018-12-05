var cardContainer = document.querySelector(".card-container");

function addCard(play){

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
    </div> `;
    cardContainer.innerHTML += card;
}


function loadCards(maxItems) {
    
    cardContainer.innerHTML = "";

    var itemsToShow = cards.length;

    if (maxItems > 0 && maxItems < itemsToShow) {
        itemsToShow = maxItems;
    } //segir hvað á að sýna mörg spjöld. setti 6 á forsíðuna, -1 á allar sýningar
      //af því þegar númerið er minna en 0 þá er ekki takmörkun á fjölda sýninga


    for (i = 0; i < itemsToShow; i ++) {
        addCard(cards[i])
    }
}

var searchBox = document.querySelector("#search-box");

function matchPlay(play) {
    return (play.name.toLowerCase().includes(searchBox.value.toLowerCase()) ||
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




