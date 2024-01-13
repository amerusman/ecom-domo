function getRandomInteger(t, e) {
     return t = Math.ceil(t), e = Math.floor(e), Math.floor(Math.random() * (e - t + 1)) + t
}

document.addEventListener("DOMContentLoaded", () => {

    var allProductItems = document.querySelectorAll(".product-item");

    if (allProductItems && allProductItems.length) {
        allProductItems.forEach((function (e, i) {
            var n = e.querySelector(".last-sale span");
            if (i === 0) {
                n.innerText = getRandomInteger(10, 24) + " ore";
            } else if (i === 1) {
                n.innerText = getRandomInteger(2, 35) + " secondi";
            } else if (i === 2) {
                n.innerText = getRandomInteger(3, 60) + " minuti";
            }

        }));
    }

    let paramsUTM = window.location.search.substring(1)
    if (paramsUTM) {
        document.cookie = "utm =" + JSON.stringify(decodeURI(paramsUTM));
    }

})