# 90069

User Interface Wireframe Mockup Specification Document(for user)

## Description

Page 1: Login & Registration
Key Components:

Application logo

Username input field

Password input field

Phone number verification (Two-Factor Authentication)

"Forgot Password" link

"Sign Up" button for new users

Privacy policy and user agreement links

Privacy assurance statement ("Compliance with Australian Privacy Act 1988")

Page 2: Dashboard/Home
Key Components:

Personalized welcome message (e.g., "Good Morning, [User Name]")

Real-time visualization charts of physiological data (Heart Rate, EDA, Respiration, Body Temperature, Activity)

Daily health status and risk level indication (Green = Normal, Yellow = Moderate Risk, Red = High Risk)

Shortcut button for quick access to the daily CBT check-in

Quick access button for community support and emergency assistance (e.g., 24-hour support hotline)

Page 3: Physiological Status Detail Screen
Key Components:

Trend charts showing user's physiological data (past 24 hours/week)

Clear identification of abnormal physiological indicators (e.g., heart rate spikes, elevated EDA)

Interactive points on charts with explanatory pop-ups (e.g., "Possible craving episode due to elevated heart rate and EDA spikes")

Real-time personalized health intervention recommendations (e.g., guided meditation, breathing exercises)

Page 4: Daily CBT Check-in
Key Components:

Mood scoring slider or emoji selection scale (0-10 points)

Simple emotion and physical status selection buttons (e.g., anxious, tired, relaxed)

Motivational Interviewing (MI) interactive question prompts:

"What are you feeling right now?"

"What is your overall mood score today?"

"What is your withdrawal management goal today?"

Input fields for personalized coping strategies and motivational statements

Submit button with feedback confirmation message

Page 5: Risk Intervention Alert Screen (Critical)
Key Components:

Prominent risk notification (e.g., "High risk detected! Immediate action recommended.")

Simple and clear display of abnormal physiological indicators (e.g., "Your heart rate & EDA levels are significantly elevated.")

Explicit intervention recommendations (e.g., "Try a short guided meditation," or "Call your support line now.")

User acknowledgment buttons (e.g., "I'm okay," or "I need support")

Automatic logging of user responses and feedback

Page 6: Community Support & Resources
Key Components:

Detailed contact information and navigation links for Richmond Medically Supervised Injecting Room (MSIR)

Direct dial functionality for addiction and mental health support hotlines

Information and contacts for mutual aid community groups within Melbourne and broader Australia (e.g., Alcoholics Anonymous, Narcotics Anonymous)

Emergency assistance button that directly calls emergency services (e.g., 000)

Page 7: User Settings & Privacy Controls
Key Components:

View and modify personal information (e.g., name, phone number, emergency contact)

Data privacy management options (e.g., data access history, request data deletion/export)

Personalized risk sensitivity settings (e.g., adjust frequency of alerts)

Notification settings management

Access to app help resources and reconfirmation of privacy policy

Page 8: Data Sharing & Authorization (Optional but Recommended)
Key Components:

Transparent display showing organizations authorized to access user data (e.g., clinicians, community health organizations)

Toggle options for user consent regarding third-party data access

History of data sharing logs

Clear communication regarding the purpose of data sharing (e.g., "Your data helps healthcare providers manage your recovery effectively")

Page 9: About & Help (Supplementary Information)
Key Components:

Application description and purpose statement (e.g., "This App helps monitor and support your recovery journey from methamphetamine addiction.")

User instructions and Frequently Asked Questions (FAQ)

Customer service contact information (e.g., online chat support, feedback email)


Admin page:
Admin/Clinician Dashboard
Key Components:

Secure Login & Authentication

Admin or clinician username/password fields

Multi-factor authentication (2FA) for enhanced security

Comprehensive User List

List of all active users, searchable by name, user ID, or risk level

Clearly marked indicators showing each user’s current health and risk status (e.g., Normal, Moderate Risk, High Risk)

User Detail & Monitoring Screen

