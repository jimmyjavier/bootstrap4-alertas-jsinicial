(function(){

	
	$(".alert").on('click',function(){

        $(this).alert("close");  

        $('#info').alert();
        
	});
	

	$('.alert').on('close.bs.alert', function () {
  		// do something…
  		console.log("cerrando");
	});


	$('.alert').on('closed.bs.alert', function () {
  		// do something…
  		console.log("eliminado");
	});


	console.log("Entro");

}());