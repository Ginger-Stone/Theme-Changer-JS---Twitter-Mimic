const one = new Promise((resolve, reject)=>{
    resolve(' One Complete')
})
const two = new Promise((resolve, reject)=>{
    resolve(' Two Complete')
})
const three = new Promise((resolve, reject)=>{
    resolve(' Three Complete')
})

Promise.all([
    one,
    two,
    three
]).then((messages)=>{
    console.log(messages)
})

function parargs(length,width){
    function square(length){
        let area=length*length;
        let parameter=length*4;
        console.log(`Area: ${area}, Parameter: ${parameter}`)
    }
    function rectangle(length, width){
        area=length*width;
        parameter=2*(length+width);
        console.log(`Area: ${area}, Parameter: ${parameter}`)

    }

    return [square(length), rectangle(length,width)]
}

parargs(20,80);