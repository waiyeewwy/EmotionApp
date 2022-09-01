var counter = 1

//adding question block
function add(){
    counter ++

    //retrieving parent div container
    parent = document.getElementById('questions')
    
    //creating necessary elements
    question = document.createElement('textarea')
    close = document.createElement('span')

    console.log(counter)
    //setting attributes of elements
    close.textContent = 'X'
    close.setAttribute('class', 'del')
    close.setAttribute('id', 'd'+counter)
    close.setAttribute('onclick', 'del(this)')

    //creating child to be appended into parent
    child = document.createElement('div')
    child.appendChild(question)
    child.appendChild(close)
    child.setAttribute('id', counter)

    parent.appendChild(child)
    
}

// delete question block
function del(x){
    target = x.id.slice(-1)

    child = document.getElementById(target)
    parent = document.getElementById('questions')

    parent.removeChild(child)

}
