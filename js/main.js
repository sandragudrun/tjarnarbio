var header = document.querySelector('header');
var main = document.querySelector('main');
var footer = document.querySelector('footer');

var showSearchResults = function(){
   main.innerHTML = templates.leit;
   cardContainer = document.querySelector(".card-container");
   loadResults();
   searchBox.style.display = "none";
   searchBox.value = "";
   return false;
}

//það sem gerist þegar ég kem fyrst inn á síðuna:
header.innerHTML = templates.header;
footer.innerHTML = templates.footer;
main.innerHTML = templates.frontPage; 

cardContainer = document.querySelector(".card-container");

var showSyningar = function(){
   main.innerHTML = templates.syningar;

   cardContainer = document.querySelector(".card-container");

   loadCards(-1);
}

var searchBox = document.querySelector("#search-box");

var showSearchBox = function(){
   //== eða === tékka hvort er jafnt, = segir að sé jafnt
   if (searchBox.style.display != "block") {
      searchBox.style.display="block";
      searchBox.focus();
   }
   else {
      searchBox.style.display = "none";
   }
}

var showSyning = function(){
   main.innerHTML = templates.syning;
}
var showDagatal = function(){
   main.innerHTML = templates.dagatal;

   container = document.querySelector("#calendar-wrap");
   monthList = document.querySelector("#month");

   monthList.onchange = listDates; //þegar ég breyti mánuðum í dropdown, kallar það
   //á listDates, listDates hleður inn dagatalinu

   loadMonths();
   listDates();
}

document.getElementById("syningar").onclick = showSyningar;
document.getElementById("dagatal").onclick = showDagatal;
document.getElementById("search").onclick = showSearchBox;



