import React from 'react';
import ReactStopwatch from 'react-stopwatch';

const Stopwatch = (props) => (
  <ReactStopwatch
    seconds={0}
    minutes={0}
    hours={0}
    limit="00:10:00"
    autoStart={false}
    onChange={({ hours, minutes, seconds }) => {
      // do something
    }}
    onCallback={() => console.log('Finish')}
    render={({ formatted, hours, minutes, seconds }) => {
      return (
        <div className='clock'>

            {/* Formatted:  */}
            { formatted }

          {/* <p>
            Hours: { hours }
          </p>
          <p>
            Minutes: { minutes }
          </p>
          <p>
            Seconds: { seconds }
          </p> */}
        </div>
      );
    }}
   />
);

export default Stopwatch;