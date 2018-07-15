var rs = require('readline-sync');

var num1 = parseFloat(rs.question("Please Enter 1st Number: "));
if(!num1){
    num1=parseFloat(rs.question("Please Enter a number to proceed: "));
}else{
    var num2 = parseFloat(rs.question("Please Enter 2nd Number: "));
    if(!num2){
        num1=parseFloat(rs.question("Please Enter2nd number to proceed: "));
    } else{
        var operator = rs.question("Please Enter the operator for operation : (/,*,+,-) " );
        if(!operator){
            operator = rs.question("Please Enter an operato to proceed: ");
        } else if(operator === "*"){
                console.log("The result is",(num1*num2));
            }
        else if(operator === "+"){
                console.log("The result is",(num1+num2));
            }
        else if(operator === "/"){
                console.log("The result is",(num1/num2));
            }
        else if(operator === "-"){
                console.log("The result is",(num1-num2));
            }
        }
    }
