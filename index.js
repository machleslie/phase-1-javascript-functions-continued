function saturdayFun(name=`roller-skate`){
    return(`This Saturday, I want to ${name}!`);
}
function mondayWork(name=`go to the office`){
    return(`This Monday, I will ${name}.`)
}
function wrapAdjective(string=`*`){
    return function(name=`special`){
        return (`You are ${string}${name}${string}!`)
    }
    
}
