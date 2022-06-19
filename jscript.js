const container = document.getElementById('container');

let number = 16;

for (let i =0; i<number*number; i++) {
    const block = document.createElement('div');
    container.appendChild(block);
    block.className = "block";
    
    block.addEventListener("mouseover", event => {
        block.className = 'blockActive';
    })
    
    block.addEventListener("mouseout", event => {
        //block.classList.remove('blockActive');
        //block.className = 'block';
    })
}

const button = document.getElementById('button');

button.addEventListener("click", function(e) {
    for (let i =0; i<number*number; i++) {
        container.firstElementChild.remove();
    }
    number = prompt("Please enter a grid size (Maximum 100)");
    if (number>100) {
        number=0;
    }
    createGrid(number);
    container.style.setProperty("--grid-template-value", number);
})

function createGrid (number) {
    for (let i =0; i<number*number; i++) {
        const block = document.createElement('div');
        container.appendChild(block);
        block.className = "block";
        
        block.addEventListener("mouseover", event => {
            block.className = 'blockActive';
        })
        
        block.addEventListener("mouseout", event => {
            //block.classList.remove('blockActive');
            //block.className = 'block';
        })
    }
}