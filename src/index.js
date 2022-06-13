const innerBlock = document.getElementById("block-2");

document.addEventListener('keydown', event => {
    if(event.key === 'ArrowLeft') {
        moveLeft()
    } else if(event.key === 'ArrowRight'){
        moveRight()
    } else if(event.key === 'ArrowUp') {
        moveTop()
    }else if (event.key === 'ArrowDown'){
        moveBottom()
    }else if(event.key ===' ') {
        moveNorthWest()
    }
    else {
        //do nothing
    }
    //console.log(event);
})

// moves the red block top on pressing the up arrow key
function moveTop(){
    let topValues = innerBlock.style.bottom.replace('px', '');
    let topnumber = parseInt(topValues, 10);

    // move to top by a pixel if top is less the the height of parent element
    if (topnumber < 550) {
        innerBlock.style.bottom = `${topnumber + 5}px`;
    }
    
}

function moveBottom () {
    let bottomValues = innerBlock.style.bottom.replace("px", '');
    let bottmNumber = parseInt(bottomValues, 10);
    
    if (bottmNumber > 0) {
        innerBlock.style.bottom = `${bottmNumber -5}px`;
    }
}

function moveRight () {
    let rightValues = innerBlock.style.left.replace('px', '');
    let rightNumber = parseInt(rightValues, 10);

    if (rightNumber < 550) {
        innerBlock.style.left = `${rightNumber + 5}px`
    }
}

function moveLeft () {
    let leftNumbers = innerBlock.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      innerBlock.style.left = `${left - 5}px`;
    }

}

function moveNorthWest() {
    let leftValue = innerBlock.style.left.replace('px', '');
    let leftInt = parseInt(leftValue, 10);
    let topValue = innerBlock.style.bottom.replace('px', '');
    let topInt = parseInt(topValue, 10);
    
    if (leftInt > 0) {
        innerBlock.style.leftInt = `${leftInt -1}px`
        //innerBlock.style.bottom = `${topInt +1}px`
    }
}
