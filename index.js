const fs = require('fs');
const path = './db.json';

const db = {
    connect: function () {
        if(fs.existsSync('./.gitignore')) {
            fs.writeFileSync('./.gitignore', 'db.json', 'utf8');
        }
        if (fs.existsSync(path)) {
            console.log('Connected to database');
        } else {
            console.log('Initiallized database connection');
            fs.writeFileSync(path, '[ {} ]', 'utf8');
        }
    },

    write: function (Data) {
        let existingData = [];

        if (fs.existsSync(path)) {
            let fileData = JSON.parse(fs.readFileSync(path));

            if (Array.isArray(fileData)) {
                existingData = fileData;
            } else {
                existingData = [fileData];
            }
        }

        existingData.push(Data);

        let jsonData = JSON.stringify(existingData, null, 2);

        fs.writeFileSync(path, jsonData);


        console.log('Data written successfully');
    },

    find: function(variable, value) {
        let existingData = [];
            if(fs.existsSync(path)) {
            let fileData = JSON.parse(fs.readFileSync(path));
            if (Array.isArray(fileData)) {
                existingData = fileData;
            } else {
                existingData = [fileData];
            }
        }
        const result = existingData.find(item => item[variable] === value);
        return result;
    },

    findAll: function(variable, value) {
        let existingData = [];
            if(fs.existsSync(path)) {
            let fileData = JSON.parse(fs.readFileSync(path));
            if (Array.isArray(fileData)) {
                existingData = fileData;
            } else {
                existingData = [fileData];
            }
        }
        const results = existingData.filter(item => item[variable] === value);
        return results;
    },

    edit: function(variable, oldValue, newValue) {
        let existingData = [];
            if(fs.existsSync(path)) {
            let fileData = JSON.parse(fs.readFileSync(path));
            if (Array.isArray(fileData)) {
                existingData = fileData;
            } else {
                existingData = [fileData];
            }
        }
        const item = existingData.find(item => item[variable] === oldValue);
        if (item) {
            item[variable] = newValue;
            let jsonData = JSON.stringify(existingData, null, 2);
            fs.writeFileSync(path, jsonData);
            console.log('Data updated successfully');
        } else {
            console.log(`Error: Item with ${variable} "${oldValue}" not found.`);
        }
    }

};

module.exports = db;