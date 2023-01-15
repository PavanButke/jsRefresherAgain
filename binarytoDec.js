let decimal=5;

function changeToBinary(decimal){

    let binary=0;
    let placeHolder=1;
    while(decimal>0){
        let rem= decimal%2;
        binary= binary+ rem*placeHolder;
        placeHolder= placeHolder*10;
        decimal= Math.floor(decimal/2);

    }
    return binary;
}
console.log(changeToBinary(decimal));