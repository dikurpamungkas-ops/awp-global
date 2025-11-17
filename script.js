// Smooth scrolling function
function scrollToPortfolio() {
  const portfolioSection = document.getElementById("portfolio");
  if (portfolioSection) {
    portfolioSection.scrollIntoView({
      behavior: "smooth",
      block: "start" });

  }
}

// Generic scroll to section function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start" });

  } else {
    // If section doesn't exist, scroll to portfolio as fallback
    scrollToPortfolio();
  }
}

// Animated counter function
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16); // 60 FPS
  let current = start;

  element.classList.add("counting");

  const timer = setInterval(() => {
    current += increment;

    if (current >= target) {
      current = target;
      clearInterval(timer);
      element.classList.remove("counting");

      // Add suffix for specific stats
      const label = element.nextElementSibling.textContent;
      if (label.includes("Projects") || label.includes("Team")) {
        element.textContent = Math.floor(current) + "+";
      } else if (label.includes("Satisfaction")) {
        element.textContent = Math.floor(current) + "%";
      } else {
        element.textContent = Math.floor(current);
      }
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// Stats animation trigger
function animateStats() {
  const statNumbers = document.querySelectorAll(".stat-number");
  statNumbers.forEach((stat, index) => {
    const target = parseInt(stat.dataset.target);
    // Stagger the animations
    setTimeout(() => {
      animateCounter(stat, target);
    }, index * 200);
  });
}

// Project interaction handlers
function openProject(projectId) {
  const projects = {
    1: "Our Private Wealth Management services provide: Personalized Financial Planning, Portfolio Strategy & Management, Wealth Preservation, Retirement Planning, Multigenerational Wealth Transfer",
    2: "Our Investment Advisory services include: Strategic Asset Allocation, Market Research & Insights, Portfolio Monitoring, Risk Management, Tax-Efficient Investing",
    3: "Our Trade Finance solutions support: Cross-Border Transactions, Trade Financing Solutions, Risk Mitigation, Payment Solutions",
    4: "Our Corporate Advisory strategic guidance: Company Structuring, Corporate Strategy, Market Research, Operational Improvement, Business Succession Planning",
    5: "AR Experience - Cutting-edge augmented reality product visualization",
    6: "SaaS Dashboard - Analytics platform trusted by Fortune 500 companies" };


  // Create modal effect
  const modal = document.createElement("div");
  modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(5, 28, 44, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2000;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;

  const content = document.createElement("div");
  content.style.cssText = `
                background: rgba(5, 28, 44, 0.1);
                backdrop-filter: blur(20px);
                border-radius: 30px;
                padding: 40px;
                max-width: 500px;
                text-align: center;
                color: white;
                border: 1px solid rgba(255, 255, 255, 0.2);
            `;

  content.innerHTML = `
                <h3 style="margin-bottom: 20px; font-size: 1.5rem;">${projects[projectId]}</h3>
                <p style="margin-bottom: 30px; color: #aaa;">www.awp.global</p>
                <button onclick="closeModal()" style="
                    background: linear-gradient(135deg, #051C2C, #aaa);
                    border: none;
                    color: white;
                    padding: 12px 30px;
                    border-radius: 20px;
                    cursor: pointer;
                    font-weight: 600;
                ">Close</button>
            `;

  modal.appendChild(content);
  document.body.appendChild(modal);

  // Trigger animation
  setTimeout(() => modal.style.opacity = "1", 10);

  // Store modal reference
  window.currentModal = modal;
}

function closeModal() {
  if (window.currentModal) {
    window.currentModal.style.opacity = "0";
    setTimeout(() => {
      document.body.removeChild(window.currentModal);
      window.currentModal = null;
    }, 300);
  }
}

function startProject() {
  // Create contact form modal
  const modal = document.createElement("div");
  modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(5, 28, 44, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2000;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;

  const form = document.createElement("div");
  form.style.cssText = `
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(20px);
                border-radius: 30px;
                padding: 40px;
                max-width: 400px;
                width: 90%;
                text-align: center;
                color: white;
                border: 1px solid rgba(255, 255, 255, 0.2);
            `;

  form.innerHTML = `
                <h3 style="margin-bottom: 20px; font-size: 1.5rem;">Let's Start a Conversation</h3>
                <p style="margin-bottom: 30px; color: #aaa;">Whether you're seeking investment advice, planning for retirement, or exploring corporate structuring options, our team is ready to help you achieve more.</p>
                <div style="text-align: left; margin-bottom: 30px;">
                    <input type="text" placeholder="Your Name" style="width: 100%; padding: 12px; margin-bottom: 15px; border: none; border-radius: 15px; background: rgba(255,255,255,0.1); color: white; border: 1px solid rgba(255,255,255,0.2);">
                    <input type="email" placeholder="Email Address" style="width: 100%; padding: 12px; margin-bottom: 15px; border: none; border-radius: 15px; background: rgba(255,255,255,0.1); color: white; border: 1px solid rgba(255,255,255,0.2);">
                    <textarea placeholder="Tell us about your project..." style="width: 100%; padding: 12px; height: 80px; border: none; border-radius: 15px; background: rgba(255,255,255,0.1); color: white; border: 1px solid rgba(255,255,255,0.2); resize: vertical;"></textarea>
                </div>
                <div style="display: flex; gap: 15px; justify-content: center;">
                    <button onclick="submitForm()" style="
                        background: linear-gradient(135deg, #051C2C, #051C2C);
                        border: none;
                        color: white;
                        padding: 12px 25px;
                        border-radius: 20px;
                        cursor: pointer;
                        font-weight: 600;
                    ">Send Message</button>
                    <button onclick="closeModal()" style="
                        background: transparent;
                        border: 2px solid #051C2C;
                        color: #fff;
                        padding: 12px 25px;
                        border-radius: 20px;
                        cursor: pointer;
                        font-weight: 600;
                    ">Cancel</button>
                </div>
            `;

  modal.appendChild(form);
  document.body.appendChild(modal);

  setTimeout(() => modal.style.opacity = "1", 10);
  window.currentModal = modal;
}

function submitForm() {
  alert("🚀 Message sent! We'll get back to you within 24 hours.");
  closeModal();
}

// Parallax scrolling effect
window.addEventListener("scroll", () => {
  if (window.innerWidth > 768) {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll(".floating-shape");

    parallaxElements.forEach((element, index) => {
      const speed = 0.5 + index * 0.2;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  }
});

// Add intersection observer for animations
const observerOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -50px 0px" };


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";

      // Trigger stats animation when stats section is visible
      if (entry.target.classList.contains("stats-section")) {
        animateStats();
        // Unobserve after animation to prevent re-triggering
        observer.unobserve(entry.target);
      }
    }
  });
}, observerOptions);

// Observe all animated elements
document.addEventListener("DOMContentLoaded", () => {
  document.
  querySelectorAll(".portfolio-item, .stats-section").
  forEach(item => {
    observer.observe(item);
  });
});

// Add dynamic background color shifting
if (window.innerWidth > 768) {
  setInterval(() => {
    const heroBg = document.querySelector(".hero-bg");
    const time = Date.now() / 5000;
    const hue = Math.sin(time) * 30;
    heroBg.style.filter = `hue-rotate(${hue}deg)`;
  }, 100);
}

// Close modal on escape key
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && window.currentModal) {
    closeModal();
  }
});

