for(i=1; i<=20;i++){
    if(i%3==0 && i%5==0){
        console.log(i, "Fizz Buzz");
    }else if(i%3==0){
        console.log(i,"fizz");
    }else if(i%5==0){
        console.log(i,"buzz")
    }
}