var cards = [
    { photo: "img/sol.png",
     name: 'Sol', 
     buttonURL:'https://tix.is/is/event/5305/sol/',
     description: 'Frábær sýning, tralla la',
     dates: [
         {
            date: new Date('2018-12-17T20:00:00')
         },
         {
            date: new Date('2019-01-07T19:30:00')
         }  
     ],
     length:'1 klst 36 mín',
     price:'6500',
     id:1
     },
     { photo: "img/i hennar sporum.jpg",
     name: 'Í hennar sporum', 
     buttonURL:'https://tix.is/is/event/5305/sol/',
     description: 'Frábær sýning, tralla la',
     dates: [
         {
            date: new Date('2018-12-18T20:00:00')
         },
         {
            date: new Date('2019-01-21T20:00:00')
         }  
     ],
     length:'1 klst 36 mín',
     price:'6500',
     },
     { photo: "img/spectacular.jpg",
     name: 'Spectacular', 
     buttonURL:'https://tix.is/is/event/5305/sol/',
     description: 'Frábær sýning, tralla la',
     dates: [
         {
            date: new Date('2019-03-13T20:00:00')
         },
         {
            date: new Date('2019-03-27T20:00:00')
         }  
     ],
     length:'1 klst 36 mín',
     price:'6500',
     },
     { photo: "img/Svartlyng-postermynd.jpg",
     name: 'Svartlyng', 
     buttonURL:'https://tix.is/is/event/5305/sol/',
     description: 'Frábær sýning, tralla la',
     dates: [
         {
            date: new Date('2019-02-07T20:00:00')
         },
         {
            date: new Date('2019-02-09T20:00:00')
         }  
     ],
     length:'1 klst 36 mín',
     price:'6500',
     },
     { photo: "img/augasteinn.png",
     name: 'Augasteinn', 
     buttonURL:'https://tix.is/is/event/5305/sol/',
     description: 'Frábær sýning, tralla la',
     dates: [
         {
            date: new Date('2019-05-18T20:00:00')
         },
         {
            date: new Date('2019-05-22T20:00:00')
         }  
     ],
     length:'1 klst 36 mín',
     price:'6500',
     },
     { photo: "img/skyjaborgir.jpg",
     name: 'Skýjaborgir', 
     buttonURL:'https://tix.is/is/event/5305/sol/',
     description: 'Frábær sýning, tralla la',
     dates: [
         {
            date: new Date('2019-04-08T20:00:00')
         },
         {
            date: new Date('2019-04-12T20:00:00')
         }  
     ],
     length:'1 klst 36 mín',
     price:'6500',
     },
     { photo: "img/skyjaborgir.jpg",
     name: 'Skýjaborgir', 
     buttonURL:'https://tix.is/is/event/5305/sol/',
     description: 'Frábær sýning, tralla la',
     dates: [
         {
            date: new Date('2019-02-22T20:00:00')
         },
         {
            date: new Date('2019-02-24T20:00:00')
         }  
     ],
     length:'1 klst 36 mín',
     price:'6500',
     },
     { photo: "img/Svartlyng-postermynd.jpg",
     name: 'Svartlyng', 
     buttonURL:'https://tix.is/is/event/5305/sol/',
     description: 'Frábær sýning, tralla la',
     dates: [
         {
            date: new Date('2018-12-10T20:00:00')
         },
         {
            date: new Date('2018-12-15T20:00:00')
         }  
     ],
     length:'1 klst 36 mín',
     price:'6500',
     },
     { photo: "img/augasteinn.png",
     name: 'Augasteinn', 
     buttonURL:'https://tix.is/is/event/5305/sol/',
     description: 'Frábær sýning, tralla la',
     dates: [
         {
            date: new Date('2018-12-20T20:00:00')
         },
         {
            date: new Date('2019-01-10T20:00:00')
         }  
     ],
     length:'1 klst 36 mín',
     price:'6500',
     },
     { photo: "img/skyjaborgir.jpg",
     name: 'Skýjaborgir', 
     buttonURL:'https://tix.is/is/event/5305/sol/',
     description: 'Frábær sýning, tralla la',
     dates: [
         {
            date: new Date('2019-04-02T20:00:00')
         },
         {
            date: new Date('2019-04-05T20:00:00')
         }  
     ],
     },
     { photo: "img/skyjaborgir.jpg",
     name: 'Skýjaborgir', 
     buttonURL:'https://tix.is/is/event/5305/sol/',
     description: 'Frábær sýning, tralla la',
     dates: [
         {
            date: new Date('2019-03-12T20:00:00')
         },
         {
            date: new Date('2019-03-16T20:00:00')
         }  
     ],
     },
     { photo: "img/Svartlyng-postermynd.jpg",
     name: 'Svartlyng', 
     buttonURL:'https://tix.is/is/event/5305/sol/',
     description: 'Frábær sýning, tralla la',
     dates: [
         {
            date: new Date('2019-02-02T20:00:00')
         },
         {
            date: new Date('2019-02-08T20:00:00')
         }  
     ],
     },
     { photo: "img/augasteinn.png",
     name: 'Augasteinn', 
     buttonURL:'https://tix.is/is/event/5305/sol/',
     description: 'Frábær sýning, tralla la',
     dates: [
         {
            date: new Date('2018-12-15T20:00:00')
         },
         {
            date: new Date('2019-01-04T20:00:00')
         }  
     ],
     },
     { photo: "img/skyjaborgir.jpg",
     name: 'Skýjaborgir', 
     buttonURL:'https://tix.is/is/event/5305/sol/',
     description: 'Frábær sýning, tralla la',
     dates: [
         {
            date: new Date('2018-12-20T20:00:00')
         },
         {
            date: new Date('2018-12-22T20:00:00')
         }  
     ],
     },
     { photo: "img/skyjaborgir.jpg",
     name: 'Skýjaborgir', 
     buttonURL:'https://tix.is/is/event/5305/sol/',
     description: 'Frábær sýning, tralla la',
     dates: [
         {
            date: new Date('2019-05-02T20:00:00')
         },
         {
            date: new Date('2019-04-04T20:00:00')
         }  
     ],
     },

];

loadCards(6);