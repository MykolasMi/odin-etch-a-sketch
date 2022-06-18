const container = document.getElementById('container');

/*const block = document.createElement('div');
container.appendChild(block);
block.style.cssText = 'display: flex; border-width: 5px; border-color: black; border-style: solid;'
*/


for (let i =0; i<256; i++) {
    const block = document.createElement('div');
    container.appendChild(block);
    block.className = "block";
    //block.style.cssText = 'display: flex; border-width: 5px; border-color: black; border-style: solid;';
}