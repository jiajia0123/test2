var a1 = document.querySelector(".a1")
var a2 = document.querySelector(".a2")
var a3 = document.querySelector(".a3")
var a4 = document.querySelector(".a4")
var a_all= document.querySelectorAll(".block00")

a1.addEventListener("click",function(e){
   
    for(var i=0;i<a_all.length;i++){
      
        a_all[i].classList.remove('block')
       
    } 

    document.querySelector('.block01').classList.toggle('block')


})

a2.addEventListener("click",function(e){
    for(var i=0;i<a_all.length;i++){
        a_all[i].classList.remove('block')
    } 
document.querySelector('.block02').classList.toggle('block')
})


a3.addEventListener("click",function(e){
    for(var i=0;i<a_all.length;i++){
        a_all[i].classList.remove('block')
    } 
document.querySelector('.block03').classList.toggle('block')
})

a4.addEventListener("click",function(e){
    for(var i=0;i<a_all.length;i++){
        a_all[i].classList.remove('block')
    } 
document.querySelector('.block04').classList.toggle('block')
})




//1.<input type="text" id="abc" value="10">  當input的type為text時，可以撈它的value。另也可以撈input的type
var abc =document.getElementById('abc').value
var abcd =document.getElementById('abc').type
console.log(abc)

//2.target 點擊該元素產生的資訊
var pp = document.getElementById("pp")
pp.addEventListener("click",function(e){
console.log(e.target)  //結果:<p id="pp">2.e.target測試，請點我</p>
console.log("節點名稱:"+e.target.nodeName) //結果: P
})

//xx.onclick =function(){} 和 addEventListenert差別在於前者只能寫一次(多寫的話只會吃到最下面那個)，後者可以同時寫很多個
// 監聽的true和fause，一般來說都是fasle,fasle是從點擊的元素開始往外找監聽，true則相反
// pp.addEventListener("click",function(e){},true)
//e.stopPropagation()取消上層的監聽
//如果上層(父元素)也有做監聽事件會出問題喔、會同時出現! 所以要寫e.stopPropagation()終止器泡!這樣就可以將兩者隔開!

// 2-1.監聽測試e.stopPropagation()測試
// pp.addEventListener("click",function(e){
// console.log("你點到我"); 
// //就是要寫這下面這段，沒寫的話可以試試看拿掉的結果
// e.stopPropagation();
// })
// var body = document.querySelector("body")
// body.addEventListener("click",function(){
// console.log("選到body囉")  
// })



//3.e.target了解目前點擊的位置。e.target.nodeName現在點擊的節點名稱
var ul = document.querySelector(".ul")
ul.addEventListener("click",function(e){
    e.preventDefault()
    console.log(e.target)
    console.log("節點名稱:"+e.target.nodeName)

})



//4.e.preventDefault 取消預設觸發行為 a的連結效果可以讓它失效，或input傳送到資料庫的預設行為也可失效
//submint按鈕，取消預設觸發行為後，先透過我的js去查詢表單有無錯誤，再重寫post去傳送
var aaa =document.querySelector(".aaa")
aaa.addEventListener("click",function(e){
    e.stopPropagation() //取消上層的監聽
    e.preventDefault() //取消href的效果
    console.log("我是a連結") //結果:我是a連結
})




//5.代辦清單 設定值localStorage.setItem("","")、取值localStorage.getItem('')、陣列字串化JSON.stringify()、轉陣列出來JSON.parse()
var list = document.querySelector(".list")//灰色代辦清單
var wordlist = document.querySelector(".wordlist")//輸入框
var addlist = document.querySelector(".addlist")//增加按鈕
var removelist = document.querySelector(".removelist")//清除按紐

var arrd=[]//代辦清單陣列
var string
var parse = JSON.parse(localStorage.getItem('dolistss')) || [] //1.瀏覽器開始運作就先把資料庫裡的資料挖出來
arrd = parse //2.把資料庫裡挖出來的資料設定成陣列內容
printList()//3.印出來在灰色清單


//加入按鈕
addlist.addEventListener("click",function(){
    arrd.push(wordlist.value)
    string=JSON.stringify(arrd); //轉為localstrge可以用的字串
    localStorage.setItem("dolistss",string) //重新設定localstroage的值
    printList()
})

//清除按鈕
removelist.addEventListener("click",function(){
    arrd=[]
    string=JSON.stringify(arrd); //轉為localstrge可以用的字串
    localStorage.setItem("dolistss",string) //重新設定localstroage的值
    printList()
})

//UL灰色清單-a連結清除
list.addEventListener("click",function(e){
    e.preventDefault();//取消a連結的預設按鈕
    e.target;
    arrd.splice(e.target.dataset.numa,1);
    string=JSON.stringify(arrd); //轉為localstrge可以用的字串
    localStorage.setItem("dolistss",string) //重新設定localstroage的值
    printList()//列印出來在灰色清單

})

//印出來在灰色清單裡
function printList (e){
    list.innerHTML = ""
    for(var i=0;i<arrd.length;i++){
        list.innerHTML = list.innerHTML + "<li "+ " data-num="+ [i] +">"+arrd[i]+"<a href=''"+ "data-numa="+[i]+">清除</a></li>"
    }    
}




//6.change 事件用法，搭配<select>裡的<option>切換去做應用
//e.target.value,點擊<option>時去抓出它的質
var famer001=[
    {   姓名:"陳大芬",
        居住地:"西屯區"
    },
    { 姓名:"陳小姐",
      居住地:"北屯區"
    },
    {姓名:"王大明",
    居住地:"西屯區"
    
    },
    {  姓名:"張哈俊",
        居住地:"西屯區"
    },
    ]
    
    var sel = document.getElementById("sel")
    var ul0 = document.querySelector(".ul0")
    
    
    sel.addEventListener("change",function(e){
      console.log(e.target.value) //結果: 北屯區或西屯區
      ul0.innerHTML = ""
      for(var i =0;i<famer001.length;i++){
          if(e.target.value == famer001[i].居住地){
            ul0.innerHTML = ul0.innerHTML + "<li>" +famer001[i].姓名 +"住在"+famer001[i].居住地
          }
      }
    })

    


//7.keydown事件。addEventListener("keydown",,function(e){})，只要有按鍵盤(任何一鍵)就觸發
//搭配e.keyCode。console.log(e.keyCode) //結果:按enter會跑出數字13;。得知按下去是幾號鍵。
var body = document.querySelector("body")
var circle1 =document.querySelector(".circle1")
var circle2 =document.querySelector(".circle2")
var circle3 =document.querySelector(".circle3")
var circle =document.querySelectorAll(".circle")
var itm = 0

body.addEventListener("keydown",function(e){
    // console.log("你按了按鍵");
    // console.log(e.keyCode+"(這是鍵盤代號)") //結果:按enter會跑出數字13;
    itm = itm +1
    // console.log(itm+"下(這是自己寫的計數)")
    if(e.keyCode == 13 && itm ==1){
        circle1.setAttribute("style","left:"+ma+"px")
        setTimeout(function(){
            circle1.innerHTML = "<p>你擲出"+ma+"公尺</p>" 
        },1000);
    }else if(e.keyCode == 13 && itm ==2){
        circle2.setAttribute("style","left:"+mb+"px");
        setTimeout(function(){
            circle2.innerHTML = "<p>你擲出"+mb+"公尺</p>" 
        },1000);
    }
    else if(e.keyCode == 13 && itm ==3){
        circle3.setAttribute("style","left:"+mc+"px");
        setTimeout(function(){
            circle3.innerHTML = "<p>你擲出"+mc+"公尺</p>" 
        },1000);
    }else if(e.keyCode == 13 && itm ==4){
        circle[0].setAttribute("style","left:0px")
        circle[1].setAttribute("style","left:0px")
        circle[2].setAttribute("style","left:0px")
        itm = 0
        history.go(0)
    }
})


//8.Math.random亂數搭配querySelectorAll陣列[i]+input的type="text"時，可以撈它的value
var ip = document.querySelectorAll('.ip')
var ipx = document.querySelector('.ipx')
var ipy = document.querySelector('.ipy')
var sub0 =document.querySelectorAll('.sub0')
var ma = Math.floor(Math.random()*(800-100+1)+100)
var mb = Math.floor(Math.random()*(800-100+1)+100)
var mc = Math.floor(Math.random()*(800-100+1)+100)


ipx.addEventListener("click",function(){
    var xx= Math.floor(Math.random()*(ip.length-1-0+1)+0);
     ipy.textContent = "登登!今天就吃" + ip[xx].value  +"吧!"
 }
 )




//9.先監聽大的範圍ul，然後再用e.taget 選li，最後用if來篩選正確的nodeName
//如果ul裡面li裡面的class亂命名無規則可言，就可以用這招了!
var ul00 = document.querySelector('.ul00')
var ul01 = document.querySelector('.ul01')
ul00.addEventListener("click",function(e){
    console.log(e.target.nodeName)
    if(e.target.nodeName == "LI"){
        ul01.textContent = "你選擇了"+e.target.textContent
    }

})



