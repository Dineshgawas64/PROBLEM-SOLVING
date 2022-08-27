let range = {
    from: 1,
    to: 5,

    [symbol.iterator](){
        return {
            current: this.from,
            last: this.to,

            next(){
                if(this.current <= this.last){
                    return(done:false, value: this.current++);
                }
                else{
                    return(done:true);
                }
            }
        };
    }
};

console.log([...range]);