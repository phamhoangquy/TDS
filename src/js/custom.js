;var siteRoot =""; 
$(document).ready(function(){
	$(".name-food-bottom .active a").first().trigger("click"); 
});
var AjaxTokyo = {
    loadWaiting: false,

    init: function () {
        this.loadWaiting = false;
    },

    setLoadWaiting: function (display) {
        this.loadWaiting = display;
    },
    loadProductByZone:function($button,$zoneId){
        let urladd = siteRoot + "/Product/Services/ProductService.aspx";
        let zoneId = $zoneId;
        if(zoneId==-1)
            zoneId = $(".tab-item-food.active .name-food-bottom li.active a").data("id"); 
        let data = { 
            'method': 'SearchProducts',
            'zoneId': zoneId,  
            'customFiledId': $("select[name='Location']").data("id"),
            'optionId': $("select[name='Location']").val() 
        }; 
        $.ajax({ 
            cache: false, 
            url: urladd,
            data: data,
            type: 'post',
            success: function(response){
                if(response.success)
                {
                    $(".ajax-product-response").html(response.data);  
                    $(".ajax-product-response .btn-view-more a").attr("href",$(".tab-item-food.active li.active a").data("url"));  
                }
            }, 
            complete: this.resetLoadWaiting,
            error: this.ajaxFailure
        }); 
    },
    resetLoadWaiting: function () {
        AjaxTokyo.setLoadWaiting(false);
    },

    ajaxFailure: function () {
        alert('Failed to add the product to the cart. Please refresh the page and try one more time.');
    }
}
