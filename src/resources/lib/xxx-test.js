alert('you are running');


var __nativeHooks = (typeof __nativeHooks != 'undefined') ? __nativeHooks : {};

function create_dom_element(varname, tag, id, initClass){
    console.log('calling' + varname + tag + id + initClass);
    __nativeHooks[varname] = document.createElement(tag);
    __nativeHooks[varname].id = id;
    __nativeHooks[varname].setAttribute('class', initClass);
}

function style_dom_element(varname, property, value){
        console.log('style_dom_element' + varname + property + value);
     __nativeHooks[varname].style[property] = value;
}


function attach_dom_element(varname){
    console.log('attach' + varname);
    document.body.appendChild( __nativeHooks[varname]);
     __nativeHooks[varname].style.height = 100;
     __nativeHooks[varname].style.width = 100;
}






var testWindow = Mingui.window('java:nimbus|android:native');
testWindow.set('x', 200)
           .set('width', 400)
           .set('height', 600)
           .set('background', 255, 255, 0, 255) //android requires 255 for full opacity
           .set('any-property', 6)






function clickMenuHandler(args){
    alert('hi!');
    return "WHAAAT?";
}


function fileChooseHandler(args){
    alert(args.action + " & " + args.path);
}

function openFileMenuHandler(){
     submenu.setVisible(true);
}

var menu = testWindow.addMenu("openFile", 'openFileMenuHandler');
var submenu = testWindow.addSubMenu("submenu");
submenu.addMenu("submenu-menu1", 'clickMenuHandler');
submenu.addMenu("submenu-menu2", 'clickMenuHandler');
submenu.addSubMenu("submenu-submenu1")
       .addMenu('submenu-submenu1-menu', 'clickMenuHandler');



var form = Mingui.form();
testWindow.addView(form);
form.setVisible(true);
form.set('background', "red");

var d = Mingui.getSysInfo();
for(var i in d){
    document.write(i + ' = ' + d[i]);
}



function notificationSuccess(){
    alert('notification succesfully created');
}

function notificationFailure(){
    alert('notification failing created');
}

function notificationClicked(){
    alert('notification clicked');
}

function notificationClosed(){
    alert('notification closed');
}


Mingui.nativeNotification('hello', 'from js', 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-check-icon.png', 200,
'notificationSuccess', 'notificationFailure', 'notificationClicked', 'notificationClosed');