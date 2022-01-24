let string_arr = (function(starr) {
    for(let i=0;i<starr.length;i++){
        starr[i] = starr[i].replace(starr[i].charAt(0),starr[i].charAt(0).toUpperCase());
    }
    return starr;
})

console.log(string_arr)