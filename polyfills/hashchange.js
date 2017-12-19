(function() {
    if(!("onhashchange" in window)) {
        var prevHash = window.location.hash;

        window.setInterval(function () {
           if (window.location.hash != prevHash) {
              prevHash = window.location.hash;

              var myEvent = document.createEvent('Event');
              myEvent.initEvent("hashchange", true, true);

              window.dispatchEvent(myEvent);
           }
       }, 500);
    }
})();
