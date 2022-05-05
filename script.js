function A_minus() {
    document.getElementById("P_about").style.fontSize = "medium";
}

function A() {
    document.getElementById("P_about").style.fontSize = "x-large";
}

function A_plus() {
    document.getElementById("P_about").style.fontSize = "xx-large";
}

function SetRed() {
    document.body.style.backgroundImage = 'none'
    document.body.style.backgroundColor = "red";
}
  
function SetGreen() {
    document.body.style.backgroundImage = 'none'
    document.body.style.backgroundColor = "green";
}

function SetBlack() {
    document.body.style.backgroundImage = 'none'
    document.body.style.backgroundColor = "black";
}

function SetWhite() {
    document.body.style.backgroundImage = 'none'
    document.body.style.backgroundColor = "white";
}

function SetGrey() {
    document.body.style.backgroundImage = 'none'
    document.body.style.backgroundColor = "lightgrey";
}

function SetImage() {
    document.body.style.background = "#f3f3f3 url('https://www.jesusislife.in/wp-content/uploads/2019/05/Savin-NY-Website-Background-Web.jpg') no-repeat right top";
    document.body.style.backgroundAttachment = "fixed";
}

function AppendLastNews(Heading) {
    
    const para = document.createElement("p");
    let data = localStorage.getItem(Heading);
    const node = document.createTextNode(data);    
    para.appendChild(node);

    document.getElementById("News").appendChild(para);
}

function DispAllNews() {
    var keys = Object.keys(localStorage), i = keys.length;

    while ( i-- ){

    const para = document.createElement("p");

    let data = localStorage.getItem(keys[i]);
    const node = document.createTextNode(data);

    para.appendChild(node);

    document.getElementById("News").appendChild(para);
    }
}

function AddNews() {
    // window.onload();
    let Heading_ = document.querySelector('#Heading').value;
    let details = document.querySelector('#Content').value; 
    // const Heading__ = Heading_;
    console.log(Heading_);
    console.log(details);


    if (Heading_ && details)
    {
        // console.log("got in!!!");
        localStorage.setItem(Heading_,details);
        AppendLastNews(Heading_);
    }
}


