let stdin = process.stdin;
let stdout = process.stdout;

function ask_(question){
    return new Promise ((resolve, reject)=>{
        stdin.resume();
        stdout.write(question+ ": ");
        stdin.once('data', (data) =>{
            data = data.toString().trim();
            if(data=="fin")
                reject("end/reject");
            else    
                resolve(data);
        });
    });
}

let x,y,z;

ask_("x")
    .then((valX)=>{x=Number(valX); return ask_("y");})
    .then((valY)=>{y=Number(valY); 
        let res = x+y;
        console.log("(x+y)=" + res);
        return ask_("z");})
    .then((valZ)=>{z=Number(valZ); 
        let res = (x+y)*z;
        console.log("(x+y)*z=" + res);
        process.exit();})
    .catch((err)=>{console.log(err);process.exit()});