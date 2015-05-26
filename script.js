//console.log(loadTableData);

var search = {
    intersect: true,
    show_foils: undefined,
    search: ""
}

setTimeout(function(){
    setInterval(function(){
        if(search.intersect){search.intersect = false}
        else{search.intersect = true}
        loadTableData(search);
        var cardtable = $("table.table.infinite tbody");
        console.log(cardtable.children()[0]);
    }, 5000);
}, 10000);