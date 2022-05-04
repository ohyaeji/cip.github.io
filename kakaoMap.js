function kaokaoMap(){
    var container = document.getElementById('map'); //지도를 표시할 div
    var options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표
        lelver: 3 //지도의 확대 레벨
    };

    var map = new kakao.maps.Map(container, options) // 지도 생성

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

    //지도 확대 축소를 제어할 수 있는 줌 컨트롤을 생성
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
};

$(function(){
    kaokaoMap();
})