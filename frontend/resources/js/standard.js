function toggleTheme() {
    if (document.body.classList.contains('dark_theme')) {
        document.body.classList.remove('dark_theme');
        document.body.classList.add('light_theme');
        localStorage.setItem('theme', 'light_theme');
    } else {
        document.body.classList.remove('light_theme');
        document.body.classList.add('dark_theme');
        localStorage.setItem('theme', 'dark_theme');
    }
}

function loadThemePreference() {
    const theme = localStorage.getItem('theme') || 'dark_theme';
    document.body.classList.add(theme);
}

// Call loadThemePreference on page load
document.addEventListener('DOMContentLoaded', loadThemePreference);
