function receivesAFunction(cbfunction){
    cbfunction();
}
function returnsANamedFunction(){
    return(function timothy(){
        return('Hello, Timothy')
    })
}

function returnsAnAnonymousFunction(){
    return(function(){
        console.log('Hello Timothy');
    })
}