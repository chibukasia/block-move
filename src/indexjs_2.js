const block2 = document.getElementById('block-2');
const para = document.getElementById('h2');

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight'){
        moveRight();
    }else if (event.key === 'ArrowLeft'){
        moveLeft ()
    }else if (event.key === 'ArrowUp'){
        moveUp()
    }else if (event.key === 'ArrowDown'){
        moveDown()
    } 
})

function moveRight (){
    let rightPositionValue = block2.style.left.replace('px', '')
    let rightPositionInt = parseInt(rightPositionValue, 10)

    if (rightPositionInt < 550) {
        block2.style.left = `${rightPositionInt + 5}px`;
        block2.style.backgroundColor='greenyellow'
        para.style.color = 'greenyellow'
        para.style.backgroundColor = 'black'
        para.textContent = 'Moving to the right... Color is Greenyellow'
    }
}
function moveLeft (){
    let leftPositionValue = block2.style.left.replace('px', '');
    let leftPositionInt = parseInt(leftPositionValue, 10);

    if (leftPositionInt > 0) {
        block2.style.left = `${leftPositionInt -5}px`
        block2.style.backgroundColor = 'orange'
        para.style.color = 'orange';
        para.textContent = 'Moving to the left... Color is Orange'

    }
}
function moveUp (){
    let upPositionvalue = block2.style.bottom.replace('px', '');
    let upPositionInt = parseInt(upPositionvalue, 10);

    if (upPositionInt < 550) {
        block2.style.bottom = `${upPositionInt + 5}px`;
        block2.style.backgroundColor = 'coral'
        para.style.color = 'coral';
        para.style.backgroundColor= 'black'
        para.textContent = 'Moving to the top... Color is Coral'
    }
}

function moveDown (){
    let downPositionValue = block2.style.bottom.replace('px','');
    let downPositionInt = parseInt(downPositionValue, 10);

    if (downPositionInt > 0) {
        block2.style.bottom = `${downPositionInt - 5}px`
        block2.style.backgroundColor = 'white'
        para.style.color = 'white'
        para.textContent = 'Moving to the bottom... Color is Black'
    }
}