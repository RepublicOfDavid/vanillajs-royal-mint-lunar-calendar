
// Creating an object array for lunar calendar data
var dates = [
    {
        startDate: "01/29/1930",
        endDate: "02/16/1931",
        animal: "Horse"
    },{
        startDate: "02/17/1931",
        endDate: "02/05/1932",
        animal: "Sheep"
    },{
        startDate: "02/06/1932",
        endDate: "01/25/1933",
        animal: "Monkey"
    },{
        startDate: "01/26/1933",
        endDate: "02/13/1934",
        animal: "Chicken"
    },{
        startDate: "02/14/1934",
        endDate: "02/03/1935",
        animal: "Dog"
    },{
        startDate: "02/04/1935",
        endDate: "01/23/1936",
        animal: "Pig"
    },{
        startDate: "01/24/1936",
        endDate: "02/10/1937",
        animal: "Rat"
    },{
        startDate: "02/11/1937",
        endDate: "01/30/1938",
        animal: "Ox"
    },{
        startDate: "01/31/1938",
        endDate: "02/18/1939",
        animal: "Tiger"
    },{
        startDate: "02/19/1939",
        endDate: "02/07/1940",
        animal: "Rabbit"
    },{
        startDate: "02/08/1940",
        endDate: "01/26/1941",
        animal: "Dragon"
    },{
        startDate: "01/27/1941",
        endDate: "02/14/1942",
        animal: "Snake"
    },{
        startDate: "02/15/1942",
        endDate: "02/03/1943",
        animal: "Horse"
    },{
        startDate: "02/04/1943",
        endDate: "01/24/1944",
        animal: "Sheep"
    },{
        startDate: "01/25/1944",
        endDate: "02/12/1945",
        animal: "Monkey"
    },{
        startDate: "02/13/1945",
        endDate: "01/31/1946",
        animal: "Chicken"
    },{
        startDate: "02/01/1946",
        endDate: "01/21/1947",
        animal: "Dog"
    },{
        startDate: "01/22/1947",
        endDate: "02/09/1948",
        animal: "Pig"
    },{
        startDate: "02/10/1948",
        endDate: "01/28/1949",
        animal: "Rat"
    },{
        startDate: "01/29/1949",
        endDate: "02/16/1950",
        animal: "Ox"
    },{
        startDate: "02/17/1950",
        endDate: "02/05/1951",
        animal: "Tiger"
    },{
        startDate: "02/06/1951",
        endDate: "01/26/1952",
        animal: "Rabbit"
    },{
        startDate: "01/27/1952",
        endDate: "02/13/1953",
        animal: "Dragon"
    },{
        startDate: "02/14/1953",
        endDate: "02/02/1954",
        animal: "Snake"
    },{
        startDate: "02/03/1954",
        endDate: "01/23/1955",
        animal: "Horse"
    },{
        startDate: "01/24/1955",
        endDate: "02/11/1956",
        animal: "Sheep"
    },{
        startDate: "02/12/1956",
        endDate: "01/30/1957",
        animal: "Monkey"
    },{
        startDate: "01/31/1957",
        endDate: "02/17/1958",
        animal: "Chicken"
    },{
        startDate: "02/18/1958",
        endDate: "02/07/1959",
        animal: "Dog"
    },{
        startDate: "02/08/1959",
        endDate: "01/27/1960",
        animal: "Pig"
    },{
        startDate: "01/28/1960",
        endDate: "02/14/1961",
        animal: "Rat"
    },{
        startDate: "02/15/1961",
        endDate: "02/04/1962",
        animal: "Ox"
    },{
        startDate: "02/05/1962",
        endDate: "01/24/1963",
        animal: "Tiger"
    },{
        startDate: "01/25/1963",
        endDate: "02/12/1964",
        animal: "Rabbit"
    },{
        startDate: "02/13/1964",
        endDate: "02/01/1965",
        animal: "Dragon"
    },{
        startDate: "02/02/1965",
        endDate: "01/20/1966",
        animal: "Snake"
    },{
        startDate: "01/21/1966",
        endDate: "02/08/1967",
        animal: "Horse"
    },{
        startDate: "02/09/1967",
        endDate: "01/29/1968",
        animal: "Sheep"
    },{
        startDate: "01/30/1968",
        endDate: "02/16/1969",
        animal: "Monkey"
    },{
        startDate: "02/17/1969",
        endDate: "02/05/1970",
        animal: "Chicken"
    },{
        startDate: "02/06/1970",
        endDate: "01/26/1971",
        animal: "Dog"
    },{
        startDate: "01/27/1971",
        endDate: "02/14/1972",
        animal: "Pig"
    },{
        startDate: "02/15/1972",
        endDate: "02/02/1973",
        animal: "Rat"
    },{
        startDate: "02/03/1973",
        endDate: "01/22/1974",
        animal: "Ox"
    },{
        startDate: "01/23/1974",
        endDate: "02/10/1975",
        animal: "Tiger"
    },{
        startDate: "02/11/1975",
        endDate: "01/30/1976",
        animal: "Rabbit"
    },{
        startDate: "01/31/1976",
        endDate: "02/17/1977",
        animal: "Dragon"
    },{
        startDate: "02/18/1977",
        endDate: "02/06/1978",
        animal: "Snake"
    },{
        startDate: "02/07/1978",
        endDate: "01/27/1979",
        animal: "Horse"
    },{
        startDate: "01/28/1979",
        endDate: "02/15/1980",
        animal: "Sheep"
    },{
        startDate: "02/16/1980",
        endDate: "02/04/1981",
        animal: "Monkey"
    },{
        startDate: "02/05/1981",
        endDate: "01/24/1982",
        animal: "Chicken"
    },{
        startDate: "01/25/1982",
        endDate: "02/12/1983",
        animal: "Dog"
    },{
        startDate: "02/13/1983",
        endDate: "02/01/1984",
        animal: "Pig"
    },{
        startDate: "02/02/1984",
        endDate: "02/19/1985",
        animal: "Rat"
    },{
        startDate: "02/20/1985",
        endDate: "02/08/1986",
        animal: "Ox"
    },{
        startDate: "02/09/1986",
        endDate: "01/28/1987",
        animal: "Tiger"
    },{
        startDate: "01/29/1987",
        endDate: "02/16/1988",
        animal: "Rabbit"
    },{
        startDate: "02/17/1988",
        endDate: "02/05/1989",
        animal: "Dragon"
    },{
        startDate: "02/06/1989",
        endDate: "01/26/1990",
        animal: "Snake"
    },{
        startDate: "01/27/1990",
        endDate: "02/14/1991",
        animal: "Horse"
    },{
        startDate: "02/15/1991",
        endDate: "02/03/1992",
        animal: "Sheep"
    },{
        startDate: "02/04/1992",
        endDate: "01/22/1993",
        animal: "Monkey"
    },{
        startDate: "01/23/1993",
        endDate: "02/09/1994",
        animal: "Chicken"
    },{
        startDate: "02/10/1994",
        endDate: "01/30/1995",
        animal: "Dog"
    },{
        startDate: "01/31/1995",
        endDate: "02/18/1996",
        animal: "Pig"
    },{
        startDate: "02/19/1996",
        endDate: "02/06/1997",
        animal: "Rat"
    },{
        startDate: "02/07/1997",
        endDate: "01/27/1998",
        animal: "Ox"
    },{
        startDate: "01/28/1998",
        endDate: "02/15/1999",
        animal: "Tiger"
    },{
        startDate: "02/16/1999",
        endDate: "02/04/2000",
        animal: "Rabbit"
    },{
        startDate: "02/05/2000",
        endDate: "01/23/2001",
        animal: "Dragon"
    },{
        startDate: "01/24/2001",
        endDate: "02/11/2002",
        animal: "Snake"
    },{
        startDate: "02/12/2002",
        endDate: "01/31/2003",
        animal: "Horse"
    },{
        startDate: "02/01/2003",
        endDate: "01/21/2004",
        animal: "Sheep"
    },{
        startDate: "01/22/2004",
        endDate: "02/08/2005",
        animal: "Monkey"
    },{
        startDate: "02/09/2005",
        endDate: "01/28/2006",
        animal: "Chicken"
    },{
        startDate: "01/29/2006",
        endDate: "02/17/2007",
        animal: "Dog"
    },{
        startDate: "02/18/2007",
        endDate: "02/06/2008",
        animal: "Pig"
    },{
        startDate: "02/07/2008",
        endDate: "01/25/2009",
        animal: "Rat"
    },{
        startDate: "01/26/2009",
        endDate: "02/13/2010",
        animal: "Ox"
    },{
        startDate: "02/14/2010",
        endDate: "02/02/2011",
        animal: "Tiger"
    },{
        startDate: "02/03/2011",
        endDate: "01/22/2012",
        animal: "Rabbit"
    },{
        startDate: "01/23/2012",
        endDate: "02/09/2013",
        animal: "Dragon"
    },{
        startDate: "02/10/2013",
        endDate: "01/30/2014",
        animal: "Snake"
    },{
        startDate: "01/31/2014",
        endDate: "02/18/2015",
        animal: "Horse"
    },{
        startDate: "02/19/2015",
        endDate: "02/07/2016",
        animal: "Sheep"
    },{
        startDate: "02/08/2016",
        endDate: "01/27/2017",
        animal: "Monkey"
    },{
        startDate: "01/28/2017",
        endDate: "02/15/2018",
        animal: "Chicken"
    },{
        startDate: "02/16/2018",
        endDate: "02/04/2019",
        animal: "Dog"
    },{
        startDate: "02/05/2019",
        endDate: "01/24/2020",
        animal: "Pig"
    },{
        startDate: "01/25/2020",
        endDate: "02/11/2021",
        animal: "Rat"
    },{
        startDate: "02/12/2021",
        endDate: "01/31/2022",
        animal: "Ox"
    },{
        startDate: "02/01/2022",
        endDate: "01/21/2023",
        animal: "Tiger"
    },{
        startDate: "01/22/2023",
        endDate: "02/09/2024",
        animal: "Rabbit"
    },{
        startDate: "02/10/2024",
        endDate: "01/28/2025",
        animal: "Dragon"
    },{
        startDate: "01/29/2025",
        endDate: "02/16/2026",
        animal: "Snake"
    },{
        startDate: "02/17/2026",
        endDate: "02/05/2027",
        animal: "Horse"
    },{
        startDate: "02/06/2027",
        endDate: "01/25/2028",
        animal: "Sheep"
    },{
        startDate: "01/26/2028",
        endDate: "02/12/2029",
        animal: "Monkey"
    },{
        startDate: "02/13/2029",
        endDate: "02/02/2030",
        animal: "Chicken"
    },{
        startDate: "02/03/2030",
        endDate: "01/22/2031",
        animal: "Dog"
    }
];


