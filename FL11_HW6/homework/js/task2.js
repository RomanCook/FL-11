
let a,b,c,TypeTriangle;
a = +prompt('Please enter lenghf 1-st side of triangle',0);
b = +prompt('Please enter lenghf 2-nd side of triangle',0);
c = +prompt('Please enter lenghf 3-rd side of triangle',0);
if (a < 0 && b < 0 && c < 0 || a === null || b === null || c === null || isNaN(a) || isNaN(b) || isNaN(c)){
    console.log('For data', a, b, c,'Incorrect data');
    }else{
        if (a + b <= c || b + c <= a || a + c <= b){
            TypeTriangle = "Triangle doesn't exist";
        }else{
             if (a === b && b === c){
                TypeTriangle = 'Eequivalent triangle';
            }else{
                if(a === b || b === c || c === a){
                    TypeTriangle = 'Isosceles triangle';
                }else{
                    TypeTriangle = 'Normal triangle';
                }
            }
        }
    console.log(TypeTriangle);
}