//10.document.createElement('')創造節點，只寫一個ul節點，+appendChild()增加子元素節點
//innerHtml 效能快、但安全性不高。createElement 效能低、安全性高
var arr0=[
    {
        農夫:"小夫",
        dog:[0,1,2]

    },
    {
        農夫:"阿立",
        dog:[0,2,2]
    },
    {
        農夫:"胖安",
        dog:[0,2,2]
    },
    {
        農夫:"委建",
        dog:[0,2,2]
    }
]
var fmm =document.querySelector(".fmm"); //選取標單ul
var em =document.createElement('em') //1.document.createElement('')創造節點  // console.log(em) 結果:<em></em>
em.innerText = "我是標題" //2.設定節點內容  // console.log(em) 結果:<em style="color:red">在節點內寫入內容</em>
em.setAttribute("style","font-weight:700")//2-1.設定節點內容
fmm.appendChild(em)//3.表單fmm用appendChild增加子節點(往後加)。只能搭配createElement使用。和innerHtml不同的是:他不會清空原本的，而是往後加在一個節點

//和上述差不多做法，將陣列的內容套進去
for(var i=0;i<arr0.length;i++){
    var li0 =document.createElement("li")//1.建立節點
        li0.textContent = li0.textContent + [i+1] +"." +arr0[i].農夫//2.設定節點內容 
        fmm.appendChild(li0)//3.表單fmm用appendChild增加子節點(往後加)
}


















//undefined 是目前這個變數並沒有被賦予任何數值、字串或布林值




// if裡面 && 代表所有條件都要成立
var a1 = 2
var a2 = 3
var a3 = 4
var a4 = 4
if(a1 == a2 && a3==a4){
 console.log("兩組都是true")
}else{
    console.log("兩組並沒有都是true")
}

// if裡面 || 代表其中一個成立就可以(滿足其中一個條件..or)
if(a1 == a2 || a3==a4){
    console.log("其中有一個是true123")
   }else{
       console.log("兩個都不是ture123")
   }



// if裡面 !會把ture變false





//switch寫法 和if類似
var color ="blue";

switch(color){
    case "red":
    console.log("現在顏色是紅色");
    break;

    case "blue":
    console.log("現在顏色是藍色");
    break;

    case "yellow":
    console.log("現在顏色是黃色");
    break;

    default:
    console.log("不知道是什麼顏色");
    break;
}



// for加總用法
var famrs0 =[
    {  
        famer:"阿雄",
        dog:100,
        cat:100
    },
    {
        famer:"阿陶",
        dog:500,
        cat:200
    },
    {
        famer:"阿俊",
        dog:400,
        cat:300
    },
    {
        famer:"阿鐵",
        dog:600,
        cat:100

    },
]
var total_dog = 0
for(var i =0;i<famrs0.length;i=i+1){
    total_dog = total_dog + famrs0[i].dog   //這是關鍵!
}   
console.log("所有農場總有"+total_dog+"隻狗")





//return除了回傳值還可以中斷
//break的用法。for迴圈+if裡面放break->只會執行到符合條件的那一次就中斷
for(var i =0;i<famrs0.length;i=i+1){
    console.log("農場的貓有"+famrs0[i].cat) //放在上面或下面會有不同結果
    if(famrs0[i].dog>450){
        console.log("我今天想買"+famrs0[i].famer+"農場裡的狗，因為那裡有"+famrs0[i].dog +"條狗，我需要450隻"  )
        break
    }
   
} 



//return 回傳值給function，範例如下。不懂請看六角第30章節
function amed(){
    var ax = 20;
    var yx = 60;
    return ax
}
console.log(amed()) //結果:20





// 物件寫法，1個農場
var farm ={
    farmer: "卡斯柏",
    dog:["張母是","龐德"],
    chick:[15,5,5],
    godinner:function(){
        console.log("回家吃飯吧")
    },
}


//物件取值
console.log(farm.dog) //結果:["張母是", "龐德"]
console.log(farm.dog[0]) //結果:張母是
farm.godinner() //結果:回家吃飯吧



//綜合寫法陣列+物件，2個農場
var farms =[{
    farmer: "卡斯柏",
    dog:["張母是","龐德"],
    chick:[15,5,5],
    godinner:function(){
        console.log("回家吃飯吧")
    }
},
{
    farmer: "卡斯柏2",
    dog:["張母是2","龐德2"],
    chick:[15,5,5],
    godinner:function(){
        console.log("不要回家吃飯吧")
    }
}
]
//綜合寫法陣列+物件
console.log(farms[1].farmer) //結果:卡斯柏2


//.push("yellow") 陣列:在陣列最後面增加"yellow"的資料
//.splice(0,1) 陣列:從第0筆開始、刪除1筆資料




//chrome 商店下載 JOSNView -->可以把密密麻麻的JOSN整理乾淨





//HTML設定:data-XXX 
//JS取值:hpp0.dataset.love (<div data-name="大雄" data-love="睡覺" class="data" >)
var hpp0 = document.querySelector(".hpp0")
console.log(hpp0.dataset) //結果:{name: "大雄", love: "睡覺"}
console.log(hpp0.dataset.love) //結果: 睡覺








// querySelector只會選定網頁第一筆資料。第二筆之後就沒反應
console.log(document.querySelector(".clu a")) //結果:<a href=""></a> (只有第一個被選到)


//querySelectorAll必須搭配陣列寫法[i]，但是也只能指定一筆。若要指定全部，就要寫for迴圈
console.log(document.querySelectorAll(".clu a"))//結果:NodeList(5) [a, a, a, a, a] (單純陣列)
// 範例:document.querySelectorAll(".clu a")[0].textContent = "123" 。


//$(".clu a")不需要寫迴圈也可以達到迴圈的效果，一次選取全部並做改變
// console.log($(".clu a")) //結果:k.fn.init(5) [a, a, a, a, a, prevObject: k.fn.init(1)] (全都選到了)
// 範例:$(".clu a").text("123")


//setAttribute用法。javscrpt屬性變更的兩種寫法，style竟然也可以用!
document.querySelector(".clu").setAttribute("style","color:#888")
document.querySelector(".clu").title ="標籤2"

//getAttribut，撈出屬性的質
console.log(document.querySelector(".clu").getAttribute("class")) //結果:clu







//functon帶參數寫法。itma是漢堡數量，itma2是可樂數量
var tatal
function ABC(itma,itma2){
    var price = itma*50; //一個漢堡50元
    var price2 = itma2*20;//一杯可樂20元
    tatal = price + price2//總共多少元
    console.log("你的帳單總金額為:"+tatal+"元");//結果:你的帳單總金額為:70元
    console.log(price)//結果: 50
}
ABC(10,20)//執行functon代參數寫法





// typeof() 得知是什麼型別  
console.log(typeof(123)) //結果:number
console.log(typeof("123"))//結果:string
console.log(typeof(ABC))//結果:function






//parsInt()轉為數值  。parseInt()裡面不能包var的東西，例如:parseInt(c)，這樣就會出錯
//Number()也可以轉為數值
var c 
c = parseInt("123")
console.log(c) //結果:123 (數值)







//google瀏覽器的Application -> Local Storage
//Local Storage 是瀏覽器裡面其中一個資料庫，可以把使用者的操作行為紀錄起來
//localStorage.setItem("name","王大明")設定localStorage裡的key和value
//localStorage.getItem("name")//取值
//陣列放進去localstprage會出錯，要轉換資料型別:object->string。取出來:string->object
//1.JSON.stringify() ，丟陣列進去要加這段
//2.JSON.parse()， 取出陣列的值要加這






//previousElementSibling 取上一個兄弟元素節點
//previousElementSiblin 取下一個兄弟元素節點



 
//js 事件 click change blur focus
//js 事件 mousemove 滑鼠移入
//js 事件 blur可以用再填寫輸入框、若沒填寫，移開焦點時，跑出提示訊息




//視窗座標應用
// var mouse = document.querySelector(".mouse")
// body.addEventListener("mousemove",function(e){
//     console.log("-----我是分隔線")
//     console.log("screenX"+e.screenX)//整個螢幕的座標
//     console.log("pageX"+e.pageX)   //基本上pageX和clientX值會一樣
//     console.log("clientX"+e.clientX)//基本上pageX和clientX值會一樣

//     console.log("screenY"+e.screenY)//整個 "螢幕" 的座標
//     console.log("pageY"+e.pageY)//整個 "視窗頁面內容" 的座標(視窗頁面內容高度5000px它的Y坐標就會最大到5000)
//     console.log("clientY"+e.clientY)// "視窗" 的坐標(只看現在的視窗座標，不看網頁內容)
//     console.log("-----我是分隔線")

//     mouse.setAttribute("style","top:"+ e.clientY +"px;"+"left:"+ e.clientX +"px")//關鍵:搭配CSS postiton:fixed的top和left
// })






//window.screen.width  結果:1366。可以得知目前螢幕寬度
//window.location 結果:可得知網址等相關資訊
//window.navigator.onLine 結果:可得知現在是否有連到網路
//window.history.forward();下一頁
//window.history.back();;上一頁
//window.print() 列印
//window.location.href="http://yahoo.com.tw" 前往頁面
//window.open("http://yahoo.com.tw") 另開新視窗
//wiindow.innerHeight 畫面高度
//wiindow.innerWidt 畫面寬度
//window.outerHeight 瀏覽器高度
//window.onresize = function(){} 瀏覽器被縮放時觸發 (客戶拉動調整式窗大小時)



