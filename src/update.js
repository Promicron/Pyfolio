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

    updateRecord('recIqYPwWwLQO505x',{
        Username: name,
        Profession: profession,
    })
    
    console.log(name, userImage, profession, userDesc, works, workDesc)
    
})

const updateRecord =async(id, fields) =>{
    const updatedRecord = await table.update(id, fields);
    console.log(minifyRecord(updatedRecord));
    updateRecord('recIqYPwWwLQO505x',{
        Username: 'Updated!!'
    })
}

function select(item) {
    return document.querySelector(item)
}