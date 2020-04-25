document.addEventListener('DOMContentLoaded',()=>{
    const grid = document.querySelectorAll('.grid')
    const squares = Array.from(document.querySelectorAll('div'))
    const width = 10
    const height = 20
    const currentPosition = 4

  //The Tetrominos
  const lTetromino = [
    [1,width+1,width*2+1,2],
    [width,width+1,width+2,width*2+2],
    [1,width+1,width*2+1,width*2],
    [width,width*2,width*2+1,width*2+2]
  ]

  const zTetromino = [
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1],
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1]
  ]

  const tTetromino = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
  ]

  const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
  ]

  const iTetromino = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
  ]

  //Tetrominos
   const theTetrominos=[iTetromino,lTetromino,oTetromino,tTetromino,zTetromino]

  //Randmonly select tetrominos rotation
    let random = Math.floor(Math.random() * theTetrominos.length)
    let currentRotation = 0
    let current = theTetrominos[random][currentRotation]

  //draw the tetromino shape
    function draw(){
        current.forEach(index => (
            squares[currentPosition + index].classList.add('block')
        ))
    }
  //undraw the tetromino shape
    function undraw(){
        current.forEach(index => (
            squares[currentPosition + index].classList.remove('block')
        ))
    }
  //move shape down
    function moveDown(){
        undraw()
        currentPosition = currentPosition +=width
        draw()
        freeze()
    }
  //move left and prevent collisons with shapes moving left
    function moveRight(){
        undraw()
        const isAtRightEdge = current.some(index => (currentPosition + index) % width === width -1)
        if(!isAtRightEdge) currentPosition +=1
        //if any of the tetrimino element is in block2 ,we move to left
        if(current.some(index=> squares[currentPosition + index].classList.contains('block2'))){
            currentPosition -=1
        }
        draw()
    }
    function moveLeft(){
        undraw()
        const isAtLeftEdge = current.some(index=> (currentPosition + index) % width === 0)
        if(!isAtLeftEdge) currentPosition -=1
        if(current.some(index=> squares[currentPosition + index].classList.contains('block2'))){
            currentPosition +=1
        }
        draw()
    }

  //rotate tetrimino
    function rotation(){
        undraw()
        currentRotation++
        if(currentRotation === current.length){
            currentRotation = 0
        }
        current = theTetrominos[random][currentRotation]
        draw()
    }
     




})