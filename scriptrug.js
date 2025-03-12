function makeUsername(length, includeNumbers, includeUnderscore) {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "1234567890";
    const underscore = "_";

    let allowedChars = "";
    let username = "";

    allowedChars += letters;
    allowedChars += includeNumbers ? numbers : "";
    allowedChars += includeUnderscore ? underscore : "";

    let usedUnderscore = 0;

    for (let i = 0; i < length; i++) {
        let random;

        if ((i == 0 || i == (length - 1)) && includeUnderscore) {
            random = Math.floor(Math.random() * (allowedChars.length - 1));
        } else if (usedUnderscore == 1) {
            random = Math.floor(Math.random() * (allowedChars.length - 1));
        } else {
            random = Math.floor(Math.random() * allowedChars.length);
        }

        if (allowedChars[random] == "_" && usedUnderscore == 0) {
            usedUnderscore += 1;
        }

        username += allowedChars[random];
    }

    return username;
}

let hasNumbers = true;
let hasUnderscore = true;

function noNumbers() {
    if (!document.getElementById("noNumbers").checked) {
        hasNumbers = true;
    } else {
        hasNumbers = false;
    }
}

function noUnderscore() {
    if (!document.getElementById("noUnderscore").checked) {
        hasUnderscore = true;
    } else {
        hasUnderscore = false;
    }
}

function generate(){
    let length = document.getElementById("input").value;
    let amount = 36 ** length + (length - 2) * (36 ** (length - 1));
    let table = ``;
    let text = ``;

    table += `<tr><th colspan="5">Usernames:</th></tr>`;

    if (length < 3 || length > 20) {
        table += `<tr><td>-</td></tr>`;

        text += `There are no Roblox usernames generated. Please input a number between 3 and 20!`;
        document.getElementById("caption").innerHTML = text;
        document.getElementById("caption").style.color = "red";
        document.getElementById("caption").style.fontWeight = "900";
    } else {
        for (let i = 0; i < 10; i++) {
            table += `<tr>`;
            for (let j = 0; j < 5; j++) {
                const username = makeUsername(length, hasNumbers, hasUnderscore);
                table += `<td>${username}</td>`;
            }
            table += `</tr>`;
        }

        text += `There are <b>${amount}</b> possible Roblox usernames that are ${length} characters long.`;
        document.getElementById("caption").innerHTML = text;
        document.getElementById("caption").style.color = "black";
        document.getElementById("caption").style.fontWeight = "200";
    }

    document.getElementById("username").innerHTML = table;
}
