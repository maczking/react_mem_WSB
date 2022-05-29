import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import Typography from '@material-ui/core/Typography';
import { Wrapper } from './Error404.styled';

const Error404 = () => {
  // I. Create Data
  const [state, setState] = useState({
    redirect: false,
    stopWatch: 5,
  });
  const { redirect, stopWatch } = state;
  // II. Handle StopWatch Logic
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (stopWatch === 0) {
        setState((prevState) => ({ ...prevState, redirect: true }));
      } else {
        setState((prevState) => ({ ...prevState, stopWatch: stopWatch - 1 }));
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [stopWatch]);

  // III. Create Error 404 View
  const StaredView = (
    <Wrapper>
      <Loader type='TailSpin' color='#00BFFF' height={80} width={80} />
      <Typography variant={'h5'}>
        Error 404 <br />
        Kurza stopa, jesteś w Narnii - deportacja do memów nastąpi za... {stopWatch} s.
      </Typography>
    </Wrapper>
  );
  // IV. Return Main Component
  return <>{redirect ? <Redirect to='/regular' /> : <>{StaredView}</>}</>;
};

export default Error404;
