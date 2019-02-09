   $("#BurgerMenuWrapper").click(function(){

    $(".menu").toggleClass("BurgerMenuAnim");
    $(".navLink").toggleClass("navContentAnim");
    $('input.checkBurger').prop("checked", !$('input.checkBurger').prop("checked"));


    //Si le bouton checkbox est coché alors on change le width du side menu
    if ($('input.checkBurger').is(':checked')) {
        $(".MenuContainer").removeClass("MenuAnimSortie");
        $(".MenuContainer").addClass("MenuAnimEntrer");
        console.log("COCHER");
    }

    //Si le bouton checkbox est décoché alors on change le width du side menu
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