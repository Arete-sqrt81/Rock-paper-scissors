let userWeapon = undefined;
let computerWeapon = undefined;
const winner = document.querySelector('#winner');
const resultat = document.querySelector('#resultat');

// koppla knappar
const stenKnapp = document.querySelector('#rock');
const saxKnapp = document.querySelector('#scissors');
const papperKnapp = document.querySelector('#paper');

// stenKnapp eventlistener
stenKnapp.addEventListener('click', () =>{
    userWeapon = 'sten';
    console.log(`Du har valt ${userWeapon}`);
    getWinner();
});

saxKnapp.addEventListener('click', () =>{
    userWeapon = 'sax';
    console.log(`Du har valt ${userWeapon}`);
    getWinner();
});

papperKnapp.addEventListener('click', () =>{
     userWeapon = 'påse';
     console.log(`Du har valt ${userWeapon}`);
     getWinner();
});

computerWeapon = Math.round(Math.random()*2);
console.log(computerWeapon);




// beräkna vem som vinner spelet...?
const getWinner = () => {
    //console.log('Getting Winner');
    computerWeapon = Math.round(Math.random()*2);
    //console.log(computerWeapon);

    // conditional statement som kollar om computer weapon är lika
    if(computerWeapon === 0){
        computerWeapon = 'sten';
    } else if(computerWeapon === 1){
        computerWeapon = 'sax';
    } else if (computerWeapon === 2){
        computerWeapon = 'påse';
    }

    resultat.innerHTML = `Ditt vapen är ${userWeapon} och datorns vapen är ${computerWeapon}`;

    // avgör vinnare och kolla om det blivit oavgjort - conditional statement
    if(userWeapon === computerWeapon){
        winner.innerHTML = 'Det blev oavgjort';
    } else if(userWeapon === 'sten'){
        winner.innerHTML = computerWeapon === 'sax' ? 'Du vann' : 'Datorn vann';
    } else if(userWeapon === 'sax'){
        winner.innerHTML = computerWeapon === 'påse' ? 'Du vann' : 'Datorn vann';
    } else if(userWeapon === 'påse'){
        winner.innerHTML = computerWeapon === 'sten' ? 'Du vann' : 'Datorn vann';
    }

};

