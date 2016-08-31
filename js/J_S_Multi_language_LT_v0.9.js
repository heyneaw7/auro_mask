//多語系動態網頁介面配搭CSS切換程式碼
//Coding by Jerry Shih @ Quanta Computer Inc. - 2016/07/05 ver 0.9 LT
//使用時必須在HTML HEAD標籤掛入本 J_S_Multi_language_v*.*.js檔案
//主要功能1 : Multi-lang Title 根據 on_click 事件切換網頁標題
//主要功能2 : 賦予Body 語系標籤，例如 TW,ENG,JP。以便讓不同的CSS樣式來切換背景圖片、甚至文字
//主要功能3 : 使用DOM方法，更換下拉顯示介面, 須掛入JSON資源文件檔
//主要功能4 : 使用DOM方法，依照語系更改文件內的文字

// 其他功能a (HTML) : 自動偵測瀏覽器語言，更改語言預設值。




//=====程式開始======





//=====程式開始======
function chg_lang(lang_index){
            console.log("開始切換語系");
        forceChangeLangSetCookie();
        auto_chg_lang(lang_index);
}



// 切換語系
function auto_chg_lang(lang_index){


			//更改標題文字
      changeWebTitle(lang_index);

      //更改BODY 語系標籤
      changeCSSTag_Multi_Lang(lang_index);
      //更改Navbar文件
      changeNavBarUIWording(lang_index);
      //根據語系更改圖片
      changeImageByLang(lang_index);


      //讀外部JSON檔案
      var xmlhttp = new XMLHttpRequest();
      var url = "mlang.txt";

      xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var myArr = JSON.parse(xmlhttp.responseText);
          console.log(myArr);
          changeAllNavBarUIWording(myArr,lang_index);
          }
      };
      xmlhttp.open("GET", url, true);
      xmlhttp.send();





		}


    // 設定cookie 並將 forceChangeLang_index 值填上1,cookie一小時後失效
    function   forceChangeLangSetCookie(){
      //寫入Cookie
      setCookie('forceChangeLang_index',1,'0.1');
      var xcka= getCookie('forceChangeLang_index');
      console.log("Cookie is settle down");
      console.log(xcka);


    }




//主要功能1 : Multi-lang Title 根據 on_click 事件切換網頁標題
function changeWebTitle(lang_index){
      //變更多語系網頁Title
      document.getElementsByTagName("title")[0].innerHTML = Multi_Lang_Title[lang_index];
      return;


}

//主要功能2 : 賦予Body 語系標籤，例如 TW,ENG,JP。以便讓不同的CSS樣式來切換背景圖片
function changeCSSTag_Multi_Lang(lang_index){
    // jQuery 語法:
    //  $("body").removeClass("tw cn en").addClass($(this).data("資料名"));

    //純DOM語法
    document.getElementsByTagName("body")[0].className = "";
    document.getElementsByTagName("body")[0].className = Multi_Lang_Tag[lang_index];//Multi_Lang_Tag[lang_index];
    return;
}

//主要功能3 : 使用DOM方法，更換下拉&Navbar顯示介面
function changeNavBarUIWording(lang_index){

  //更改Drondown UI 語系顯示
  //document.getElementById('lang_btn_1').innerHTML = Multi_Lang_Wording[lang_index];

  document.getElementById('change_dropdown_title').innerHTML =  Multi_Lang_Wording[lang_index]+'<b class="caret"></b>';

  return;
}


// 根據lang_index更換IMG標籤圖片

