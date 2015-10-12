(function () {
    this.rootVar = 'Root!!! Sudo me!';
    var myObject = {
        objectContext: 'On the object',
        myFunction: function (p) {
            var _this = this;
            return function () {
                log(p);
                log(_this.objectContext);
            };
        }
    };
    var f = myObject.myFunction('Name!');
    f();
})();
function log(l) {
    console.log(l);
}
