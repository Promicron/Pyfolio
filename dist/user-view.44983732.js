(function() {
    "use strict";
    /**
   * Easy selector helper function
   */ const select = (el, all = false)=>{
        el = el.trim();
        if (all) return [
            ...document.querySelectorAll(el)
        ];
        else return document.querySelector(el);
    };
    /**
   * Easy event listener function
   */ const on = (type, el, listener, all = false)=>{
        let selectEl = select(el, all);
        if (selectEl) {
            if (all) selectEl.forEach((e)=>e.addEventListener(type, listener));
            else selectEl.addEventListener(type, listener);
        }
    };
    /**
   * Mobile nav toggle
   */ on("click", ".mobile-nav-toggle", function(e) {
        select("body").classList.toggle("mobile-nav-active");
        this.classList.toggle("bi-list");
        this.classList.toggle("bi-x");
    });
})();
function addCard(upcardTitle, upcardDesc, upcardFile, upcardFilepath, upcardImg) {
    var cardRow = document.createElement("div");
    cardRow.setAttribute("class", "col");
    // var cartItems = document.getElementsByClassName("cart-items")[0]
    // var cartItemNames = cartItems.getElementsByClassName('item-name')
    // for (var i = 0; i < cartItemNames.length; i++){
    //     if (cartItemNames[i].innerText == title){
    //         alert('Item is already in Cart')
    //         return
    //     }
    // }
    var cardRowContent = `
      <div class="col">
        <div class="card h-100">
          <img src="/assets/img/portfolio/portfolio-2.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title fw-bold text-success" id="card-name2">${upcardTitle}</h5>
            <p class="card-text">${upcardDesc}</p>
            <div class="sample-file">
              <span class="file fs-5 text-success" id="file">${upcardFile}</span>
              <a href="${upcardFilepath}" download="gg">
                  <i class="bi bi-download btn p-0 fs-4 float-end text-success"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      `;
    cardRow.innerHTML = cardRowContent;
    document.querySelector(".row").appendChild(cardRow);
// document.body.appendChild(cardRow);
} //   export const select = (el, all = false) => {
 //   el = el.trim()
 //   if (all) {
 //     return [...document.querySelectorAll(el)]
 //   } else {
 //     return document.querySelector(el)
 //   }
 // }

//# sourceMappingURL=user-view.44983732.js.map
