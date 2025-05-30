// App state
const appState = {
    currentPage: 'login',
    user: {
        name: 'John',
        riskLevel: 'normal' // normal, moderate, high
    }
};

// Page templates
const pages = {
    // 所有页面模板
    login: `
        <div class="page active" id="login-page">
            <div class="login-container">
                <div class="app-logo">
                    <i class="fas fa-heartbeat"></i>
                </div>
                <div class="login-form">
                    <h2 class="text-center">Recovery Support</h2>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" id="username" placeholder="Enter your username">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password">
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number (for verification)</label>
                        <input type="tel" id="phone" placeholder="Enter your phone number">
                    </div>
                    <button class="btn" id="login-btn">Login</button>
                    <div class="links">
                        <a href="#" id="forgot-password">Forgot Password?</a> | 
                        <a href="#" id="signup-link">Sign Up</a>
                    </div>
                    <div class="privacy-note">
                        By logging in, you agree to our <a href="#">Privacy Policy</a> and <a href="#">User Agreement</a>.<br>
                        Compliance with Australian Privacy Act 1988.
                    </div>
                </div>
            </div>
        </div>
    `,
    dashboard: `
        <div class="page active" id="dashboard-page">
            <div class="dashboard">
                <div class="welcome-header">
                    <h2>Good Morning, <span id="user-name">John</span></h2>
                    <p>Here's your health status today</p>
                </div>
                
                <!-- Patch Device Status Panel -->
                <div class="device-status-card">
                    <div class="device-status-item">
                        <div class="device-icon connected">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <div class="device-info">
                            <h4>Connected</h4>
                            <p>Transmitting data</p>
                        </div>
                    </div>
                    
                    <div class="device-status-item">
                        <div class="device-icon">
                            <i class="fas fa-battery-three-quarters"></i>
                        </div>
                        <div class="device-info">
                            <h4>Battery: 75%</h4>
                            <p>~3 days remaining</p>
                        </div>
                    </div>
                    
                    <div class="device-status-item">
                        <div class="device-icon">
                            <i class="fas fa-sync"></i>
                        </div>
                        <div class="device-info">
                            <h4>Last synced</h4>
                            <p>3 mins ago</p>
                        </div>
                    </div>
                    
                    <div class="device-status-item">
                        <div class="device-icon">
                            <i class="fas fa-check"></i>
                        </div>
                        <div class="device-info">
                            <h4>Skin Contact</h4>
                            <p>Secure contact</p>
                        </div>
                    </div>
                </div>
                
                <!-- Today's Summary Section -->
                <div class="summary-card">
                    <div class="quick-mood-check">
                        <h3>How are you feeling?</h3>
                        <button class="btn" id="quick-cbt-btn">Tap to check in</button>
                    </div>
                    
                    <div class="summary-message">
                        <i class="fas fa-info-circle"></i>
                        <p>No anomalies detected in the last 6 hours</p>
                    </div>
                </div>
                
                <!-- Mini Dashboard Graphs -->
                <div class="mini-charts-container">
                    <h3>Real-time Physiological Data</h3>
                    
                    <div class="mini-chart-grid">
                        <div class="mini-chart" id="heart-rate-mini" data-page="physio">
                            <h4>Heart Rate</h4>
                            <div class="mini-chart-visual">
                                <div class="chart-placeholder mini">
                                    <div class="mini-line-chart"></div>
                                </div>
                            </div>
                            <div class="mini-chart-value normal">
                                <span class="value">72</span>
                                <span class="unit">BPM</span>
                            </div>
                        </div>
                        
                        <div class="mini-chart" id="eda-mini" data-page="physio">
                            <h4>EDA</h4>
                            <div class="mini-chart-visual">
                                <div class="chart-placeholder mini">
                                    <div class="mini-line-chart"></div>
                                </div>
                            </div>
                            <div class="mini-chart-value normal">
                                <span class="value">2.4</span>
                                <span class="unit">μS</span>
                            </div>
                        </div>
                        
                        <div class="mini-chart" id="respiration-mini" data-page="physio">
                            <h4>Respiration</h4>
                            <div class="mini-chart-visual">
                                <div class="chart-placeholder mini">
                                    <div class="mini-wave-chart"></div>
                                </div>
                            </div>
                            <div class="mini-chart-value normal">
                                <span class="value">16</span>
                                <span class="unit">br/min</span>
                            </div>
                        </div>
                        
                        <div class="mini-chart" id="temp-mini" data-page="physio">
                            <h4>Temperature</h4>
                            <div class="mini-chart-visual">
                                <div class="chart-placeholder mini">
                                    <div class="mini-temp-indicator"></div>
                                </div>
                            </div>
                            <div class="mini-chart-value normal">
                                <span class="value">36.5°C</span>
                                <span class="trend"><i class="fas fa-arrow-up"></i> 0.3°C</span>
                            </div>
                        </div>
                        
                        <div class="mini-chart" id="activity-mini" data-page="physio">
                            <h4>Activity</h4>
                            <div class="mini-chart-visual">
                                <div class="chart-placeholder mini">
                                    <div class="mini-activity-indicator"></div>
                                </div>
                            </div>
                            <div class="mini-chart-value normal">
                                <span class="value">Active</span>
                                <span class="steps">3,245 steps</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="quick-actions">
                    <button class="btn quick-action-btn" id="cbt-btn">
                        <i class="fas fa-clipboard-check"></i><br>
                        Daily Check-in
                    </button>
                    <button class="btn btn-danger quick-action-btn" id="support-btn">
                        <i class="fas fa-phone-alt"></i><br>
                        Get Support
                    </button>
                </div>
            </div>
            
            <div class="bottom-nav">
                <a href="#" class="nav-item active" data-page="dashboard">
                    <i class="fas fa-home"></i>
                    <span>Home</span>
                </a>
                <a href="#" class="nav-item" data-page="physio">
                    <i class="fas fa-chart-line"></i>
                    <span>Status</span>
                </a>
                <a href="#" class="nav-item" data-page="community">
                    <i class="fas fa-users"></i>
                    <span>Support</span>
                </a>
                <a href="#" class="nav-item" data-page="settings">
                    <i class="fas fa-cog"></i>
                    <span>Settings</span>
                </a>
            </div>
        </div>
    `,
    physio: `
        <div class="page" id="physio-page">
            <div class="page-header">
                <button class="back-btn" data-page="dashboard"><i class="fas fa-arrow-left"></i></button>
                <h2>Physiological Status</h2>
                <div style="width: 20px;"></div>
            </div>
            
            <!-- Time Range Selector -->
            <div class="time-range-selector">
                <button class="time-range-btn active" data-range="24h">Last 24h</button>
                <button class="time-range-btn" data-range="7d">7d</button>
                <button class="time-range-btn" data-range="30d">30d</button>
                <button class="time-range-btn" data-range="custom">Custom</button>
            </div>
            
            <div class="physio-charts">
                <!-- Heart Rate Chart -->
                <div class="chart-with-details">
                    <div class="chart-header">
                        <h3>Heart Rate</h3>
                        <div class="chart-legend">
                            <span class="legend-item"><span class="legend-color normal"></span> Normal</span>
                            <span class="legend-item"><span class="legend-color elevated"></span> Elevated</span>
                            <span class="legend-item"><span class="legend-color high"></span> High</span>
                        </div>
                    </div>
                    <div class="chart-container">
                        <div class="chart-placeholder">
                            <div class="detailed-line-chart"></div>
                        </div>
                    </div>
                    <div class="chart-stats">
                        <div class="stat-item">
                            <span class="stat-label">Average</span>
                            <span class="stat-value">72 BPM</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Min</span>
                            <span class="stat-value">58 BPM</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Max</span>
                            <span class="stat-value">94 BPM</span>
                        </div>
                    </div>
                    <div class="abnormal-indicator">
                        <i class="fas fa-exclamation-circle"></i> Abnormal spike detected at 2:30 PM
                    </div>
                </div>
                
                <!-- EDA Chart -->
                <div class="chart-with-details">
                    <div class="chart-header">
                        <h3>EDA (Electrodermal Activity)</h3>
                        <div class="chart-info-icon">
                            <i class="fas fa-info-circle"></i>
                            <span class="tooltip">Measures stress and emotional responses</span>
                        </div>
                    </div>
                    <div class="chart-container">
                        <div class="chart-placeholder">
                            <div class="detailed-spike-chart"></div>
                        </div>
                    </div>
                    <div class="chart-stats">
                        <div class="stat-item">
                            <span class="stat-label">Baseline</span>
                            <span class="stat-value">2.1 μS</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Spikes</span>
                            <span class="stat-value">3 today</span>
                        </div>
                    </div>
                    <div class="event-marker">
                        <i class="fas fa-map-marker-alt"></i> Self-reported craving at 4:36 PM
                    </div>
                </div>
                
                <!-- Respiration Chart -->
                <div class="chart-with-details">
                    <h3>Respiration</h3>
                    <div class="chart-container">
                        <div class="chart-placeholder">
                            <div class="detailed-wave-chart"></div>
                        </div>
                    </div>
                    <div class="chart-stats">
                        <div class="stat-item">
                            <span class="stat-label">Rate</span>
                            <span class="stat-value">16 br/min</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Pattern</span>
                            <span class="stat-value">Normal</span>
                        </div>
                    </div>
                </div>
                
                <!-- Temperature Chart -->
                <div class="chart-with-details">
                    <h3>Body Temperature</h3>
                    <div class="chart-container">
                        <div class="chart-placeholder">
                            <div class="detailed-bar-chart"></div>
                        </div>
                    </div>
                    <div class="chart-stats">
                        <div class="stat-item">
                            <span class="stat-label">Current</span>
                            <span class="stat-value">36.5°C</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Change</span>
                            <span class="stat-value"><i class="fas fa-arrow-up"></i> 0.3°C</span>
                        </div>
                    </div>
                </div>
                
                <!-- Activity Chart -->
                <div class="chart-with-details">
                    <h3>Activity</h3>
                    <div class="chart-container">
                        <div class="chart-placeholder">
                            <div class="detailed-activity-chart"></div>
                        </div>
                    </div>
                    <div class="chart-stats">
                        <div class="stat-item">
                            <span class="stat-label">Steps</span>
                            <span class="stat-value">3,245</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Status</span>
                            <span class="stat-value">Active</span>
                        </div>
                    </div>
                </div>
                
                <!-- Sleep Chart (Optional) -->
                <div class="chart-with-details">
                    <h3>Sleep</h3>
                    <div class="chart-container">
                        <div class="chart-placeholder">
                            <div class="detailed-sleep-chart"></div>
                        </div>
                    </div>
                    <div class="chart-stats">
                        <div class="stat-item">
                            <span class="stat-label">Duration</span>
                            <span class="stat-value">7h 15m</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Quality</span>
                            <span class="stat-value">Good</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Insights & Suggestions Panel -->
            <div class="insights-panel">
                <h3>Insights & Suggestions</h3>
                <div class="insight-item">
                    <i class="fas fa-lightbulb"></i>
                    <p>Your average heart rate was elevated for 4 hours yesterday.</p>
                </div>
                <div class="insight-item">
                    <i class="fas fa-lightbulb"></i>
                    <p>You had two clusters of stress indicators near midnight. Consider adjusting your bedtime.</p>
                </div>
            </div>
            
            <!-- Recommendations -->
            <div class="recommendations">
                <h3>Recommended Interventions</h3>
                <div class="recommendation-item">
                    <i class="fas fa-lungs"></i>
                    <div>
                        <h4>Deep Breathing Exercise</h4>
                        <p>Try 5 minutes of deep breathing to reduce stress</p>
                    </div>
                </div>
                <div class="recommendation-item">
                    <i class="fas fa-walking"></i>
                    <div>
                        <h4>Light Physical Activity</h4>
                        <p>A short walk may help stabilize your heart rate</p>
                    </div>
                </div>
            </div>
            
            <!-- Export & Share -->
            <div class="export-share-panel">
                <button class="btn btn-secondary">
                    <i class="fas fa-download"></i> Download health summary
                </button>
                <button class="btn btn-secondary">
                    <i class="fas fa-share-alt"></i> Share with clinician
                </button>
            </div>
            
            <div class="bottom-nav">
                <a href="#" class="nav-item" data-page="dashboard">
                    <i class="fas fa-home"></i>
                    <span>Home</span>
                </a>
                <a href="#" class="nav-item active" data-page="physio">
                    <i class="fas fa-chart-line"></i>
                    <span>Status</span>
                </a>
                <a href="#" class="nav-item" data-page="community">
                    <i class="fas fa-users"></i>
                    <span>Support</span>
                </a>
                <a href="#" class="nav-item" data-page="settings">
                    <i class="fas fa-cog"></i>
                    <span>Settings</span>
                </a>
            </div>
        </div>
    `,
    cbt: `
        <div class="page" id="cbt-page">
            <div class="page-header">
                <button class="back-btn" data-page="dashboard"><i class="fas fa-arrow-left"></i></button>
                <h2>Daily Check-in</h2>
                <div style="width: 20px;"></div>
            </div>
            
            <div class="cbt-form">
                <h3>How are you feeling today?</h3>
                
                <div class="mood-slider">
                    <label>Your mood score (0-10):</label>
                    <input type="range" min="0" max="10" value="5" id="mood-slider">
                    <div class="mood-labels">
                        <span>0</span>
                        <span>5</span>
                        <span>10</span>
                    </div>
                </div>
                
                <div>
                    <label>Select emotions you're experiencing:</label>
                    <div class="emotion-buttons">
                        <button class="emotion-btn">Anxious</button>
                        <button class="emotion-btn">Tired</button>
                        <button class="emotion-btn">Relaxed</button>
                        <button class="emotion-btn">Motivated</button>
                        <button class="emotion-btn">Stressed</button>
                        <button class="emotion-btn">Hopeful</button>
                    </div>
                </div>
                
                <div class="question-prompt">
                    <label>What are you feeling right now?</label>
                    <textarea placeholder="Describe your current feelings..."></textarea>
                </div>
                
                <div class="question-prompt">
                    <label>What is your withdrawal management goal today?</label>
                    <textarea placeholder="Describe your goal..."></textarea>
                </div>
                
                <div class="question-prompt">
                    <label>What coping strategies will you use today?</label>
                    <textarea placeholder="List your strategies..."></textarea>
                </div>
                
                <button class="btn" id="submit-cbt">Submit Check-in</button>
            </div>
            
            <div class="bottom-nav">
                <a href="#" class="nav-item" data-page="dashboard">
                    <i class="fas fa-home"></i>
                    <span>Home</span>
                </a>
                <a href="#" class="nav-item" data-page="physio">
                    <i class="fas fa-chart-line"></i>
                    <span>Status</span>
                </a>
                <a href="#" class="nav-item" data-page="community">
                    <i class="fas fa-users"></i>
                    <span>Support</span>
                </a>
                <a href="#" class="nav-item" data-page="settings">
                    <i class="fas fa-cog"></i>
                    <span>Settings</span>
                </a>
            </div>
        </div>
    `,
    community: `
        <div class="page" id="community-page">
            <div class="page-header">
                <button class="back-btn" data-page="dashboard"><i class="fas fa-arrow-left"></i></button>
                <h2>Community Support</h2>
                <div style="width: 20px;"></div>
            </div>
            
            <div class="support-card">
                <h3>Richmond MSIR</h3>
                <div class="contact-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <div>
                        <h4>Address</h4>
                        <p>23 Lennox Street, Richmond VIC 3121</p>
                    </div>
                </div>
                <div class="contact-item">
                    <i class="fas fa-phone-alt"></i>
                    <div>
                        <h4>Phone</h4>
                        <p><a href="tel:+61394189800">+61 3 9418 9800</a></p>
                    </div>
                </div>
            </div>
            
            <div class="support-card">
                <h3>Support Hotlines</h3>
                <div class="contact-item">
                    <i class="fas fa-phone-alt"></i>
                    <div>
                        <h4>Lifeline</h4>
                        <p><a href="tel:131114">13 11 14</a> (24/7)</p>
                    </div>
                </div>
                <div class="contact-item">
                    <i class="fas fa-phone-alt"></i>
                    <div>
                        <h4>DirectLine (Alcohol & Drug Support)</h4>
                        <p><a href="tel:1800888236">1800 888 236</a> (24/7)</p>
                    </div>
                </div>
            </div>
            
            <div class="support-card">
                <h3>Community Groups</h3>
                <div class="contact-item">
                    <i class="fas fa-users"></i>
                    <div>
                        <h4>Narcotics Anonymous</h4>
                        <p><a href="tel:1300652820">1300 652 820</a></p>
                    </div>
                </div>
                <div class="contact-item">
                    <i class="fas fa-users"></i>
                    <div>
                        <h4>Alcoholics Anonymous</h4>
                        <p><a href="tel:1300222222">1300 222 222</a></p>
                    </div>
                </div>
            </div>
            
            <button class="btn btn-danger emergency-btn">
                <i class="fas fa-exclamation-circle"></i> Emergency Assistance (000)
            </button>
            
            <div class="bottom-nav">
                <a href="#" class="nav-item" data-page="dashboard">
                    <i class="fas fa-home"></i>
                    <span>Home</span>
                </a>
                <a href="#" class="nav-item" data-page="physio">
                    <i class="fas fa-chart-line"></i>
                    <span>Status</span>
                </a>
                <a href="#" class="nav-item active" data-page="community">
                    <i class="fas fa-users"></i>
                    <span>Support</span>
                </a>
                <a href="#" class="nav-item" data-page="settings">
                    <i class="fas fa-cog"></i>
                    <span>Settings</span>
                </a>
            </div>
        </div>
    `,
    settings: `
        <div class="page" id="settings-page">
            <div class="page-header">
                <button class="back-btn" data-page="dashboard"><i class="fas fa-arrow-left"></i></button>
                <h2>Settings</h2>
                <div style="width: 20px;"></div>
            </div>
            
            <div class="settings-list">
                <div class="settings-item" id="personal-info">
                    <div>Personal Information</div>
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div class="settings-item" id="privacy-settings">
                    <div>Privacy & Data</div>
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div class="settings-item" id="risk-settings">
                    <div>Risk Sensitivity Settings</div>
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div class="settings-item" id="notification-settings">
                    <div>Notifications</div>
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div class="settings-item" id="data-sharing">
                    <div>Data Sharing</div>
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div class="settings-item" id="about-help">
                    <div>About & Help</div>
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
            
            <button class="btn btn-secondary" id="logout-btn">Logout</button>
            
            <div class="bottom-nav">
                <a href="#" class="nav-item" data-page="dashboard">
                    <i class="fas fa-home"></i>
                    <span>Home</span>
                </a>
                <a href="#" class="nav-item" data-page="physio">
                    <i class="fas fa-chart-line"></i>
                    <span>Status</span>
                </a>
                <a href="#" class="nav-item" data-page="community">
                    <i class="fas fa-users"></i>
                    <span>Support</span>
                </a>
                <a href="#" class="nav-item active" data-page="settings">
                    <i class="fas fa-cog"></i>
                    <span>Settings</span>
                </a>
            </div>
        </div>
    `,
    dataSharing: `
        <div class="page" id="data-sharing-page">
            <div class="page-header">
                <button class="back-btn" data-page="settings"><i class="fas fa-arrow-left"></i></button>
                <h2>Data Sharing</h2>
                <div style="width: 20px;"></div>
            </div>
            
            <div class="support-card">
                <h3>Authorized Organizations</h3>
                <p>Control which organizations can access your health data</p>
                
                <div class="data-sharing-toggle">
                    <div>
                        <h4>Healthcare Provider</h4>
                        <p>Your primary healthcare provider</p>
                    </div>
                    <label class="toggle-switch">
                        <input type="checkbox" checked>
                        <span class="toggle-slider"></span>
                    </label>
                </div>
                
                <div class="data-sharing-toggle">
                    <div>
                        <h4>Community Health Services</h4>
                        <p>Local community health organizations</p>
                    </div>
                    <label class="toggle-switch">
                        <input type="checkbox" checked>
                        <span class="toggle-slider"></span>
                    </label>
                </div>
                
                <div class="data-sharing-toggle">
                    <div>
                        <h4>Research Institutions</h4>
                        <p>Anonymous data for research purposes</p>
                    </div>
                    <label class="toggle-switch">
                        <input type="checkbox">
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
            
            <div class="support-card">
                <h3>Data Sharing History</h3>
                <div class="contact-item">
                    <i class="fas fa-calendar-alt"></i>
                    <div>
                        <h4>May 28, 2025</h4>
                        <p>Data accessed by: Healthcare Provider</p>
                    </div>
                </div>
                <div class="contact-item">
                    <i class="fas fa-calendar-alt"></i>
                    <div>
                        <h4>May 25, 2025</h4>
                        <p>Data accessed by: Community Health Services</p>
                    </div>
                </div>
            </div>
            
            <div class="privacy-note">
                Your data helps healthcare providers manage your recovery effectively. 
                You can change these settings at any time.
            </div>
        </div>
    `,
    about: `
        <div class="page" id="about-page">
            <div class="page-header">
                <button class="back-btn" data-page="settings"><i class="fas fa-arrow-left"></i></button>
                <h2>About & Help</h2>
                <div style="width: 20px;"></div>
            </div>
            
            <div class="support-card about-section">
                <h3>About This App</h3>
                <p>This App helps monitor and support your recovery journey from methamphetamine addiction. It uses physiological data to detect potential risk situations and provides timely interventions.</p>
            </div>
            
            <div class="support-card">
                <h3>Frequently Asked Questions</h3>
                
                <div class="faq-item">
                    <div class="faq-question">How does the app detect risk?</div>
                    <div class="faq-answer">The app monitors physiological indicators like heart rate, EDA, and respiration to identify patterns associated with cravings or stress.</div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-question">Is my data secure?</div>
                    <div class="faq-answer">Yes, all your data is encrypted and stored securely in compliance with the Australian Privacy Act 1988.</div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-question">How do I update my emergency contacts?</div>
                    <div class="faq-answer">Go to Settings > Personal Information > Emergency Contacts to add or update your contacts.</div>
                </div>
            </div>
            
            <div class="support-card">
                <h3>Customer Support</h3>
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <div>
                        <h4>Email Support</h4>
                        <p><a href="mailto:support@recoveryapp.com.au">support@recoveryapp.com.au</a></p>
                    </div>
                </div>
                <div class="contact-item">
                    <i class="fas fa-phone-alt"></i>
                    <div>
                        <h4>Phone Support</h4>
                        <p><a href="tel:1800123456">1800 123 456</a> (Mon-Fri, 9am-5pm)</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    
    // 个人信息页面
    personalInfo: `
        <div class="page" id="personal-info-page">
            <div class="page-header">
                <button class="back-btn" data-page="settings"><i class="fas fa-arrow-left"></i></button>
                <h2>Personal Information</h2>
                <div style="width: 20px;"></div>
            </div>
            
            <div class="support-card">
                <div class="form-group">
                    <label for="user-fullname">Full Name</label>
                    <input type="text" id="user-fullname" value="John Smith">
                </div>
                
                <div class="form-group">
                    <label for="user-phone">Phone Number</label>
                    <input type="tel" id="user-phone" value="+61 400 123 456">
                </div>
                
                <div class="form-group">
                    <label for="user-email">Email</label>
                    <input type="email" id="user-email" value="john.smith@example.com">
                </div>
            </div>
            
            <div class="support-card">
                <h3>Emergency Contact</h3>
                <div class="form-group">
                    <label for="emergency-name">Contact Name</label>
                    <input type="text" id="emergency-name" value="Jane Smith">
                </div>
                
                <div class="form-group">
                    <label for="emergency-relation">Relationship</label>
                    <input type="text" id="emergency-relation" value="Spouse">
                </div>
                
                <div class="form-group">
                    <label for="emergency-phone">Phone Number</label>
                    <input type="tel" id="emergency-phone" value="+61 400 789 012">
                </div>
            </div>
            
            <button class="btn" id="save-personal-info">Save Changes</button>
        </div>
    `,
    
    // 隐私与数据页面
    privacyData: `
        <div class="page" id="privacy-data-page">
            <div class="page-header">
                <button class="back-btn" data-page="settings"><i class="fas fa-arrow-left"></i></button>
                <h2>Privacy & Data</h2>
                <div style="width: 20px;"></div>
            </div>
            
            <div class="support-card">
                <h3>Data Management</h3>
                
                <div class="settings-item">
                    <div>View Data Access History</div>
                    <i class="fas fa-chevron-right"></i>
                </div>
                
                <div class="settings-item">
                    <div>Request Data Export</div>
                    <i class="fas fa-chevron-right"></i>
                </div>
                
                <div class="settings-item">
                    <div>Request Data Deletion</div>
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
            
            <div class="support-card">
                <h3>Privacy Policy</h3>
                <p>Our app complies with the Australian Privacy Act 1988. We are committed to protecting your personal information and ensuring your data is handled securely.</p>
                <button class="btn btn-secondary">View Full Privacy Policy</button>
            </div>
        </div>
    `,
    
    // 风险敏感度设置页面
    riskSettings: `
        <div class="page" id="risk-settings-page">
            <div class="page-header">
                <button class="back-btn" data-page="settings"><i class="fas fa-arrow-left"></i></button>
                <h2>Risk Sensitivity</h2>
                <div style="width: 20px;"></div>
            </div>
            
            <div class="support-card">
                <h3>Alert Frequency</h3>
                <p>Adjust how often you receive risk alerts based on your physiological data</p>
                
                <div class="form-group">
                    <label>Alert Sensitivity</label>
                    <div class="mood-slider">
                        <input type="range" min="1" max="5" value="3" id="sensitivity-slider">
                        <div class="mood-labels">
                            <span>Low</span>
                            <span>Medium</span>
                            <span>High</span>
                        </div>
                    </div>
                </div>
                
                <div class="data-sharing-toggle">
                    <div>
                        <h4>Pause All Alerts</h4>
                        <p>Temporarily disable all risk alerts</p>
                    </div>
                    <label class="toggle-switch">
                        <input type="checkbox">
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
            
            <div class="support-card">
                <h3>Risk Thresholds</h3>
                <p>Customize the thresholds for different risk levels</p>
                
                <div class="settings-item">
                    <div>Heart Rate Thresholds</div>
                    <i class="fas fa-chevron-right"></i>
                </div>
                
                <div class="settings-item">
                    <div>EDA Thresholds</div>
                    <i class="fas fa-chevron-right"></i>
                </div>
                
                <div class="settings-item">
                    <div>Respiration Thresholds</div>
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
            
            <button class="btn" id="save-risk-settings">Save Settings</button>
        </div>
    `,
    
    // 通知设置页面
    notificationSettings: `
        <div class="page" id="notification-settings-page">
            <div class="page-header">
                <button class="back-btn" data-page="settings"><i class="fas fa-arrow-left"></i></button>
                <h2>Notifications</h2>
                <div style="width: 20px;"></div>
            </div>
            
            <div class="support-card">
                <h3>Notification Preferences</h3>
                
                <div class="data-sharing-toggle">
                    <div>
                        <h4>Risk Alerts</h4>
                        <p>High priority alerts for potential risk situations</p>
                    </div>
                    <label class="toggle-switch">
                        <input type="checkbox" checked>
                        <span class="toggle-slider"></span>
                    </label>
                </div>
                
                <div class="data-sharing-toggle">
                    <div>
                        <h4>Daily Check-in Reminders</h4>
                        <p>Reminders to complete your daily CBT check-in</p>
                    </div>
                    <label class="toggle-switch">
                        <input type="checkbox" checked>
                        <span class="toggle-slider"></span>
                    </label>
                </div>
                
                <div class="data-sharing-toggle">
                    <div>
                        <h4>Health Insights</h4>
                        <p>Weekly summaries of your health data</p>
                    </div>
                    <label class="toggle-switch">
                        <input type="checkbox" checked>
                        <span class="toggle-slider"></span>
                    </label>
                </div>
                
                <div class="data-sharing-toggle">
                    <div>
                        <h4>Community Updates</h4>
                        <p>Updates about support groups and resources</p>
                    </div>
                    <label class="toggle-switch">
                        <input type="checkbox">
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
            
            <div class="support-card">
                <h3>Quiet Hours</h3>
                <p>Set times when you don't want to receive non-emergency notifications</p>
                
                <div class="form-group">
                    <label for="quiet-start">Start Time</label>
                    <input type="time" id="quiet-start" value="22:00">
                </div>
                
                <div class="form-group">
                    <label for="quiet-end">End Time</label>
                    <input type="time" id="quiet-end" value="07:00">
                </div>
                
                <div class="data-sharing-toggle">
                    <div>
                        <h4>Enable Quiet Hours</h4>
                    </div>
                    <label class="toggle-switch">
                        <input type="checkbox" checked>
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
            
            <button class="btn" id="save-notification-settings">Save Settings</button>
        </div>
    `,
    alert: `
        <div class="alert-overlay" id="risk-alert">
            <div class="alert-box">
                <div class="alert-icon">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
                <div class="alert-title">High Risk Detected!</div>
                <div class="alert-message">
                    <p>Your heart rate & EDA levels are significantly elevated.</p>
                    <p>Immediate action is recommended.</p>
                </div>
                <div class="alert-actions">
                    <button class="btn" id="try-intervention">Try Guided Meditation</button>
                    <button class="btn btn-danger" id="need-support">I Need Support Now</button>
                    <button class="btn btn-secondary" id="im-okay">I'm Okay</button>
                </div>
            </div>
        </div>
    `
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    const appContainer = document.getElementById('app');
    
    // Load initial page
    appContainer.innerHTML = pages.login;
    
    // Event delegation for navigation
    document.body.addEventListener('click', function(event) {
        // Navigation buttons
        if (event.target.classList.contains('nav-item') || event.target.parentElement.classList.contains('nav-item')) {
            const navItem = event.target.classList.contains('nav-item') ? event.target : event.target.parentElement;
            const targetPage = navItem.dataset.page;
            navigateTo(targetPage);
            event.preventDefault();
        }
        
        // Back buttons
        if (event.target.classList.contains('back-btn') || (event.target.parentElement && event.target.parentElement.classList.contains('back-btn'))) {
            const backBtn = event.target.classList.contains('back-btn') ? event.target : event.target.parentElement;
            const targetPage = backBtn.dataset.page;
            navigateTo(targetPage);
            event.preventDefault();
        }
        
        // Login button
        if (event.target.id === 'login-btn') {
            navigateTo('dashboard');
            event.preventDefault();
        }
        
        // CBT check-in button
        if (event.target.id === 'cbt-btn' || (event.target.parentElement && event.target.parentElement.id === 'cbt-btn')) {
            navigateTo('cbt');
            event.preventDefault();
        }
        
        // Support button
        if (event.target.id === 'support-btn' || (event.target.parentElement && event.target.parentElement.id === 'support-btn')) {
            navigateTo('community');
            event.preventDefault();
        }
        
        // Settings items
        if (event.target.closest('#personal-info')) {
            navigateTo('personalInfo');
            event.preventDefault();
        }
        
        if (event.target.closest('#privacy-settings')) {
            navigateTo('privacyData');
            event.preventDefault();
        }
        
        if (event.target.closest('#notification-settings')) {
            navigateTo('notificationSettings');
            event.preventDefault();
        }
        
        if (event.target.closest('#risk-settings')) {
            navigateTo('riskSettings');
            event.preventDefault();
        }
        
        if (event.target.closest('#data-sharing')) {
            navigateTo('dataSharing');
            event.preventDefault();
        }
        
        if (event.target.closest('#about-help')) {
            navigateTo('about');
            event.preventDefault();
        }
        
        // Submit CBT form
        if (event.target.id === 'submit-cbt') {
            alert('Check-in submitted successfully!');
            navigateTo('dashboard');
            event.preventDefault();
        }
        
        // Logout button
        if (event.target.id === 'logout-btn') {
            navigateTo('login');
            event.preventDefault();
        }
        
        // Emotion buttons
        if (event.target.classList.contains('emotion-btn')) {
            event.target.classList.toggle('selected');
        }
        
        // Risk alert buttons
        if (event.target.id === 'try-intervention' || event.target.id === 'need-support' || event.target.id === 'im-okay') {
            document.getElementById('risk-alert').style.display = 'none';
        }
        
        // Show risk alert (demo)
        if (event.target.id === 'show-alert') {
            showRiskAlert();
        }
    });
    
    // Demo button to show risk alert
    setTimeout(() => {
        const demoButton = document.createElement('button');
        demoButton.id = 'show-alert';
        demoButton.textContent = 'Demo: Show Risk Alert';
        demoButton.style.position = 'fixed';
        demoButton.style.bottom = '70px';
        demoButton.style.right = '10px';
        demoButton.style.zIndex = '999';
        demoButton.style.padding = '5px 10px';
        demoButton.style.backgroundColor = '#f0f0f0';
        demoButton.style.border = '1px solid #ddd';
        demoButton.style.borderRadius = '5px';
        demoButton.style.fontSize = '12px';
        document.body.appendChild(demoButton);
    }, 2000);
});

// Navigation function
function navigateTo(page) {
    // Update app state
    appState.currentPage = page;
    
    // Get the app container
    const appContainer = document.getElementById('app');
    
    // Load the page content
    appContainer.innerHTML = pages[page];
    
    // Make sure the page is displayed as active
    const currentPage = document.querySelector('.page');
    if (currentPage) {
        currentPage.classList.add('active');
    }
    
    // Update user name if on dashboard
    if (page === 'dashboard') {
        const userNameElement = document.getElementById('user-name');
        if (userNameElement) {
            userNameElement.textContent = appState.user.name;
        }
        updateRiskIndicator();
    }
    
    // Update active nav item
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        if (item.dataset.page === page) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Update risk indicator based on user's risk level
function updateRiskIndicator() {
    const riskIndicator = document.getElementById('risk-indicator');
    const riskText = document.getElementById('risk-text');
    
    if (!riskIndicator || !riskText) return;
    
    riskIndicator.className = 'risk-level';
    
    switch(appState.user.riskLevel) {
        case 'normal':
            riskIndicator.classList.add('risk-normal');
            riskText.textContent = 'Normal - You\'re doing well today!';
            break;
        case 'moderate':
            riskIndicator.classList.add('risk-moderate');
            riskText.textContent = 'Moderate Risk - Take some time for self-care';
            break;
        case 'high':
            riskIndicator.classList.add('risk-high');
            riskText.textContent = 'High Risk - Immediate action recommended';
            break;
    }
}

// Show risk alert overlay
function showRiskAlert() {
    const alertHTML = pages.alert;
    const alertDiv = document.createElement('div');
    alertDiv.innerHTML = alertHTML;
    document.body.appendChild(alertDiv.firstElementChild);
}
