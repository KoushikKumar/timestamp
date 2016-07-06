'use strict';
(function () {
    var submitButton = document.querySelector('#submitButton');
    var urlInput = document.querySelector('#urlInput');
    var resultJson = document.querySelector('#resultJson');
    
   function ajaxRequest (method, url, callback) {
      var xmlhttp = new XMLHttpRequest();

      xmlhttp.onreadystatechange = function () {
         if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            callback(xmlhttp.response);
         }
      };

      xmlhttp.open(method, url, true);
      xmlhttp.send();
   }
   
   submitButton.addEventListener('click', function () {
       var url = urlInput.value;
        ajaxRequest('POST', url, function (data) {
            resultJson.style.display="block";
            resultJson.innerHTML=data;
            // alert(data);
          });
    }, false);
    
})();