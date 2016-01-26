var tradeCounter = 0;

var search = {
    intersect: true,
    show_foils: undefined,
    search: ""
}

setTimeout(function(){
	$.ajax({
		url: "https://pucatrade.com/ajax/filterCountry/all/out/false"
	})
	.done(function(){
		
	$.ajax({
		url: "https://pucatrade.com/ajax/filterCountry/71/out/true"
	})
	.done(function(){
		
	autoTrade();
	
	});
		
	});
}, 10000);

var returnCounter = 0;
var load = true;

function autoTrade() {
    if($("a.fancybox-close").length > 0) {
        $("a.fancybox-close").click();   
    }
    loadTableData(search);
    setTimeout(function(){
        var sendcards = $("a.fancybox-send");
        if(sendcards.length > 0){
            sendcards[0].click();
            setTimeout(function(){
                var confirmtrade = $("#confirm-trade-button");
                console.log(confirmtrade);
                confirmtrade.click();
                tradeCounter++;
                if(tradeCounter < 1) {
                    autoTrade();
                }
            }, 750);
        } else {
            autoTrade();
        }
    }, 2500);
    console.log(tradeCounter);
}