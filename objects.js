console.log("jsonObjects")

let person={
    "name":"Frank",
    "age":22,
    "city":"Lagos"
}
console.log(person.age)
console.log(person["city"])

// add properties
person["location"]="surulere"
console.log(person)
// add an array of skills
person["skills"]=["html", "js",[20,30,40], "css"]
console.log(person["skills"][2])
console.log(person["skills"][2][2])

// modifying/updating  values
person['name']="Micah"
console.log (person)

// methods
   // keys method => used to display all keys in an objectFit: 
   console.log (object.keys(person))
// values => used to display all values in an objectFit:
console.log (object.values(person))
//
console.log(object.entries (person)) 