// Close modal on backdrop click
document.addEventListener("click", e => {
  if (e.target === window.currentModal) {
    closeModal();
  }
});

// Fog
var x = 0
bgs = {
  0: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
  1: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
  2: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
}
setInterval(changeBg, 10000);
function changeBg() {
  console.log('hey', new Date())
  var r = document.querySelector(':root')
  r.style.setProperty("--bg", `url(${bgs[x]})`)
  x = (x+1)%Object.keys(bgs).length
}


// Professional Footer Enhancement Script
// Clean, performant, and accessibility-focused

(function() {
    'use strict';
    
    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', initFooter);
    
    function initFooter() {
        const footer = document.getElementById('proFooter');
        if (!footer) return;
        
        // Configuration
        const config = {
            animationDuration: 600,
            observerThreshold: 0.1,
            tooltipDelay: 300
        };
        
        // Initialize all footer features
        setupIntersectionObserver();
        updateDynamicContent();
        enhanceAccessibility();
        setupSmoothInteractions();
        
        // Intersection Observer for reveal animations
        function setupIntersectionObserver() {
            if (!('IntersectionObserver' in window)) return;
            
            const observerOptions = {
                threshold: config.observerThreshold,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            
            // Observe footer sections
            const elements = footer.querySelectorAll('.footer-section');
            elements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                observer.observe(el);
            });
        }
        
        // Update dynamic content
        function updateDynamicContent() {
            // Auto-update copyright year
            const yearElement = footer.querySelector('.year');
            if (yearElement) {
                yearElement.textContent = new Date().getFullYear();
            }
            
            // Mark current page in navigation
            const currentPath = window.location.pathname;
            const navLinks = footer.querySelectorAll('.nav-link');
            
            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href === currentPath || (href === '/' && currentPath === '/index.html')) {
                    link.setAttribute('aria-current', 'page');
                    link.style.color = 'var(--footer-hover)';
                    link.style.fontWeight = '500';
                }
            });
        }
        
        // Enhance accessibility
        function enhanceAccessibility() {
            // Add keyboard navigation indicator
            let isKeyboardNav = false;
            
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    isKeyboardNav = true;
                    document.body.classList.add('keyboard-nav');
                }
            });
            
            document.addEventListener('mousedown', () => {
                isKeyboardNav = false;
                document.body.classList.remove('keyboard-nav');
            });
            
            // Enhance social links with tooltips
            const socialLinks = footer.querySelectorAll('.social-link');
            
            socialLinks.forEach(link => {
                const label = link.getAttribute('aria-label');
                if (!label) return;
                
                let tooltip = null;
                let tooltipTimeout = null;
                
                const showTooltip = () => {
                    tooltip = document.createElement('span');
                    tooltip.className = 'social-tooltip';
                    tooltip.textContent = label;
                    tooltip.setAttribute('role', 'tooltip');
                    
                    // Style the tooltip
                    Object.assign(tooltip.style, {
                        position: 'absolute',
                        bottom: 'calc(100% + 8px)',
                        left: '50%',
                        transform: 'translateX(-50%) translateY(4px)',
                        background: 'var(--footer-text)',
                        color: 'var(--footer-bg)',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        fontSize: '0.8125rem',
                        fontWeight: '500',
                        whiteSpace: 'nowrap',
                        opacity: '0',
                        pointerEvents: 'none',
                        zIndex: '10',
                        transition: 'all var(--transition-base)'
                    });
                    
                    // Add arrow
                    const arrow = document.createElement('span');
                    Object.assign(arrow.style, {
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '0',
                        height: '0',
                        borderLeft: '4px solid transparent',
                        borderRight: '4px solid transparent',
                        borderTop: '4px solid var(--footer-text)'
                    });
                    
                    tooltip.appendChild(arrow);
                    link.style.position = 'relative';
                    link.appendChild(tooltip);
                    
                    // Animate in
                    requestAnimationFrame(() => {
                        tooltip.style.opacity = '1';
                        tooltip.style.transform = 'translateX(-50%) translateY(0)';
                    });
                };
                
                const hideTooltip = () => {
                    if (tooltip) {
                        tooltip.style.opacity = '0';
                        tooltip.style.transform = 'translateX(-50%) translateY(4px)';
                        
                        setTimeout(() => {
                            if (tooltip && tooltip.parentNode) {
                                tooltip.remove();
                                tooltip = null;
                            }
                        }, 200);
                    }
                };
                
                // Mouse events
                link.addEventListener('mouseenter', () => {
                    tooltipTimeout = setTimeout(showTooltip, config.tooltipDelay);
                });
                
                link.addEventListener('mouseleave', () => {
                    clearTimeout(tooltipTimeout);
                    hideTooltip();
                });
                
                // Keyboard focus events
                link.addEventListener('focus', () => {
                    if (isKeyboardNav) showTooltip();
                });
                
                link.addEventListener('blur', hideTooltip);
            });
        }
        
        // Setup smooth interactions
        function setupSmoothInteractions() {
            // Email obfuscation
            const emailLinks = footer.querySelectorAll('a[href^="mailto:"]');
            emailLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const email = link.getAttribute('href').substring(7);
                    window.location.href = `mailto:${email}`;
                });
            });
            
            // Smooth scroll for anchor links
            const anchorLinks = footer.querySelectorAll('a[href^="#"]');
            anchorLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    const targetId = link.getAttribute('href');
                    if (targetId === '#') return;
                    
                    e.preventDefault();
                    const target = document.querySelector(targetId);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
            
            // Add micro-interactions to buttons
            const interactiveElements = footer.querySelectorAll('a, button');
            interactiveElements.forEach(el => {
                el.addEventListener('mousedown', function() {
                    this.style.transform = 'scale(0.98)';
                });
                
                el.addEventListener('mouseup', function() {
                    this.style.transform = '';
                });
                
                el.addEventListener('mouseleave', function() {
                    this.style.transform = '';
                });
            });
        }
        
        // Performance monitoring (development only)
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            const startTime = performance.now();
            
            window.addEventListener('load', () => {
                const loadTime = performance.now() - startTime;
                console.log(`Footer initialized in ${loadTime.toFixed(2)}ms`);
            });
        }
    }
    
    // Add CSS for smooth animations
    const style = document.createElement('style');
    style.textContent = `
        .footer-section.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        body.keyboard-nav *:focus {
            outline: 2px solid var(--footer-hover) !important;
            outline-offset: 3px !important;
        }
        
        @media (prefers-reduced-motion: reduce) {
            .footer-section {
                opacity: 1 !important;
                transform: none !important;
                transition: none !important;
            }
        }
    `;
    document.head.appendChild(style);
})();

