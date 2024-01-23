document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('.animated-square');
  
    document.addEventListener('mousemove', function(e) {
      squares.forEach(square => {
        const speed = parseFloat(square.getAttribute('data-speed'));
        const x = (e.pageX * speed) / 100;
        const y = (e.pageY * speed) / 100;
  
        square.style.transform = `translate(-${x}px, -${y}px)`;
        square.style.transition = `transform 0.5s ease-out`;
      });
    });
  });
  