// main.js - interações básicas
document.addEventListener('DOMContentLoaded', function(){
  // Modal controls
  window.openModal = function(title, desc){
    const modal = document.getElementById('modal');
    if(!modal) return;
    modal.setAttribute('aria-hidden','false');
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-desc').textContent = desc;
  };

  window.closeModal = function(){
    const modal = document.getElementById('modal');
    if(!modal) return;
    modal.setAttribute('aria-hidden','true');
  };

  // Close modal when clicking overlay
  const modal = document.getElementById('modal');
  if(modal){
    modal.addEventListener('click', function(e){
      if(e.target === modal) closeModal();
    });
  }

  // Add active class on current nav link
  document.querySelectorAll('.main-nav .nav-link').forEach(link=>{
    if(link.href === location.href || link.href === location.pathname.split('/').pop()){
      link.classList.add('active');
    }
  });
});
