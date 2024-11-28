// punchy
let c = 0;
let audio = new Audio();

function button() {
    john();
}

function john() {
    c++;
}

function dialogue(sprite, speed, text) {
    let dialogue = document.getElementById("dialogue");
    let element = document.getElementById("talk");
    dialogue.innerHTML = "";
    for (let i = 0;i < element.children.length; i++) {
        element.children[i].setAttribute('disabled', 'disabled');
    }
    let s = 0;
    for(s in text) {
        setTimeout(display, s * speed, s, text);
    }
    for (let i = 0;i < document.getElementById("talk").children.length; i++) {
        setTimeout(function a(button) {button.removeAttribute("disabled");}, s * speed, element.children[i]);
    }
}

function display(s, text) {
    let dialogue = document.getElementById("dialogue");
    dialogue.innerHTML += text.charAt(s);
    try {
        audio = new Audio("animalese/" + text.charAt(s).toLowerCase() + ".aac");
        audio.playbackRate = 2.5;
        audio.volume = 0.7;
        audio.play();
    }
    catch(e) {
        alert(e);
    }

}

function punchy_alert() {
    if (!confirm("Hey there\nThis page isn't done yet!")) {
        history.back();
    }
    else {
        alert("Feel free to look around, then");
    }
}

// lemonade cat clicker game
// stats
let lem = 0;
let lem_employee = 0;
let lem_gen = 0;
let lem_tree = 0;
let lem_juicer = 0;
let lem_factory = 0;
let lem_spells = 0;
let lem_portal = 0;
let is_won = false;
let tax = 0;
// costs
let hire_cost = 200;
let hire_mult = 1.2;
let lemonade_cost = 50;
let lemonade_mult = 1.2;
let tree_cost = 5000;
let tree_mult = 1.3;
let juicer_cost = 10000;
let juicer_mult = 1.3;
let factory_cost = 200000;
let factory_mult = 1.4;
let spells_cost = 500000;
let spells_mult = 1.4;
let portal_cost = 2000000;
let portal_mult = 1.5;
// sound effects
let click = new Audio("sfx\\enter.aac");
let buy_employee_sfx = new Audio("sfx\\dollar.aac");
let nya = new Audio("Lemonade_Cat_Nyaa.mp3");
let boowomp = new Audio("boowomp.mp3");
let buy_tree_sfx = new Audio("sfx\\tilde.aac");
let buy_factory_sfx = new Audio("sfx\\pound.aac");
let buy_spells_sfx = new Audio("sfx\\at.aac");
let buy_portal_sfx = new Audio("sfx\\question.aac");
let splat = new Audio("sfx\\splat.mp3");
// HTML store items
let store = document.getElementById("store_message");
let lemonade_button = document.getElementById("lemonade_button");
let hire_button = document.getElementById("hire_button");
let tree_button = document.getElementById("tree_button");
let juicer_button = document.getElementById("juicer_button");
let factory_button = document.getElementById("factory_button");
let spells_button = document.getElementById("spells_button");
let portal_button = document.getElementById("portal_button");
// tax cat :3
let tax_cat = document.getElementById("tax_cat");


function display_number(number) {
    let displayed_number = number;
    let unit = "";
    if (displayed_number > 1000000000) {
        displayed_number /= 1000000000;
        displayed_number = displayed_number.toFixed(2);
        unit = "B";
    }
    else if (displayed_number > 1000000) {
        displayed_number /= 1000000;
        displayed_number = displayed_number.toFixed(2);
        unit = "M";
    }
    else if (displayed_number > 1000) {
        displayed_number /= 1000;
        displayed_number = displayed_number.toFixed(2);
        unit = "K";
    }
    return `${displayed_number}${unit}`; 
}

function clicker() {
    addLems(lem_gen + 1 + lem_juicer * 25 + lem_spells * 10000);
    click = new Audio("sfx\\enter.aac");
    click.playbackRate = Math.random() * 1.5 + 0.5;
    click.preservesPitch = false;
    click.play();
}

