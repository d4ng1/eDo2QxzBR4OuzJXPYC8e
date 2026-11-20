function goTo(id){document.getElementById(id).scrollIntoView({behavior:'smooth'});}
    function toggleLetter(){
      const letter=document.getElementById('letter');
      const button=document.getElementById('letterBtn');
      letter.classList.toggle('show');
      button.textContent=letter.classList.contains('show')?'Cerrar nuestra carta ♡':'Abrir nuestra carta ♡';
    }
    function showPromise(){
      const message=document.getElementById('promise');
      message.style.display='block';
      message.animate([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:500});
    }
