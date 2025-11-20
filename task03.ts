// TODO-03: Write if/else if to print:
// Password < 6 chars → "Too short" (pass)
// 6–10 chars → "Moderate" (pass123)
// 11+ chars → "Strong" (pass1234567)

const password = "pass123";
const len = password.length;
if (len <6) {
    console.log("Too short");
} else if (len >=6 && len<=10) {
    console.log ("Moderate");
} else {
    console.log ("Strong");
}


// solution
// if (len <6) {
//     console.log("Too short");
// } else if (len <= 10) {
//     console.log ("Moderate");
// } else {
//     console.log ("Strong");
// }