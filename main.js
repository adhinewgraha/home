// CREATES A HAMBURGER MENU FOR THE NAVIGATION BAR

function toggleMenu() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const mobileMenuContainer = document.querySelector('.mobile-menu-container');
    hamburgerIcon.classList.toggle('change');
    mobileMenuContainer.classList.toggle('active');
}

/// Add this function to close the mobile menu when a menu item is clicked
function closeMenu() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const mobileMenuContainer = document.querySelector('.mobile-menu-container');

    if (mobileMenuContainer.classList.contains('active')) {
        hamburgerIcon.classList.remove('change');
        mobileMenuContainer.classList.remove('active');
    }
}

/// Add event listeners to each menu item
document.querySelectorAll('.menu-outer-container a').forEach(item => {
    item.addEventListener('click', closeMenu);
});





// ADJUSTS THE SCROLLING POINTS

/// Function to scroll to a section with offset for the navbar
function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetSection = document.querySelector(targetId);
  
    //// Set different navbar heights for mobile and larger screens
    let navbarHeight;
    if (window.innerWidth < 768) { // Adjust 768 to your mobile breakpoint
      navbarHeight = document.querySelector('.nav-wrapper').offsetHeight;
    } else {
      navbarHeight = document.querySelector('.larger-screen-nav').offsetHeight;
    }
  
    window.scrollTo({
      top: targetSection.offsetTop - navbarHeight,
      behavior: 'smooth'
    });
  }
  
  //// Add click event listener to all nav links
  document.querySelectorAll('.menu-text[href^="#"]').forEach(link => {
    link.addEventListener('click', scrollToSection);
  });
  
  
  
  

// CREATES AN ACCORDION

/// Declares a constant variable and assigns it the collection of elements with the class name 'content-box'.
const accordionItems = document.getElementsByClassName('content-box');

/// Closes all content boxes except the one that is passed as a parameter.
function closeAllExcept(activeContentBox) {
    for (let item of accordionItems) {
        if (item !== activeContentBox && item.classList.contains('active')) {
            item.classList.remove('active');
            let content = item.querySelector('.content');
            let icon = item.querySelector('.icon');
            content.style.maxHeight = null;
            icon.classList.replace('fa-minus', 'fa-plus');
        }
    }
}

/// Function to reset all span colors
function resetSpanColors() {
    document.querySelector('.act-business').classList.remove('color-blue');
    document.querySelector('.act-lang').classList.remove('color-blue');
    document.querySelector('.act-code').classList.remove('color-blue');
    document.querySelector('.act-fashion').classList.remove('color-blue');
}

/// Iterates over each item in the 'accordionItems' collection.
for (let i = 0; i < accordionItems.length; i++) {
    /// Add event listener to the label within each content box
    let label = accordionItems[i].querySelector('.label');
    label.addEventListener('click', function() {
        //// Close all other content boxes
        closeAllExcept(accordionItems[i]);
        //// Reset all span colors
        resetSpanColors();
        //// Toggle the 'active' class on the content box
        accordionItems[i].classList.toggle('active');
        //// Find the content and icon within the content box
        const content = accordionItems[i].querySelector('.content');
        const icon = accordionItems[i].querySelector('.icon');
        //// Check if the content is currently visible
        if (content.style.maxHeight) {
            ///// Hide the content
            content.style.maxHeight = null;
            icon.classList.replace('fa-minus', 'fa-plus');
        } else {
            ///// Show the content
            content.style.maxHeight = content.scrollHeight + 'px';
            icon.classList.replace('fa-plus', 'fa-minus');
            ///// Change the color of the corresponding span
            if (label.textContent.includes('Business')) {
                document.querySelector('.act-business').classList.add('color-blue');
            } else if (label.textContent.includes('Language')) {
                document.querySelector('.act-lang').classList.add('color-blue');
            } else if (label.textContent.includes('Code')) {
                document.querySelector('.act-code').classList.add('color-blue');
            } else if (label.textContent.includes('Fashion')) {
                document.querySelector('.act-fashion').classList.add('color-blue');
            }
        }
    });
}

/// Initially closes all the content boxes.
window.onload = () => {
    for (let item of accordionItems) {
        let content = item.querySelector('.content');
        content.style.maxHeight = null;
    }
    resetSpanColors();
}





// ROTATES AND LOOPS THE WAVING HAND

document.addEventListener('DOMContentLoaded', (event) => {
    const wavingHand = document.querySelector('.waving-hand');
    wavingHand.classList.add('waving-hand-animate');
});