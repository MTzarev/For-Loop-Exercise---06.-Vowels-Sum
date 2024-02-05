function vowelsSum (input) {
    let text = (input[0]);
    let sum = 0;
/*  a = 1
    e = 2
    i = 3
    o = 4
    u = 5 */
for (let i = 0; i<text.length; i ++){
let letter = text.charAt(i)
 if (letter === "a"){
    sum +=1;
 }else if (letter === "e"){
 sum +=2;
 }else if (letter === "i"){
    sum +=3;
 }else if (letter === "o"){
    sum +=4
 }else if (letter === "u"){
    sum +=5
 }
}
    console.log (sum);
}
vowelsSum (["Miroslav"]);