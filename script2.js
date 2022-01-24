let prime = (function(arr) {
    let p= arr.filter( x => {
        let f=0;
        for(let i=1;i<=x;i++){
            if(x%i === 0)
                f++;
        }
        if(f == 2)
            return true;
        else    
            return false;    
    });
    return p;
})
console.log(prime);
