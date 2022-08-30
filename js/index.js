const colorList = ['pallet', 'viridian', 'pewter', 'cerulean', 'vermillion', 'lavender', 'celadon', 'saffron', 'fuschia', 'cinnabar'];

let renderButton = (colors) => {
    let output = ''; //string html
    for(let index = 0 ; index < colors.length;index++) {
        //Mỗi lần duyệt lấy ra 1 màu
        let color = colors[index];
        output += `
        <button class="color-button ${color}" style="background: ${color};" onclick="changeColor('${color}')"></button>
        `
    }
    //Hiển thị output lên giao diện
    document.querySelector('#colorContainer').innerHTML = output;

}
renderButton(colorList);

window.changeColor = (colors) => {

        var element = document.querySelector('#house');
        element.classList.add(colors);
    
}


