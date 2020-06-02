$("ul").on("click", "li", function(){
	$(this).toggleClass("checked");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input").keypress(function(eve){
	if (eve.which === 13){
		var newTodo= $("input").val();
		$("input").val("");
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>" + newTodo + "</li> ");	
	}
});

$(".fa-plus").click(function(){
	$("input").fadeToggle(100);
});