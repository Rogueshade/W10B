function select(userSelection){
    Cookies.set('selection', userSelection);
    location.href = "page2.html", "_self";
}

function makeButton(label) {
    var button = document.createElement('button');
    button.innerText = label;
    button.addEventListener('click', function(){
        select(label);
    })
    buttons.append(button)
}

var buttons = document.getElementById('buttons')
makeButton('Blue Kyanite');
makeButton('Labradorite');
makeButton('Rainbow Moonstone');
