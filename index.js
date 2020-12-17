const aescrypt = require('./lib/aescrpyt');
const fs = require('fs');
const key = "JhanzTechCyber";

const ovpnFile = fs.readFileSync('assets/Free_ID-HELPER-UAJY1.ovpn')

// console.log(aescrypt("JhanzTechCyber", ovpnFile).toString())

const assetsDir = fs.readdirSync('assets').filter(value => value.match(/\.ovpn$/) )

assetsDir.map(value => {
    fs.readFile(`assets/${value}`, (err, data) => {
        fs.writeFile(`output/${value}`, aescrypt.decrypt(key, data.toString()), err1 => {
            if (err1) throw err1;
            console.log(`output/${value} Created!`)
        })
    })
})