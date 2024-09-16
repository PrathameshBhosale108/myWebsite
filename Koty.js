function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hidesidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
{
    document.addEventListener('scroll', function() {
        const aboutMeSection = document.querySelector('#about-me');
        const skillBarSection = document.querySelector('.skill-bar-section');
        const sectionPosition = aboutMeSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
      
        if (sectionPosition < screenPosition) {
          aboutMeSection.classList.add('animate');
          skillBarSection.classList.add('animate'); // Trigger the skill bar animation
        }
      });
      
      
}