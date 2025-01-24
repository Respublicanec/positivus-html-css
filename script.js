const toggles = document.querySelectorAll('.working_block');

toggles.forEach(function(toggle) {
  toggle.addEventListener('click', function() {
        const content = toggle.querySelector('.working_kontent');
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
        const bgColor = this;
        if (bgColor.classList.contains('working_bg_dark')) {
            bgColor.classList.remove('working_bg_dark');
            bgColor.classList.add('working_bg_green');
        } else if (bgColor.classList.contains('working_bg_green')) {
            bgColor.classList.remove('working_bg_green');
            bgColor.classList.add('working_bg_dark');
        }  
        const icon = toggle.querySelector('.icon_plus, .icon_minus');
        if (icon.classList.contains('icon_plus')) {
          icon.classList.remove('icon_plus');
          icon.classList.add('icon_minus');
      } else if (icon.classList.contains('icon_minus')) {
        icon.classList.remove('icon_minus');
        icon.classList.add('icon_plus');
      }  
    });
});