function changeImageByLang(lang_index){

  // 圖片路徑 請自行更換，不夠用也可以自己新增
  console.log("change image function start now");
  var tw_img1_src="images/slider_img_01_ch.jpg";
  var eng_img1_src="images/slider_img_01_en.jpg";
  //var jp_img1_src="images/slider_img_01_jp.jpg";

  var tw_img2_src="images/slider_img_02_ch.jpg";
  var eng_img2_src="images/slider_img_02_en.jpg";
  //var jp_img2_src="images/slider_example_2_jp.jpg";

  var tw_img3_src="images/slider_img_03_ch.jpg";
  var eng_img3_src="images/slider_img_03_en.jpg";
  //var jp_img3_src="images/slider_example_3_jp.jpg";

  var tw_img4_src="images/intro_cn.jpg";
  var eng_img4_src="images/intro_en.jpg";
  //var jp_img4_src="images/slider_example_4_jp.jpg";

  var tw_img5_src="images/img_auroapp.png";
  var eng_img5_src="images/img_auroapp_en.png";
  //var jp_img4_src="images/slider_example_4_jp.jpg";

  var tw_img6_src="images/bg_productimg.jpg";
  var eng_img6_src="images/bg_productimg_en.jpg";
  //var jp_img3_src="images/slider_example_3_jp.jpg";

  var tw_img7_src="images/img_skin.png";
  var eng_img7_src="images/img_skin_en.png";
  //var jp_img4_src="images/slider_example_4_jp.jpg";







  switch (lang_index) {
    case 0:
        document.getElementById('slideshowImage1').src=tw_img1_src;
        document.getElementById('slideshowImage2').src=tw_img2_src;
        document.getElementById('slideshowImage3').src=tw_img3_src;
        document.getElementById('slideshowImage4').src=tw_img4_src;
        document.getElementById('slideshowImage5').src=tw_img5_src;
        document.getElementById('slideshowImage6').src=tw_img6_src;
        document.getElementById('slideshowImage7').src=tw_img7_src;
        console.log("change image to CHT version");
      break;
    case 1:
        document.getElementById('slideshowImage1').src=eng_img1_src;
        document.getElementById('slideshowImage2').src=eng_img2_src;
        document.getElementById('slideshowImage3').src=eng_img3_src;
        document.getElementById('slideshowImage4').src=eng_img4_src;
        document.getElementById('slideshowImage5').src=eng_img5_src;
        document.getElementById('slideshowImage6').src=eng_img6_src;
        document.getElementById('slideshowImage7').src=eng_img7_src;
        console.log("change image to ENG version");
      break;
    case 2:
        document.getElementById('slideshowImage1').src=jp_img1_src;
      //  document.getElementById('slideshowImage2').src=jp_img2_src;
        console.log("change image to JP version");
      break;
    default:

  }


}






