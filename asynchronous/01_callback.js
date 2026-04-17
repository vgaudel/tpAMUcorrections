let stdin = process.stdin;
let stdout = process.stdout;

function ask(question, callback){
    stdin.resume();
    stdout.write(question + ": ");
    stdin.once('data', (data) => {
        data = data.toString().trim();
        callback(data);
    })
}

ask("x", (valX)=> {
    let x = Number(valX);
    ask("y", (valY) => {
        let y = Number(valY);
        let res = x+y;
        console.log("res => (x+y)="+res);
        process.exit();
    })
})