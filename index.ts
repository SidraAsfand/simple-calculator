#! /usr/bin/env node
import inquirer  from  "inquirer";

const answers :{
    "NO1" :number;
    "NO2" :number;
    "operator" :string;
} = await inquirer.prompt([{
    type: "number",
    name: "NO1",
    message: "write your No1: "

},
{
    type: "number",
    name: "NO2",
    message: "write your No2: "

},
{
type: "list",
    name: "operator",
    message: "Select your  operator  ",
    choices:["Addition","subtraction","Multiplication","Division","Modulas"]

}
])
const {NO1,NO2,operator} =  answers
if (NO1 && NO2 && operator){
    let result :number =0;
    if(operator===`Addition`){
        result = NO1 +  NO2
    }
    else if(operator=== `subtraction`){
        result = NO1 -  NO2
    }
   else if(operator===`Multiplication`){
        result = NO1 *  NO2
    }
   else if(operator===`Division`){
        result = NO1 /  NO2
    }
    else if(operator===`Modulas`){
        result = NO1 %  NO2
    }
    console.log("YOUR result is:" + result)
}else{
    console.log("please select a valid operator")
}
