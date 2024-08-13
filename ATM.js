//const giveMoney =document.queryselector("#giveMoney");
//const moneyTransfer=document.queryselector("#moneyTransfer");
//const procedures=document.queryselector("#procedures");
//const password =document.queryselector("#password");
//const payment=document.queryselector("#payment");
//const card=document.queryselector("#card");
//const other=document.queryselector("#other");

/*let cardPassword;
window.onload = function(){
cardPassword = prompt("Lütfen kart şifrenizi giriniz");
  while(cardPassword.length!=4){
      cardPassword = prompt("Lütfen 4 hane olacak şekilde şifrenizi girin");
  }
}
console.log(cardPassword); */
const menu = document.querySelector(".menu");
let newİnput;
let newButton;
let newTwoButton;
let newTwoİnput;
let newTwoİnputValue;
let newİnputValue;
let newThreeButton;
let newThreeİnput;
let newFourİnput;
let newFiveİnput;
let newSixİnput;
let newFourButton;
let sonucTransfer;
let newSevenİnput;




function giveMoney() {
    menu.innerHTML = '';
    // Sayfayı yeniden yükleme
    //  setTimeout(function() {window.location.reload();}, 100); // Küçük bir gecikme, temizlemenin tamamlanmasını sağlar

    newİnput = document.createElement('input');
    newİnput.className = 'newİnput';
    menu.appendChild(newİnput);
    newİnput.placeholder = "Bakiyenizi giriniz";
    newButton = document.createElement('button');
    newButton.className = 'newButton';
    newButton.textContent = 'Tıklayın';
    menu.appendChild(newButton);
    newButton.addEventListener('click', handleButtonClick);
}

function handleButtonClick() {
    // console.log(newİnput.value);

    //  alert("Lütfen çekmek istediğiniz tutarı bakiyenizden düşük girin");
    menu.innerHTML = '';
    newTwoİnput = document.createElement('input');
    newTwoİnput.placeholder = "Çekmek istediğiniz tutarı giriniz";
    newTwoİnput.className = 'newTwoİnput';
    menu.appendChild(newTwoİnput);
    newTwoButton = document.createElement('button');
    newTwoButton.className = 'newTwoButton';
    newTwoButton.innerHTML = 'Parayı Çek';
    menu.appendChild(newTwoButton);
    newTwoButton.addEventListener('click', control);
}

function control() {
    if (newİnput.value < newTwoİnput.value) {
        alert("Lütfen çekmek istediğiniz tutar bakiyenizden düşük olsun");
        handleButtonClick();
    }
    else if (newİnput.value >= newTwoİnput.value) {
        twoButtonClick();
    }
}

function twoButtonClick() {
    menu.innerHTML = '';
    console.log(newİnput.value);
    console.log(newTwoİnput.value);
    sonuc = document.createElement('a');
    sonuc.className = 'sonuc';
    menu.appendChild(sonuc);
    sonuc.innerHTML = "Kalan Bakiye" + " " + (newİnput.value - newTwoİnput.value) + "TL";

    //  sonuc=(Number (newİnput.value)) - (Number (newTwoİnputValue.value));
    //console.log(Number (sonuc));

}

function transfer() {
    menu.innerHTML = '';
    newThreeİnput = document.createElement('input');
    newThreeİnput.className = 'newThreeİnput';
    menu.appendChild(newThreeİnput);
    newThreeİnput.placeholder = "Bakiyenizi giriniz";
    newThreeButton = document.createElement('button');
    newThreeButton.className = 'newThreeButton';
    newThreeButton.textContent = 'Tıklayın';
    menu.appendChild(newThreeButton);
    newThreeButton.addEventListener('click', twoTransfer);

}

function twoTransfer() {
    menu.innerHTML = '';
    newFourİnput = document.createElement('input');
    newFourİnput.className = 'newFourİnput';
    newFourİnput.value= 'TR';
    menu.appendChild(newFourİnput);

    newFiveİnput = document.createElement('input');
    newFiveİnput.className ='newFiveİnput';
    newFiveİnput.placeholder= "Gönderilicek Tutarı Giriniz";
    menu.appendChild(newFiveİnput);

    newSixİnput = document.createElement('input');
    newSixİnput.className ='newSixİnput';
    newSixİnput.placeholder= "Gönderilicek Kişi İsmi";
    menu.appendChild(newSixİnput);

    newFourButton = document.createElement('button');
    newFourButton.className = 'newFourButton';
    newFourButton.textContent = 'Para Gönderin';
    menu.appendChild(newFourButton);
    newFourButton.addEventListener('click', twoControl);
}

function twoControl() {
    if (newFourİnput.value.length!=26 || newFiveİnput.value > newThreeİnput.value || newSixİnput.value.length==0 || newFiveİnput.value==0 ) {
        alert("Geçersiz bir IBAN ,Fazla tutar veya Geçersiz bir isim girildi");
        twoTransfer();
    }
    else {
        menu.innerHTML = '';
        sonucTransfer = document.createElement('a');
        sonucTransfer.className='sonucTransfer';
        sonucTransfer.innerHTML = "Kalan Bakiye" + " " +(newThreeİnput.value - newFiveİnput.value) ;
        menu.appendChild(sonucTransfer);
        console.log(newThreeİnput.value - newFiveİnput.value);    }
}
//en son transfer işlemleri yapıldı düzgün çalışıyor
function bakiye(){
    menu.innerHTML = '';
    newSevenİnput = document.createElement('input');
    newEightİnput = document.createElement('input');
    newSevenİnput.className = 'newSevenİnput';
    newEightİnput.className = 'newEightİnput';
    
    
}



