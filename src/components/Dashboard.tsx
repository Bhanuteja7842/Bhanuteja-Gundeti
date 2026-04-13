import React, { useState, useEffect } from 'react';
import styles from './Dashboard.module.css';

interface Activity {
  id: number;
  user: string;
  action: string;
  time: string;
}

const Dashboard: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState(12450);
  const [revenue, setRevenue] = useState(45299);
  const [activities, setActivities] = useState<Activity[]>([
    { id: 1, user: 'Alex M.', action: 'Signed up for Pro plan', time: '2 min ago' },
    { id: 2, user: 'Sarah J.', action: 'Updated their profile', time: '5 min ago' },
    { id: 3, user: 'Mike R.', action: 'Renewed subscription', time: '12 min ago' },
  ]);

  // Real-time update simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 5));
      if (Math.random() > 0.8) {
        setRevenue(prev => prev + Math.floor(Math.random() * 100));
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const addRandomActivity = () => {
    const users = ['Bhanu T.', 'Jessica W.', 'David L.', 'Elena S.'];
    const actions = ['Purchased a course', 'Shared a post', 'Left a review', 'Logged in'];
    const newActivity: Activity = {
      id: Date.now(),
      user: users[Math.floor(Math.random() * users.length)],
      action: actions[Math.floor(Math.random() * actions.length)],
      time: 'Just now'
    };
    setActivities([newActivity, ...activities.slice(0, 4)]);
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Interactive Analytics</h1>
          <button className={styles.refreshBtn} onClick={() => window.location.reload()}>
            Refresh Dashboard
          </button>
        </header>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <p className={styles.statLabel}>Real-time Visitors</p>
            <h3 className={styles.statValue}>{visitorCount.toLocaleString()}</h3>
            <p className={`${styles.statTrend} ${styles.trendUp}`}>↑ 12% from last hour</p>
          </div>
          <div className={styles.statCard}>
            <p className={styles.statLabel}>Total Revenue</p>
            <h3 className={styles.statValue}>${revenue.toLocaleString()}</h3>
            <p className={`${styles.statTrend} ${styles.trendUp}`}>↑ 5.4% from yesterday</p>
          </div>
          <div className={styles.statCard}>
            <p className={styles.statLabel}>Active Sessions</p>
            <h3 className={styles.statValue}>842</h3>
            <p className={`${styles.statTrend} ${styles.trendDown}`}>↓ 2% from last hour</p>
          </div>
          <div className={styles.statCard}>
            <p className={styles.statLabel}>Conversion Rate</p>
            <h3 className={styles.statValue}>3.24%</h3>
            <p className={`${styles.statTrend} ${styles.trendUp}`}>↑ 0.5% from last week</p>
          </div>
        </div>

        <div className={styles.mainGrid}>
          <div className={styles.chartCard}>
            <div className={styles.cardTitle}>
              Growth Projection
              <span style={{fontSize: '0.8rem', color: '#666'}}>Auto-updating data</span>
            </div>
            {/* Visual representation of a chart using CSS bars */}
            <div style={{display: 'flex', alignItems: 'flex-end', gap: '15px', height: '200px', padding: '10px 0'}}>
              {[60, 85, 45, 90, 70, 100, 80, 110].map((h, i) => (
                <div key={i} style={{
                  flex: 1,
                  height: `${h}%`,
                  background: 'linear-gradient(to top, #4a90e2, #a259ff)',
                  borderRadius: '4px 4px 0 0',
                  transition: 'height 1s ease-in-out'
                }}></div>
              ))}
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px', color: '#666', fontSize: '0.8rem'}}>
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span><span>Today</span>
            </div>
          </div>

          <div className={styles.recentActivity}>
            <div className={styles.cardTitle}>Live Feed</div>
            <div className={styles.activityList}>
              {activities.map((act) => (
                <div key={act.id} className={styles.activityItem}>
                  <div className={styles.activityInfo}>
                    <h4>{act.user}</h4>
                    <p>{act.action}</p>
                  </div>
                  <span className={styles.activityTime}>{act.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.interactiveArea}>
          <h2>Test Dynamic Content Update</h2>
          <p style={{color: '#888', marginBottom: '1rem'}}>
            Click the button below to manually inject a new activity into the live feed.
          </p>
          <button className={styles.dynamicBtn} onClick={addRandomActivity}>
            Generate New Activity
          </button>
          <button 
            className={styles.dynamicBtn} 
            style={{background: 'rgba(162, 89, 255, 0.2)', border: '1px solid #a259ff'}}
            onClick={() => setRevenue(prev => prev + 500)}
          >
            Add +$500 Revenue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
