/*We are using IIFE(immediately invoked function expression ) expression which is 
(function(){})();
now this function will load immediately as webpage loads. 
and we are using "use strict"; to show error for accidental global variables.
*/
 ( function(){
    const btn = document.querySelector('button');
    btn.addEventListener('click', () => {
        document.querySelector('#text1').style = "color: green;";
    })
})();