// On form submit check to see what date range matches the users DOB and output the animal associated with that object
$( "form" ).submit(function( event ) {
    event.preventDefault();

    var month = $( ".month" ).val();
    var day = $( ".day" ).val();
    var year = $( ".year" ).val();

    var birthday = new Date(month+'/'+day+'/'+year);
    var animal;
    
    // Loop through all objects in the array and match the users DOB with a date range
    for(i = 0; i < dates.length; i++) {
        var from = new Date(dates[i].startDate);
        var to = new Date(dates[i].endDate);
        var withinRange = birthday >= from && birthday <= to;
        if(withinRange === true) {
            animal = dates[i].animal;
        }
    }

    // If user hasn't selected a day, month or year show error
    if(animal === undefined) {
        $('.error').text('Please enter your full birthday');
    // Else add a specific class to the wheel to make it animate
    } else {
        $('.error').text('');
        if (animal === 'Horse') {
            $(".wheel").removeClass().addClass('wheel goToHorse');
        } else if(animal === 'Sheep') {
            $(".wheel").removeClass().addClass('wheel goToSheep');
        } else if(animal === 'Monkey') {
            $(".wheel").removeClass().addClass('wheel goToMonkey');
        } else if(animal === 'Chicken') {
            $(".wheel").removeClass().addClass('wheel goToChicken');
        } else if(animal === 'Dog') {
            $(".wheel").removeClass().addClass('wheel goToDog');
        } else if(animal === 'Pig') {
            $(".wheel").removeClass().addClass('wheel goToPig');
        } else if(animal === 'Rat') {
            $(".wheel").removeClass().addClass('wheel goToRat');
        } else if(animal === 'Ox') {
            $(".wheel").removeClass().addClass('wheel goToOx');
        } else if(animal === 'Tiger') {
            $(".wheel").removeClass().addClass('wheel goToTiger');
        } else if(animal === 'Rabbit') {
            $(".wheel").removeClass().addClass('wheel goToRabbit');
        } else if(animal === 'Dragon') {
            $(".wheel").removeClass().addClass('wheel goToDragon');
        } else {
            $(".wheel").removeClass().addClass('wheel goToSnake');
        }

        // Add text about the matching animal to a div and have it fade in
        if(animal === 'Horse') {
            setTimeout(function() {
                $('.animalInfo').hide().html('<div class="row"><div class="col-12 text-center"><h2>You were born on the Chinese year of the<h1>Horse!</h1></h2></div></div><div class="row"><div class="col-12 text-center"><p>Those born under the Chinese Zodiac sign of the Horse love to roam free. They’re energetic, self-reliant, money-wise, and they enjoy traveling, love and intimacy. They’re great at seducing, sharp-witted, impatient and sometimes seen as a drifter. Compatible with Dog or Tiger.</p></div></div>').fadeIn('slow');
            }, 1100);
        } else if(animal === 'Sheep') {
            setTimeout(function() {
                $('.animalInfo').hide().html('<div class="row"><div class="col-12 text-center"><h2>You were born on the Chinese year of the<h1>Sheep!</h1></h2></div></div><div class="row"><div class="col-12 text-center"><p>Those born under the Chinese Zodiac sign of the Sheep enjoy being alone in their thoughts. They’re creative, thinkers, wanderers, unorganized, high-strung and insecure, and can be anxiety-ridden. They need lots of love, support and reassurance. Appearance is important too. Compatible with Pig or Rabbit.</p></div></div>').fadeIn('slow');
            }, 1100);
        } else if(animal === 'Monkey') {
            setTimeout(function() {
                $('.animalInfo').hide().html('<div class="row"><div class="col-12 text-center"><h2>You were born on the Chinese year of the<h1>Monkey!</h1></h2></div></div><div class="row"><div class="col-12 text-center"><p>Those born under the Chinese Zodiac sign of the Monkey thrive on having fun. They’re energetic, upbeat, and good at listening but lack self-control. They like being active and stimulated and enjoy pleasing self before pleasing others. They’re heart-breakers, not good at long-term relationships, morals are weak. Compatible with Rat or Dragon.</p></div></div>').fadeIn('slow');
            }, 1100);
        } else if(animal === 'Chicken') {
            setTimeout(function() {
                $('.animalInfo').hide().html('<div class="row"><div class="col-12 text-center"><h2>You were born on the Chinese year of the<h1>Chicken!</h1></h2></div></div><div class="row"><div class="col-12 text-center"><p>Those born under the Chinese Zodiac sign of the Chicken are practical, resourceful, observant, analytical, straightforward, trusting, honest, perfectionists, neat and conservative. Compatible with Ox or Snake.</p></div></div>').fadeIn('slow');
            }, 1100);
        } else if(animal === 'Dog') {
            setTimeout(function() {
                $('.animalInfo').hide().html('<div class="row"><div class="col-12 text-center"><h2>You were born on the Chinese year of the<h1>Dog!</h1></h2></div></div><div class="row"><div class="col-12 text-center"><p>Those born under the Chinese Zodiac sign of the Dog are loyal, faithful, honest, distrustful, often guilty of telling white lies, temperamental, prone to mood swings, dogmatic, and sensitive. Dogs excel in business but have trouble finding mates. Compatible with Tiger or Horse.</p></div></div>').fadeIn('slow');
            }, 1100);
        } else if(animal === 'Pig') {
            setTimeout(function() {
                $('.animalInfo').hide().html('<div class="row"><div class="col-12 text-center"><h2>You were born on the Chinese year of the<h1>Pig!</h1></h2></div></div><div class="row"><div class="col-12 text-center"><p>Those born under the Chinese Zodiac sign of the Pig are extremely nice, good-mannered and tasteful. They’re perfectionists who enjoy finer things but are not perceived as snobs. They enjoy helping others and are good companions until someone close crosses them, then look out! They’re intelligent, always seeking more knowledge, and exclusive. Compatible with Rabbit or Goat.</p></div></div>').fadeIn('slow');
            }, 1100);
        } else if(animal === 'Rat') {
            setTimeout(function() {
                $('.animalInfo').hide().html('<div class="row"><div class="col-12 text-center"><h2>You were born on the Chinese year of the<h1>Rat!</h1></h2></div></div><div class="row"><div class="col-12 text-center"><p>Those born under the Chinese Zodiac sign of the Rat are quick-witted, clever, charming, sharp and funny. They have excellent taste, are a good friend and are generous and loyal to others considered part of its pack. Motivated by money, can be greedy, is ever curious, seeks knowledge and welcomes challenges. Compatible with Dragon or Monkey.</p></div></div>').fadeIn('slow');
            }, 1100);
        } else if(animal === 'Ox') {
            setTimeout(function() {
                $('.animalInfo').hide().html('<div class="row"><div class="col-12 text-center"><h2>You were born on the Chinese year of the<h1>Ox!</h1></h2></div></div><div class="row"><div class="col-12 text-center"><p>Another of the powerful Chinese Zodiac signs, the Ox is steadfast, solid, a goal-oriented leader, detail-oriented, hard-working, stubborn, serious and introverted but can feel lonely and insecure. Takes comfort in friends and family and is a reliable, protective and strong companion. Compatible with Snake or Rooster.</p></div></div>').fadeIn('slow');
            }, 1100);
        } else if(animal === 'Tiger') {
            setTimeout(function() {
                $('.animalInfo').hide().html('<div class="row"><div class="col-12 text-center"><h2>You were born on the Chinese year of the<h1>Tiger!</h1></h2></div></div><div class="row"><div class="col-12 text-center"><p>Those born under the Chinese Zodiac sign of the Tiger are authoritative, self-possessed, have strong leadership qualities, are charming, ambitious, courageous, warm-hearted, highly seductive, moody, intense, and they’re ready to pounce at any time. Compatible with Horse or Dog.</p></div></div>').fadeIn('slow');
            }, 1100);
        } else if(animal === 'Rabbit') {
            setTimeout(function() {
                $('.animalInfo').hide().html('<div class="row"><div class="col-12 text-center"><h2>You were born on the Chinese year of the<h1>Rabbit!</h1></h2></div></div><div class="row"><div class="col-12 text-center"><p>Those born under the Chinese Zodiac sign of the Rabbit enjoy being surrounded by family and friends. They’re popular, compassionate, sincere, and they like to avoid conflict and are sometimes seen as pushovers. Rabbits enjoy home and entertaining at home. Compatible with Goat or Pig.</p></div></div>').fadeIn('slow');
            }, 1100);
        } else if(animal === 'Dragon') {
            setTimeout(function() {
                $('.animalInfo').hide().html('<div class="row"><div class="col-12 text-center"><h2>You were born on the Chinese year of the<h1>Dragon!</h1></h2></div></div><div class="row"><div class="col-12 text-center"><p>A powerful sign, those born under the Chinese Zodiac sign of the Dragon are energetic and warm-hearted, charismatic, lucky at love and egotistic. They’re natural born leaders, good at giving orders and doing what’s necessary to remain on top. Compatible with Monkey and Rat.</p></div></div>').fadeIn('slow');
            }, 1100);
        } else {
            setTimeout(function() {
                $('.animalInfo').hide().html('<div class="row"><div class="col-12 text-center"><h2>You were born on the Chinese year of the<h1>Snake!</h1></h2></div></div><div class="row"><div class="col-12 text-center"><p>Those born under the Chinese Zodiac sign of the Snake are seductive, gregarious, introverted, generous, charming, good with money, analytical, insecure, jealous, slightly dangerous, smart, they rely on gut feelings, are hard-working and intelligent. Compatible with Rooster or Ox.</p></div></div>').fadeIn('slow');
            }, 1100);
        }

    }

});


// Functionality for the slider
$('.slider').slick({
    autoplay:true,
    dots: false,
    infinite: true,
    speed: 1500,
    arrows : false,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
    {
        breakpoint: 1024,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        }
    },
    {
        breakpoint: 600,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 3
        }
    },
    {
        breakpoint: 480,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2
        }
    }
    ]
});