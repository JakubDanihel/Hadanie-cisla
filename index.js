const odpoved = Math.floor(Math.random()*10+1);
let hadanie = 0;

console.log(odpoved);

document.getElementById("submitBt").onclick = function() {
    let typ = document.getElementById("hadacie_pole").value;
    hadanie++;

    if(typ == odpoved) {
        alert(`${odpoved} je spravne cislo. pocet pokusov je: ${hadanie}`);
    }else if(typ > odpoved){
        alert(`prilis velke cislo`);
    }else{
        alert(`prilis male cislo`);
    }
}