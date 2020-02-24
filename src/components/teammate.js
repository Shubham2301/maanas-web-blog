import React from 'react';
import { Card } from 'antd';

const styles = {
  imgSection: {
    width: '10%',
  },
  infoSection: {
    width: '90%'
  },
  imgWrapper: {
    width: '100px',
    height: '100px',
  },
  memberImg: {
    borderRadius: '50%'
  },
  teamContainer: {
    boxShadow: `2px 3px 8px 3px #d6d6d6`
  },
  designation: {
    fontStyle: 'italic'
  }
}

function Teammate() {
 return (
  <>
    <Card className="teammate-description" style={styles.teamContainer}>
      <div className="member-img" style={styles.imgSection}>
        <div style={styles.imgWrapper}>
          <img
            src="http://via.placeholder.com/300x300"
            alt="" 
            style={styles.memberImg}
          />
        </div>
      </div>
      <div className="member-info" style={styles.infoSection}>
        <h3 style={styles.memberName}>
          Dr Abhinav Joshi
        </h3>
        <p style={styles.designation}>
          Founder, Managing Director, Psychospiritualist, Mind-Body Physician
        </p>
        <p className="member-data">
          MBBS( AFMC,India), GDMH( NUS, Singapore),
          DCP( Ireland), MRCPsych(UK)- candidate 
          Professional & Specialist Diploma in Counselling and Psychology 
        </p>
      </div>
    </Card>
  </>
 )
}

export default Teammate;