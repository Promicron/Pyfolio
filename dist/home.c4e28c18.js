const addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", ()=>{
    // myFunction()
    const filename = select("#filename").value;
    let userImage;
    const userImageFile = select("#fileImage").files[0];
    console.log(userImageFile);
    getBase64(userImageFile).then((data)=>{
        userImage = data;
    });
    const fileDesc = select("#fileDesc").value;
    const file = select("#sampleFile").value;
    console.log(filename, fileDesc, file);
});
function select(item) {
    return document.querySelector(item);
}

//# sourceMappingURL=home.c4e28c18.js.map
