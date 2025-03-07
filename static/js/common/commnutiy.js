  // jQuery 로드 함수
  function loadJQuery(callback) {
    if (window.jQuery) {
      callback();
    } else {
      var script = document.createElement("script");
      script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
      script.onload = callback; // jQuery 로드 완료 후 실행
      document.head.appendChild(script);
    }
  }
  
  // jQuery 코드 실행
  loadJQuery(function () {
  
    // 헤더랑 푸터 불러오는 제이쿼리
    $(function () {
      $("#header").load("../../common/header.html");
    });
    $(function () {
      $("#footer").load("../../common/footer.html");
    });
  });