//AJAX 向後端撈資料，信箱驗証:不用重新整理、直接撈後端資料並做驗証
//買商品按加入購物車時，它會去跟伺服器要資料問有沒有庫存，回傳true或false，不用重新整理直接撈資料
//google輸入關鍵字，它就直接跑出相關字的選項，它也沒有重新整理

//readySate:0 代表你已經產生一個XMLHttpRequest，但是還沒有連結你要的資料
//readySate:1 你用了open，但只是設定好，但你還沒有傳送資料
//readySate:2 偵測到你有用到send
//readySate:3 loading-資料很大就會撈很久
//readySate:4 你撈到資料了，數據已經完全接受到了

//1.var xhr = new XMLHttpRequest()//撈對方伺服器資料
var xhr = new XMLHttpRequest();
//readySate:0 代表你已經產生一個XMLHttpRequest，但是還沒有連結你要的資料


//2.xhr.open('','',true) //進行設定
xhr.open('get','https://hexschool.github.io/ajaxHomework/data.json',true)
//格式、要讀取的網址、同步與非同步
//格式:get(讀取該網址資料)、post(傳送資料到伺服器)
//readySate:1 你用了open，但只是設定好，但你還沒有傳送資料

//3.xhr.send(null);//傳送資料
xhr.send(null);
//因為這裡只有要讀取資料，沒有要傳送所以就null
//responseText: "[{"name":"王小名"}]↵"
//readySate:4 你撈到資料了，數據已經完全接受到了


//xhr.open('','',true) //true=非同步，不會資料傳回來，就讓程式繼續往下跑完，等到回傳才會自動回傳
//true非同步，直接讓js快速往下跑完，不會去等撈資料
//false 它會等資料傳回來，JS程式碼才會繼續往下跑

// 因為有時候資料太龐大了，根本不會等資料撈完才去跑JS，所以通常都用true非同步，資料還沒撈完就先往下跑完JS，那要如何讓xhr.responseText抓到資料呢?


//4.xhr.onload = function(){} 當資料有傳回來的時候，就去執行。(撈xhr裡的東西)
xhr.onload = function(){
    console.log(xhr.responseText) 
}

//status:200 資料有正確回傳，有撈到
//status:404 資料讀取錯誤，沒有撈到



//11.xhr0 =new XMLHttpRequest。讀取JOSN網址的方式。用xhr0.status == 200 來判斷當狀態為非200(可能是404)時出現的內容
var happy0 = document.querySelector(".happy0")
var xhr0 =new XMLHttpRequest
xhr0.open('get',"https://hexschool.github.io/ajaxHomework/data.json",true)
xhr0.send(null)
xhr0.onload = function(){
    if(xhr0.status == 200){
        happy0.textContent = "這是https://hexschool.github.io/ajaxHomework/data.json撈出來的資料 : "+JSON.parse(xhr0.responseText)[0].name
    }else{
        happy0.textContent = "資料讀取錯誤喔!"
    }
   
}


//CORS 是否可以跨網域撈取資料
//http://www.test-cors.org/可以測這個網指是否可以跨網域撈資料




//12.Ajax-POST-1練習 application/x-www-form-urlencoded
//index.html?account2=333&password2=333
//?加上表單上的name 中間用 & 來區隔
//表單送出的按鈕必須用type="submit" 
//輸入的內容就記得給它取name名稱

{/* <form action="">
    帳號:<input type="text" name="account2">
    密碼:<input type="text" name="password2">
    <input type="submit" value="送出">

</form> */}

var ward = document.querySelector(".ward") //提示字
var acc01 = document.querySelector(".acc01")//輸入帳號
var pass01 = document.querySelector(".pass01")//輸入密碼
var sub01 = document.querySelector(".sub01")//送出按鈕


var xhr1 = new XMLHttpRequest //1.設定請求
xhr1.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true)//2.open/post
xhr1.setRequestHeader("Content-type","application/x-www-form-urlencoded")//3.如果是post就要設定格式

xhr1.send("email="+acc01.value+"&password="+pass01.value)//4.send送出資料
xhr1.onload = function(){
        ward.textContent= JSON.parse(xhr1.responseText).message
}//5.當資料有傳回來的時候，就去執行



//可以透過chrome的network查看相關資訊
//Content-type 有兩種 1.application/x-www-form-urlencoded 2.application/josn



//13.Ajax-POST-2練習 application/json 
var ward0 = document.querySelector(".ward0") //提示字
var acc010 = document.querySelector(".acc010")//輸入帳號
var pass010 = document.querySelector(".pass010")//輸入密碼
var sub010 = document.querySelector(".sub010")//送出按鈕



sub010.addEventListener("click",function(){
    var arrdy={email:acc010.value,password:pass010.value}
    var arrdyjosn= JSON.stringify(arrdy)
    var xhr2 = new XMLHttpRequest //1.設定請求
    xhr2.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true)//2.open/post
    xhr2.setRequestHeader("Content-type","application/json")//3.如果是post就要設定格式
    xhr2.send(arrdyjosn)//4.send送出資料
    xhr2.onload = function(){
        ward0.textContent= JSON.parse(xhr2.responseText).message  
    }
})




//14.Ajax-POST-2練習 application/json 登入
var ward1 = document.querySelector(".ward1") //提示字
var acc011 = document.querySelector(".acc011")//輸入帳號
var pass011 = document.querySelector(".pass011")//輸入密碼
var sub011 = document.querySelector(".sub011")//送出按鈕


sub011.addEventListener("click",function(){
    var arrdx={email:acc011.value,password:pass011.value};
    var arrdxjosn = JSON.stringify(arrdx)
    var xhr3 = new XMLHttpRequest
    xhr3.open("post","https://hexschool-tutorial.herokuapp.com/api/signin",true)
    xhr3.setRequestHeader("Content-type","application/json")
    xhr3.send(arrdxjosn)
    xhr3.onload = function(){
        ward1.textContent= JSON.parse(xhr3.responseText).message  
    }
})



//ES5 ES6
//var、const、let
//https://babeljs.io/ 這個網站可以把ES6轉成ES5語法


//盡量不要汙染到全域變數用
//const、let用來宣告區域變數 區塊={}
//只要在function裡面設變數不管是用var或let 都可以讓它是區域變數
//在for或if裡面用var設變數會是全域變數


//let 只會在區塊{}裡有效，不會影響到全域
var a = 0;

function ABCS(){
    let a=2
}
ABCS();
console.log(a) //結果:0 (竟然還是0!因為let只會在區塊裡有效)


//for(){} 迴圈要用let才不會出現問題，比較嚴謹
for(let i=0;i<6;i++){

}

//const 唯讀變數-不能去做修改
//使用const時機:不能被變更的 - url網址 -怕被其他開發者改到或亂搞就用const
const yas = 3
// yas = 5 //寫了這行會讓下面的console出現錯誤，因為const為不能更改
console.log(yas) 


//const設定為物件或陣列 {} [] 就一樣可以修改，若要讓物件或陣列也不能改要加上Object.freeze()
const arrdc = []
Object.freeze(arrdc) //有寫這行會讓陣列無法更動，沒寫的話就一樣可以更改
arrdc[0]="小美"
console.log(arrdc)


//let、const使用時機
//不可犯得錯誤、特性介紹
//1.var 有向上提升(hosting)的特性，但let、const沒有向上提升的特性
console.log(axx)//結果:undefine。找的到axx這個變數，只是他是undefine
var axx =3
//console.log(add) //結果:會出錯，因為找找不到add這個變數
let add =3

//2.var 可以在同區塊重複宣告，let、const不能在同區塊重複宣告
var ai = 3
var ai = 4
console.log(ai)
let aii = 555
//let aii = 4 //加了這行就會出錯
console.log(aii)


//3.let、const不管在哪裡宣告，它都不會變成全域變數(window)。
var ayy = 3
console.log(window.ayy) //結果:3
const app = 5
console.log(app)  //結果:5
console.log(window.app)  //結果:undefined。因為const、let不管在哪宣告，它都不會感染到window(全域變數)


//let、const好處:1.在同區塊可以避免重複宣告，減少犯錯機率(因為重複js就會報錯、就跑不下去) 2.不會干擾到window的變數


//14.ES6字串相加練習
//1.要用``。 2.用${} 
const plus = document.querySelector('.plus')
const name = "王曉明"
const nmber01 = 005
plus.innerHTML = `<li><a>${name}的編號是${nmber01}</a></li>`




// ----以下為MIKE javascript課程---
//js通常要等到所有DOM載完在執行，所以得放最下面，若放在head區就必須用window.onload
 window.onload = function(){
}



// 兩種簡單型別：空值(null)、未定義(undefined)
var Null = null;
var Undefined;



// 三種基本型別： 布林(Boolean)、數值(Number)、字串(String)
var number = 1;
var string = "HISKIO";
var boolean = true;



//這是字串
console.log("1")
//這是數值，顏色會不一樣!
console.log(1)



