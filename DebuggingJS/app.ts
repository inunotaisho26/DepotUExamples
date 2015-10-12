(function(){
   
   this.rootVar = 'Root!!! Sudo me!'

   var myObject = {
       objectContext: 'On the object',
       myFunction: function(p) {

           return () => {
               log(p);
               log(this.objectContext);
           };
       }
   };
   
   var f = myObject.myFunction('Name!');
   
   f();
   
})();









function log(l) {
    console.log(l);
}
