window.addEventListener('load', () =>{

    const btnPrincipal = document.getElementById("btnPrincipal");
    const btnAmarres = document.getElementById("btnAmarres");
    const btnHechizos = document.getElementById("btnHechizos");

    const pPri = document.getElementById("pPri");
    const pAma = document.getElementById("pAma");
    const pHec = document.getElementById("pHec");

    const collapse=document.getElementById("collapse");
    const otherdiv=document.getElementById("otherdiv");
    const otherdiv2=document.getElementById("otherdiv2");

    btnPrincipal.addEventListener('click', (evt)=>{
        evt.preventDefault();

        pPri.classList.add('link_selected');
        pAma.classList.remove('link_selected');
        pHec.classList.remove('link_selected');
        
        collapse.classList.remove('hide');
        otherdiv.classList.add('hide');
        otherdiv2.classList.add('hide');

    });

    btnAmarres.addEventListener('click', (evt)=>{
        evt.preventDefault();

        pAma.classList.add('link_selected');
        pPri.classList.remove('link_selected');
        pHec.classList.remove('link_selected');
        
        otherdiv.classList.remove('hide');
        collapse.classList.add('hide');
        otherdiv2.classList.add('hide');
        
    });

    btnHechizos.addEventListener('click', (evt)=>{
        evt.preventDefault();

        pHec.classList.add('link_selected');
        pPri.classList.remove('link_selected');
        pAma.classList.remove('link_selected');

        otherdiv2.classList.remove('hide');
        collapse.classList.add('hide');
        otherdiv.classList.add('hide');

    });

});

$(document).ready(function () {

    function showPopup() {
        $('.pop-up').addClass('show');
        $('.pop-up-wrap').addClass('show');
    }

    $("#close").click(function() {
        $('.pop-up').removeClass('show');
        $('.pop-up-wrap').removeClass('show');
    });

    setTimeout(showPopup, 2000);

});