// Admin Portal JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Login functionality
    const loginBtn = document.getElementById('admin-login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            // In a real application, this would validate credentials
            window.location.href = 'dashboard.html';
        });
    }

    // Charts initialization (if on dashboard page)
    initCharts();

    // Modal functionality
    setupModals();

    // Tab functionality
    setupTabs();

    // Dropdown functionality
    setupDropdowns();

    // Table row click handlers
    setupTableRowClicks();
});

// Initialize charts on dashboard
function initCharts() {
    // Health Score Chart
    const healthScoreChart = document.getElementById('healthScoreChart');
    if (healthScoreChart) {
        new Chart(healthScoreChart, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Average Health Score',
                    data: [7.2, 6.8, 7.5, 6.9, 7.3, 7.8, 7.5],
                    borderColor: '#4285f4',
                    backgroundColor: 'rgba(66, 133, 244, 0.1)',
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 5,
                        max: 10,
                        ticks: {
                            stepSize: 1
                        }
                    }
                }
            }
        });
    }

    // Risk Event Chart
    const riskEventChart = document.getElementById('riskEventChart');
    if (riskEventChart) {
        new Chart(riskEventChart, {
            type: 'bar',
            data: {
                labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],
                datasets: [{
                    label: 'High Risk Events',
                    data: [5, 2, 1, 3, 4, 8, 12, 7],
                    backgroundColor: '#ea4335'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 2
                        }
                    }
                }
            }
        });
    }
}

// Setup modal functionality
function setupModals() {
    // Open user detail modal
    const viewUserBtns = document.querySelectorAll('.btn-icon[title="View Profile"]');
    const userDetailModal = document.getElementById('user-detail-modal');
    
    if (viewUserBtns.length > 0 && userDetailModal) {
        viewUserBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                userDetailModal.style.display = 'block';
            });
        });
        
        // Close modal
        const closeModalBtns = document.querySelectorAll('.close-modal');
        closeModalBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const modal = this.closest('.modal');
                if (modal) {
                    modal.style.display = 'none';
                }
            });
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = 'none';
            }
        });
    }

    // Alert detail modal
    const viewAlertBtns = document.querySelectorAll('.btn-icon[title="View Details"]');
    const alertDetailModal = document.getElementById('alert-detail-modal');
    
    if (viewAlertBtns.length > 0 && alertDetailModal) {
        viewAlertBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                alertDetailModal.style.display = 'block';
            });
        });
    }
}

// Setup tab functionality
function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all tabs
                document.querySelectorAll('.tab-btn').forEach(tab => {
                    tab.classList.remove('active');
                });
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Hide all tab content
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                
                // Show selected tab content
                const tabId = this.getAttribute('data-tab');
                document.getElementById(tabId + '-tab').classList.add('active');
            });
        });
    }
}

// Setup dropdown functionality
function setupDropdowns() {
    const profileDropdown = document.querySelector('.profile-dropdown');
    
    if (profileDropdown) {
        profileDropdown.addEventListener('click', function() {
            // This would toggle a dropdown menu in a real application
            console.log('Profile dropdown clicked');
        });
    }
}

// Setup table row clicks
function setupTableRowClicks() {
    // Select all checkboxes functionality
    const selectAllCheckbox = document.getElementById('select-all');
    
    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', function() {
            const checkboxes = document.querySelectorAll('tbody input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                checkbox.checked = this.checked;
            });
        });
    }

    // Status change buttons
    const statusBtns = document.querySelectorAll('.btn-status');
    
    if (statusBtns.length > 0) {
        statusBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.btn-status').forEach(b => {
                    b.classList.remove('active');
                });
                this.classList.add('active');
            });
        });
    }
}
