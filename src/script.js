(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
  
  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }
  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })
})();

// const addBtn =  document.querySelector('#addBtn')

// addBtn.addEventListener("click", () => {

//   const filename = document.querySelector("#filename").value
//   let userImage 
//   const userImageFile = document.querySelector("#fileImage").files[0]
//   console.log(userImageFile)
//   getBase64(userImageFile).then(
//       data => {
//           userImage = data
//       }
//     );
//   const fileDesc = document.querySelector("#fileDesc").value;
//   const file = document.querySelector("#sampleFile").files;

//   console.log(filename, fileDesc, file)
//   addCard(filename, fileDesc, file)
// })

// function getBase64(file) {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = error => reject(error);
//   });
// }

// function addCard(filename, fileDesc, file){
//   var cardRow = document.createElement('div')
//   cardRow.setAttribute("class", "col")
//   var cardRowContent = `
//       <div class="col">
//         <div class="card h-100">
//           <img src="/portfolio-6.0e684e09.jpg" class="card-img-top" alt="...">
//           <div class="card-body">
//             <h5 class="card-title fw-bold text-success" id="card-name2">${filename}</h5>
//             <p class="card-text">${fileDesc}</p>
//             <div class="sample-file">
//               <span class="file fs-5 text-success" id="file">${file.name}</span>
//               <a href="${file}" download="${file}">
//                   <i class="bi bi-download btn p-0 fs-4 float-end text-success"></i>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       `
//   cardRow.innerHTML = cardRowContent
//   document.querySelector('.row').appendChild(cardRow);
// }
