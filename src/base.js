// import Airtable from 'airtable';
var Airtable = require('airtable');
// const { select } = require('../main');
var base = new Airtable({apiKey: 'keyAFPRDIwNFDWk7A'}).base('app24ha3CNNPDxBBe');

const table = base('Registration');

const getRecords = async() => {
    const records  = await table.select().firstPage();
    // console.log(records);
    // document.getElementsByClassName('table-section');
    // console.log(records);
    // records.forEach(record => (

    // ))
    [...document.querySelectorAll('.userName')].forEach(item => {
        item.innerText = records[1].fields?.Username;
    });
    [...document.querySelectorAll('.profession')].forEach(item => {
        item.innerText = records[1].fields?.Profession;
    });
    // document.querySelector('.userAbout').innerText = records[1].fields?.About;
    // console.log(records[1]);

    let rod = records[1].fields?.About;
    // console.log(rod)
    // console.log(document.querySelectorAll('.userName'))
};
getRecords(); 


// const createRecord = async (fields) =>{
//     const createdRecord = await table.create(fields);
//     console.log(minifyRecord(createdRecord));

// };
// createRecord({
//     Username: "Promise",
//     // Profession: document.getElementById("profession").value ,
//     // About: document.getElementById("userDesc").value,
//     Profession: 'Promise',
// })

// const updateRecord =async(id, fields) =>{
//     const updatedRecord = await table.update(id, fields);
//     console.log(minifyRecord(updatedRecord));
//     updateRecord('recIqYPwWwLQO505x',{
//         Username: 'Updated!!'
//     })
// }

const minifyRecord = (record)=>{
    return{
        id: record.id,
        fields: record.fields,
    };
}
let Register = ()=> {
    let name = document.getElementById('name').value;
    // let name = document.querySelector('#name').value;
    let userImage = document.querySelector('#userImage').value;
    let profession = document.querySelector('profession').value;
    let about = document.querySelector('userDesc').value;
    // let  = document.querySelector('userDesc').value;

    console.log(name,userImage,profession,about)
}
function myFunction() {
    var x = document.getElementById("myForm");
    var txt = "";
    var i;
    for (i = 0; i < x.length; i++) {
      txt = txt + x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = txt;
  }
// table.create([
//     {
//       "fields": {
//         "Feature": "Name",
//         "Feature description": "Experiment with allowing users to choose which sounds go with which notifications, so they can easily understand what's happening without needed to re...",
//         "Status": "Live",
//         "Value": "High value"
//       }
//     },
//     {
//       "fields": {
//         "Feature": "Skill Title", 
//         "Feature description": "Based on user research, we want to add options for increased security like 2FA and one-time passwwor",
//         "Status": "In reviews",
//         "Value": "Low value"
//       }
//     }
//   ], function(err, records) {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     records.forEach(function (record) {
//       console.log(record.getId());
//     });
//   });

    