//if用法
var breakfast = "麥香雞肉堡";
if(breakfast == "麥香雞肉堡"){
    console.log("收你30元");
}else if(breakfast == "厚切豬排堡"){
    console.log("收你85元");
}else if(breakfast == "總匯蛋餅"){
    console.log("收你50元");
}else if(breakfast == "玉米濃湯"){
    console.log("收你35元");
}else if(breakfast == "捷克厚牛芝加哥堡"){
    console.log("收你75元");
}else{
    console.log("其它一律收你55元");
}



//一般相等 (==) EX:1或"1"會變認為是一樣的
//嚴格相等（===）



//選取器寫法
console.log(document.getElementById("Btn"));
console.log(document.getElementsByClassName("Btn"));//會是陣列的方式
console.log(document.getElementsByClassName("Btn")[0]);//通常會這樣用。結果:<div class="Btn">1</div>



//選取器更改內容
var Btn = document.getElementById("Btn")
console.log(Btn) //結果:<a id="Btn" target="123" href="javascript:;" class="open open2 open4" style="font-size: 60px;"><h5>123</h5></a>
Btn.target = "123";
Btn.href = "javascript:;";
Btn.style.fontSize = "20px";name
Btn.innerHTML = "<h6>MIKE javascript</h6>";
Btn.classList.add('open'); //增加class
Btn.classList.add('open2');//增加class
Btn.classList.remove('open3');//移除class
Btn.classList.toggle("open4");//偵測開關，偵測現在頁面上有open4就移掉，沒有就加上，反覆循環
console.log(Btn.id)//抓取ID。結果:Btn
console.log(Btn.id.substr(1))//去掉第一個字串。結果:tn
console.log(Btn.classList)//classList讀取出來的也是陣列。結果:["open", "open2"}
console.log(Btn.classList[0])//結果:open (字串)
console.log(Btn.classList.contains('open5'))//結果:false (布林值)。判斷是否有該class，用法如下
 /*
        if(!app.classList.contains('open')){
            window.open('https://hiskio.com/professions/1');
        }
 */



//function寫法
function logHello(){
    console.log("歡迎光臨　HISKIO");
}
logHello();



//監聽寫法 匿名涵式和非匿名涵式
document.getElementById("Btn").addEventListener("click", logHello); 
document.getElementById("Btn").addEventListener("click", function(){
    console.log("歡迎光臨　HISKIO");
});
document.getElementById("Btn").addEventListener("mouseover", function(){
    Btn.innerText = "我滑鼠滑進來啦!!!";
});
document.getElementById("Btn").addEventListener("mouseout", function(){
    Btn.innerText = "然後滑鼠又離開啦!!!";
});



//注意! for迴圈不能用匿名涵式!



// 陣列用法
var arr = ["1","2","3"];
arr.push("mike"); //加在最後面
arr.unshift("mike2");//加在最前面
arr.pop();//刪掉最後一個
arr.shift();//刪掉第一個
console.log(arr) //結果:["1", "2", "3"]



//選單開啟或關閉 參考範例9-4
// var navBtn = document.getElementsByClassName('nav');

// for(var i = 0; i < navBtn.length; i++){
//     navBtn[i].addEventListener('click', menuClcik);
// }

// function menuClcik(){
//     for(var s = 0; s < navBtn.length; s++){
//         navBtn[s].classList.remove('active');
//     }
//     this.classList.toggle('active');
// }



//setInterval每1秒執行一次、clearInterval(go)結束; 應用範例請看10-3
var idx = 0;
var time = document.getElementById('time');
time.innerText = idx;
var go = setInterval(function(){
    idx++;
    time.innerText = idx;

    if(idx >= 10){
        clearInterval(go);
    }
},1000);




//setTimeout 3秒之後開始、6秒之後開始，兩個計時器同步進行沒有上下之分,應用範例請看10-3
var time2 = document.getElementById('time2');
time2.innerText = '3秒後開始';

setTimeout(function(){
    time2.innerText = '開始!';
},3000);

setTimeout(function(){
    time2.innerText = 'END';
},6000);




//JQ用法，更有效率，只要DOM抓到就開始執行，不需要等圖片載完
// $(document).ready(function(){
// })



//hosing
console.log(b)
var b = "2"  //結果:undefined。試著把這行註解掉，結果:錯誤訊息!
//迷之音 瀏覽器會把等於左邊的var b 提升到最上面

aaabx();
function aaabx(){
    console.log("整組function會被提到瀏覽器最上面喔!")
}
//迷之音 整組function會被提到瀏覽器最上面

var ccc = function(){
    console.log("只有var ccc 被提到最上面")
}
ccc(); //試著把這個放在上面就會行不通，因為只有var ccc被提到最上面



console.log(Math.random()*100)//Math.random()隨機產生0~1的數字
console.log(Math.round(9.2))//Math.round(x)回傳四捨五入的數字
console.log(Math.floor(8.6))//Math.floor直接去除小數點(無條件捨去)
console.log(Math.round(Math.random()*5))//這樣組合就可以隨機產生0~5的整數  
console.log(Math.floor(Math.random()*5))//這樣組合就可以隨機產生0~4的整數
console.log(Math.floor(Math.random()*(5-1+1)+1))//Math.random()*(最大值-最小值+1)+最小值，這樣就可以產生1~5的數字
console.log(0.1+0.2) //只要是小數點相加會有問題，解決方法如下(課程第十三節)
// <script src="MathNumber.min.js"></cript> //先載入這隻檔案
// <script>
// var int = 0.5;
// var plus = int.plus(0.1); //加法
// var minus = int.minus(0.1);//減法
// var times = int.times(3);//承法
// var div  = int.div(0.3);//除法
// console.log(plus);
// console.log(minus);
// console.log(times);
// console.log(div);
// </cript>




// <!-- 以下為工作筆記 -->
//主題顏色自動切換 //取得目前選單的CSS顏色，根據不同的顏色，頁面元素有不同的變化
// var a =document.querySelector(".sub_menu->a");
// var c = getComputedStyle(a);//獲取CSS的內容   
// var d = c.backgroundColor;
// var body = document.querySelector("body");
// var icon = document.querySelector(".goback .icon a");
// var icon2 = document.querySelector(".goback .Gotop2 a");
// var icon3 = document.querySelector(".goback .icon_forward a");

// if(d == "rgb(0, 86, 83)"){
//     body.style.backgroundImage = "url(../images/bg.jpg)"; //換背景
//     icon.style.backgroundImage = "url(../images/right-.png)"; //換回上頁的圖示
//     icon2.style.backgroundImage = "url(../images/house.png)";//換回首頁的圖示
//     icon3.style.backgroundImage = "url(../images/right.png)";
// }else if(d == "rgb(62, 58, 57)"){
//     body.style.backgroundImage = "url(../images/bg2.jpg)";
//     icon.style.backgroundImage = "url(../images/right2-.png)";
//     icon2.style.backgroundImage = "url(../images/house2.png)";
//     icon3.style.backgroundImage = "url(../images/right2.png)";
// }else if(d == "rgb(55, 42, 91)"){
//     body.style.backgroundImage = "url(../images/bg3.jpg)";
//     icon.style.backgroundImage = "url(../images/right3-.png)";
//     icon2.style.backgroundImage = "url(../images/house3.png)";
//     icon3.style.backgroundImage = "url(../images/right3.png)";
// }else if(d == "rgb(0, 78, 135)"){
//     body.style.backgroundImage = "url(../images/bg4.jpg)";
//     icon.style.backgroundImage = "url(../images/right4-.png)";
//     icon2.style.backgroundImage = "url(../images/house4.png)";
//     icon3.style.backgroundImage = "url(../images/right4.png)";
// }else if(d == "rgb(119, 23, 37)"){
//     body.style.backgroundImage = "url(../images/bg5.jpg)";
//     icon.style.backgroundImage = "url(../images/right5-.png)";
//     icon2.style.backgroundImage = "url(../images/house5.png)";
//     icon3.style.backgroundImage = "url(../images/right5.png)";
// }else if(d == "rgb(221, 158, 66)"){
//     body.style.backgroundImage = "url(../images/bg6.jpg)";
//     icon.style.backgroundImage = "url(../images/right6-.png)";
//     icon2.style.backgroundImage = "url(../images/house6.png)";
//     icon3.style.backgroundImage = "url(../images/right6.png)";
// }

// document.querySelector("h2").style.color = d;
// $(".title_box").css("border-color",d);
// $(".goback .icon a").css("border-color",d);;
// $(".goback .icon a").css("color",d);
// $(".list li:nth-child(1)").css("background",d);
// $(".page .icon a").css("background",d);
// $(".page .enter_bn").css("background",d);
// $(".imgbox .video_box").css("background",d);
// $(".video2_imgBox").css("background",d);
// $("#main_type .type_word a.active").css("background",d);
// $(".list a").css("color",d);
// $(".video a").css("color",d);
// $(".video_txt li i").css("color",d);
// $(".video_txt li a").css("color",d);



// //1.獲取style元素表
// var style = document.querySelector('.in-link').style
// //2.取得CSS值
// var link1 = getComputedStyle(document.querySelector('.in-link0_1 .row')).height
// var link2 = getComputedStyle(document.querySelector('.in-link0_2 .row')).height
// var link3 = getComputedStyle(document.querySelector('.in-link0_3 .row')).height

