var express  = require('express');
var app = express();
app.locals.pretty = true; //코드를 예쁘게 보이게 해줌.
app.set('view engine','pug');
app.set('views','./views'); //생략 가능, views가 디폴트 값.
app.use(express.static('public'));
//public이란 디렉토리를 정적인 파일이 위치하는 디렉토리로 설정

app.get('/template',function(req, res){
  res.render('temp',{time:Date(),_title:'Puge'}); // /views/temp.pug 를 rendering해서 화면에 나타나게함.
})

app.get('/route',function(req,res){
  res.send('Hello Router, <img src="/route.png">');
})


//사용자가 url(get방식)으로 접속했을 때
//get();
//get방식으로 들어온 사용자 중 홈페이지로 접속한 사용자 : get('/');
//get() -> 라우터 !!! 라우터가 하는 일 : 라우팅
app.get('/',function(req, res){//request, respon
  res.send('Hello home page');
});

app.get('/dynamic',function(req,res){
  var lis = '';
  for(var i=0; i<5; i++){
    lis = lis + '<li>coding</li>';
  }
  var time = Date();
  var output =  `
  <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title></title>
      </head>
      <body>
          Hello, Dynamic!
          <ul>
            ${lis}
          </ul>
          ${time}
      </body>
    </html>
  `;
  res.send(output);
})

app.get('/login',function(req,res){
  res.send('Login Pleade');
});
app.listen(3000, function(){
  //3000번 포트 listening, 성공시 callback함수 실행
  console.log('Connected 3000 port!');
});
