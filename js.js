function toggleDiv() {
  var div = document.getElementById("myDiv");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}






// // // let gün =17;
// // // let ay =2;
// // // let yıl=2000;
// // // let ad='oguzhan';
// // // console.log(gün,ay,yıl,ad);



// // let ad = "oguzhan";
// // let soyad="korkmaz";
// // let adSoyad=ad+" "+soyad;
// // console.log(adSoyad);
// // console.log(adSoyad[12])
// // console.log(adSoyad.length)



// // console.log(adSoyad.toUpperCase())
// // console.log(adSoyad.toLowerCase())

// // let index=adSoyad.indexOf("a")
// // console.log("bnin bulunduğu index "+index);

// // let index1=adSoyad.lastIndexOf("a")
// // console.log("anin bulunduğu index "+index1);

// // let bastanson=adSoyad.slice(2,5);
// // console.log(bastanson)


// // let bastanson1=adSoyad.substring(4,15);
// // console.log(bastanson1)


// // let yerdegis=adSoyad.replace('a','w')
// // console.log(yerdegis)


// let yaricap=15;
// const pisayisi=3.14;
// console.log(yaricap,pisayisi)



// let dairealani=pisayisi*yaricap**2;
// console.log(dairealani)


// console.log(16/4)

// let kalan = 20%3;
// console.log(kalan)



// let sayi=14;
// sayi++;
// console.log(sayi)



// const kullanici = "oguzhan";
// const kullanici1 = "korkmaz";
// const kullanici2 = "kimdir";

// let sonuc = ` adaylar :  ${kullanici} ${kullanici1}  ${kullanici2}`;
// console.log(sonuc)

// let html = `<h1>oguzhan</h1>
// <h2>korkmaz</h2>
// <h3>ıvan</h3>`;
// console.log(html)


// let isimler =['oguzhan','korkmaz','elif'];
// console.log(isimler[2])
// isimler[2]='ebru';
// console.log(isimler[2])



// let sayi1 =10;
// let sayi2=30;
// let toplama =sayi1+sayi2;
// let sonuc = `${sayi1} ve ${sayi2} nin toplamı =  ${toplama} dır`;
// console.log(sonuc);


// let isimler=['oguzhan','mehmet','ali','veli','deli']
// isimler[3]='delali';

// let karisik=isimler.join('-')
// let  nerede =isimler.indexOf('delali')
// console.log(karisik,nerede);

// let ekle =isimler.concat(['elif','merve'])
// console.log(ekle);
// isimler.push('mahmut');
// isimler.pop();
// console.log(isimler)


// let yaslar=[1,50,70,85,90]
// console.log(yaslar[2]);
// let sira=yaslar.indexOf(90);
// console.log(sira)


// let yas=null ;
// console.log(yas,yas+5,`yasınız ${yas}`)


// let yas= 16;
// let sinif= 1;

// if(yas<=15 || sinif==1)
// {
//     console.log("sınava hakk kazandınz");
// }
// else{
//     console.log("hak kazanamadınız")
// }



// let email ='korkmaz_fb29@hotmail.com';
// let varmi =email.includes('@');
// console.log(email,varmi)



// let adSoyad=['oğuzhan','korkmaz','emel','sayın'];
// let varmi1=adSoyad.includes('emel')
// console.log(adSoyad,varmi1);


// let yas1 = 23;
// console.log(yas1==23);
// console.log(yas1=='23');
// console.log(yas1==='23');
// console.log(yas1===23);


// let yas2 ='23';
// console.log(yas2+1);
// console.log(typeof yas2)


// let yas2='23';
// yas2=Number(yas2);
// console.log(yas2+1);
// console.log(typeof yas2);



// let sonuc5=Boolean('0');
// console.log(sonuc5 ,typeof sonuc5 );


// let yas5 = 11;
// for (let i = 0; i <yas5; i++)
// {
//     console.log(i);
// }

// let ad1 = ['oğuzhan', 'mehmet', 'kasım'];
// for (let i = 0; i < ad1.length; i++)
// {
//     // console.log(ad1[i]);
//     let html=`<div>${ad1[i]}</div>`;
//     console.log(html);
// }



// let yaslar1 = [25, 45, 56, 60];
// for (let i = 0; i < yaslar1.length; i++) {
//    let html=`<div>${yaslar1[i]}</div>`;
//    console.log(html)
// }

// let i=0;
// while(i<10)
// {
//     console.log(i)
//     i++;
// }


// let i=0;
// let ad1 = ['oğuzhan', 'mehmet', 'kasım','veli'];
// while(i<ad1.length)
// {

//     let html=`<div>${ad1[i++]}</div>`;
//     console.log(html);


// }





// let i = 10;
// while(i>5)
// {
//     console.log(i);
//     i--;
// }


// let i = 1;

// do
// {
//     console.log(i);
//     i++;
// }
// while(i<2);


// let sifre = '12345678';
// if(sifre.length<8)
// {
//     console.log('şifre  en az 8 karekterden oluşmalıdır');
// }

// else if(sifre.length>8  && sifre.includes('.'))
// {
//     console.log('şifre çok güçlü')
// }

// else
// {
//     console.log('şifre güçlü değil yeniden giriniz')
// }


// const control = false;
// if(!control)
// {
//     console.log('kontrol başarısız')
// }


// let notlar = [15, 25, 36, 48, 50, 90];
// for(let i=0;i<notlar.length;i++){

//     if(notlar[i]==15)
//     {
//         continue;
//     }



//     console.log(notlar[i])
//    if(notlar[i]==48)
//    {
//     console.log("bravo");
//     break;
//    }
// }


// let sonuc = 'FF';

// switch (sonuc) {
//     case 'AA':
//         console.log("NOTUNUZ AA BAŞARILI");
//         break;
//     case 'BA':
//         console.log("NOTUNUZ BA İYİ");
//         break;
//     case 'CA':
//         console.log("NOTUNUZ CA ORTA");
//         break;
//     case 'CC':
//         console.log("NOTUNUZ CC Geçer");
//         break;
//     case 'DD':
//         console.log("NOTUNUZ DD Kötü");
//         break;
//         default:
//             console.log("Kaldınız")
// }


// function oguz()
// {
//     console.log('oguzhan');

// }

// oguz();
// oguz();
// oguz();


// let oguzhan=function()
// {
//     console.log('benım adım oguzhan');

// }


// oguzhan();




// const  oguzhann =function(ad='oguzhan',soyad='korkmaz')
// {
//   console.log(`adınız:${ad}   soyadını :${soyad}`);
// }
// oguzhann();
// oguzhann('deli','veli');


// const karelani =function(kenar)
// {
//   let alan =kenar**2;
//   return alan;
//   // console.log(alan)
// }
// const sonuc =karelani(6);
// console.log(sonuc)


// const karelani = kenar => kenar ** 2;
// const sonuc=karelani(5);
// console.log(sonuc);



// const fatura = (urunler, vergi) => {
//   let toplama = 0;
//   for (let i = 0; i < urunler.length; i++) {
//      toplama += urunler[i] + urunler[i] * vergi;



//   }
//   return toplama;



// }
// console.log(fatura([10, 20, 30], 0.25));

// console.log('oğuzhan');


// let ogrenciler = ['oğuzhan', 'elif', 'mustafa'];
// ogrenciler.forEach(function () {
//   console.log('selam');
// })


// ogrenciler.forEach(function (kisiler, index) {
//   console.log(kisiler, index);
// })


// const ogrenci = (kisiler, index) => {

//   console.log(`${index}- ${kisiler}  `)

// }
// ogrenciler.forEach(ogrenci);