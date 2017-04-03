import './comments/header/header.scss';
import './scss/common.scss';
import Header from './comments/header/header.js';


const App = function() {

    const hd = new Header();
    document.getElementById('app').innerHTML = hd.tpl({
        name: 'aliang',
        arr: ['Vuejs', 'ES2016', 'webpack']
    });
    // document.getElementsByTagName('title')[0].innerHTML = hd.name;
    console.log(hd)
}

new App()
