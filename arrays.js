a=[1,2,3,4,5]
b=[12,12,12,12]
function check123(params){
    let max=0;
    
    for(i=1; i<=params.length ;i++){
        if(params[i]>max)
            max=params[i];

    }

    console.log(max, i);

}
check123(b);
check123(a);
