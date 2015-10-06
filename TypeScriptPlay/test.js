function greeter(n) {
    return "Hi " + n.firstName;
}
var n = {
    firstName: 'Matt',
    lastName: 'Landers'
};
console.log(greeter(n));
