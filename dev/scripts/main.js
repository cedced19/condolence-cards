angular.module('CondolenceCards', ['ngCookies'])
.controller('CondolenceCardsCtrl', ['$scope', '$cookieStore', function($scope, $cookieStore) {
        $scope.result = '';
        $scope.config = {
            uri: 'http://cedced19.github.io/condolence-cards/cards.html#',
            sentence:'Sorry...'
        };
        
            
        $scope.compile = function(){
            $cookieStore.put('sentence', $scope.config.sentence);
            $scope.result = $scope.config.uri + $scope.config.sentence.replace(/ /g, '%20').replace(/ë/g, '%C3%AB');
        }
       
        if($cookieStore.get('sentence') != undefined){
            $scope.config.sentence = $cookieStore.get('sentence');
        }
    
        $scope.compile(); 
}])