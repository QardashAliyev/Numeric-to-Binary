function Ikilik(eded) {
    let bosluq = '';
    while (eded > 0) {
        let ededinYariQaligi = eded % 2;
        bosluq = ededinYariQaligi + bosluq;
        eded = Math.floor(eded / 2); 
        
       
    }
    console.log(bosluq);
}
Ikilik(24);
