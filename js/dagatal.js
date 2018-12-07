// function sem ber saman dagana
function compareShowDates(showA, showB) {
    if (showA.date > showB.date) {
        return 1;
    }
    else if (showA.date < showB.date) {
        return -1;
    }
    else {
        return 0;
    }
  }

function getAllDates()
{
    var allDates = [];

    // fer í gegnum allar sýningarnar og býr til array sem inniheldur allar dagsetningar
    
    for(i = 0; i < cards.length; i++)
    {
        // fer í gegnum allar dagsetningar viðkomandi sýningar
       
        for(iDate = 0; iDate < cards[i].dates.length; iDate++) //ef date no er minna en date no í þessu spjaldi
        {
            allDates.push( {
                id: cards[i].id,
                name: cards[i].name,
                date: cards[i].dates[iDate].date,
                price: cards[i].price,
                buttonUrl: cards[i].buttonURL,
            } ); //push bætir e-u í array
        }
    }
     // raðar dögunum í röð út frá functioninu efst, sort er function sem er innbyggt í array, það raðar hlutum í röð
     allDates = allDates.sort(compareShowDates);

     return allDates;
}

var container = document.querySelector("#calendar-wrap");


var dayNames = ["Sunnudagur", "Mánudagur", "Þriðjudagur", "Miðvikudagur", "Fimmtudagur", "Föstudagur", "Laugardagur"];
var monthNames = ["Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", "September", "Október", "Nóvember", "Desember"];

function getMonths() {
    var allDates = getAllDates();
    var months = [];

    var lastMonth = ''; 

   
    for(i = 0; i < allDates.length; i++) {
        if (allDates[i].date >= Date.now()) {
            var monthString  = monthNames[allDates[i].date.getMonth()];

            if (lastMonth != monthString) {
                months.push(monthString);
                lastMonth = monthString;
            }
        } 
    }

    return months; //finnur mánuðina sem sýnignarnar eru og setur mánuðinn í lista, passar að hver mánuður komi
    //bara einu sinni
}

var monthList = document.querySelector("#month");

function loadMonths() {
    var months = getMonths();

    for(i = 0; i < months.length; i++) {
        var option = document.createElement("option");
        option.text = months[i];
        option.value = i; //notast til að stíla options 
        monthList.add(option); 
    } 
} //bætir mánuðum inn í option í select í html

function listDates() {
    var allDates = getAllDates();

    var html = '<table class="calendar-table">';
    container.innerHTML = '';

    // fer í gengum allar dagsetningar, sýnir þær í dagatalinu ef þær eru ekki liðnar
    for(i = 0; i < allDates.length; i++)
    {
        if (allDates[i].date >= Date.now())
        {
            var monthString = monthNames[allDates[i].date.getMonth()]; //býr til nr. á mánuðina frá 0-11

            var selectedMonth = monthList.options[monthList.selectedIndex].text;

            if (selectedMonth == monthString)
            {
                var dateString  = `${dayNames[allDates[i].date.getDay()]} 
                                   ${allDates[i].date.getDate()}.
                                   ${monthString} 
                                   kl. ${allDates[i].date.getHours()}:${pad(allDates[i].date.getMinutes())}`;

                var rowString =  `<tr>
                    <td>${dateString}</td>
                    <td><a href="${allDates[i].buttonUrl}"><h2>${allDates[i].name}</h2></a></td>
                    <td>Verð: ${allDates[i].price} kr.</td>
                    <td><a href="${allDates[i].buttonUrl}" class="small-button-cal">Kaupa miða</a></td>
                </tr>`;

                html = html + rowString;
            }
        } 
    }
    container.innerHTML = html;
}