function pageHeader() {
    const header = document.querySelector(".header-flex");
    window.addEventListener("scroll", function () {

        if (this.scrollY > 100) {
            header.classList.add("sticky")
        } else {
            header.classList.remove("sticky")
        }
    })

}

export {pageHeader};