function PostsController(n,t){!function o(){t.fetch().then(function(t){n.posts=t.data?t.data:[]},function(t){});n.addPost=function(){n.body&&t.create({username:"sampleUser",body:n.body}).then(function(t){n.posts.unshift(t.data),n.body=null},function(t){console.log(t)})};n.removePost=function(){t.remove({id:this.post._id}).then(function(t){o()},function(t){console.log(t)})}}()}PostsController.$inject=["$scope","PostsService"],angular.module("app",[]),angular.module("app").controller("PostsController",PostsController),angular.module("app").service("PostsService",["$http",function(o){this.fetch=function(){return o({method:"GET",url:"http://localhost:3000/api/posts"})},this.create=function(t){return o({url:"/api/posts",method:"POST",data:t})},this.remove=function(t){return o({url:"/api/removePost",method:"POST",data:t})}}]);