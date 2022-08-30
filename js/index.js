let colorList = ['pallet', 'viridian','pewter','cerulean','vermillion','lavender','celadon','saffron','fuschia','cinnabar'];

let renderButton2 = () => {
         for(let index = 0 ; index < colorList.length ;index++) {
             let color = colorList[index];
             let button = document.createElement('button');
             button.className = 'btn';
             button.innerHTML = color;
             button.style.color = '#fff';
             button.style.backgroundColor = color;
             button.onclick = function () {
                 document.querySelector('#house').style.color = color;
             }
             document.querySelector('#colorContainer').appendChild(button);
         }
     }
     renderButton2();