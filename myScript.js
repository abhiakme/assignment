var Person1 = new Object()
    Person1.FirstName = "PF1",
    Person1.LastName = "PL1",
    Person1.OfficeAddress = "POA1"

    var Person2 = new Object()
    Person2.FirstName = "PF2",
    Person2.LastName = "PL2",
    Person2.OfficeAddress = "POA2"

    var Person3 = new Object()
    Person3.FirstName = "PF3",
    Person3.LastName = "PL3",
    Person3.OfficeAddress = "POA3"

function myFunction1() {
document.getElementById("p1").innerHTML ="FirstName:-" + Person1.FirstName + " LastName:-" + Person1.LastName + " OfficeAddress:-" + Person1.OfficeAddress;
}
function myFunction2() {
document.getElementById("p2").innerHTML ="FirstName:-" + Person2.FirstName + " LastName:-" + Person2.LastName + " OfficeAddress:-" + Person2.OfficeAddress;
}
function myFunction3() {
document.getElementById("p3").innerHTML ="FirstName:-" + Person3.FirstName + " LastName:-" + Person3.LastName + " OfficeAddress:-" + Person3.OfficeAddress;
}
    console.log("Person1:")
    console.log("FirstName: " + Person1.FirstName)
    console.log("LastName: " + Person1.LastName)
    console.log("OfficeAddress: " + Person1.OfficeAddress)

    console.log("Person2:")
    console.log("FirstName: " + Person2.FirstName)
    console.log("LastName: " + Person2.LastName)
    console.log("OfficeAddress: " + Person2.OfficeAddress)

    console.log("Person3:")
    console.log("FirstName: " + Person3.FirstName)
    console.log("LastName: " + Person3.LastName)
    console.log("OfficeAddress: " + Person3.OfficeAddress)