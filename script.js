function carousel(){
    const carouselSlider = document.querySelector('.carousel-slider');
    const list = document.querySelector('.carousel-list');
    let list2;

    let speed = 1;

    const width = list.scrollWidth; 
    let x = 0;
    let x2 = width;

    function clone(){
        list2 = list.cloneNode(true);
        carouselSlider.appendChild(list2);
        list2.style.left = `${width}px`;
    }

    function moveFirst(){
        x -= speed;
        if(width >= Math.abs(x)){
            list.style.left = `${x}px`;
        } else{
            x = width + speed;
        }
    }

    function moveSecond(){
        x2 -= speed;
        if(list2.scrollWidth >= Math.abs(x2)){
            list2.style.left = `${x2}px`;
        } else{
            x2 = width + speed;
        }
    }

    clone();

    let a = setInterval(moveFirst, 10);
    let b = setInterval(moveSecond, 10);

    carouselSlider.addEventListener('mouseenter', () => {
        speed = 2;
    })
    carouselSlider.addEventListener('mouseleave', () => {
        speed = 1;
    })
}

setTimeout(() => {
    carousel();
}, 1000);