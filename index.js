const db = require('./db.js');
db.connect();

let data={
    name:'Ronit',
    age:10,
    profession:'Unknown Developer'
}
db.write(data);