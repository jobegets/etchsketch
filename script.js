const grid = document.querySelector('#grid');
const popup = document.querySelector('#popup');

    // initial 16 x 16 grid
    populate();

    // new grid functionality
document.querySelector('#popup').addEventListener("click", function(){
    while (grid.hasChildNodes()){
        grid.removeChild(grid.firstChild);
    }
    do{
    ans = prompt("squares per side"); // keep asking until answer < 100
    
    } while (ans > 100);    
    color = prompt("color");
    populate(ans,color);
    }); 

    // new color functionality
document.querySelector('#color').addEventListener("click", function(){
    while (grid.hasChildNodes()){
        grid.removeChild(grid.firstChild);
    }
    ans = prompt("color"); 
    populate(16, ans);
});
    // populates grid with divs
function populate(size = 16, color = 'red'){ // defaults to 16x16, red
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(i = 0; i < (size* size); i++){
        let square = document.createElement('div');
      
        square.addEventListener("mouseover",function(){
            this.style.backgroundColor = color;
        });
        grid.insertAdjacentElement("beforeend", square);
        grid.appendChild(square);
    }
}