// //3.選取元素
// var ln_link1 = document.querySelector(".in-link0_1 .ln_link1");
// var ln_link2 = document.querySelector(".in-link0_2 .rwd_no0 .ln_link1");
// var ln_link3 = document.querySelector(".in-link0_3 .ln_link1");

// //4.設定
// ln_link1.style.height =  link1
// ln_link2.style.height =  link2
// ln_link3.style.height =  link3





//限定字數
//     var $len = 100; // 超過50個字以"..."取代
// $(".vi_p").each(function(){
//     if($(this).text().length > $len){
//         var $text=$(this).text().substring(0,$len-1)+"...";
//         $(this).text($text);
//     }
// });
// var $len2 = 11; // 超過50個字以"..."取代
// $(".vi_title").each(function(){
//     if($(this).text().length > $len2){
//         var $text=$(this).text().substring(0,$len2-1)+"...";
//         $(this).text($text);
//     }
// });
// if($(window).width() < 859)
// {
//     $len = 50; // 超過50個字以"..."取代
//     $(".vi_p").each(function(){
//         if($(this).text().length > $len){
//             var $text=$(this).text().substring(0,$len-1)+"...";
//             $(this).text($text);
//         }
//     });
//     $len2 = 10; // 超過50個字以"..."取代
//     $(".vi_title").each(function(){
//         if($(this).text().length > $len2){
//             var $text=$(this).text().substring(0,$len2-1)+"...";
//             $(this).text($text);
//         }
//     });
// }



//獲取當前網址，網址字串包含OOO時，點擊按鈕觸發
//  var href0 = window.location.href  //獲取瀏覽器當前網址
//     //indexOf字串包含
//     if(href0.indexOf("content/index?Parser=1,3,8") >= 0){
//         href0 = "../content/index?Parser=1,3,9"
//     }else if(href0.indexOf("content/index?Parser=1,3,9")>=0){
//         href0 = "../content/index?Parser=1,3,10"
//     }else if(href0.indexOf("content/index?Parser=1,3,10")>=0){
//         href0 = "../content/index?Parser=1,3,11"
//     }else if(href0.indexOf("content/index?Parser=1,3,11")>=0){
//         href0 = "../content/index?Parser=1,3,12"
//     }else if(href0.indexOf("content/index?Parser=1,3,12")>=0){
//         href0 = "../content/index?Parser=1,3,13"
//     }else if(href0.indexOf("content/index?Parser=1,3,13")>=0){
//         href0 = "../content/index?Parser=1,4,14"
//     }else if(href0.indexOf("content/index?Parser=1,4,14")>=0){
//         href0 = "../content/index?Parser=1,4,15"
//     }else if(href0.indexOf("content/index?Parser=1,4,15")>=0){
//         href0 = "../content/index?Parser=1,4,16"
//     }else if(href0.indexOf("content/index?Parser=1,4,16")>=0){
//         href0 = "../content/index?Parser=1,4,17"
//     }else if(href0.indexOf("content/index?Parser=1,4,17")>=0){
//         href0 = "../content/index?Parser=1,4,18"
//     }else if(href0.indexOf("content/index?Parser=1,4,18")>=0){
//         href0 = "../content/index?Parser=1,4,19"
//     }else if(href0.indexOf("content/index?Parser=1,4,19")>=0){
//         href0 = "../content/index?Parser=1,4,20"
//     }else if(href0.indexOf("content/index?Parser=1,4,20")>=0){
//         href0 = "../content/index?Parser=1,4,21"
//     }else if(href0.indexOf("content/index?Parser=1,4,21")>=0){
//         href0 = "../content/index?Parser=1,4,22"
//     }else if(href0.indexOf("content/index?Parser=1,4,22")>=0){
//         href0 = "../content/index?Parser=1,5,23"
//     }else if(href0.indexOf("content/index?Parser=1,5,23")>=0){
//         href0 = "../content/index?Parser=1,5,24"
//     }else if(href0.indexOf("content/index?Parser=1,5,24")>=0){
//         href0 = "../content/index?Parser=1,5,25"
//     }else if(href0.indexOf("content/index?Parser=1,5,25")>=0){
//         href0 = "../content/index?Parser=1,5,26"
//     }else if(href0.indexOf("content/index?Parser=1,5,26")>=0){
//         href0 = "../content/index?Parser=1,5,27"
//     }else if(href0.indexOf("content/index?Parser=1,5,27")>=0){
//         href0 = "../content/index?Parser=1,5,28"
//     }else if(href0.indexOf("content/index?Parser=1,5,28")>=0){
//         href0 = "../content/index?Parser=1,5,29"
//     }else if(href0.indexOf("content/index?Parser=1,5,29")>=0){
//         href0 = "../content/index?Parser=1,5,30"
//     }else if(href0.indexOf("content/index?Parser=1,5,30")>=0){
//         href0 = "../content/index?Parser=1,5,31"
//     }else if(href0.indexOf("content/index?Parser=1,5,31")>=0){
//         href0 = "../content/index?Parser=1,5,32"
//     }else if(href0.indexOf("content/index?Parser=1,5,32")>=0){
//         href0 = "../content/index?Parser=1,5,33"
//     }else if(href0.indexOf("content/index?Parser=1,5,33")>=0){
//         href0 = "../content/index?Parser=1,6,34"
//     }else if(href0.indexOf("content/index?Parser=1,6,34")>=0){
//         href0 = "../content/index?Parser=1,6,35"
//     }else if(href0.indexOf("content/index?Parser=1,6,35")>=0){
//         href0 = "../content/index?Parser=1,6,36"
//     }else if(href0.indexOf("content/index?Parser=1,6,36")>=0){
//         href0 = "../content/index?Parser=1,7,37"
//     }else if(href0.indexOf("content/index?Parser=1,7,37")>=0){
//         href0 = "../content/index?Parser=1,7,38"
//     }else if(href0.indexOf("content/index?Parser=1,7,38")>=0){
//         href0 = "../content/index?Parser=1,7,39"
//     }else if(href0.indexOf("content/index?Parser=1,7,39")>=0){
//         href0 = "../content/index?Parser=1,7,40"
//     }else if(href0.indexOf("content/index?Parser=1,7,40")>=0){
//         href0 = "../form/index?Parser=28,8,41"
//     }else if(href0.indexOf("form/index?Parser=28,8,41")>=0){
//         href0 = "../content/index?Parser=1,3,8"
//     }
//     var forward =document.querySelector(".icon_forward a")
//     forward.setAttribute("href",href0) 






//以下為vue課程


var app2= new Vue({
    el:'#app2',
    data:{
        word:['王大明','陳曉芬','王曉華']
    }
})



// Vue 的應用程式它是不可以使用巢狀的方式去建立



//22.元件基礎概念
//要在var app3= new Vue的上面進行增加元
//獨立運算
Vue.component('mycomponent',{
    data: function(){
        return{
            button:0  
        }
    },
    template:`<div>
    <button @click="button=button+1">{{button}}</button>
    </div> `
});


//2.雙向綁定的資料v-model=""。MVVM:1.view為使用者介面、2.model是資料、3.view-model是資料繫結器
//MVVM= view--view-model--model
//view為使用者介面、model是資料、view-model是資料繫結器
var app3= new Vue({
    el:'#app3',
    data:{
        text:'<a href="#">雙向資料練習</a>',
        src:'https://picsum.photos/id/141/500/550',
        alt:'v-bind 屬性資料',
        style:'width:20%',
        todolist:[
            {
                星期幾:'星期一',
                代辦:'掃地',
                重要程度:0
            },
            {
                星期幾:'星期二',
                代辦:'拖地',
                重要程度:1000
            },
            {
                星期幾:'星期三',
                代辦:'寫功課',
                重要程度:1000
            },
        ],
        ontest:"",
        ontest2:"",
        transform: false,
        text2:"",
        text3:"",
        checkbox:false,
        checkbox2:[],
        checkbox3:"",
        select:"",
        button:0
        
    },
    methods: {
        show: function(){
             this.ontest2 = this.ontest
             
             //取得data裡的內容就用this.名稱
        }
    },
    computed: {
        show2:function(){
            return 'aaa';
        }
    },
    
})


var app4 = new Vue({
    el:'#app4',
    data:{
        newdo:'',
        see:'all',
        todolist00:{},
        todosomething:'',
        todolist:[
            {
                id:'123',
                something:'掃地',
                finished: false
            }
        ]
    },
    methods: {
        add:function(){
            var num00=Math.floor(Date.now());
            if(this.newdo.trim() == ""){
                
            }else{
                this.todolist.push( {
                    id:num00,
                    something:this.newdo,
                    finished: false
                })
            }
            
            this.newdo=''
           
        },
        del:function(item){
            console.log(item)
            var iddx
            this.todolist.forEach(function(xx,yy){
                if(item.id === xx.id){
                    console.log(xx)
                    console.log(yy)
                   iddx = yy
                   console.log(iddx)
                }
                
            })
            console.log(iddx)
            this.todolist.splice(iddx,1)
        },
        editodo:function(item){
            console.log(item);
            this.todolist00 = item;
            this.todosomething= item.something;
            console.log(this.todolist00);
        },
        cancel:function(){
            this.todolist00={}
        },
        entergo:function(){
            this.todolist00={}
        }
    },
    computed:{
        trans_todolist:function(){
            if(this.see == "all"){
                return this.todolist
            }else if(this.see == "doing"){
                var doingthing = []
                this.todolist.forEach(function(item){
                    if(item.finished == false){
                        doingthing.push(item)
                    }
                });
                return doingthing
            }else if(this.see == "finish"){
                var finishthing=[]
                this.todolist.forEach(function(item){
                    if(item.finished == true){
                        finishthing.push(item)
                    }
                });
                return finishthing

            }
           
        }
    }

})

