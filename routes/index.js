
/*
 * GET home page.
 */

module.exports = function(app){
  app.get('/',function(req,res){
  res.render('login', { title: '登录' });
 });
  
  app.get('/home',function(req,res){
	res.render('home', { title: '主页' });
	});
};//end function(app)