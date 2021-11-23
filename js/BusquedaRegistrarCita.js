function VerResultadosDeBusquedaAgregarCita(){
    var VerRBRC = document.querySelector(".Form-InputBuscarContactoEnCita").value;
    var FormRBRC = document.querySelector(".Form-RegistrarCitaResultadoDeBusqueda");
    if (VerRBRC != ''){
        FormRBRC.classList.add('ResultadoBusquedaRegistrarCita')
    }else{
        FormRBRC.classList.remove('ResultadoBusquedaRegistrarCita')
    }
}