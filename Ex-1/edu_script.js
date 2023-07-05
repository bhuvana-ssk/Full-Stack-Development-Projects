function query(selector, all = false) {
    return all ? document.querySelectorAll(selector) : document.querySelector(selector)
}
let sections = query('.section', true);
let middle = query('.middle');
let center_line = query('.center-line');
center_line.style.bottom = `calc(100% - 20px)`;
let y0 = window.scrollY;
let up, down;
let full = false;
let set = 0;
const y = window.innerHeight * 0.8;
//function definition
let scrollHandler=function(e){
    const{
        scrollY
    } = window;
    up = scrollY < y0;
    down = !up;
    const middleRect = middle.getBoundingClientRect();
    const Rect = center_line.getBoundingClientRect();
    const dist = y - middleRect.top;
    if (down && !full){
        set = Math.max(set, dist);
            center_line.style.bottom = `calc(100% - ${set}px)`;
    }
    if (dist > middle.offsetHeight + 50 && !full){
        full = true;
        center_line.style.bottom = `-50px`;
    }
    sections.forEach(function(item) {
        const rect = item.getBoundingClientRect();

        if(rect.top + item.offsetHeight / 5 < y) {
            item.classList.add('show-me');
        }
    });

    y0 = window.scrollY;
}
//function call
scrollHandler();
center_line.style.display = 'block';
window.addEventListener('scroll', scrollHandler)