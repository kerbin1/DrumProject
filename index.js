let botaoA = document.getElementById("aDrum");

botaoA.addEventListener('click', () =>{
    const som = document.getElementById('audioA');
    console.log(som);
    som.play();
})

let botaoS = document.getElementById("sDrum");

botaoS.addEventListener('click', () =>{
    const som = document.getElementById('audioS');
    console.log(som);
    som.play();
})

let botaoD = document.getElementById("dDrum");

botaoD.addEventListener('click', () =>{
    const som = document.getElementById('audioD');
    console.log(som);
    som.play();
})

let botaoG = document.getElementById("gDrum");

botaoG.addEventListener('click', () =>{
    const som = document.getElementById('audioG');
    console.log(som);
    som.play();
})

let botaoJ = document.getElementById("jDrum");

botaoJ.addEventListener('click', () =>{
    const som = document.getElementById('audioJ');
    console.log(som);
    som.play();
})

let botaoK = document.getElementById("kDrum");

botaoK.addEventListener('click', () =>{
    const som = document.getElementById('audioK');
    console.log(som);
    som.play();
})

let botaoL = document.getElementById("lDrum");

botaoL.addEventListener('click', () =>{
    const som = document.getElementById('audioL');
    console.log(som);
    som.play();
})

document.addEventListener('keydown',function(event){
    switch (event.key.toLocaleLowerCase()) {
        case 'a':
            const somA = document.getElementById('audioA');
            console.log(somA);
            somA.play();
            break;
        case 's':
            const somS = document.getElementById('audioS');
            console.log(somS);
            somS.play();
            break;
        case 'd':
            const somD = document.getElementById('audioD');
            console.log(somD);
            somD.play();
            break;
        case 'g':
            const somG = document.getElementById('audioG');
            console.log(somG);
            somG.play();
            break;
        case 'j':
            const somJ = document.getElementById('audioJ');
            console.log(somJ);
            somJ.play();
            break;
        case 'k':
            const somK = document.getElementById('audioK');
            console.log(somK);
            somK.play();
            break;
        case 'l':
            const somL = document.getElementById('audioL');
            console.log(somL);
            somL.play();
            break;
        defalt:
            break;
    }
});