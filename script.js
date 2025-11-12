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

  function loadFaqQuestion() {
    const faqContainer = document.querySelector(".faq-container");
    const faqQuestionList = [
      {
        question:
          "What online educational platform is best for affordable learning?",
        answer:
          "There isn’t one 'best' platform for everyone, but EduPima stands out for offering affordable, high-quality tutoring designed for every student’s learning pace. The right platform depends on your goals, budget, and preferred learning style.",
      },
      {
        question: "Are there free or low-cost tutoring options online?",
        answer:
          "Yes. EduPima provides an affordable paid model that ensures quality, consistency, and personalized support for every learner.",
      },
      {
        question: "What site is best for affordable online tutoring?",
        answer:
          "Platforms like Preply, Chegg, and Superprof are popular, but EduPima focuses on affordability and access, ensuring parents can give their children quality learning without high costs.",
      },
      {
        question: "How can a student become a tutor on EduPima?",
        answer:
          "Becoming a tutor on EduPima is simple: Identify your strongest subjects, create your EduPima tutor profile, upload sample lessons or materials, set your affordable tutoring rates, and start tutoring while gathering reviews.",
      },
      {
        question: "How does EduPima's online tutoring work?",
        answer:
          "Sign up and tell us about your child's needs. We match them with a qualified teacher, and lessons happen via our secure video platform. Your child gets one-on-one personalized attention, and we track progress with detailed reports.",
      },
      {
        question: "What age can my child start learning?",
        answer:
          "We tutor children from Pre-K through Grade 12. Each tutor adapts their teaching style to match developmental stages, ensuring age-appropriate learning experiences that keep children engaged and motivated.",
      },
      {
        question: "How much does EduPima cost?",
        answer:
          "Pricing is significantly lower than traditional tutoring—typically 50-70% less. We offer flexible packages starting with a free trial session so you can experience our quality before committing. Contact us for customized pricing.",
      },
      {
        question: "How do I choose the right tutor for my child?",
        answer:
          "Our AI algorithm matches your child's learning style, goals, and subject needs with tutors who specialize in those areas. You can review tutor profiles and request changes to find the perfect fit for your child.",
      },
      {
        question: "What subjects do you offer?",
        answer:
          "We cover all K-12 subjects: Math, Science, English, History, Foreign Languages, Arts, Coding, and Test Prep (SAT, ACT, etc.). If you have a specific need, contact us we likely have tutors available.",
      },
      {
        question: "Can my child get a free trial?",
        answer:
          "We offer a free 30-minute trial session with your matched tutor. It's the perfect way to experience our platform, meet your tutor, and ensure it's the right fit before any commitment.",
      },
      {
        question: "What makes EduPima different from traditional tutoring?",
        answer:
          "We combine personalized one-on-one learning with cutting-edge technology, affordable pricing, and flexible scheduling. Our tutors are vetted professionals, and our platform tracks progress transparently so you see results.",
      },
      {
        question: "How quickly will I see results?",
        answer:
          "Many parents notice confidence improvements within 2-3 sessions. Academic improvements typically show within 4-6 weeks. Results vary by subject and child, but consistent one-on-one tutoring accelerates learning.",
      },
      {
        question: "Is online tutoring effective?",
        answer:
          "Yes. Research shows personalized one-on-one tutoring (online or in-person) is highly effective. Our platform enhances this with interactive tools, recorded sessions for review, and progress tracking—often outperforming traditional tutoring.",
      },
      {
        question: "How flexible are the learning schedules on EduPima?",
        answer:
          "EduPima offers fully personalized learning schedules tailored to your family's routine. Whether early mornings, after school, or weekends, learners can study at their own pace. Our tutors adapt to each student’s availability and learning style, making education accessible across different time zones.",
      },
    ];

    const faqContent = faqQuestionList
      .map(
        (question, index) => `
          <div class="faq-item" data-faq=${index + 1}>
            <button
              class="faq-question"
              aria-expanded="false"
              aria-controls="faq-answer-${index + 1}"
            >
              <span class="question-text"
                >${question.question}</span
              >
              <span class="faq-icon" aria-hidden="true">+</span>
            </button>
            <div
              id="faq-answer-${index + 1}"
              class="faq-answer"
              role="region"
              aria-labelledby="faq-question-${index + 1}"
            >
              <p>
                ${question.answer}
              </p>
            </div>
          </div>
        `
      )
      .join("");
    faqContainer.insertAdjacentHTML("beforeend", faqContent);
  }
  loadFaqQuestion();

  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    if (question && answer) {
      question.addEventListener("click", () => {
        const isOpen = question.getAttribute("aria-expanded") === "true";

        // Close all other FAQs when opening a new one
        faqItems.forEach((otherItem) => {
          const otherQuestion = otherItem.querySelector(".faq-question");
          const otherAnswer = otherItem.querySelector(".faq-answer");
          if (otherQuestion && otherAnswer && otherItem !== item) {
            otherQuestion.setAttribute("aria-expanded", "false");
            otherAnswer.setAttribute("aria-expanded", "false");
          }
        });

        // Toggle current FAQ
        question.setAttribute("aria-expanded", !isOpen);
        answer.setAttribute("aria-expanded", !isOpen);
      });

      // Keyboard navigation
      question.addEventListener("keypress", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          question.click();
        }
      });
    }
  });
});

