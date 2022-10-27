window.onkeyup = keyup;
window.onload = loaded;

let isMobile = window.innerWidth < 480 || // check agent navigator
/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
// check with MediaQueryList  -  not  responsive for mobile ;c
window.matchMedia("only screen and (max-width: 480px)").matches;

const history = [];
const formatOptions = {
    weekday: 'long', 
    month: 'long', 
    day: '2-digit', 
    hour: '2-digit',
    hour12: false, 
    minute: '2-digit', 
    second: '2-digit', 
    year: 'numeric'
}
var historyPointer = 1;
var lastAccess = document.cookie;
if (!lastAccess) {
    lastAccess = new Date();
}

const motd = [
"<span id='highlight'>████████╗ ██╗  ██╗ ████████╗ ███╗   ██╗</span>",
"<span id='highlight'>╚══██╔══╝ ██║██╔═╝ ╚═════██║ ████╗████║</span>",
"<span id='highlight'>   ██║    ███╔═╝     ████ ╔╝ ██╔███╗██║</span>",
"<span id='highlight'>   ██║    ██╔██╗   ██ ╔═══╝  ██║╚═╝║██║</span>",
"<span id='highlight'>   ██║    ██║  ██╗ ████████╗ ██║   ║██║</span>",
"<span id='highlight'>   ╚═╝    ╚═╝  ╚═╝ ╚═══════╝ ╚═╝   ╚══╝</span>",
"<br>",
"<span class='typewriter'>Último acesso: " + new Intl.DateTimeFormat('br-BR', formatOptions).format(Date.parse(lastAccess)) + "</span><br>",
"<span class='typewriter' id='command'>Digite 'help' para ver todos os comandos </span><br>"
];
var isPrinting = false;

function loaded() {
    if (isMobile) {
        $('#output').html("<span id='highlight'>Este terminal atualmente não é suportado em dispositivos móveis.</span>");
        $('#user').remove();
    } else {
        document.cookie = new Date();
        printOut(motd, 0, 80); // highlight output
        document.getElementById("input").focus()
    }
}

function keyup(e) {
    document.getElementById("input").focus()
    var input = e.target.value.replace(/</g, "&lt;").replace(/>/g, "&gt;").split(/(\s+)/);
    if (input.length == 0 || isPrinting || isMobile) return;
    var first = input[0];
    // command history (arrow-up)
    if (e.keyCode == 38) {
        var element = history.length - historyPointer - 1;
        if (history[element]) {
            $('#input').val(history[element]);
            historyPointer++;
        }
    // check command (enter)
    } else if (first && first !== "") {
        if (e.keyCode == 13) {
            history.push(e.target.value);
            historyPointer = 0;
            $('#output').append("<span id='user'>user@tkzm.xyz:~$</span> " + e.target.value + "<br>");
            $('#input').val('');
            checkInput(input);
            $('html,body').animate({scrollTop: document.body.scrollHeight},"fast");
        }
    }
}

function checkInput(input) {
    switch (input[0].toLowerCase()) // if user input SoBRe
     {
        case "help": 
            printOut(help, 0, 80);
        break;

        case "sobre":
            printOut(sobre, 0, 80);
        break;

        case "social":
            printOut(social, 0, 80);
        break;

        case "sites":
            printOut(sites, 0, 80);
        break;

        case "contato": 
            printOut(contato, 0, 80);
        break;

        case "sudo": 
        printOut(sudo, 0, 80);
        break;

        case "exp": 
        printOut(exp, 0, 80);
        break;

        case "motd":
            $('#output').append("<br>");
            printOut(motd, 0, 80);
        break;

        case "clear": 
            $('#output').html("");
        break;

        default: 
            $('#output').append("Comando \'<span id='command'>" + input[0] + "</span>\' não encontrado. Para listar os  comandos, digite '<span id='command'>help</span>'.<br><br>");
    }
}

// function to create the ordered render (like CLIs)
function printOut(arr, index, interval) { 
    if (index < arr.length) {
        isPrinting = true;
        $('#output').append(arr[index++] + "<br>");
        setTimeout(function() { printOut(arr, index, interval); }, interval)
    } else {
        isPrinting = false;
    }
}
