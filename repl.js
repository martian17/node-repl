let files = process.argv.slice(2);

let repl = require("repl");


const { Readable, Writable } = require('stream'); 

const rs = new Readable({
    read() {}
});
const ws = new Writable({
    write() {}
});
let r2 = repl.start({
    prompt: "",
    input: rs,
    output: ws,
    useGlobal: true
});
for(let i = 0; i < files.length; i++){
    r2.write(`.load ${files[i]}\n`);
}

let r = repl.start({
    prompt:"> ",
    useGlobal:true,
    breakEvalOnSigint:true
});

if("NODE_REPL_HISTORY" in process.env && process.env.NODE_REPL_HISTORY !== "")r.setupHistory(process.env.NODE_REPL_HISTORY,()=>{});


