const addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", ()=>{
    const uploadImage = document.querySelector("#fileImage").files;
    const workTitle = document.querySelector("#filename").value;
    // let userImage 
    // const userImageFile = document.querySelector("#fileImage").files[0]
    // console.log(userImageFile)
    // getBase64(userImageFile).then(
    //     data => {
    //         userImage = data
    //     }
    //   );
    const fileDesc = document.querySelector("#fileDesc").value;
    const uploadFile = document.querySelector("#sampleFile").files;
    encodeImageFileAsURL(workTitle, fileDesc, uploadImage);
    console.log(fileDesc);
// console.log(img64, "file")
//   console.log(filename, fileDesc, uploadFile)
// addCard(filename, fileDesc, uploadFile)
// readImage(uploadFile)
});
// function getBase64(file) {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = error => reject(error);
//   });
// }
function readImage(file) {
    // console.log(file, "file")
    // if (!file) return
    // Check if the file is an image.
    if (file.type && !file.type.startsWith("image/")) {
        console.log("File is not an image.", file.type, file);
        return;
    }
    const reader = new FileReader();
    reader.addEventListener("load", (event)=>{
        img.src = event.target.result;
    });
    reader.readAsDataURL(file);
}
function addCard(workTitle, fileName, fileDesc, file) {
    var cardRow = document.createElement("div");
    cardRow.setAttribute("class", "col");
    var cardRowContent = `
      <div class="col">
        <div class="card h-100">
          <img src=${file} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title fw-bold text-success" id="card-name2">${workTitle}</h5>
            <p class="card-text">${fileDesc}</p>
            <div class="sample-file">
              <span class="file fs-5 text-success" id="file">${fileName}</span>
              <a href="${file}" download="${file}">
                  <i class="bi bi-download btn p-0 fs-4 float-end text-success"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      `;
    localStorage.setItem("files", cardRowContent);
    cardRow.innerHTML = cardRowContent;
    document.querySelector(".row").appendChild(cardRow);
// document.body.appendChild(cardRow);
}
function encodeImageFileAsURL(workTitle, fileDesc, file) {
    console.log(file);
    if (file.length > 0) {
        var fileToLoad = file[0];
        let fileName = file[0].name;
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
            var srcData = fileLoadedEvent.target.result; // <--- data: base64
            addCard(workTitle, fileName, fileDesc, srcData);
            return srcData;
        };
        return fileReader.readAsDataURL(fileToLoad);
    }
}

//# sourceMappingURL=home.3020d7ec.js.map
