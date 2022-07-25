import {table} from "./base.js"

const subBtn =  document.querySelector('#subBtn')

subBtn.addEventListener("click", () => {
    // myFunction()
    const name = select("#name").value
    let userImage 
    const userImageFile = select("#userImage").files[0]
    console.log(userImageFile)
    getBase64(userImageFile).then(
        data => {
            userImage = data
        }
      );
    const profession = select("#profession").value
    const userDesc = select("#userDesc").value
    const works = select("#works").value
    const workDesc = select("#user-desc").value
    const uploadImage = select("#uploadImage").value

    createRecord({
        Username: name,
        // Profession: document.getElementById("profession").value ,
        // About: document.getElementById("userDesc").value,
        Profession: 'Promise',
    })
    
    console.log(name, userImage, profession, userDesc, works, workDesc)
    
})

function myFunction() {
    var x = document.getElementById("form");
    var txt = "";
    var i;
    for (i = 0; i < x.length; i++) {
      txt = txt + x.elements[i].value + "<br>";
    }
    // document.getElementById("demo").innerHTML = txt;
    console.log(txt)
  }

function select(item) {
    return document.querySelector(item)
}

function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  
const createRecord = async (fields) =>{
    const createdRecord = await table.create(fields);
    console.log(minifyRecord(createdRecord));

};

const minifyRecord = (record)=>{
    return{
        id: record.id,
        fields: record.fields,
    };
}