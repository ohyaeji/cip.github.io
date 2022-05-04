function kaokaoMap(){
    var container = document.getElementById('map');
    var options = {
        center: new kakao.maps.LatLng(33.450701, 126570667),
        lelver: 3
    };

    var map = new kakao.maps.Map(container, options)
};

$(function(){
    kaokaoMap();
})