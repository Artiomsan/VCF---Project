

function transferSticky() {
    const header = document.querySelector(".box-transfers");
    window.addEventListener("scroll", function () {

        if (this.scrollY > 1450) {
            header.classList.add("transfer-sticky")
        } else {
            header.classList.remove("transfer-sticky")
        }
    })

}

function tableferSticky() {
    const header = document.querySelector(".table");
    window.addEventListener("scroll", function () {

        if (this.scrollY > 1450) {
            header.classList.add("table-sticky")
        } else {
            header.classList.remove("table-sticky")
        }
    })

}

export {transferSticky};

export {tableferSticky}


