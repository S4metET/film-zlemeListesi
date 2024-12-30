let izlenecekFilmler = JSON.parse(localStorage.getItem("Izlenecek Filmler")) || [];
function saveFilmler(){
    localStorage.setItem("İzlenecek Filmler", JSON.stringify(izlenecekFilmler));
}
function filmEkle(){
    const film = prompt("İzlemek istediğin filmi gir:");
    if (!film) {
        alert("Geçerli bir film adı girmedin.");
        return nextAction();
    }
    izlenecekFilmler.push(film);
    saveFilmler();
    alert("Film Eklendi.");
    return nextAction();
}
function filmleriListele() {
    if (izlenecekFilmler.length === 0){
        alert("Henüz bir film eklemedin.");
    }
    else{
        const liste = izlenecekFilmler.map((film, i) => `${i + 1}. ${film}`).join("\n");
        alert(`İzlenecek Filmler:\n\n${liste}`);
    }
    return nextAction();
}
function nextAction(){
    const value = prompt("Başka bir işlem yapmak ister misin? (e/h)").toLowerCase();
    if (value === "e"){
        return mainMenu();
    }
    else if (value === "h") {
        alert("Güle güle...");
    } else {
        alert("Geçersiz seçim yaptın.");
        return nextAction();
    }
}
function mainMenu(){
    const value = prompt(`Bir işlem seç:\n1- Filmleri listele\n2- Yeni film ekle\n3- Çıkış yap`);
    if(value === "1"){
        return filmleriListele();
    }
    else if (value === "2"){
        return filmEkle();
    }
    else if (value === "3"){
        alert("Güle güle...");
    }
    else{
        alert("Geçersiz seçim yaptınız.");
        return mainMenu();
    }
}
mainMenu();