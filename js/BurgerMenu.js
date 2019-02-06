   $("#wrapper").click(function(){

    $(".menu").toggleClass("BurgerMenuAnim");
    $(".navLink").toggleClass("navContentAnim");
    $('input.checkBurger').prop("checked", !$('input.checkBurger').prop("checked"));


    if ($('input.checkBurger').is(':checked')) {
        $(".MenuContainer").removeClass("MenuAnimSortie");
        $(".MenuContainer").addClass("MenuAnimEntrer");
        console.log("COCHER");
    }

    else if($('input.checkBurger'). prop("checked") == false){
        $(".MenuContainer").removeClass("MenuAnimEntrer");
    $(".MenuContainer").addClass("MenuAnimSortie");
    console.log("DECOCHER");
    }


});
    
/*
if($('input.checkBurger').prop('checked',true)) {
    //$(".MenuContainer").removeClass("MenuAnimSortie");
   // $(".MenuContainer").addClass("MenuAnimEntrer");


    console.log("COCHER");
   }

   else {
    //$(".MenuContainer").removeClass("MenuAnimEntrer");
    //$(".MenuContainer").addClass("MenuAnimSortie");
    console.log("DECOCHER");

   }
   */