function play_nya() {
    if (Math.random() <= 0.5) {
        nya = new Audio("Lemonade_Cat_Nyaa.mp3");
    }
    else {
        nya = new Audio("Lemonade_Cat_Nyaa_2.mp3");
    }
    nya.play();
}

// buy lemonade button
function buy_lemonade() {
    if (lem >= Math.floor(lemonade_cost * lemonade_mult ** lem_gen)) {
        addLems(-Math.floor(lemonade_cost * lemonade_mult ** lem_gen));
        lem_gen += 1;
        lemonade_button.innerHTML = `${display_number(Math.floor(lemonade_cost * lemonade_mult ** lem_gen))} | Make lemonade 🍋`;
        localStorage.setItem("lem_gen",lem_gen);
        if (Math.random() <= 0.5) {
            nya = new Audio("Lemonade_Cat_Nyaa.mp3");
        }
        else {
            nya = new Audio("Lemonade_Cat_Nyaa_2.mp3");
        }
        nya.play();
        store_alert_message("Fresh lemonade!");
        update_display();
    }
    else {
        store_alert_message("Not enough lemons!");
    }
}

function buy_lemonade_info() {
    store_message(`Make lemonade with the lemons!
        <br>Lemonade Cat will get a new lemon generator for each successful lemonade sale!
        <br>(+1 lemon per click)`);
}

// hire employee button
function buy_employee() {
    if (lem >= Math.floor(hire_cost * hire_mult ** lem_employee)) {
        addLems(-Math.floor(hire_cost * hire_mult ** lem_employee));
        lem_employee += 1;
        buy_employee_sfx = new Audio("sfx\\dollar.aac");
        buy_employee_sfx.play();
        hire_button.innerHTML = `${display_number(Math.floor(hire_cost * hire_mult ** lem_employee))} | Hire lemon employee 🍋💼`;
        localStorage.setItem("lem_employee",lem_employee);
        store_alert_message("More employees means more lemons!");
        update_display();
    }
    else {
        store_alert_message("Not enough lemons!");
    }
}

function buy_employee_info() {
    store_message(`Hire employees to help Lemonade Cat make even more lemons!
        <br>The employees will generator lemons periodically.
        <br>(+2 lemon per second)`);
}

// play boowomp sound button
function buy_boowomp() {
    if (lem >= 10) {
        addLems(-10);
        let boowomp = new Audio("boowomp.mp3");
        boowomp.play()
        store_alert_message("boowomp");
    }
    else {
        store_alert_message("no boowomp for you");
    }
}

function buy_boowomp_info() {
    store_message("Play a funny boowomp noise<br>Perfect for when you have more lemons than you can spend!");
}

// buy lemon tree button
function buy_tree() {
    if (lem >= Math.floor(tree_cost * tree_mult ** lem_tree)) {
        addLems(-Math.floor(tree_cost * tree_mult ** lem_tree));
        lem_tree += 1;
        buy_tree_sfx = new Audio("sfx\\tilde.aac");
        buy_tree_sfx.play();
        tree_button.innerHTML = `${display_number(Math.floor(tree_cost * tree_mult ** lem_tree))} | Grow a lemon tree 🍋🌳`;
        localStorage.setItem("lem_tree",lem_tree);
        store_alert_message("100% natural lemons!");
        update_display();
    }
    else {
        store_alert_message("Not enough lemons!");
    }
}

function buy_tree_info() {
    store_message(`Grow a lemon tree!
        <br>Lemons actually grow on trees!
        <br>(+50 lemon per second)`);
}


