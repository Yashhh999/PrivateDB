const db = require('./db.js');
db.connect();

let data={
    name:'Ronit',
    age:10,
    profession:'Unknown Developer'
}
const d = db.find('name','Ronit');
db.edit('name','John','Yash')