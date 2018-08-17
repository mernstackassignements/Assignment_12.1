/// Javascript code 

let number = 0;

counterReducer = function(counter,actionType){
    switch(actionType){
        case 'INC' : 
            return counter +1;
        case 'DEC': 
            return counter -1;
    }
}

Increment = function(){
    number = counterReducer(number,'INC');
    document.getElementById('display').innerHTML = 'Counter : ' + number;
}

Decrement = function(){
    number = counterReducer(number,'DEC');
    document.getElementById('display').innerHTML = 'Counter : ' +number;
}