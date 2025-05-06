// Start Buy Points page
$(document).ready(function () {
  // Initially hide the right arrow
  $("#rightArrow").hide();

  // Left arrow click event
  $("#leftArrow").click(function () {
    $("#pointsSection").fadeOut(300, function () {
      $("#extraSection").fadeIn(300);
    });
    $("#leftArrow").animate(
      {
        left: "92%",
      },
      500,
      function () {
        // Hide the left arrow and show the right arrow after animation
        $("#leftArrow").hide();
        $("#rightArrow").show();
      }
    );
  });

  // Right arrow click event
  $("#rightArrow").click(function () {
    $("#extraSection").fadeOut(300, function () {
      $("#pointsSection").fadeIn(300);
    });
    $("#leftArrow").animate(
      {
        left: "10px",
      },
      500,
      function () {
        // Hide the right arrow and show the left arrow after animation
        $("#rightArrow").hide();
        $("#leftArrow").show();
      }
    );
  });
});
// End Buy Points page

// Loader

function hideLoader() {
  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
  }, 500); //   0.5s
}
// Toggle menu

$(document).ready(function () {
  // Toggle dropdown menu on button click
  $("#menuButton").on("click", function () {
    $("#dropdownMenu").toggleClass("show");
  });

  // Close the menu when clicking outside
  $(document).on("click", function (event) {
    let $menu = $("#dropdownMenu");
    let $button = $("#menuButton");

    // Check if the clicked element is not the menu or button
    if (
      !$menu.is(event.target) &&
      !$menu.has(event.target).length &&
      !$button.is(event.target)
    ) {
      $menu.removeClass("show");
    }
  });
});

// Start Login

$(document).ready(function () {
  // Cache selectors for better performance
  const $imageSection = $("#imageSection");
  const $loginForm = $("#loginForm");
  const $forgotPasswordForm = $("#forgotPasswordForm");
  const $createAccountForm = $("#createAccountForm");

  /**
   * Function to switch between forms with animations
   * @param {jQuery} $showForm - The form to show
   * @param {jQuery} $hideForm - The form to hide
   * @param {string} imageTransform - The transform value for the image section
   * @param {string} formTransform - The transform value for the shown form
   */
  function switchForm($showForm, $hideForm, imageTransform, formTransform) {
    $hideForm.removeClass("active");
    $showForm.addClass("active");
    $imageSection.css("transform", imageTransform);
    $showForm.css("transform", formTransform);
  }

  // Event listeners using jQuery
  $("#backToLogin1").click(function () {
    switchForm(
      $loginForm,
      $forgotPasswordForm,
      "translateX(0)",
      "translateX(0)"
    );
  });

  $("#backToLogin2").click(function () {
    switchForm(
      $loginForm,
      $createAccountForm,
      "translateX(0)",
      "translateX(0)"
    );
  });

  $("#createAccountBtn").click(function () {
    switchForm(
      $createAccountForm,
      $loginForm,
      "translateX(114%)",
      "translateX(-100%)"
    );
  });

  $("#forgotPasswordBtn").click(function () {
    switchForm(
      $forgotPasswordForm,
      $loginForm,
      "translateX(114%)",
      "translateX(-100%)"
    );
  });
});

// Function to toggle password visibility
function togglePassword(fieldId) {
  let $passwordField = $("#" + fieldId);
  // Toggle between text and password type
  $passwordField.attr(
    "type",
    $passwordField.attr("type") === "password" ? "text" : "password"
  );
}

// Function to show password while typing and hide after inactivity
function showPasswordWhileTyping(fieldId, delay = 200) {
  let $passwordField = $("#" + fieldId);
  let timeoutId;

  $passwordField.on("input", function () {
    $passwordField.attr("type", "text"); // Show password while typing
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      $passwordField.attr("type", "password"); // Hide password after delay
    }, delay);
  });
}

// Apply password visibility toggle functionality to specified fields
["password", "confirmPassword"].forEach((fieldId) =>
  showPasswordWhileTyping(fieldId)
);

// End  Login

