/////////////////////////////////////////////////////////////////////////
// ADD TO CART

let productsCountEl = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");

for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", function () {
    let prevProductsCount = +productsCountEl.textContent;
    productsCountEl.textContent = prevProductsCount + 1;
  });
}

/////////////////////////////////////////////////////////////////////////
// CHANGE LIKE

let likeBtns = document.querySelectorAll(".like");

likeBtns.forEach((item) =>
  item.addEventListener("click", function () {
    if (item.classList.contains("liked")) {
      item.classList.remove("liked");
    } else {
      item.classList.add("liked");
    }
  })
);

/////////////////////////////////////////////////////////////////////////
// SLIDER
$(".slider-block").slick({
    autoplay: true,
    dots: true,
});
