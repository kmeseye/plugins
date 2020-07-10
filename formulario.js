(function ($) {
    $(document).ready(() => {
        $("#privacidad").click((e) => {
            /* e.preventDefault();*/
            alert("Aceptando privacidad")
            $("#btnformulario").prop("disabled", false)

        })
    })
})(jQuery);

;