// Function to preload images using Promise
/**
 *
 * @param {object} images  {src:str, alt:str}
 * @returns null
 */
function preloadImages(images) {
  return new Promise.all(
    images.map((obj) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(obj?.src);
        img.onload = () =>
          reject(new Error(`Failed to load image:${obj?.alt}`));
        img.src = obj?.src;
      });
    })
  );
}

const slideShowImages = [
  {
    src: "https://res.cloudinary.com/dtbf1jnph/image/upload/w_530,h_740,c_fill,q_auto,f_auto/v1762833571/remote-tutoring_gzfxvq.jpg",
    alt: "Parent and child learning together online",
  },
  {
    src: "https://res.cloudinary.com/dtbf1jnph/image/upload/w_530,h_740,c_fill,q_auto,f_auto/v1762854611/18150_bhvqiq.jpg",
    alt: "cheerful brunette and blonde girls use modern laptop device for online learning session together",
  },
  {
    src: "https://res.cloudinary.com/dtbf1jnph/image/upload/w_530,h_740,c_fill,q_auto,f_auto/v1762348181/different-ethinics-group-learning_lwg7il.jpg",
    alt: "Child learning online with qualified tutor",
  },
];

// Initialize slideshow after images are loaded
async function initializeSlideshowWithPreload() {
  const loaderElement = document.getElementById("slideshowLoader");
  const slideshowWrapper = document.getElementById("slideshowWrapper");
  const dotsContainer = document.getElementById("dotsContainer");

  try {
    await preloadImages(slideShowImages);

    // Hide loader and show slideshow
    loaderElement.style.display = "none";
    slideshowWrapper.style.display = "block";
    dotsContainer.style.display = "flex";

    // Start slideshow after images are visible
    initializeSlideshow();
  } catch (error) {
    // Show slideshow anyway (fallback)
    loaderElement.style.display = "none";
    slideshowWrapper.style.display = "block";
    dotsContainer.style.display = "flex";
    initializeSlideshow();
  }
}

// Slideshow initialization function
function initializeSlideshow() {
  let slideIndex = 0;
  let slideTimer = null;

  function showSlides(n) {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    if (n >= slides.length) {
      slideIndex = 0;
    }
    if (n < 0) {
      slideIndex = slides.length - 1;
    }

    // Hide all slides
    slides.forEach((slide) => {
      slide.style.display = "none";
    });

    // Remove active class from all dots
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });

    // Show current slide and highlight current dot
    if (slides[slideIndex]) {
      slides[slideIndex].style.display = "block";
    }
    if (dots[slideIndex]) {
      dots[slideIndex].classList.add("active");
    }
  }

  window.changeSlide = (n) => {
    clearTimeout(slideTimer);
    showSlides((slideIndex += n));
    startAutoSlide();
  };

  window.currentSlide = (n) => {
    clearTimeout(slideTimer);
    showSlides((slideIndex = n));
    startAutoSlide();
  };

  function startAutoSlide() {
    slideTimer = setTimeout(() => {
      slideIndex++;
      showSlides(slideIndex);
      startAutoSlide();
    }, 5000);
  }

  showSlides(slideIndex);
  startAutoSlide();

  // Pause slideshow on hover
  const slideshowWrapper = document.querySelector(".slideshow-wrapper");
  if (slideshowWrapper) {
    slideshowWrapper.addEventListener("mouseenter", () => {
      clearTimeout(slideTimer);
    });

    slideshowWrapper.addEventListener("mouseleave", () => {
      startAutoSlide();
    });
  }
}

initializeSlideshowWithPreload();

// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  // Honeypot check
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

  // const APIKEY = "R8Nmsp-pvZX5XYWxDPaqwXJOgYDWEklo_xjJDOiTYts";
  // const URL = "https://pimadev.pythonanywhere.com/api/v1/send-email/";

  const APIKEY = "f53qVR9rSSWibTd9Z1NL162wniyJsNhOled4jUxYbX8";
  const URL = "http://127.0.0.1:8000/api/v1/send-email/";

  // Show loading state
  const submitBtn = e.target.querySelector(".submit-btn");
  const originalText = submitBtn.textContent;
  submitBtn.textContent = "Connecting...";
  submitBtn.disabled = true;

  try {
    const response = await fetch(`${URL}?apikey=${APIKEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(normalizedData),
    });

    const result = await response.json();

    if (response.ok) {
      showMessage(
        "Thank you! We've received your information and will connect you with the perfect teacher for your child within 24 hours. Check your email for next steps!",
        "success"
      );
      e.target.reset();
    } else {
      showMessage(
        "Failed to send message. Please try again or contact us directly at admin@pimahealth.co",
        "error"
      );
    }
  } catch (error) {
    console.error("Form submission error:", error);
    showMessage(
      "There was an error sending your message. Please try again or contact us directly at admin@pimahealth.co",
      "error"
    );
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
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
    background: linear-gradient(135deg, #f5576c, #c42a3fff);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 0 4px 20px #ff7c8eff;
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
const curDateEl = document.getElementById("curDate");
curDateEl.textContent = curDate;
