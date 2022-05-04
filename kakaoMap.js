function kaokaoMap(){
    var container = document.getElementById('map');
    var options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        lelver: 3
    };

    var map = new kakao.maps.Map(container, options)

    // 마커가 표시될 위치입니다 
    var markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); 

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    function panTo() {
        // 이동할 위도 경도 위치를 생성
        var moveLatLon = new kakao.map.LatLng(33.450580, 126.574942);
        map.panTo(moveLatLon);
    }

    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
};

$(function(){
    kaokaoMap();
})