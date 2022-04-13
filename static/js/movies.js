const selector = document.getElementById('order-movies')
//console.log(selector.selectedIndex)

function changeOrder(){
    if(selector.selectedIndex === 1){
        window.location.href = "/movie-order-name/ASC"
    }else if (selector.selectedIndex === 2){
       
        window.location.href = "/movie-order-name/DESC"
    }else if (selector.selectedIndex === 3){
        //console.log(selector.selectedIndex)
        window.location.href = "/movie-order-rating"
    }else if (selector.selectedIndex === 4){
        //console.log(selector.selectedIndex)
        window.location.href = "/movie-order-more-views"
    }

}