// buy juicer button
function buy_juicer() {
    if (lem >= Math.floor(juicer_cost * juicer_mult ** lem_juicer)) {
        addLems(-Math.floor(juicer_cost * juicer_mult ** lem_juicer));
        lem_juicer += 1;
        juicer_button.innerHTML = `${display_number(Math.floor(juicer_cost * juicer_mult ** lem_juicer))} | Get a juicer 🍋⚙️`;
        localStorage.setItem("lem_juicer",lem_juicer);
        if (Math.random() <= 0.5) {
            nya = new Audio("Lemonade_Cat_Nyaa.mp3");
        }
        else {
            nya = new Audio("Lemonade_Cat_Nyaa_2.mp3");
        }
        nya.play();
        store_alert_message("Juicy lemonade!");
        update_display();
    }
    else {
        store_alert_message("Not enough lemons!");
    }
}

function buy_juicer_info() {
    store_message(`Juicers are more effective!
        <br>Lemonade Cat invests in the latest juicing technology!
        <br>(+25 lemon per click)`);
}

// buy lemon factory button
function buy_factory() {
    if (lem >= Math.floor(factory_cost * factory_mult ** lem_factory)) {
        addLems(-Math.floor(factory_cost * factory_mult ** lem_factory));
        lem_factory += 1;
        buy_factory_sfx = new Audio("sfx\\tilde.aac");
        buy_factory_sfx.play();
        factory_button.innerHTML = `${display_number(Math.floor(factory_cost * factory_mult ** lem_factory))} | Build lemon factory 🍋🏭`;
        localStorage.setItem("lem_factory",lem_factory);
        store_alert_message("Autonomous lemons!");
        update_display();
    }
    else {
        store_alert_message("Not enough lemons!");
    }
}

function buy_factory_info() {
    store_message(`It's never enough lemons!
        <br>Build factories and automate lemon production!
        <br>(+1K lemon per second)`);
}

// buy lemonade spells button
function buy_spells() {
    if (lem >= Math.floor(spells_cost * spells_mult ** lem_spells)) {
        addLems(-Math.floor(spells_cost * spells_mult ** lem_spells));
        lem_spells += 1;
        spells_button.innerHTML = `${display_number(Math.floor(spells_cost * spells_mult ** lem_spells))} | Lemonade spells 🍋🪄`;
        localStorage.setItem("lem_spells",lem_spells);
        if (Math.random() <= 0.5) {
            nya = new Audio("Lemonade_Cat_Nyaa.mp3");
        }
        else {
            nya = new Audio("Lemonade_Cat_Nyaa_2.mp3");
        }
        nya.play();
        buy_spells_sfx = new Audio("sfx\\at.aac");
        buy_spells_sfx.play();
        store_alert_message("Who needs wizard with dark magic like these!");
        update_display();
    }
    else {
        store_alert_message("Not enough lemons!");
    }
}

function buy_spells_info() {
    store_message(`Conjure up magical lemons with wizardry!
        <br>Lemonade Cat studies the dark arts for even more lemons!
        <br>(+10K lemon per click)`);
}

// buy lemon portal button
function buy_portal() {
    if (lem >= Math.floor(portal_cost * portal_mult ** lem_portal)) {
        addLems(-Math.floor(portal_cost * portal_mult ** lem_portal));
        lem_portal += 1;
        buy_portal_sfx = new Audio("sfx\\question.aac");
        buy_portal_sfx.play();
        portal_button.innerHTML = `${display_number(Math.floor(portal_cost * portal_mult ** lem_portal))} | Open a lemon portal?? 🍋♾️`;
        localStorage.setItem("lem_portal",lem_portal);
        store_alert_message("Lemons from another dimension are just as good as lemons here!");
        update_display();
    }
    else {
        store_alert_message("Not enough lemons!");
    }
}

function buy_portal_info() {
    store_message(`Lemonade cat got scientist to build portals for more lemons!
        <br>Don't let Cave find out, though!
        <br>(+200K lemon per second)`);
}

// the win button
function buy_win() {
    if (lem >= 1000000000) {
        addLems(-1000000000);
        let win_sfx = new Audio("sfx\\win31.mp3");
        win_sfx.play();
        document.getElementById("win_button").disabled = true;
        is_won = true;
        localStorage.setItem("is_won",true);
        store_alert_message("THE BILLION LEMONS!!!!!!");
        setTimeout(win,1000);
    }
    else {
        store_alert_message("You are not there yet!");
    }
}

