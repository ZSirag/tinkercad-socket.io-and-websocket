var navbar, childNode, parentNode;

/*

try to find navbar every 1s 

*/


var findElement = setInterval(()=> {
    try {
        navbar = document.querySelector(".sitemenu");
        if(navbar != undefined){addElements();}
    } catch (err) {}
}, 1000);

function addElements() {
    clearInterval(findElement);
    childNode = create("input", "zaza_input", "", "default: 300, port/room");
    parentNode = create("div", "sitemenu__left clearfix", "", ""); 
    
    
    /*

        <div class="sitemenu__left clearfix">
            <input class="zaza_input">
        </div>
    
    */

    parentNode.appendChild(childNode);
    navbar.appendChild(parentNode);
    
    parentNode = create("div", "sitemenu__left clearfix", "", "");
    childNode = create("select", "zaza_sel", "", "");
    var option = create("option", "zaza_opt", "websocket", "");
    option.innerText = "websocket";
    childNode.appendChild(option)
    option = create("option", "zaza_opt", "socket.io", "");
    option.innerText = "socket.io";
    childNode.appendChild(option)
    parentNode.appendChild(childNode);

    /*

        <div class="sitemenu__left clearfix">
            <select class="zaza_sel">
                <option class="zaza_op" value="websocket">websocket</option>
                <option class="zaza_op" value="socket.io">socket.io</option>
            </select>
        </div>

    */

    navbar.appendChild(parentNode);
}

/*

Create custom dom element function

*/

function create(elem, clasName, value, place) {
    elem = document.createElement(elem);
    if(clasName != "" || null){
        if(Array.isArray(clasName)){
            clasName = clasName.join(" ");
        }
        elem.setAttribute("class", clasName);
    }
    if(value != "" || null){
        elem.value = value;
    }
    if (place != "" || null) {
        elem.setAttribute("placeholder", place);
    }
    return elem;
}