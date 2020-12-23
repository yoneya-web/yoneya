
// ハンバーガーメニューを動かす
document.querySelector("#navArea > div.toggle_btn")
$(document).ready(function () {
  var $nav = $('#navArea');
  var $btn = $('.toggle_btn');
  var $mask = $('#mask');
  // var $end = $('#nav_end');
  var open = 'open'; // class
  // menu open close
  $btn.on('click', function () {
    if (!$nav.hasClass(open)) {
      $nav.addClass(open);
    } else {
      $nav.removeClass(open);
    }
  });
  //nav_end  close
  $end.on('click', function () {
    $nav.removeClass(open);
  });
  // mask close
  $mask.on('click', function () {
    $nav.removeClass(open);
  });
});
// // googleカレンダー
// $(document).ready(function () {
//   $('#calendar').fullCalendar({
//     header: {
//       left: 'prev,next today',
//       center: 'title',
//       right: 'month,listYear'
//     },
//     displayEventTime: false,
//     googleCalendarApiKey: 'ここに取得したAPIキーを入力',
//     events: 'ここにカレンダーIDを入力',
//     eventClick: function (event) {
//       // opens events in a popup window
//       window.open(event.url, 'gcalevent', 'width=700,height=600');
//       return false;
//     },
//     loading: function (bool) {
//       $('#loading').toggle(bool);
//     }
//   });
// });
// クリックしたら下から出てくる 
$('#demo4').on('click', function () {
  $("#demoBlock04").slideToggle();
});
// スクロールすると下からふわっと出てくる
$(function () {
  $(window).scroll(function () {
    $('.effect-fade').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 140) {
        $(this).addClass('effect-scroll');
      }
    });
  });
});

// 波
$(function () {
  demo_wave();
})
function demo_wave() {
  function e() {
    demo_obj = document.getElementById("canvas_wave"),
      demo_cntxt = demo_obj.getContext("2d"),
      demo_h = 50, //高さ
      demo_w = 200, //横幅
      demo_h_half = Math.floor(demo_h / 2), //少数切捨
      demo_draw()
  }
  function demo_draw() {
    demo_cntxt.clearRect(0, 0, demo_w, demo_h), //座標領域のクリア
      demo_cntxt.fillStyle = "#44DDEE", //塗りの色
      demo_cntxt.globalAlpha = 1, //塗りの透明度
      demo_cntxt.beginPath(), //パスを開始

      demo_anime(demo_draw.t), //アニメの描画

      demo_cntxt.lineTo(demo_w + 10, demo_h), //lineTo：線の終点
      demo_cntxt.lineTo(0, demo_h), //lineTo：線の終点
      demo_cntxt.closePath(), //パスを閉じる
      demo_cntxt.fill() //fillStyleの反映

    // カウントアップやら値のセット
    demo_draw.seconds = demo_draw.seconds + 0.04, //波の流れの速さが変わる
      demo_draw.t = demo_draw.seconds * Math.PI, //円周率

      setTimeout(demo_draw, 35) //波のコマの長さms
  }
  function demo_anime(e) {
    var a = e
      , o = Math.sin(a);
    for (demo_cntxt.moveTo(0, u * o + demo_h_half), i = 0; i <= demo_w + 10; i += 10) //moveTo：始点の移動
      a = e + i / u,
        o = Math.sin(a) / 3,
        demo_cntxt.lineTo(i, u * o + demo_h_half) //lineTo：線の終点
  }
  //初期値
  var u = 50; //波の高さ
  demo_draw.seconds = 0,
    demo_draw.t = 0,
    e()
}

// パララックス
$(function () {
  $(window).scroll(function () {
    var value = $(this).scrollTop(); //スクロールの値を取得
    $('#scrollValue').text(value);
  });
});
// ふわっと下から出てくる
function showElementAnimation() {

  var element = document.getElementsByClassName('js-animation');
  if (!element) return; // 要素がなかったら処理をキャンセル

  var showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
  var scrollY = window.pageYOffset;
  var windowH = window.innerHeight;

  for (var i = 0; i < element.length; i++) {
    var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if (scrollY + windowH - showTiming > elemY) {
      element[i].classList.add('is-show');
    } else if (scrollY + windowH < elemY) {
      // 上にスクロールして再度非表示にする場合はこちらを記述
      element[i].classList.remove('is-show');
    }
  }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);
// //スクロールすると小さくなってついてくるヘッダー
// //要素の取得
// var header = $("#header");
// var logo = $("#headerLogo");
// var navi = $("#headerNav");
// //スクロール量を取得
// $scrollTopDistance = $(window).scrollTop();
// var headerHeight = header.outerHeight(true);
// //要素の操作
// $window.on('scroll', function () {
//   $scrollTopDistance = $(window).scrollTop();
//   //もしスクロール量がヘッダーの上回ったら
//   if ($scrollTopDistance >= headerHeight) {
//     //クラスを追加する
//     header.addClass('is_scroll');
//     logo.addClass('is_scroll');
//     navi.addClass('is_scroll');
//     //もしスクロール量がヘッダーの高さを下回ったら。
//   } else if ($scrollTopDistance <= headerHeight) {
//     //クラスを除去する
//     header.removeClass('is_scroll');
//     logo.removeClass('is_scroll');
//     navi.removeClass('is_scroll');
//   }
// }); 
