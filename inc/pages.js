var templates = {
header: `
    <nav class="left-nav">
    <ul>
        <li>
            <a href="#syningar" id="syningar">Sýningar</a>
        </li>
        <li>
            <a href="#dagatal" id="dagatal">Sýningadagatal</a>
        </li> 
    </ul>
    </nav>
    <div class="logo-container">
    <a href="index.html" alt="Fara á forsíðu">
        <img src="img/icon/tjarnarbio_logo_hires.png" alt="Tjarnarbíó logo">
    </a>
    </div>
    <nav class="right-nav">
    <ul>
        <li>
            <a href=# alt="Um okkur">Um okkur</a>   
        </li>
        <li></li>
            <a href=# alt="English">EN</a>
        </li>
        <li><img class="search" id="search" src="img/icon/search.png" alt="leit"></li>
    </ul>
    <form action="#" onsubmit="return showSearchResults()">
        <input type="text" name="search" id="search-box" placeholder="  Sláðu inn leitarorð hér">
    </form>
    </nav>
`,
footer: `
    <div class="footer-div">
        <p>TJARNARBÍÓ, Tjarnargata 12, 101 Reykjavík</p>
        <p>SÍMI : 527-2100</p>
        <p>tjarnarbio@tjarnarbio.is</p>
        <p> Kt: 590810-1180</p>    
    </div>
    <div class="footer-div">
        <img src="img/icon/facebook (1).png" alt="Facebook">
        <img src="img/icon/instagram.png" alt="instagram">
    </div>
    <div class="footer-div">
        <p>Opnunartími Tjarnarbarsins:</p>
        <p>10:00-23:00 alla daga</p>
        <p>Miðasala opnar 30 mín. fyrir sýningar</p>
    </div>
`,
frontPage: `
    <section class="hero-banner">
        <div class="hero-text">
            <h1>Skýjaborgir</h1>
            <h3>„Skildi mig eftir orðlausa, Mögnuð sýning!“ – SGG mbl.is</h3>
            <button class="large-button">Kaupa miða</button>
        </div>
        </section>
        <section class="fyrirsogn"><h2>Sýningar á næstunni</h2></section>
        <section class="cards">
        <div class="card-container">     
        </div>
        </section>
        <section class="buttons">
        <button class="xl-button">Allar sýningar</button>
        <button class="xl-button">Sýningadagatal</button>
        </section>
        <section class="barinn"> 
        <img src="img/tjarnarbarinn.jpg" alt="Tjarnarbarinn">
        <div class="bar-text-wrapper">
            <div class="bar-text">
                <h2>Tjarnarbarinn</h2>
                <br/>
                <br/>
                <br/>            
                <p>Komdu við á kaffihúsinu okkar, við erum með heitt á könnunni 
                    og heimabakaðar tertur. Við bjóðum líka uppá áfenga drykki
                    handa fullorðna fólkinu. </p>
                <br/>
                <br/>
                <h3>Opið er alla daga frá 10 – 23</h3>
            </div>
        </div>

    </section>
`,
dagatal: `
    <section class="calendar">
        <select name="month" id="month"> 
        </select>
        <div id="calendar-wrap">  
        </div>
    </section>
`,
syningar: `
    <section class="fyrirsogn"><h2>Sýningar leikárið 2018-2019</h2></section>
    <section class="cards">
        <div class="card-container">
        </div>
    </section>
    <section class="buttons">
        <button class="xl-button">Allar sýningar</button>
        <button class="xl-button">Sýningadagatal</button>
    </section>
`,
syning:`
    <section class="hero-banner">
    <div class="hero-text">
        <h1>Skýjaborgir</h1>
        <h3>„Skildi mig eftir orðlausa, Mögnuð sýning!“ – SGG mbl.is</h3>
    </div>
    </section>
    <section class="top-text">
        <h2>Skýjaborgir</h2>
        <h3>Framleitt af Bí bí og blaka</h3>
        <h4>Danssýning fyrir yngstu áhorfendurna</h4>
    </section>
    <section class="stok-syning">
    <div class="text-box">
        <p>Skýjaborg er danssýning fyrir yngstu börnin þar sem litir, form, 
        ljós og tónlist tala til barnanna. Verkið fjallar um tvær verur,
        Sunnu og Storm, sem vakna furðulostnar upp á dularfullum stað. 
        Þar eru sífelld veðrabrigði og verurnar verða því stöðugt að 
        takast á við nýjar aðstæður. Sýningin tekur tæpan hálftíma en í 
        lok hennar er börnunum boðið að koma á sviðið til að leika sér, 
        hitta verurnar og skoða leikmyndina. </p>
        <br/>    
        <p>Skýjaborg er fyrsta íslenska danssýningin sem er sérstaklega ætluð 
        yngstu áhorfendunum. Hún var frumsýnd í Kúlunni, barnasviði Þjóðleikhússins
        í mars 2012. Skýjaborg var tilnefnd til þriggja Grímuverðlauna auk þess að
        hljóta Menningarverðlaun DV í flokki danslistar.</p>
        <p class="meira">meira</p> 
        <img src="img/icon/arrow-point-to-down.png" alt="Lesa meira um sýninguna">
        <div class="buttons">
            <a href="syningar.html" class="xl-button">Allar sýningar</a>
            <a href="dagatal.html" class="xl-button">Sýningadagatal</a>
        </div>
    </div>
    <div class="side-bar">
        <h3>Næstu sýningar</h3>
        <h3>2.12.2018 kl. 20:00</h3>
        <h3>5.12.2018 kl. 20:00</h3>
        <h3>9.12.2018 kl. 20:00</h3>
        <br/>
        <h3>Lengd</h3>
        <h3>1 klst. 36 mín.</h3>
        <br/>
        <h3>Verð</h3>
        <h3>6500 kr.</h3>
        <button class="large-button">Kaupa miða</button>
    </div>
    </section>
`,
leit:  `
<section class="fyrirsogn"><h2 id="result-line"></h2></section>
<section class="cards">
    <div class="card-container">
    </div>
</section>
`,
}