Detailed physiological data trends for selected users (e.g., Heart rate, EDA, Respiration, Temperature, Activity)

History of user interactions, daily CBT check-ins, and responses to risk alerts

Ability to add clinician notes for each user

Real-time Alerts & Notifications

Automatic notifications when users trigger high-risk alerts

Ability to directly contact users through integrated messaging or alert system (text message, push notifications)

Reports & Data Analytics

Aggregate data visualizations (e.g., overall user health trends, compliance rates, frequency of interventions)

Exportable reporting functions for clinical review, research, or administrative purposes

Intervention Management

Interface to send immediate recommendations or interventions to users remotely

Record and track the outcomes of administered interventions

Privacy & Compliance Dashboard

Transparent logs tracking who accessed user data, when, and for what purpose

Compliance tracking with Australian privacy standards (e.g., Privacy Act 1988, Australian Privacy Principles)

System Settings & Management

User account management (add/remove/update user permissions)

Data backup and system maintenance scheduling

Integration status with external EHR systems and community support services

Recovery Admin – Web Portal Interface Specification
1. Dashboard
Main Features:

Overview Cards:

Total Users

Active Alerts

Daily CBT Check-ins

Interventions Issued Today

Trend Charts:

Average health score trend (based on CBT inputs)

High-risk event timeline (e.g., time of day with most alerts)

Quick Panel:

Recent high-risk user list (with name, severity level, timestamp)

Recent system activity or update logs

2. Users
Main Features:

User List Table:

Columns: User ID | Name | Risk Level (color-coded) | Last Check-in | Assigned Clinician | Actions

Filters: by risk level, activity status, region

Search function by name, ID

User Actions:

View Profile (opens detailed user modal or page)

Send Message (direct internal communication)

Assign Clinician

User Detail View Includes:

Personal info

Recent physiological data charts

CBT check-in history

Intervention logs

3. Alerts
Main Features:

Alert Table:

Columns: Alert ID | User | Type | Time | Status | Action

Alert Types:

Physiological Spike (e.g., heart rate + EDA)

Missed Check-In

High Self-Reported Craving

Status Tags:

New / In Review / Resolved

Actions:

View Details

Trigger Manual Intervention

Assign to Team Member

4. Reports
Main Features:

Filters:

Time period selector (e.g., last 7 days, last 30 days, custom range)

Analytics Charts:

User activity trends (logins, CBT participation)

Mood score vs physiological fluctuation correlation

Intervention response breakdown (types, completion rates)

Export Options:

Download as PDF or CSV

Schedule recurring reports to be sent via email

5. Interventions
Main Features:

Intervention Log Table:

Columns: ID | User | Type | Trigger Source | Outcome | Notes

Create New Intervention Plan:

Select user(s)

Choose type (e.g., push reminder, recommend mindfulness exercise, hotline suggestion)

Set delivery time/frequency

Add clinician notes or rationale

Intervention Feedback Summary:

Whether user responded

Post-intervention mood rating or comment

6. Privacy
Main Features:

Audit Logs:

Track who accessed what data, when, and why

Data Sharing & Authorization Panel:

See per-user data access permissions

Modify third-party access (e.g., clinics, agencies)

Compliance Overview:

System encryption status (AES-256, TLS in transit)

Regulatory badges (e.g., Privacy Act 1988 compliant)

7. Settings
Main Features:

Admin Account Management:

Add/remove admin users

Assign roles: read-only / full access

System Configurations:

Notification frequency settings

Daily database backup time

Log retention period (e.g., 30/60/90 days)

Integration Settings:

External APIs (e.g., EHR platforms, public health systems)

Token validity check and renewal reminders

✅ Additional Notes:

All pages should include a global top-right toolbar:

Admin avatar (for profile/logout/help)

Search bar (for users or alerts)

All actions should be automatically logged in system audit trail.
## Getting Started

To get started with this project:

1. Clone the repository
2. Navigate to the project directory
3. Add your code and start developing

## License

This project is licensed under the MIT License - see the LICENSE file for details.
