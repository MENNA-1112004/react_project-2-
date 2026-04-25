import React, { useState } from 'react';
import './NatiqDash.css';
import logoImg from '../assets/logo.png'; // تأكدي إن الصورة في المسار ده

const NatiqDash = () => {
    // State عشان التفاعل لما تضغطي على كارت
    const [selectedCard, setSelectedCard] = useState('All Tickets');

    return (
        <div className="dashboard-container">
            {/* القائمة الجانبية Sidebar */}
            <aside className="sidebar">
                <div className="logo-section">
                    <img src={logoImg} alt="NATIQ" className="brand-logo" />
                </div>
                <nav className="menu">
                    <p className="menu-label">MENU</p>
                    <ul>
                        <li className="active">Dashboard</li>
                        <li>Tasks <span className="badge">17+</span></li>
                        <li>Calendar</li>
                        <li>Analytics</li>
                        <li>Team</li>
                    </ul>
                    <p className="menu-label">GENERAL</p>
                    <ul>
                        <li>Settings</li>
                        <li>Logout</li>
                    </ul>
                </nav>
            </aside>

            {/* المحتوى الرئيسي Main Content */}
            <main className="main-content">
                <header className="top-nav">
                    <div className="search-wrapper">
                        <span className="search-icon">🔍</span>
                        <input type="text" placeholder="Search task..." className="search-input" />
                    </div>
                    <div className="user-area">
                        <div className="notifications">🔔</div>
                        <div className="user-info">
                            <span className="user-name">Mohamed Haitham</span>
                            <span className="user-email">mohamedziad921@gmail.com</span>
                        </div>
                    </div>
                </header>

                <section className="content-body">
                    <div className="welcome-msg">
                        <h1>Dashboard</h1>
                        <p>Plan, prioritize, and accomplish your tasks with Natiq.</p>
                    </div>

                    {/* الصف الأول: الكروت الأربعة */}
                    <div className="stats-grid">
                        <div className={`card ${selectedCard === 'All Tickets' ? 'active-card' : ''}`} onClick={() => setSelectedCard('All Tickets')}>
                            <span className="card-header">All Tickets</span>
                            <h2 className="card-main-val">1,744</h2>
                            <p className="card-footer"><span className="lime-text">6+ Increased</span> from last month</p>
                        </div>
                        <div className={`card ${selectedCard === 'Incoming' ? 'active-card' : ''}`} onClick={() => setSelectedCard('Incoming')}>
                            <span className="card-header">Incoming Tickets</span>
                            <h2 className="card-main-val">1500</h2>
                            <p className="card-footer"><span className="light-lime-text">6+ Increased</span> from last month</p>
                        </div>
                        <div className="card">
                            <span className="card-header">Avg. Late replay</span>
                            <h2 className="card-main-val">5s</h2>
                            <p className="card-footer"><span className="light-lime-text">6+ Increased</span> from last month</p>
                        </div>
                        <div className="card">
                            <span className="card-header">Avg. Call Duration</span>
                            <h2 className="card-main-val">1:36s</h2>
                            <p className="card-footer"><span className="light-lime-text">6+ Increased</span> from last month</p>
                        </div>
                    </div>

                    {/* الصف الثاني: الإحصائيات والأهداف */}
                    <div className="middle-layout">
                        <div className="card chart-card">
                            <div className="flex-between">
                                <h3>Statistics</h3>
                                <span className="sort-label">Monthly ⌵</span>
                            </div>
                            <div className="visual-chart-placeholder">
                                {/* هنا سيتم رسم الـ Chart بمكتبة Recharts لاحقاً */}
                                <div className="fake-line"></div>
                            </div>
                        </div>

                        <div className="card goal-card">
                            <h3>Tickets Assigned This Month</h3>
                            <h2 className="big-num">5000</h2>
                            <button className="goal-btn">Goal 25000</button>
                        </div>

                        <div className="card tickets-source">
                            <h3>Statistics Tickets</h3>
                            <div className="prog-container">
                                <div className="prog-row">
                                    <span>Instagram</span> <span className="light-lime-text">40%</span>
                                    <div className="bar-bg"><div className="bar-fill" style={{ width: '40%' }}></div></div>
                                </div>
                                <div className="prog-row">
                                    <span>WhatsApp</span> <span className="light-lime-text">50%</span>
                                    <div className="bar-bg"><div className="bar-fill lime-bg" style={{ width: '50%' }}></div></div>
                                </div>
                                <div className="prog-row">
                                    <span>Facebook</span> <span className="light-lime-text">10%</span>
                                    <div className="bar-bg"><div className="bar-fill" style={{ width: '10%' }}></div></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* الصف الثالث: Agents و Feedback */}
                    <div className="bottom-layout">
                        <div className="card feedback-card">
                            <h3>Avg. Feedback</h3>
                            <div className="stars">⭐⭐⭐⭐☆</div>
                            <p className="card-footer"><span className="light-lime-text">6+ Increased</span> from last month</p>
                        </div>
                        <div className="card agents-card">
                            <div className="flex-between">
                                <h3>Agents</h3>
                                <span className="sort-label">Newest ⌵</span>
                            </div>
                            <div className="agent-item">
                                <div className="agent-img"></div>
                                <div>
                                    <p className="agent-name">Chris Friedly</p>
                                    <p className="agent-sub">Supermarket Villanova</p>
                                </div>
                            </div>
                        </div>
                        <div className="card worked-time-card">
                            <span className="card-header">Avg. Worked Time</span>
                            <h2 className="card-main-val">1200/h</h2>
                            <p className="card-footer"><span className="lime-text">6+ Increased</span> from last month</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default NatiqDash;