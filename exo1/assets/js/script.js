
// format pour le numéro de telephone
var cleaveTel = new Cleave ('#tel',{
    phone: true,
    phoneRegionCode: 'FR',
    delimiter: '-'
});

// console.log(cleaveTel.properties.phoneRegionCode);

// document.getElementById('country').addEventListener('change', function (e){
//     cleaveTel.setPhoneRegionCode('FR');
//     cleaveTel.setRawValue('');
//     console.log(cleaveTel.properties.phoneRegionCode);
// });

// console.log(cleaveTel.properties.phoneRegionCode);

// format pour les dates de commande
var cleaveOrderDate = new Cleave ('#orderDate', {
    date: true,
    delimiter: '-',
    dateMin: '2020-11-17',
    datePattern: ['d', 'm', 'Y']
});

// format pour les carte de crédit
var cleave2 = new Cleave ('#cardNumber',{
    creditCard: true,
})


