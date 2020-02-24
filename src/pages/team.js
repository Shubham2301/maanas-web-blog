import React from 'react';
import CustomLayout from '../components/layout';
import Teammate from '../components/teammate';

const styles = {
  teamCard: {
    marginTop: '20px',
    marginBottom: '20px',
  }
}

function Team() {

  return (
    <CustomLayout>
      <div className="banner page-header-wrapper">
        <h1 className="page-title">Who are we </h1>
      </div>

      <div className="team-wrapper">
        {[1,2,3,4].map((val, index) => {
          return (
           <div style={styles.teamCard}>
              <Teammate />
           </div>
          )
        })}
      </div>
    </CustomLayout>
  )
}

export default Team;