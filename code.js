document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggleBtn = document.getElementById('theme-toggle');
    const heroSection = document.getElementById('home-section');
    const signupSection = document.getElementById('signup-section');
    const loginSection = document.getElementById('login-section');
    const dashboardSection = document.getElementById('dashboard-section');

    const freeTrialButtons = document.querySelectorAll('.free-trial-btn');
    const signInButton = document.getElementById('nav-signin');
    const showLoginLink = document.getElementById('show-login');
    const showSignupLink = document.getElementById('show-signup');
    const logoutButton = document.getElementById('logout-btn');

    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const daysLeftElement = document.getElementById('days-left');
    const userNameElement = document.getElementById('user-name');
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userName = localStorage.getItem('userName');
    let trialDaysRemaining = 14;

    const showSection = (sectionToShow) => {
        const sections = [heroSection, signupSection, loginSection, dashboardSection];
        sections.forEach(section => {
            if (section) {
                section.classList.add('hidden');
            }
        });
        if (sectionToShow) {
            sectionToShow.classList.remove('hidden');
        }
    };

    const updateTrialDays = () => {
        if (daysLeftElement) {
            daysLeftElement.textContent = trialDaysRemaining;
        }
    };

    const updateDashboard = () => {
        const storedName = localStorage.getItem('userName');
        if (userNameElement && storedName) {
            userNameElement.textContent = storedName;
        }
        updateTrialDays();
    };
    const checkLoginStatus = () => {
        const loggedInStatus = localStorage.getItem('isLoggedIn');
        if (loggedInStatus === 'true') {
            showSection(dashboardSection);
            updateDashboard();
        } else {
            showSection(heroSection);
        }
    };

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const isDark = body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggleBtn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });

    freeTrialButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            showSection(signupSection);
        });
    });
    signInButton.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(loginSection);
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signup-name').value;
        if (name) {
            localStorage.setItem('userName', name);
            alert('Account created successfully! Please log in to start your free trial.');
            showSection(loginSection);
        }
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (email && password) {
            localStorage.setItem('isLoggedIn', 'true');
            showSection(dashboardSection);
            updateDashboard();
        } else {
            alert('Please enter your email and password.');
        }
    });

    if (showLoginLink) {
        showLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            showSection(loginSection);
        });
    }

    if (showSignupLink) {
        showSignupLink.addEventListener('click', (e) => {
            e.preventDefault();
            showSection(signupSection);
        });
    }

    logoutButton.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userName');
        showSection(heroSection);
        signupForm.reset();
        loginForm.reset();
    });

    document.getElementById('current-year').textContent = new Date().getFullYear();

    checkLoginStatus();

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        body.classList.remove('dark-theme');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
});