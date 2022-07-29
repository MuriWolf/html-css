function iniciarModal(modalID) {
    const modal = document.getElementById(modalID);
    if (localStorage.closeModal != modalID){
        modal.classList.add("show");
        modal.addEventListener("click", (e) => {
            if (e.target.id == modalID || e.target.className == "close-btn"){
                fecharModal(modalID);
                // localStorage.closeModal = modalID;
            }
        })
    }
}

function fecharModal(modalID) {
    const modal = document.getElementById(modalID);
    modal.classList.remove("show");
}

window.addEventListener("load", () => {
    setTimeout(()=>{
        iniciarModal("modal-assinar");
    }, 1000);
})