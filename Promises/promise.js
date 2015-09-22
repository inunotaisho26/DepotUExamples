function doLongRunningTask(data) {
	return new Promise(function(resolve, reject) {
		setTimeout(function(){
			resolve(data);
		}, 2000);
	});	
}

function $http(url){
  var core = {
    ajax : function (method, url, args) {
      var promise = new Promise( function (resolve, reject) {
        var client = new XMLHttpRequest();
        var uri = url;

        if (args && (method === 'POST' || method === 'PUT')) {
          uri += '?';
          var argcount = 0;
          for (var key in args) {
            if (args.hasOwnProperty(key)) {
              if (argcount++) {
                uri += '&';
              }
              uri += encodeURIComponent(key) + '=' + encodeURIComponent(args[key]);
            }
          }
        }

        client.open(method, uri);
        client.send();

        client.onload = function () {
          if (this.status == 200) {
            resolve(this.response);
          } else {
            reject(this.statusText);
          }
        };
        client.onerror = function () {
          reject(this.statusText);
        };
      });
      return promise;
    }
  };

  // Adapter pattern
  return {
    'get' : function(args) {
      return core.ajax('GET', url, args);
    },
    'post' : function(args) {
      return core.ajax('POST', url, args);
    },
    'put' : function(args) {
      return core.ajax('PUT', url, args);
    },
    'delete' : function(args) {
      return core.ajax('DELETE', url, args);
    }
  };
};

doLongRunningTask('start').then(function(result){
	console.log(result);
	return 'morestuff';
}).then(function(result) {
	console.log(result);
});

$http('http://localhost:3000/data.json').get().then(function(result){
  var ul = document.querySelector('.people');
  result = JSON.parse(result);
  result.forEach(function(item){
    var li = document.createElement('li');
    li.textContent = item.name + ' - ' + item.type;
    ul.appendChild(li);
  });
}).catch(function(err) {
  console.log('Error: ' + err);
});