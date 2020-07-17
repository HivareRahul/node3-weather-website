const request = require('request')

const geocode = (address, callback) => {

    const url = 'https://services.odata.org/V2/Northwind/Northwind.svc/Employees?$skip=0&$top=2&$select=EmployeeID,LastName,FirstName,Address,City,Region,PostalCode,Country,Title&$format=json'
    request({url, json:true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to location service !', undefined)
        }else if(error){
            callback('Unable to find location. Try another search.', undefined)
        }else{
            callback(undefined, {
                latitude: body.d[1].EmployeeID,
                longitude: body.d[1].EmployeeID,
                location: body.d[1].Country
            })
        }
    })

}

module.exports = geocode