function buy_win_info() {
    if (document.getElementById("win_button").disabled != true) {
        store_message(`The ultimate goal!
            <br>Help Lemonade Cat achieve her dream of the billion lemons!
            <br>There may be something special for you!`);
    }
    else {
        store_message(`Lemonade cat is forever thankful!
            <br>Don't forget to drop by later for that special thing!`);
    } 
}

// autoclickers
function lem_work() {
    if (lem_employee > 0) {
        addLems(1);
        setTimeout(lem_work,500/lem_employee);
    }
    else {
        setTimeout(lem_work,500);
    }
}

function lem_grow() {
    if (lem_tree > 0) {
        addLems(1);
        setTimeout(lem_grow,20 / lem_tree);
    }
    else {
        setTimeout(lem_grow,500);
    }
}

function lem_produce() {
    if (lem_factory > 0) {
        addLems(100);
        setTimeout(lem_produce,100 / lem_factory);
    }
    else {
        setTimeout(lem_produce,500);
    }
}

function lem_summon() {
    if (lem_portal > 0) {
        addLems(10000);
        setTimeout(lem_summon,50 / lem_portal);
    }
    else {
        setTimeout(lem_summon,500);
    }
}

// increase/decrease the amount of lemons and update the count
function addLems(lems) {
    lem += lems;
    update_lem();
}

// set the store message
let message_timer;
let default_message = "Hover over an item for details!";
let current_message = default_message;


function store_alert_message(message) {
    store.innerHTML = message;
    clearTimeout(message_timer);
    message_timer = setTimeout(store_message, 2000, current_message);
}

function store_message(message) {
    current_message = message;
    store.innerHTML = current_message;
}

function store_reset_message() {
    clearTimeout(message_timer);
    store_message(default_message);
}

// load everything at page load
function load_lem() {
    // get id for all the store items
    store = document.getElementById("store_message");
    lemonade_button = document.getElementById("lemonade_button");
    hire_button = document.getElementById("hire_button");
    tree_button = document.getElementById("tree_button");
    juicer_button = document.getElementById("juicer_button");
    factory_button = document.getElementById("factory_button");
    spells_button = document.getElementById("spells_button");
    portal_button = document.getElementById("portal_button");
    // load variables
    lem = +localStorage.getItem("lem");
    lem_employee = +localStorage.getItem("lem_employee");
    lem_gen = +localStorage.getItem("lem_gen");
    lem_tree = +localStorage.getItem("lem_tree");
    lem_juicer = +localStorage.getItem("lem_juicer");
    lem_factory = +localStorage.getItem("lem_factory");
    lem_spells = +localStorage.getItem("lem_spells");
    lem_portal = +localStorage.getItem("lem_portal");
    is_won = localStorage.getItem("is_won");
    // load prices for store items
    lemonade_button.innerHTML = `${display_number(Math.floor(lemonade_cost * lemonade_mult ** lem_gen))} | Make lemonade 🍋`;
    hire_button.innerHTML = `${display_number(Math.floor(hire_cost * hire_mult ** lem_employee))} | Hire lemon employee 🍋💼`;
    tree_button.innerHTML = `${display_number(Math.floor(tree_cost * tree_mult ** lem_tree))} | Grow a lemon tree 🍋🌳`;
    juicer_button.innerHTML = `${display_number(Math.floor(juicer_cost * juicer_mult ** lem_juicer))} | Get a juicer 🍋⚙️`;
    factory_button.innerHTML = `${display_number(Math.floor(factory_cost * factory_mult ** lem_factory))} | Build lemon factory 🍋🏭`;
    spells_button.innerHTML = `${display_number(Math.floor(spells_cost * spells_mult ** lem_spells))} | Lemonade spells 🍋🪄`;
    portal_button.innerHTML = `${display_number(Math.floor(portal_cost * portal_mult ** lem_portal))} | Open a lemon portal?? 🍋♾️`;
    // update the lemon count display
    update_lem();
    update_display();
    // initiate autoclicker
    lem_work();
    lem_grow();
    lem_produce();
    lem_summon();
    // and tax
    tax_cat = document.getElementById("tax_cat");
    taxation_rate();
    taxation();
    // win check
    if (is_won === "true") {
        document.getElementById("win_button").disabled = true;
    }
}

