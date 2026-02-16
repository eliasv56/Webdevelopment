const namenFamilie = ['Elias' , 'Milan','Jonas','Zita','Bert'];
console.log(namenFamilie.length);
console.log(namenFamilie[0], namenFamilie[2], namenFamilie[4]);

const voegNaamToe = 'Rebecca'
namenFamilie.push(voegNaamToe);
console.log(namenFamilie);

let namenString = namenFamilie.join(' ');
console.log(namenString);
