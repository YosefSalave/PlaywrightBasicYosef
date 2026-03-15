//True
if("hello") console.log("String is truthy");
if(42) console.log("Number is truthy");
if({}) console.log("Empty object is truthy");
if([]) console.log("Empty array is truthy");

//Falsy
if("") console.log("Wont print") ;// cant print
if(null) console.log("Wont print") ;// cant print
if(undefined) console.log("Wont print") ;// cant print
if(NaN) console.log("Wont print") ;// cant print
if(0) console.log("Wont print") ;// cant print