//this.newdo.trim() 刪除空格
//v-for="(item,idx) in todolist"> v-for時 idx是計數
//<button @click="del(idx)">X</button>  idx計數用法

//3.MVC(和MVVM不太一樣) 1.視圖View 2.控制器Controller 3.模型Model(和資料庫要資料)-->4.DB



// var app5 = new Vue({
//     el:'#app5',
//     data:{
//         text:'123',
//         text2:'加上456',
//         text3:'小黑',
//         vtrue:true,
//         vtrue2:true,
//         value:100,
//         value2:200,
//         dis:false,
//         rote:false,
//         colortrue:false,
//         link:"a",
//         classrote:{
//             'roatex':false,
//             'changecolor':false
//         },
//         active:true,
//         classrote2:[],
//         classrote3:{transform: 'rotate(45deg)', background: 'blue'},
//         classrote4:{transform: 'scale(0.6)'},
//         people:[
//             {
//                 who:"小王",
//                 age:26
//             },
//             {
//                 who:"小黑",
//                 age:28
//             },
//             {
//                 who:"漂亮阿姨",
//                 age:34
//             }
//         ],
//         people2:{
//             whang:{
//                 who:"小王",
//                 age:26
//             },
//             blockman:{
//                 who:"小黑",
//                 age:28
//             },
//             pretty:{
//                 who:"漂亮阿姨",
//                 age:34
//             }
//         },
//         people3:[
//             {
//                 who:"小王",
//                 age:26
//             },
//             {
//                 who:"小黑",
//                 age:28
//             },
//             {
//                 who:"漂亮阿姨",
//                 age:34
//             }
//         ],
//         filterarry:[],
//         filtertext:"",
//         datenow:0
      
       
        
//     },
//     methods:{
//         reverseArray:function(){
//             this.people.reverse()
//         },
//         filter:function(){
//             var vm = this
//             vm.filterarry=vm.people.filter(
//                 function(peo){
                   
//                     return vm.filterarry=peo.who.match(vm.text3)
//                 }
//             )
           
//         },
//         cannotwork:function(){
//             // this.people.length = 0
//             // console.log(this.people)
//             //無法操作陣列長度

//             // this.people[0]={
//             //     who:"小屁孩",
//             //     age:8
//             // }
//             // console.log(this.people[0])
//             //無法操作陣列索引

//             //寫入方法如下
//             // Vue.set(目標對象,第幾個,值)
//             Vue.set(this.people2,'pretty',{
//                 who:"變醜阿姨",
//                 age:54
//             })

//         },

//     },
//     computed:{
//      filterarry2:function(){
//          var vmx=this
//          return vmx.people3.filter(function(item){
//                 return item.who.match(vmx.filtertext)
//             }
//         )
//      },
//      datetrans:function(){
//         var dates = new Date(this.datenow * 1000);
//             var year = dates.getFullYear();
//             var month = dates.getMonth() + 1;
//             var date = dates.getDate() + 1;
//             var hours = dates.getHours();
//             var minutes = dates.getMinutes();
//             var seconds = dates.getSeconds();
//             return `${year}/${month}/${date} ${hours}:${minutes}:${seconds}`
//      },
//       dtae00:function(){
//         this.datenow = Math.floor(Date.now() / 1000);
//      },
//     },
//     watch:{
//         rote:function(){
//             var vmy =this;
//             setTimeout(() =>{
//                vmy.rote = false
//             },3000);
//         }

//     }
// })




//v-once 只綁定一次
//classrote.changecolor 可以改成 classrote['changecolor']


















































//以下為git課程
//1.git下載網址 https://git-scm.com/download/win
//2.安裝後打開git-bash.exe
//3.輸入提示字元 git version 得知版本號，就代表安裝成功


//1.移動路徑: cd + 路徑。範例1:cd d:。範例2:cd /045-三義木雕館/web/1120/web_no2/css
//2.回上一層: cd + ..
//3.展開列表: ls

//*移動路徑最快方法: cd + 然後直接把資料夾拖曳到視窗。就會直接顯示該路徑




//forEach 用法
var scc=[
    {
        id:'123',
        something:'掃地',
        finished: false
    },   {
        id:'456',
        something:'吃飯',
        finished: false
    },   {
        id:'789',
        something:'睡覺',
        finished: true
    },
 

]

scc.forEach(function(item){  
    console.log(item);  
    if(item.finished == true){
        console.log(item); //{id: "789", something: "睡覺", finished: true} 
    }
    
});




//2.精確說法:let可以重新指定(reassign)，const不能重新指定(reassign)，但可以改變內容

let ac =3
ac=5
console.log(ac)

const ax ={x:'老王'}
ax.x='老臣'
console.log(ax.x)


//3.物件縮寫
function cirr(x,y,z){
return{
  x,
  y,
  z
}
}
console.log(cirr(100,200,300))

//4.函式縮寫 //在物件裡面的function可以用縮寫

//未縮寫
const chang={
    name:'漂亮阿姨',
    age:29,
    creat: function(){
      console.log('我好棒棒')
    }

}
chang.creat()

//縮寫
const chang2={
    name:'漂亮阿姨',
    age:29,
    creat(){
        console.log('我好棒棒2222')
    }

}

chang2.creat()



// 5.解構賦值

//陣列-解構前
const nums=[1,2,3]

const one = nums[0]
const two = nums[1]

console.log(one)
console.log(two)


//陣列-解構後
const nums2=[11,22]

const [one2,two2,three2=4457]=nums2

console.log(one2) //11
console.log(two2) //22
console.log(three2) //4457
console.log(nums2) //[11,22]


//陣列-解構後-2
const nums3=[111,222,333]

let one3
let two3

[one3,two3]=nums3

console.log(one3)
console.log(two3)


//陣列-忽略元素

const nums4=[1111,2222,3333]

const [,,three4]=nums4

console.log(three4) //3333





//變數交換

//一般情況
let dog = 1
let cat = 2

let change = dog
dog = cat
cat = change

console.log(dog)
console.log(cat)



//剩餘部分

const loads = [666,777,888,999]

const [load1,...ondo] =loads

console.log(load1) //666
console.log(ondo) //[777, 888, 999]




//物件解構
//物件解構的名稱必須和物件裡面的名稱一樣
//物件解構不像陣列可以直接指派新名稱，需要多一道手續

//物件-解構前
const home={
西屯區:20,
北屯區:30
}

const homex = home.西屯區
const homey = home.北屯區

console.log(homex)
console.log(homey)


//物件-解構後
const home2={
    西屯區:2000,
    北屯區:3000
    }
    
const {西屯區,北屯區} = home2
    
    console.log(西屯區)
    console.log(北屯區)
    console.log(home2)



//物件-指派新名稱
const point={
    x:500,
    y:120
}

const {x:px,y:py} = point

console.log(px)
console.log(py)


//解構函式參數
console.log(point) //{x: 500, y: 120}

function distance(point){
    const {x,y} = point
    return Math.sqrt(x*x + y*y)
}


console.log(distance(point))


//字串模板與多行字串

function myname(name,day){
    // console.log('我的名字叫' + name +'請多多指教!');
    console.log(`我的名字叫${name}請多多指教!,我們${day*24}小時沒見了,${(day<7)?'我們小於7天沒見':'我們大於7天沒見'}`);
   

}

myname('王大華',9)


//換行

const word = `
換行
111111111111111
222222222222
33333333333
`
console.log(word)
var word0 = document.querySelector('.word')
word0.innerHTML = word
console.log(word0)


//7.箭頭函式


//ES5
var double=function(x){
    return x*2
}

console.log(double(5))


//ES6箭頭函式

var double2=(x)=>{
    return x*2
}

console.log(double2(20))


//只有一行+一個參數，而且是return，可以這樣寫
var double3= x => x*2


console.log(double3(50))



//範例箭頭函示寫法

//修改前
// arr.map(function(elm,idx){
// return elm + idx
// })

//修改後
arr.map((elm,idx)=> elm + idx)


//修改前
Btn.addEventListener("click",function(){
    console.log("你好阿")
})


//修改後
Btn.addEventListener("click",()=>{
    console.log("你好阿")
})

Btn.addEventListener("click",()=>console.log("你好阿"))


//自動綁定--箭頭函示內部的this與外部相同

const achive = ()=>{
    console.log(this.window.location.href)
    achive2 = ()=>{
        console.log(this.window.location.href)
    }
}

achive()  //http://127.0.0.1:5501/index.html
achive2() //http://127.0.0.1:5501/index.html
console.log(this.window.location.href) //http://127.0.0.1:5501/index.html




//function裡面的this，答案:this是window
var pig = "我是豬"

var cola = function(){
    console.log(this.pig)
}
cola() //我是豬




