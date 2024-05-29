import React from 'react';
import Countdown from 'react-countdown';

const CountdownTimer = ({ targetDate }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completion state
      return <div>Time's up!</div>;
    } else {
      // Render the countdown
      return (
        <div className='countdown'>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2em' }}>{String(days).padStart(2, '0')}:</div>
            <div className='forlebel'>Days</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2em' }}>{String(hours).padStart(2, '0')}:</div>
            <div className='forlebel'>Hours</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2em' }}>{String(minutes).padStart(2, '0')}:</div>
            <div className='forlebel'>Minutes</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2em' }}>{String(seconds).padStart(2, '0')}</div>
            <div className='forlebel'>Seconds</div>
          </div>
          
        </div>
      );
    }
  };

  return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountdownTimer;
