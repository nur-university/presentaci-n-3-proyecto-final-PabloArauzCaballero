let square = function(x) {return x **2;} ;

console.log("funcion:", Array.from({length: 15}, (_,x) => square(x)).filter(x => x > 3 && x % 3 !=0));
