var vscreen = screen.width;
console.log("screen width is " + vscreen +"px");
$(".matico").find(".ic").click(function() {
	$(this).toggleClass("active")
	if ($(this).hasClass("ic active")) {
		// console.log(this.className);
		if (vscreen > 668 ) {
			console.log("bigger")
			$(".header_menu_container").css("display","block")
		} else {
			console.log("smaller")
			$(".header_menu_container2").css("display","block")
		}
	
	} else {
		console.log(this.className);
		$(".header_menu_container").css("display","none")
		$(".header_menu_container2").css("display","none")
	}

});
$("#btn-categoryOpen").click(function () {
	$(".category_cont_small").toggle(350);
		// $(this).css("display", "flex");


});

$(".col_check").click(function () {
	// $(".col-thief").toggleClass("c-black");
	// $(".col-info").css("display","block");
	// $("col_check")
});
function resizeFu() {
	
	$(window).resize(function() {
		// console.log("width: "+vscreen + "; height is" + screen.height);
	});
}

// $(this).toggleClass("active")
// 		if ($(this).hasClass("ic active")) {
// 			// console.log(this.className);
// 			$(".header_menu_container").css("display","block")
// 		} else {
// 			console.log(this.className);
// 			$(".header_menu_container").css("display","none")
// 		}