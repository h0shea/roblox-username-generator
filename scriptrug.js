let l = 0;

function lettersonly(){
    let checkBox = document.getElementById("lettersonly");
    if (checkBox.checked == true)   {
        l=10;
    } else {
        l=0;
    }
}

function generate(){
    let char = document.getElementById("input").value;
    if (isNaN(char) || char < 3 || char > 20) {
        let text = "";
        let table = "<tr><th>Usernames:</th></tr><tr><td>-</td></tr>";
        text += "<b>There are no Roblox usernames generated. Please input a number between 3 and 20!</b>";
        document.getElementById("caption").innerHTML = text;
        document.getElementById("caption").style.color = "red";
        document.getElementById("username").innerHTML = table;
    } else  {
        const LN = ["_", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        let structure = [];
        let list = "";
        let text = "";
        let amount = 36 ** char + (char - 2) * (36 ** (char - 1));
        let table = "<tr><th colspan=5>Usernames:</th></tr>";
        
        for (let i = 0; i < 20; i++) { // vertical
        for (let i = 0; i < 5; i++) { // horizontal
            let underscore = 0;
            for (let i = 0; i < char; i++) {
                let n = 0;
                let lnlength = LN.length - l;
                let random = LN[(Math.floor(Math.random()* (lnlength - underscore)) + underscore)];
                if (random == "_" && i == 0)  {
                    n=1;
                    random = LN[(Math.floor(Math.random()* (lnlength - n)) + n)];
                    n=0;
                } else if (random == "_" && i == char-1)  {
                    n=1;
                    random = LN[(Math.floor(Math.random()* (lnlength - n)) + n)];
                    n=0;
                } else if (random == "_")   {
                    underscore+=1;
                }
            
                structure.push(random);
            }

            list += "<td>" + structure.join("") + "</td>";
            structure = [];
        }

        table += "<tr>" + list + "</tr>";
        list = "";
        }
        
        document.getElementById("username").innerHTML = table;

        text += "There are <b>" + amount + "</b> possible Roblox usernames that are " + char + " characters long.";
        document.getElementById("caption").innerHTML = text;
        document.getElementById("caption").style.color = "black";
    }
}
