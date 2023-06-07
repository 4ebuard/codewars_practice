function fakeBin(x){
    var z = x.split('')
    var bin = [];
    for (var i = 0; i < z.length; i++) {
        if (z[i] < 5) {
            bin.push(0)
        } else {
            bin.push(1)
        }
    }
    return bin.join("");
}