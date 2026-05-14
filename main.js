const cart=[]; /*корзина*/
let total=0; /*итоговая сумма*/
const cartDiv = document.getElementById("cart");
const cartUl  = document.getElementById("cart_list");
const cartBtn = document.getElementById("cart_btn");

function clearCart(){
    cart.length = 0;
    total = 0;
}
function openOrHide(){
    cartDiv.style.display = cartDiv.style.display === "block"? "none":"block";
}
function addToCart(btn){
    const kartochka = btn.closest(".card");
    const name = kartochka.getAttribute("data-name");
    const price = parseFloat(kartochka.getAttribute("data-price"));
    cart.push({name,price});
}
function renderCart(){
    cartUl.innerHTML = "";
    cart.forEach((item,index)=>{
    total+=item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} -${item.price}`;
    cartUl.appendChild(li);
    });
    const total_li = document.createElement("li");
    total_li.textContent = `Итоговая стоимость: ${total}`;
    cartUl.appendChild(total_li);
}