//物件裡面，一般function使用this，答案:this是該物件
var cola2 = {
    pig: "哈哈，豬不好吃",
    cola3: function(){
        console.log(this.pig)
    }
}
cola2.cola3() //哈哈，豬不好吃




//物件裡面，使用箭頭函示，答案:this是window (箭頭函示都一定會指向最外面window)
var cola20 = {
    pig: "哈哈，豬不好吃",
    cola30: ()=>{
        console.log(this.pig)
    }
}
cola20.cola30() //我是豬




//監聽事件裡，fuction裡面，答案:this是DOM
//<div class="word" name="good"></div>
word0.addEventListener("click",function(){
    console.log(this.style)
    console.log(this.pig)
    console.log(this.classList) //OMTokenList ["word", value: "word"]
})


//*結論 一般的function或監聽事件是會找"上一層"當this。而使用箭頭函示，裡面的this都會通通指向最外面的window */


var app11 = new Vue({
    el:'#app11',
    data:{
        message:'hello',
        num:0,
        see:true,
        undos:["掃地","洗碗","拖地"],
        text:""
    },
    methods:{
        add:function(){
            this.num = this.num+1
        },
        remove:function(){
            this.undos.pop()
        }
    }
})



new Vue({
    el:'#todolist',
    data:{
        todolist:[],
        thing:"",
        some:"123",
        some2:"<h1>45ghgh45<h1>",
        checkgo:true,
        num:0


    },
    methods:{
        adding:function(){
            this.todolist.push(this.thing),
            this.thing=''
        },
        remove:function(){
            this.todolist = []
        },
        removethis:function(item){
            console.log(item)
            this.todolist.splice(item,1)
        },
        add0:function(){
            this.some = this.some + "0"
        },
        change:function(){
            this.num = this.num +1
        }
    }

})




const vmgo = new Vue({
el:'#tem',
data:{
    data:'123資料'
},
template:'<a>我是連結{{data}}</a>'

})




//12.data //可以在外面指定data，資料會被套進去同步更新
const data={
    x:1,
    y:2
}

const data2 = new Vue({
el:"#data2",
data:data
})
data2.x= 10

console.log(data2.x)
console.log(data.x)
console.log(data2.$data === data)  //true


const data3 = new Vue({
    el:'#data3',
    data:{
        count:0
    },
    methods:{
        add1:function(){
            this.count = this.count +1
        }
    }

    })

    //14.Computed

    const computed= new Vue({
        el:'#computed',
        data:{
            a:0,
            b:0,
          
        },
        computed:{
            c:{
                get:function(){
                    return parseInt(this.a) + parseInt(this.b)
                },
                set:function(val){
                    this.b = parseInt(val) - parseInt(this.a)
                }

            }
        }
    })


    console.log(computed.c) //0



//15.watch，watch可以監聽data或是computed

const watch=new Vue({
    el:'#watch',
    data:{
        value: 0,
    },
    methods:{},
    computed:{
        value2(){
            return parseInt(this.value,10)*2
        }

    },
    watch:{
        value2(val,oldval){
            console.log(`${oldval} -> ${val}`);
        },
        
    }




})


// -------以下為MIKE老師JS進階課程---------


//物件兩種寫法 objec.name、objec[x]
var objec = {
    name: "小王",
    age: 20
}
var x = "age"
console.log(objec.name) //小王
console.log(objec[x]) //20
console.log(objec["name"])


//陣列包物件

var ourteam=[
    {
        name: "jude",
        years:3,
        money:32000

    },
    {
        name: "sunny",
        years:5,
        money:52000
    }

]

console.log(ourteam[0].name+"的薪水是"+ourteam[0].money)


//最新消息

var news0=[
    {
        title:"川普今日確診",
        href:"http://www.yahoo.com.tw"
    },
    {
        title:"美豬進口",
        href:"http://google.com"
    }
]


var html0 = ""

for(i=0;i<news0.length;i++){
    html0=html0+"<ul><li><a href='"+ news0[i].href + "'>"+ news0[i].title + "</a></li></ul>"
}

document.getElementById('news_tt').innerHTML = html0


var seachData = {
    "媽祖":[
        {
            title: '台灣媽祖信仰- 维基百科，自由的百科全书',
            link: 'https://zh.wikipedia.org/zh-tw/台灣媽祖信仰',
            text: '媽祖信仰是臺灣普遍民間信仰。早期移民多自華南渡海，心驚膽顫，且台灣四面環海，海上活動頻繁，海神媽祖婆成臺灣人重要精神託付。臺灣有媽祖廟510座以上，有 ...',
        },
        {
            title: '媽祖的介紹',
            link: 'www.ntcu.edu.tw/edison/otm/__1.html',
            text: '媽祖就是「天上聖母」，我們一般通稱「媽祖」或「媽祖婆」。 媽祖是古時候的宋朝人，她的本名叫「林默娘」，從小就相當相當聰明，讀經書過目不忘。 媽祖十三歲的時後 ...',
        }
    ],
    "地震":[
        {
            title: '地震 - 中央氣象局',
            link: 'https://www.cwb.gov.tw/V7/earthquake/',
            text: '資料來源：美國地質調查所主動發布之全球地震自動定位資訊，透過EMAIL方式通報.本網頁僅展示地震規模大於6之全球地震初步訊息，欲查詢詳細地震資訊請 ...',
        }
    ],
    "館長":[
        {
            title: '館長成吉思汗- YouTube',
            link: 'https://www.youtube.com/channel/UCnnp2fWa77PP2h08T7WAzzw',
            text: '健身格鬥者的天堂成吉思汗健身俱樂部進化綜合格鬥中心https://www.facebook.com/mmagym.tw?ref=bookmarks 惡名昭彰全新 ',
        },
        {
            title: '陳之漢- 维基百科，自由的百科全书',
            link: 'https://zh.wikipedia.org/zh-tw/陳之漢',
            text: '陳之漢（1979年3月12日－），原名陳思翰，臺灣知名部落客、直播主、網路名人、企業家、運動員、健身教練、散打武術家，曾任志願役軍人，後為連鎖健身房創辦人兼執行長、「中華民國健力協會」顧問、服飾品牌創辦人。生於臺北蘆洲（今新北市蘆洲區），籍貫宜蘭，人稱「館長」。',
        }
    ],
    "線上課程":[
        {
            title: '現代 JavaScript 職人之路｜入門篇',
            link: 'https://hiskio.com/courses/244',
            text: '現代 JavaScript 職人之路學程，明確的學程定位帶您往前端工程師的技術門檻前進！深厚的 JavaScript 觀念 + 大量的實戰講義 + 情境實作範例，唯一目標就是帶您取得前端工程師的入門券！',
        },
        {
            title: '現代 JavaScript 職人之路｜中階實戰篇',
            link: 'https://hiskio.com/courses/245',
            text: '您需要一位在業界打滾多年、在教學界經驗豐富又懂得如何帶您成長的導師，帶您從基礎起飛，成為進擊的前端工程師。',
        },
        {
            title: '職人必修的 RWD 網頁入門班',
            link: 'https://hahow.in/cr/responsive-design',
            text: '從零開始打好基礎建立觀念，帶入實作，用業界常常遇到的問題當舉例，教你如何解決很多因為行動裝置而產生破版，還有如何利用百分比的切版技巧來減少修改的時間',
        }
    ]
}

var tag = document.querySelectorAll('.tag')
var seach_list =  document.querySelector('.seach_list')
var seach =  document.querySelector('.seach')
var newcontent = ""
var seacharr= seachData['線上課程']


for(i=0;i<tag.length;i++){
tag[i].addEventListener("click", newclick2)
}

function newclick(){
    newcontent=""
    for(s=0;s<seacharr.length;s++){
        newcontent =  newcontent +  " <div class='item'><a href='javascript:;' target='_blank' class='title'>"+seacharr[s].title+"</a><a href='javascript:;' target='_blank' class='link'>"+seacharr[s].link+"</a><p>"+seacharr[s].text+"</p></div>"
        }

seach_list.innerHTML = newcontent
   
}
newclick()


function newclick2(){
    seacharr = seachData[this.innerText]
    seach.value = this.innerText

    newclick()
}

seach.addEventListener("keyup", function(){
    console.log(seachData[this.value])
    seacharr = seachData[this.value]
    if(seacharr === undefined){
        seacharr = []
    }
    newclick()
}) 



//return回傳値
function Data(i,s){
    console.log(i+s)
}

Data(2,1)


function Data2(i,s){
   return i+s
}

console.log(Data2(2,1))

//return 會停止



//Object.definePropert 資料和操控DOM拆開
//Object.defineProperty(物件名稱, 物件的key, get、set)
//會將物件的key刪掉

var data001={
    okmart: false
}

Object.defineProperty(data001,"okmart",{
    get:function(){
return okmart
    },
    set:function(value){
        okmart = value
console.log("set啟動")

    }
})
data001.okmart = false
console.log(data001.okmart)


