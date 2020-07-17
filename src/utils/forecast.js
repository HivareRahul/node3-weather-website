const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://services.odata.org/V2/Northwind/Northwind.svc/Employees?$skip=0&$top=2&$select=EmployeeID,LastName,FirstName,Address,City,Region,PostalCode,Country,Title&$format=json'
    request({url, json:true},(error, {body}) => {
        if (error) {
            callback('unable to connect weather service!', undefined)
        } else if(error) {
            callback('unable to find location', undefined)
        } else {            
            callback(undefined, body.d[1].Title + ' It is currently ' + body.d[1].EmployeeID + ' degrees out. This high today is ' + body.d[1].EmployeeID + ' with a low of ' + body.d[1].EmployeeID + '. There is a ' + body.d[1].EmployeeID + '% Chance of rain.')
        }
    })
}
 
module.exports = forecast