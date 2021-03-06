export var wpwlOptions = {
    style: "plain",
    billingAddress: {
      country: "US",
      state: "NY",
      city: "New York",
      street1: "111 6th Avenu",
      street2: "",
      postcode: "12312"
    },
    forceCardHolderEqualsBillingName: true,
    showCVVHint: true,
    brandDetection: true,
    onReady: function(){ 
      $(".wpwl-group-cardNumber").after($(".wpwl-group-brand").detach());
      $(".wpwl-group-cvv").after( $(".wpwl-group-cardHolder").detach());
      var visa = $(".wpwl-brand:first").clone().removeAttr("class").attr("class", "wpwl-brand-card wpwl-brand-custom wpwl-brand-VISA")
      var master = $(visa).clone().removeClass("wpwl-brand-VISA").addClass("wpwl-brand-MASTER");
      $(".wpwl-brand:first").after( $(master)).after( $(visa));
    },
    onChangeBrand: function(e){
      $(".wpwl-brand-custom").css("opacity", "0.3");
      $(".wpwl-brand-" + e).css("opacity", "1"); 
    }
  }
