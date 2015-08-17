var app = angular.module('lesson7', ['ngAnimate']);

app.controller('RedditController', function ($scope) {
  $scope.posts = [
    {
      title: 'Beautiful Landscape',
      score: 3,
      author: 'Paul Cullen Rowe',
      imageUrl: 'http://digital-photography-school.com/wp-content/uploads/flickr/2746960560_8711acfc60_o.jpg',
      description: 'Great trip out to the beautiful lakes of wherever this is',
      timestamp: 1339590950665,
      comments: ['hey', 'awesome']
    },
    {
      title: 'Its a Bear!',
      score: 3,
      author: 'Jerry Garcia',
      imageUrl: 'http://www.defenders.org/sites/default/files/styles/large/public/grizzly-bear-harry-bosen-dpc.jpg',
      description: 'Hey look, it really is a bear.  And another bear.',
      timestamp: 1439190920665,
      comments: ['Great', 'Super', 'Fantastic', 'faaaaaaake']
    },
    {
      title: 'Dont worry, be happy!',
      score: 3,
      author: 'Meme Guy',
      imageUrl: 'http://www.potomacco.com/wp-content/uploads/2015/04/Be-Happy-2.gif',
      description: 'Life is awesome, dont let little blue balls ruin it for you',
      timestamp: 1439590950665,
      comments: []
    },
  ];
  $scope.sortby = "score";
  $scope.showcomments = false;
  $scope.showform = false;
  $scope.showcommentform = false;
  $scope.add = function () {
    var newGuy = {
      title: $scope.title,
      score: 0,
      author: $scope.author,
      imageUrl: $scope.imageUrl,
      description: $scope.description,
      timestamp: Date.now(),
      comments: []
    };
    $scope.posts.push(newGuy);
    $scope.showform = false;
    $scope.title = "";
    $scope.author = "";
    $scope.imageUrl = "";
    $scope.description = "";
  };
  $scope.upvote = function (post) {
    post.score++;
  };
  $scope.downvote = function (post) {
    post.score--;
  };
  $scope.postComment = function (post) {
    if (this.newComment) {
      post.comments.push(this.newComment);
      this.newComment="";
    }
  };
});

app.filter('fixDate', function () {
  return function (input) {
    return moment(input).fromNow();
  };
});
