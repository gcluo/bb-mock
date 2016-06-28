var express = require('express');
var app = express();

var middleware = function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
}

app.use(middleware);

app.get('/getInfos', function(req, res){
  var data = {
    news: [
      {
        title: 'theone',
        arts: ['name1', 'nam2', 'sfg', 'gdfljgl']
      },
      {
        title: 'thetwo',
        arts: ['fghjd', 'xzvc', 'asd', 'uio']
      },
      {
        title: 'thethr',
        arts: ['wert', 'namertuyht2', 'sdf', 'gdfjhgkljgl']
      }
    ]
  };
});

app.get('/message', function(req, res){
  var data = [{
    'time': '2015-5-26',
    'message': 'asdlkgh',
    'from': '来源：财新TMT'
  },{
    'time': '2015-5-26',
    'message': '百度罪与罚',
    'from': '来源：第一财经周刊'
  },{
    'time': '2015-5-26',
    'message': '百度的原罪搜索引擎还有怎样盈利',
    'from': '商学院'
  }];
  // res.json(data)
  setTimeout(function(){res.json(data)}, 2000);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
