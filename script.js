document.addEventListener("DOMContentLoaded", function () {
  const skills = [
    "Web Developer",
    "Frontend Engineer",
    "Data Analyst",
    "UI/UX Designer",
  ];
  let skillIndex = 0;
  let charIndex = 0;
  const typedTextElement = document.getElementById("typed-text");
  const cursorElement = document.querySelector(".cursor");

  function type() {
    if (charIndex < skills[skillIndex].length) {
      typedTextElement.textContent += skills[skillIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 2000);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedTextElement.textContent = skills[skillIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, 50);
    } else {
      skillIndex = (skillIndex + 1) % skills.length;
      setTimeout(type, 200);
    }
  }

  setTimeout(type, 500);
});


$(document).ready(function() {
    // Filter button click event
    $('.filter-btn').on('click', function() {
      var filterValue = $(this).attr('data-filter');
      if (filterValue == 'all') {
        $('.project-item').show();
      } else {
        $('.project-item').not('.' + filterValue).hide();
        $('.project-item').filter('.' + filterValue).show();
      }
      // Disable other buttons
      $('.filter-btn').removeClass('btn-primary').addClass('btn-secondary');
      $(this).removeClass('btn-secondary').addClass('btn-primary');
    });

    // Project item hover animation
    $('.project-item').hover(function() {
      $(this).find('.project-overlay').css('transform', 'translateY(0)');
    }, function() {
      $(this).find('.project-overlay').css('transform', 'translateY(100%)');
    });
  });

  function downloadCV() {
    window.location.href = 'Ahmed Ayoub Resume.pdf';
}