/**
 * appends the string 'World' to the value of `this`
 * @param  {String} str
 * @return {String}
 */
// this works, but I had to change the function this to this.str...:
 var str = "Hello ";
 function appendWorldToThis(){
    return this + 'World';
}
console.log(appendWorldToThis(str));

// var obj = { bar : function() {
//                     var x = (() => this);
//                     return x;
//                   }
//           };
// tried some things.  ^ 'arrow function syntax (=>)' is only available in ES6 (use esnext option).
