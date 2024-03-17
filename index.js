document.getElementById("increase").addEventListener("click", () => {
    let field = document.getElementById('count');
    field.value = Number(field.value) + 1;
});
document.getElementById("decrease").addEventListener("click", () => {
    let field = document.getElementById('count');
    field.value = Number(field.value) - 1;
});
document.getElementById("add").addEventListener("click", () => {
    let cart = document.getElementById("cart");
    let product = document.getElementById("product");
    let count = document.getElementById('count');
    console.log(product.value.length, Number(count.value));
    if (product.value.length > 0 && Number(count.value) > 0) {
        cart.value  += product.value + "-" + count.value + " ";
        product.value = "";
        count.value = "";
    }
});
