// Mobile Navigation
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const offsetTop = section.offsetTop - 80; // Account for fixed navbar
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
}

// Add click event listeners to navigation links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionId = link.getAttribute("href").substring(1);
    scrollToSection(sectionId);
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener("DOMContentLoaded", () => {
  const animateElements = document.querySelectorAll(
    ".step-card, .benefit-card, .preview-card"
  );
  animateElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// Form handling
const APIKEY = "R8Nmsp-pvZX5XYWxDPaqwXJOgYDWEklo_xjJDOiTYts";
const URL = "https://pimadev.pythonanywhere.com/api/v1/send-email/";

// const APIKEY = "f53qVR9rSSWibTd9Z1NL162wniyJsNhOled4jUxYbX8";
// const URL = "http://127.0.0.1:8000/api/v1/send-email/";

document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  if (data.website)
    return showMessage(`Error sending your message at the moment...`, "error");
  const normalizedData = {
    visitor_email: data.email,
    subject: `EDUPIMA - I need a ${data.subjects} tutor for my child`,
    body: {
      child_name: data.childName,
      parent_name: data.parentName,
      visitor_email: data.email,
      phone: data.phone,
      child_age_range: data.childAge,
      current_grade: data.grade,
      subject: data.subjects,
      message: data.message,
      urgency: data.urgency,
    },
  };

  // Show loading state
  const submitBtn = e.target.querySelector(".submit-btn");
  const originalText = submitBtn.textContent;
  submitBtn.textContent = "Connecting...";
  submitBtn.disabled = true;

  try {
    // Simulate form submission (replace with actual endpoint)
    const response = await fetch(`${URL}?apikey=${APIKEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(normalizedData),
    });

    const result = await response.json();

    if (response.ok) {
      // Show success message
      showMessage(
        "Thank you! We've received your information and will connect you with the perfect teacher for your child within 24 hours. Check your email for next steps!",
        "success"
      );
    } else {
      showMessage(
        "Failed to send message. Please try again or contact us directly at admin@pimahealth.co",
        "error"
      );
    }

    // Reset form
    e.target.reset();
  } catch (error) {
    console.error("Form submission error:", error);
    showMessage(
      "There was an error sending your message. Please try again or contact us directly at admin@pimahealth.co",
      "error"
    );
  } finally {
    // Reset button
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
    return;
  }
});

// Show success/error messages
function showMessage(message, type) {
  const existingMessage = document.querySelector(".form-success, .form-error");
  if (existingMessage) {
    existingMessage.remove();
  }

  const messageDiv = document.createElement("div");
  messageDiv.className = type === "success" ? "form-success" : "form-error";
  messageDiv.textContent = message;

  const form = document.getElementById("contactForm");
  form.insertBefore(messageDiv, form.firstChild);

  // Auto-hide message after 10 seconds
  setTimeout(() => {
    messageDiv.remove();
  }, 10000);

  // Scroll to message
  messageDiv.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// Form validation enhancements
document.querySelectorAll("input, select, textarea").forEach((field) => {
  field.addEventListener("blur", validateField);
  field.addEventListener("input", clearFieldError);
});

function validateField(e) {
  const field = e.target;
  const value = field.value.trim();

  // Remove existing error styling
  field.classList.remove("error");

  // Basic validation
  if (field.required && !value) {
    showFieldError(field, "This field is required");
    return false;
  }

  // Email validation
  if (field.type === "email" && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      showFieldError(field, "Please enter a valid email address");
      return false;
    }
  }

  return true;
}

function showFieldError(field, message) {
  field.classList.add("error");

  // Remove existing error message
  const existingError = field.parentNode.querySelector(".field-error");
  if (existingError) {
    existingError.remove();
  }

  // Add new error message
  const errorDiv = document.createElement("div");
  errorDiv.className = "field-error";
  errorDiv.textContent = message;
  errorDiv.style.color = "#f44336";
  errorDiv.style.fontSize = "0.9rem";
  errorDiv.style.marginTop = "0.5rem";

  field.parentNode.appendChild(errorDiv);
}

function clearFieldError(e) {
  const field = e.target;
  field.classList.remove("error");

  const errorMsg = field.parentNode.querySelector(".field-error");
  if (errorMsg) {
    errorMsg.remove();
  }
}

// Dynamic form enhancements
document.getElementById("subjects").addEventListener("change", (e) => {
  const messageTextarea = document.getElementById("message");
  const subject = e.target.value;

  let placeholder =
    "What are your child's strengths? What challenges do they face? What are your goals for their learning?";

  switch (subject) {
    case "math":
      placeholder =
        "What math topics does your child need help with? Are they struggling with specific concepts or looking to advance further?";
      break;
    case "science":
      placeholder =
        "Which science subjects interest your child? Are they preparing for any specific exams or projects?";
      break;
    case "english":
      placeholder =
        "Does your child need help with reading comprehension, writing, grammar, or literature analysis?";
      break;
    case "test-prep":
      placeholder =
        "Which test is your child preparing for? What's their target score or timeline?";
      break;
    case "coding":
      placeholder =
        "Is your child a complete beginner or do they have some coding experience? What programming languages or projects interest them?";
      break;
    default:
      placeholder = "What your message?";
  }

  messageTextarea.placeholder = placeholder;
});

// Scroll progress indicator
window.addEventListener("scroll", () => {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;

  // Create progress bar if it doesn't exist
  let progressBar = document.getElementById("scrollProgress");
  if (!progressBar) {
    progressBar = document.createElement("div");
    progressBar.id = "scrollProgress";
    progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #00bcd4, #0097a7);
            z-index: 1001;
            transition: width 0.3s ease;
        `;
    document.body.appendChild(progressBar);
  }

  progressBar.style.width = scrolled + "%";
});

// Add CSS for field errors
const style = document.createElement("style");
style.textContent = `
    .form-group input.error,
    .form-group select.error,
    .form-group textarea.error {
        border-color: #f44336;
        box-shadow: 0 0 0 3px rgba(244, 67, 54, 0.1);
    }
    
    .field-error {
        animation: fadeIn 0.3s ease;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-5px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// Add floating action button for quick contact
const fab = document.createElement("div");
fab.innerHTML = "💬";
fab.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #0b6d37ff);, #00a74bff);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(0, 188, 212, 0.4);
    z-index: 1000;
    transition: all 0.3s ease;
`;

fab.addEventListener("click", () => scrollToSection("contact"));
fab.addEventListener("mouseenter", () => {
  fab.style.transform = "scale(1.1)";
  fab.style.boxShadow = "0 6px 25px rgba(0, 188, 212, 0.6)";
});
fab.addEventListener("mouseleave", () => {
  fab.style.transform = "scale(1)";
  fab.style.boxShadow = "0 4px 20px rgba(0, 188, 212, 0.4)";
});

document.body.appendChild(fab);

const curDate = new Date().getFullYear();
const curDateEl = document.getElementById("#curDate");
curDateEl.textContent = curDate;