// Start Settings
$(document).ready(function () {
  // Select all navigation links and content sections
  var $navLinks = $(".nav-link");
  var $contentSections = $(".content-section");

  // Add click event listener to each navigation link
  $navLinks.on("click", function () {
    var target = $(this).data("target"); // Get the target section ID

    // Hide all sections by removing 'active-section' class
    $contentSections.removeClass("active-section");

    // Show the target section by adding 'active-section' class
    $("#" + target).addClass("active-section");
  });
});
// jQuery to handle active class switching
$(document).ready(function () {
  // Handle active class switching in sidebar
  $(".nav-link-settings").on("click", function () {
    $(".nav-link-settings").removeClass("active"); // Remove active class from all
    $(this).addClass("active"); // Add active class to clicked item
  });

  // Handle form submissions for editing name
  $("#editNameForm").on("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    const username = $("#username").val();
    alert(`Username updated to: ${username}`);
    $("#editNameModal .btn-close").click(); // Close modal
  });

  // Handle form submissions for editing email
  $("#editEmailForm").on("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    const email = $("#email").val();
    alert(`Email updated to: ${email}`);
    $("#editEmailModal .btn-close").click(); // Close modal
  });

  // Sign Out Button Click Event
  $("#signOutButton").on("click", function () {
    if (confirm("Are you sure you want to Sign out?")) {
      alert("You have been signed out."); // Simulated logout action
      window.location.href = "login.php"; // Redirect to login page
    }
  });
});

// End Settings
//loker-packet

document.addEventListener("DOMContentLoaded", function () {
  const lockers = document.querySelectorAll("[id^='locker']");
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");
  let currentIndex = 0;

  function updateActiveLocker(index) {
    lockers.forEach((l, i) => {
      if (i === index) {
        l.classList.add("active");
        l.classList.remove("d-none");
      } else {
        l.classList.remove("active");
        l.classList.add("d-none");
      }
    });

    //  control buttons visibility change event
    leftArrow.style.display = index === 0 ? "none" : "block"; // إخفاء السهم الأيسر عند أول عنصر
    rightArrow.style.display = index === lockers.length - 1 ? "none" : "block"; // إخفاء السهم الأيمن عند آخر عنصر
  }

  rightArrow.addEventListener("click", function () {
    if (currentIndex < lockers.length - 1) {
      currentIndex++;
      updateActiveLocker(currentIndex);
    }
  });

  leftArrow.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateActiveLocker(currentIndex);
    }
  });

  updateActiveLocker(currentIndex); // visibility change event handler for active locker
});

// End loker-packet
// // Active like
// // ٍSelect all like buttons
// const items = document.querySelectorAll(".nav-link");

// //   LocalStorage only
// function restoreActiveElement() {
//   const activeId = localStorage.getItem("activeItem");
//   if (activeId) {
//     const activeElement = document.querySelector(
//       `.item[data-id="${activeId}"]`
//     );
//     if (activeElement) {
//       activeElement.classList.add("active");
//     }
//   }
// }

// // Restore active element on page load
// restoreActiveElement();

// //  Add click event to all items
// items.forEach((item) => {
//   item.addEventListener("click", function () {
//     //  Remove "active" class from all items
//     items.forEach((el) => el.classList.remove("active"));

//     // Add "active" class to the clicked item
//     this.classList.add("active");

//     // Save the clicked item's ID to  LocalStorage
//     localStorage.setItem("activeItem", this.getAttribute("data-id"));
//   });
// });

// script Slider image
// const containers = document.querySelectorAll(".image-container");

// containers.forEach((container) => {
//   container.addEventListener("click", () => {
//     // Remove active class from others
//     containers.forEach((cont) => cont.classList.remove("active"));

//     // Activate the clicked one
//     container.classList.add("active");

//     // Toggle the text animation
//     document
//       .querySelectorAll(".text-overlay")
//       .forEach((overlay) => overlay.classList.remove("active"));
//     container.querySelector(".text-overlay").classList.add("active");
//   });
// });
// End Slider image
