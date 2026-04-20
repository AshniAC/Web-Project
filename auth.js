function checkAuth() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.href = 'index.html';
    }
    return currentUser;
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

function getCurrentUser() {
    return localStorage.getItem('currentUser');
}

function getUserDataKey(key) {
    const user = getCurrentUser();
    return `${user}_${key}`;
}