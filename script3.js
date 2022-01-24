let palindromes_arr = (function(starr) {
    let p = starr.filter( x =>{
        let flag= true;
        for(let i=0,j=x.length-1; i<=j ; i++,j--){
            if(x.charAt(i).toLowerCase() !== x.charAt(j).toLowerCase()){
                flag=false;
                break;
            }            
        }
        if(flag)
            return true;
        else
            return false;    
    });
    return p;
})
console.log(palindromes_arr);