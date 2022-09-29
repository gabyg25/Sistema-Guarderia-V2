var busqueda = $("#tables").DataTable();

$('#input-search').keyup( function() {
    busqueda.search($(this).val().draw());

    if ($('#input-search').val() == '') {
        $(".sub2").fadeOut();
    }else {
        $(".sub2").fadeIn();
    }
})