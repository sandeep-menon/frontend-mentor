jQuery(".faq-ques").on("click", function() {
    let ques1 = "";
    if($(".faq-opened").length > 0) {
        ques1 = $(".faq-opened").text();
        $(".faq-opened").parent().find(".faq-ans").addClass("ans-hidden");
        $(".faq-opened").removeClass("faq-opened");
        
    }
    if(ques1 != $(this).text()) {
        $(this).addClass('faq-opened');
        $(".faq-opened").parent().find(".faq-ans").removeClass("ans-hidden");
    }
});