function update_lem() {
    document.getElementById("lemon_amount").innerHTML = `Your lemons<br>${display_number(lem)} 🍋`;
    localStorage.setItem("lem",lem);
}

function update_display() {
    document.getElementById("stats_display").innerHTML = `Your stats
                                                    <br>---------------------
                                                    <br>Lemons per click: ${display_number(lem_gen + 1 + lem_juicer * 25 + lem_spells * 10000)}
                                                    <br>Lemons per second: ${display_number(2 * lem_employee + 50 * lem_tree + 1000 * lem_factory + 200000 * lem_portal)}
                                                    <br>Employees: ${lem_employee}
                                                    <br>Lemon trees: ${lem_tree}
                                                    <br>Lemon factories: ${lem_factory}
                                                    <br>Lemon portals: ${lem_portal}`;
}

function taxation_rate() {
    if (lem < 1000) {
        tax = 0;
    }
    else if (lem < 10000) {
        tax = 5;
    }
    else if (lem < 1000000) {
        tax = 10;
    }
    else {
        tax = 20;
    }
    setTimeout(taxation_rate,500);
}

function taxation() {
    if (tax > 0) {
        tax_cat.style.animation = "tax_collect 2s ease-in-out 2 alternate";
        setTimeout(play_splat,1000);
        addLems(Math.floor(-(lem * tax) / 100));
        setTimeout(taxation_end,8000);
        setTimeout(taxation,60000);
    }
    else {
        setTimeout(taxation,500);
    }
}

function play_splat() {
    splat = new Audio("sfx\\splat.mp3");
    splat.play();    
}

function taxation_end() {
    tax_cat.style.animation = "tax_wait 1s linear";
}

function win() {
    alert(`CONGRATULATIONS!!\n\nYou helped Lemonade Cat achieve her billion lemons!`);
    alert(`This is the end of Lemonade Cat's journey!\nThanks for playing!`);
    setTimeout(win_2, 5000)
}

function win_2() {
    alert(`Haha, you thought that was the end?`);
    alert(`I promised something special for you`);
    alert(`However i dropped it somewhere\nCan you return in a bit? I'm trying to find it`);
    alert(`Thanks!`);
}

function reset() {
    alert('You touch the strange lemon\nThe mystery lemon shines its powers upon you');
    alert('This lemon will brought about the destruction of this world, of this company');
    alert('This company will be reset to a blank slate');
    if (confirm("Are you sure you want to reset everything?\nLemonade Cat will be very sad :(")) {
        alert('The lemon begins to glow, and in a flash, it was all over\nEverything was just a dream');
        lem = 0;
        lem_employee = 0;
        lem_gen = 0;
        lem_tree = 0;
        lem_juicer = 0;
        lem_factory = 0;
        lem_spells = 0;
        lem_portal = 0;
        is_won = false;
        localStorage.setItem("lem",0);
        localStorage.setItem("lem_employee",0);
        localStorage.setItem("lem_gen",0);
        localStorage.setItem("lem_tree",0);
        localStorage.setItem("lem_juicer",0);
        localStorage.setItem("lem_factory",0);
        localStorage.setItem("lem_spells",0);
        localStorage.setItem("lem_portal",0);
        localStorage.setItem("is_won",false);
        location.reload();
    }
    else {
        alert('You are terrified by the prophesied lemon that would end the universe\nThis weird blurry lemon powers are beyond your comprehension\nYou step away');
    }
}