function changeAllNavBarUIWording(arr,lang_index){
/*
  document.getElementById('nav_link1_wording').innerHTML = arr[lang_index].NavLink1;
  document.getElementById('nav_link2_wording').innerHTML = arr[lang_index].NavLink2;
  document.getElementById('nav_link3_wording').innerHTML = arr[lang_index].NavLink3;
  document.getElementById('nav_link4_wording').innerHTML = arr[lang_index].NavLink4;
  document.getElementById('nav_link5_wording').innerHTML = arr[lang_index].NavLink5;*/

  document.getElementById('lang_title').innerHTML = arr[lang_index].lang_title;
  document.getElementById('lang_nav_intro').innerHTML = arr[lang_index].lang_nav_intro;
  document.getElementById('lang_nav_spec').innerHTML = arr[lang_index].lang_nav_spec;
  document.getElementById('lang_nav_download').innerHTML = arr[lang_index].lang_nav_download;
  document.getElementById('lang_change_ch').innerHTML = arr[lang_index].lang_change_ch;
  document.getElementById('lang_change_en').innerHTML = arr[lang_index].lang_change_en;
  document.getElementById('lang_body_intro').innerHTML = arr[lang_index].lang_body_intro;
  document.getElementById('lang_body_intro_cont1').innerHTML = arr[lang_index].lang_body_intro_cont1;
  document.getElementById('lang_body_slogan').innerHTML = arr[lang_index].lang_body_slogan;
  document.getElementById('lang_body_sixfeatures').innerHTML = arr[lang_index].lang_body_sixfeatures;
  document.getElementById('lang_body_six_icon1').innerHTML = arr[lang_index].lang_body_six_icon1;
  document.getElementById('lang_body_six_small1').innerHTML = arr[lang_index].lang_body_six_small1;
  document.getElementById('lang_body_six_icon2').innerHTML = arr[lang_index].lang_body_six_icon2;
  document.getElementById('lang_body_six_small2').innerHTML = arr[lang_index].lang_body_six_small2;
  document.getElementById('lang_body_six_icon3').innerHTML = arr[lang_index].lang_body_six_icon3;
  document.getElementById('lang_body_six_small3').innerHTML = arr[lang_index].lang_body_six_small3;
  document.getElementById('lang_body_six_icon4').innerHTML = arr[lang_index].lang_body_six_icon4;
  document.getElementById('lang_body_six_small4').innerHTML = arr[lang_index].lang_body_six_small4;
  document.getElementById('lang_body_six_icon5').innerHTML = arr[lang_index].lang_body_six_icon5;
  document.getElementById('lang_body_six_small5').innerHTML = arr[lang_index].lang_body_six_small5;
  document.getElementById('lang_body_six_icon6').innerHTML = arr[lang_index].lang_body_six_icon6;
  document.getElementById('lang_body_six_small6').innerHTML = arr[lang_index].lang_body_six_small6;
  document.getElementById('lang_body_process').innerHTML = arr[lang_index].lang_body_process;
  document.getElementById('lang_body_process_one').innerHTML = arr[lang_index].lang_body_process_one;
  document.getElementById('lang_body_process_two').innerHTML = arr[lang_index].lang_body_process_two;
  document.getElementById('lang_body_process_three').innerHTML = arr[lang_index].lang_body_process_three;
  document.getElementById('lang_body_process_four').innerHTML = arr[lang_index].lang_body_process_four;
  document.getElementById('lang_body_process_tip').innerHTML = arr[lang_index].lang_body_process_tip;
  document.getElementById('lang_body_process_tips1').innerHTML = arr[lang_index].lang_body_process_tips1;
  document.getElementById('lang_body_process_tips2').innerHTML = arr[lang_index].lang_body_process_tips2;
  document.getElementById('lang_body_process_tips3').innerHTML = arr[lang_index].lang_body_process_tips3;
  document.getElementById('lang_body_certificate').innerHTML = arr[lang_index].lang_body_certificate;
  document.getElementById('lang_body_certificate_box1_cont2').innerHTML = arr[lang_index].lang_body_certificate_box1_cont2;
  document.getElementById('lang_body_certificate_box1_cont3').innerHTML = arr[lang_index].lang_body_certificate_box1_cont3;
  document.getElementById('lang_body_certificate_box1_cont4').innerHTML = arr[lang_index].lang_body_certificate_box1_cont4;
  document.getElementById('lang_body_certificate_box2').innerHTML = arr[lang_index].lang_body_certificate_box2;
  document.getElementById('lang_body_certificate_box2_cont1').innerHTML = arr[lang_index].lang_body_certificate_box2_cont1;
  document.getElementById('lang_body_certificate_box2_cont2').innerHTML = arr[lang_index].lang_body_certificate_box2_cont2;
  document.getElementById('lang_body_certificate_box2_cont3').innerHTML = arr[lang_index].lang_body_certificate_box2_cont3;
  document.getElementById('lang_body_certificate_box2_cont4').innerHTML = arr[lang_index].lang_body_certificate_box2_cont4;
  document.getElementById('lang_body_certificate_box2_cont5').innerHTML = arr[lang_index].lang_body_certificate_box2_cont5;
  document.getElementById('lang_body_certificate_box2_cont6').innerHTML = arr[lang_index].lang_body_certificate_box2_cont6;
  document.getElementById('lang_body_certificate_box2_cont7').innerHTML = arr[lang_index].lang_body_certificate_box2_cont7;
  document.getElementById('lang_body_productline').innerHTML = arr[lang_index].lang_body_productline;
  document.getElementById('lang_body_pt_basicyellow').innerHTML = arr[lang_index].lang_body_pt_basicyellow;
  document.getElementById('lang_body_pt_basicyellow_cont1').innerHTML = arr[lang_index].lang_body_pt_basicyellow_cont1;
  document.getElementById('lang_body_pt_basicyellow_cont2').innerHTML = arr[lang_index].lang_body_pt_basicyellow_cont2;
  document.getElementById('lang_body_pt_premium').innerHTML = arr[lang_index].lang_body_pt_premium;
  document.getElementById('lang_body_pt_premium_cont1').innerHTML = arr[lang_index].lang_body_pt_premium_cont1;
  document.getElementById('lang_body_pt_premium_cont2').innerHTML = arr[lang_index].lang_body_pt_premium_cont2;
  document.getElementById('lang_body_pt_premium_cont3').innerHTML = arr[lang_index].lang_body_pt_premium_cont3;
  document.getElementById('lang_body_pt_premium_cont4').innerHTML = arr[lang_index].lang_body_pt_premium_cont4;
  document.getElementById('lang_body_pt_basicred').innerHTML = arr[lang_index].lang_body_pt_basicred;
  document.getElementById('lang_body_pt_basicred_cont1').innerHTML = arr[lang_index].lang_body_pt_basicred_cont1;
  document.getElementById('lang_body_pt_basicred_cont2').innerHTML = arr[lang_index].lang_body_pt_basicred_cont2;
  document.getElementById('lang_body_spec').innerHTML = arr[lang_index].lang_body_spec;
  document.getElementById('lang_body_spec_left_cont2').innerHTML = arr[lang_index].lang_body_spec_left_cont2;
  document.getElementById('lang_body_spec_right_cont2').innerHTML = arr[lang_index].lang_body_spec_right_cont2;
  document.getElementById('lang_body_spec_left_cont3').innerHTML = arr[lang_index].lang_body_spec_left_cont3;
  document.getElementById('lang_body_spec_right_cont3').innerHTML = arr[lang_index].lang_body_spec_right_cont3;
  document.getElementById('lang_body_spec_left_cont4').innerHTML = arr[lang_index].lang_body_spec_left_cont4;
  document.getElementById('lang_body_spec_right_cont4').innerHTML = arr[lang_index].lang_body_spec_right_cont4;
  document.getElementById('lang_body_spec_left_cont5').innerHTML = arr[lang_index].lang_body_spec_left_cont5;
  document.getElementById('lang_body_spec_right_cont5').innerHTML = arr[lang_index].lang_body_spec_right_cont5;
  document.getElementById('lang_body_spec_left_cont6').innerHTML = arr[lang_index].lang_body_spec_left_cont6;
  document.getElementById('lang_body_spec_right_cont6').innerHTML = arr[lang_index].lang_body_spec_right_cont6;
  document.getElementById('lang_body_spec_left_cont7').innerHTML = arr[lang_index].lang_body_spec_left_cont7;
  document.getElementById('lang_body_spec_right_cont7').innerHTML = arr[lang_index].lang_body_spec_right_cont7;
  document.getElementById('lang_body_spec_left_cont10').innerHTML = arr[lang_index].lang_body_spec_left_cont10;
  document.getElementById('lang_body_spec_right_cont10').innerHTML = arr[lang_index].lang_body_spec_right_cont10;
  document.getElementById('lang_body_dowmload').innerHTML = arr[lang_index].lang_body_dowmload;
  document.getElementById('lang_body_dowmload_title').innerHTML = arr[lang_index].lang_body_dowmload_title;
  document.getElementById('lang_body_dowmload_android').innerHTML = arr[lang_index].lang_body_dowmload_android;
  document.getElementById('lang_body_dowmload_android_cont').innerHTML = arr[lang_index].lang_body_dowmload_android_cont;
  document.getElementById('lang_body_dowmload_android_button').innerHTML = arr[lang_index].lang_body_dowmload_android_button;
  document.getElementById('lang_body_dowmload_iphone').innerHTML = arr[lang_index].lang_body_dowmload_iphone;
  document.getElementById('lang_body_dowmload_iphone_cont').innerHTML = arr[lang_index].lang_body_dowmload_iphone_cont;
  document.getElementById('lang_body_dowmload_iphone_button').innerHTML = arr[lang_index].lang_body_dowmload_iphone_button;
  document.getElementById('lang_body_dowmload_userguide').innerHTML = arr[lang_index].lang_body_dowmload_userguide;
  document.getElementById('lang_body_dowmload_userguide_cont').innerHTML = arr[lang_index].lang_body_dowmload_userguide_cont;
  document.getElementById('lang_body_dowmload_userguide_btn').innerHTML = arr[lang_index].lang_body_dowmload_userguide_btn;
  document.getElementById('lang_body_dowmload_manual').innerHTML = arr[lang_index].lang_body_dowmload_manual;
  document.getElementById('lang_body_dowmload_manual_cont').innerHTML = arr[lang_index].lang_body_dowmload_manual_cont;
  document.getElementById('lang_body_dowmload_manual_btn').innerHTML = arr[lang_index].lang_body_dowmload_manual_btn;
  document.getElementById('lang_body_led').innerHTML = arr[lang_index].lang_body_led;
  document.getElementById('lang_body_led_title1').innerHTML = arr[lang_index].lang_body_led_title1;
  document.getElementById('lang_body_led_cont1').innerHTML = arr[lang_index].lang_body_led_cont1;
  document.getElementById('lang_body_led_title2').innerHTML = arr[lang_index].lang_body_led_title2;
  document.getElementById('lang_body_led_cont2').innerHTML = arr[lang_index].lang_body_led_cont2;
  document.getElementById('lang_body_led_title3').innerHTML = arr[lang_index].lang_body_led_title3;
  document.getElementById('lang_body_led_cont3').innerHTML = arr[lang_index].lang_body_led_cont3;
  document.getElementById('lang_body_proof').innerHTML = arr[lang_index].lang_body_proof;
  document.getElementById('lang_body_led_cont4').innerHTML = arr[lang_index].lang_body_led_cont4;
  document.getElementById('lang_body_led_red').innerHTML = arr[lang_index].lang_body_led_red;
  document.getElementById('lang_body_led_red_cont').innerHTML = arr[lang_index].lang_body_led_red_cont;
  document.getElementById('lang_body_led_yellow').innerHTML = arr[lang_index].lang_body_led_yellow;
  document.getElementById('lang_body_led_yellow_cont').innerHTML = arr[lang_index].lang_body_led_yellow_cont;
  document.getElementById('lang_body_led_blue').innerHTML = arr[lang_index].lang_body_led_blue;
  document.getElementById('lang_body_led_blue_cont').innerHTML = arr[lang_index].lang_body_led_blue_cont;
  return;
}