/// buttons
"use strict";
document.querySelectorAll('button').forEach((button) => {
    const div = document.createElement('div');
    const span = button.querySelector('span');
    let colorWhite = true;
    gsap.to(button, {
        '--alternative-gradient-opacity': .25,
        yoyo: true,
        repeat: -1,
        duration: 5,
        repeatDelay: 10
    });
    const animateSVG = () => {
        const svg = createSvg(colorWhite ? 'white' : 'black');
        colorWhite = !colorWhite;
        div.appendChild(svg);
        gsap.to(svg, {
            opacity: gsap.utils.random(.5, .65),
        });
        gsap.set(svg, {
            left: gsap.utils.random('25%', '100%'),
            top: gsap.utils.random('25%', '100%'),
        });
        gsap.to(svg, {
            x: '-200%',
            y: '-200%',
            duration: gsap.utils.random(14, 20),
            onComplete: () => {
                svg.remove();
            }
        });
    };
    window.setInterval(() => {
        animateSVG();
    }, 1000);
    button.appendChild(div);
    button.addEventListener('click', () => {
        gsap.to(button, {
            keyframes: [{
                    scale: .97,
                    duration: .1
                }, {
                    scale: 1,
                    duration: .6,
                    ease: 'elastic(.6, 1)'
                }]
        });
        gsap.to(span, {
            '--button-glow-1-scale': '1.2',
            '--button-glow-1-blur': '12px',
            duration: .8,
            clearProps: true
        });
        gsap.to(span, {
            keyframes: [{
                    '--button-glow-1-opacity': '.8',
                    duration: .15
                }, {
                    '--button-glow-1-opacity': '0',
                    duration: .3,
                    delay: .3
                }]
        });
        gsap.to(span, {
            '--button-glow-2-scale': '1.2',
            '--button-glow-2-blur': '10px',
            duration: .6,
            delay: .1,
            clearProps: true
        });
        gsap.to(span, {
            keyframes: [{
                    '--button-glow-2-opacity': '.8',
                    duration: .15,
                    delay: .1
                }, {
                    '--button-glow-2-opacity': '0',
                    duration: .15,
                    delay: .3
                }]
        });
    });
});
const createSvg = (fillColor) => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("viewBox", "0 0 147 60");
    svg.setAttribute("fill", "none");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("preserveAspectRatio", "none");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M146.5 2.00038C120 -1 104 6.00038 73.75 30.0004C43.5 54.0004 19.5 60.5004 1 58.0004");
    path.setAttribute("stroke", fillColor);
    path.setAttribute("stroke-width", "2");
    svg.appendChild(path);
    return svg;
};