//foreach範例
var data001 = [
    {
        idx: 1,
        name: "小豬",
        money: 12000,
        age: 12,
        sex: "boy"
    },
    {
        idx: 2,
        name: "小烏龜",
        money: 52000,
        age: 20,
        sex: "girl"
    },
    {
        idx: 3,
        name: "小鳥",
        money: 150,
        age: 16,
        sex: "boy"
    },
    {
        idx: 4,
        name: "小貓",
        money: 360000,
        age: 35,
        sex: "boy"
    },
    {
        idx: 5,
        name: "小狗",
        money: 650,
        age: 19,
        sex: "boy"
    },
    {
        idx: 6,
        name: "鱷魚",
        money: 9999,
        age: 40,
        sex: "girl"
    },
    {
        idx: 7,
        name: "龍蝦",
        money: 10,
        age: 2,
        sex: "girl"
    },
    {
        idx: 8,
        name: "海藻",
        money: 500,
        age: 30,
        sex: "boy"
    }
]



//以下為陣列的使用 [].foreach  [].filter
//都要-->[].foreach(function({obj}) ) 寫function然後要下參數
//this 只能放在監聽下的第一層。監聽裡的一個function裡面放this會指到window
//foreach是for迴圈的一種方式
//filter篩選，會產生出一個新的陣列，設條件搭配retrun
//every全部都符合條件才會會回傳true，設條件搭配return
//map組合，和foreach一樣會跑每個陣列的東西，但map可以下retrun(可以組合)，回傳一個新的陣列
var user_money =document.querySelector("#user_money")
var user_age =document.querySelector("#user_age")
var user_sex =document.querySelector("#user_sex")
var itemList =document.querySelector(".itemList")
var html00=""

function refreshgo(arr){
    html00=""
    arr.forEach(function(obj){
        html00 += "<ul class='tit2'><li>"+obj.name+"</li><li>"+obj.money+"</li><li>"+obj.age+"</li><li>"+obj.sex+"</li></ul>"
})
itemList.innerHTML=html00
}

refreshgo(data001)


function money0(value){
    var m= value
    var arr=[]
    // data001.forEach(function(obj){
    //  if(obj.money > m ){
    //      arr.push(obj)
    //     }
    // })
    arr=data001.filter(function(obj){
        return obj.money>m
    })
    
    refreshgo(arr)  
}
function user_age0(value){
    var m= value
    var arr=[]
    // data001.forEach(function(obj){
    //  if(obj.age> m ){
    //      arr.push(obj)
    //     }
    // })
    arr=data001.filter(function(obj){
        return obj.age> m
    })
    refreshgo(arr)  
}

function user_sex0(value){
    var m= value
    var arr=[]
    // data001.forEach(function(obj){
    //  if(obj.sex == m ){
    //      arr.push(obj)
    //     }
    // if(m == "no"){
    //     arr.push(obj)
    // }
    // })
    arr=data001.filter(function(obj){
        if(m == "no"){
               return obj
             }
        return obj.sex == m
    })
    refreshgo(arr)  
}


user_money.addEventListener("change",function(){
    money0(this.value)

})

user_age.addEventListener("change",function(){
    user_age0(this.value)
})
user_sex.addEventListener("change",function(){
    user_sex0(this.value)
})






//every
var how01 =document.getElementById("how01")
var how02 =document.getElementById("how02")
var how03 =document.getElementById("how03")
var howgo =document.getElementById("howgo")


function checkgo(){
    var everyhow =[
        how01,how02,how03
    ]
    var check=everyhow.every(function(obj){
     return obj.checked === true
    })
    howgo.disabled = !check

    console.log(check)
    console.log(howgo.disabled)
}

how01.addEventListener("change",checkgo)
how02.addEventListener("change",checkgo)
how03.addEventListener("change",checkgo)



//map
var host0=[
    {
        name:"本田",
        sex:"boy"
    },
    {
        name:"小慧",
        sex:"girl"
    },
     {
        name:"成之內",
        sex:"boy"
    }
]


var hostnew= host0.map(
    function(obj){
        return obj.name+ obj.sex
    }
)

console.log(hostnew)

hostnew.forEach(function(obj){
    console.log("我的名字叫"+obj)
}
)

//善用return做中斷-->if( ){.....OOOXXX return}


//////以下為字串進階處理////
//.trim()去除頭尾的空白
//.slice()切割 slice(0,8) //抓分割點的前面 //抓0~8這區間
//.indexOf("@") 找出字串@的位置，也可以應用在陣列
// .toLocaleLowerCase() //大寫轉小寫
// .toLocaleUpperCase() //小寫轉大寫
//.replace("要將什麼取代","取代的內容") 
//字串.split('')-->轉成陣列["","",""] (拆開一個字一個字的陣列)
//陣列.reverse() 陣列反轉 (裡面必須是["","","",""])
//陣列.join('')-->講陣列轉成字串


//去除頭尾的空白應用
var mikego = document.querySelector('.mikego')
var mikebutton = document.querySelector('.mikebutton')
mikebutton.addEventListener("click",function(){
    if(mikego.value.trim() === "mike"){
        alert("輸入成功喔")
    }
})


//字串分割應用
var myemail = "s1004717@gmail.com"
console.log(myemail.slice(0,8))  //s1004717  //抓分割點的前面  //抓0~8
console.log(myemail.slice(8))  //@gmail.com  //抓分割點的後面
console.log(myemail.indexOf("@"))  //8  //找出字串@的位置
console.log(myemail.slice(0,myemail.indexOf("@")))  //s1004717 //綜合應用:不管email的字串變化 永遠抓@前的數字


//字串轉大小寫應用
myemail.toLocaleLowerCase() //大寫轉小寫
myemail.toLocaleUpperCase() //小寫轉大寫


//陣列反轉應用
function rego(text){
    return text.split('').reverse().join('')
}
console.log("我是反轉後的結果:"+ rego("你好嗎"))


//字串取代應用
//正規表達式應用
console.log("你好嗎".replace("你","我")) //我好嗎
console.log("1995/05/06".replace("/","-").replace("/","-")) //1995-05-06
console.log("1995-05-06-08-09".replace(/-/g,"/")) //1995/05/06/08/09



//indexOf 陣列應用
var arrd=["小美","小明","大華"]
function callman(name){
    if(arrd.indexOf(name) == -1){
        return "找無此人"
    }else{
        return "他在喔!"
    }
}
console.log("他在嗎?",callman("小美22")) //他在嗎? 找無此人



//千分位逗點應用
//數值+""就可以變字串
function thound(num){
    var newarr= (num+"").split('')  
    var idx = 0
    var arrr=[]
    newarr.forEach(function(obj){
        idx++
        if(idx>3){
            idx = 1;
            arrr.push(",")
        }
        arrr.push(obj)
        console.log(idx)
       
    })
    console.log(arrr) //["1", "2", "3", ",", "5", "0", "0"]
    return arrr.join('')
}

console.log(thound(123500)) //123,500



//JOSN格式和一般陣列物件不同的地方: {"name":"mike"} -->1.name要用雙引號刮起來，2.還有全都得用雙引號不能用單引號。3.再來下面沒有值不能寫逗點
//axios非同步的一個工具
//https://github.com/axios/axios
//非同步就是有時要抓一個API要載入很久，不用等API全跑完才跑下面的程式，可以先跑下面的步驟
//https://mocky.io/ 模擬API
//回傳有分兩種格式 1.JOSN 2.FormData
//可以從network->XHR->點檔案->觀查response headers是哪一種格式

//JOSN
var obj0=
  {
        firstName: 'Fred',
         lastName: 'Flintstone'
   }
//Formdata  
var formdata =new FormData();

formdata.append("firstName","Fred")//Formdata丟值格式 key,值 
formdata.append("password","abc00000")//Formdata丟值格式 key,值 


console.log("測試1");

  axios.post('https://run.mocky.io/v3/d401d8d4-3dae-4052-9b02-2cb59b941961',formdata)//可以改成obj0，看network->XHR->點檔案->觀查response headers和request headers的差別
  .then(function (responsee) {
    console.log(responsee); //用console觀察responsee的結果
    console.log("測試2");
  })
  .catch(function (error) {
    console.log(error);
  });

console.log("測試3")


var city=[]
var cityhtml=""
var areahtml=""

axios.get("http://www.mocky.io/v2/5cc3f5723400005d00765480").then(function(res){
city=res.data.twzip.city
gocity(city)
changcity()
area(document.getElementById('city').value)
})




function gocity(city){
console.log(city)
city.forEach(function(obj){
    cityhtml+='<option value='+obj.name+'>'+obj.name+'</option>' 
    document.getElementById('city').innerHTML=cityhtml
})


}



function area(value){
    areahtml=""
   var newarea = city.filter(function(obj){
        return obj.name === value
                    })
                    console.log(newarea[0].area)

            
    newarea[0].area.forEach(function(occ){
    areahtml+='<option value='+occ.name+'>'+occ.name+'</option>' 
    document.getElementById('area').innerHTML=areahtml
  })

}

function changcity(){
    document.getElementById('city').addEventListener("change",function(e){
        console.log(city)
        area(this.value)

           
    })




}

//HTTP狀態碼噴500就不是你的問題

// 可以使用 https://cors-anywhere.herokuapp.com/{api url}
// 但是這只可以拿來測試，不可以真的拿來傳送敏感資料

var proxy = "https://cors-anywhere.herokuapp.com/";
var url = "https://www.vscinemas.com.tw/VsWeb/api/GetLstDicCinema";

axios.get(proxy+url)
.then(function(res){
console.log(res)
})
.catch(function(error){
console.log(error)
})