function detectUserLang(){

    var IsforceChangeLang_index= getCookie('forceChangeLang_index');
    var tempLang = window.navigator.userLanguage || window.navigator.language ;
    var currentBrowserLang = tempLang.toLowerCase();

  if (IsforceChangeLang_index!=1){
    switch (currentBrowserLang) {
      case "zh-tw":
            auto_chg_lang(0);
            autolang_index=0;
        break;
      case "zh-cn":
            auto_chg_lang(0);
            autolang_index=0;
        break;
      case "zh-hk":
            auto_chg_lang(0);
            autolang_index=0;
        break;
      case "ja":
            auto_chg_lang(2);
            autolang_index=2;
        break;

      default:
            auto_chg_lang(1);
            autolang_index=1;
        break;
    }

    setCookie('lang_code',autolang_index,'365');

  } else {
    var Previous_Lang_index= getCookie('lang_code');
    auto_chg_lang(Previous_Lang_index);
  }
}


//設定cookie的function
function setCookie(cookieName, cookieValue, exdays) {
  if (document.cookie.indexOf(cookieName) >= 0) {
    var expD = new Date();
    expD.setTime(expD.getTime() + (-1*24*60*60*1000));
    var uexpires = "expires="+expD.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + "; " + uexpires+"; "+ 'path=/';
  }
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + "; " + expires+"; "+ 'path=/';
}

// 讀取cookie
function getCookie(cookieName) {
  var name = cookieName + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1);
      if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
  }
  return "";
}



//=====文字儲存區======
//多語系body標籤
Multi_Lang_Tag = new Array();
Multi_Lang_Tag[0]="tw";
Multi_Lang_Tag[1]="eng";
Multi_Lang_Tag[2]="jp";

//Multi_Lang_Wording 供介面顯示
Multi_Lang_Wording = new Array();
Multi_Lang_Wording[0]="TW - 繁體中文";
Multi_Lang_Wording[1]="EN - English";
Multi_Lang_Wording[2]="JP - 日本語";


//多語系網頁Title招呼語 (顯示在瀏覽TAB上)
Multi_Lang_Title= new Array();
Multi_Lang_Title[0]="EQL - essence | 極光美肌儀";
Multi_Lang_Title[1]="EQL - essence | AURO Mask";
Multi_Lang_Title[2]="EQLへようこそ - AURO Mask";


//=====文字儲存區 END======
