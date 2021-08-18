const images = document.querySelectorAll('.slide-in');

const active = function(entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){
        console.log('in');
        entry.target.classList.add('active'); 
        }else{
            entry.target.classList.remove('active'); 
        }
    });
}
const io = new IntersectionObserver(active);
 for(let i=0; i < images.length; i++){
    io.observe(images[i]);
  
 }

    