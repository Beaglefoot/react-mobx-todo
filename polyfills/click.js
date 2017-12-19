(function() {
    if(typeof HTMLElement.prototype.click == "undefined") {
        HTMLElement.prototype.click = function() {
            var click = document.createEvent("MouseEvent");
            click.initMouseEvent("click", true, true, window,0, 0, 0, 0, 0, false, false, false, false, 0, null);
            this.dispatchEvent(click);
        }
    }
})();
