import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import Spinner from './Spinner';

interface LoaderProps {
  load: () => Promise<any>;
  inline?: boolean;
  delay?: number;
  children: React.ReactNode;
}

interface LoaderState {
  loaded: boolean;
  delayed: boolean;
  timeout: NodeJS.Timeout | null;
}

function Loader({ load, delay = 200, children }: LoaderProps) {
  const [state, setState] = useState<LoaderState>({
    loaded: false,
    delayed: false,
    timeout: null
  });

  useEffect(() => {
    if (state.timeout) {
      clearTimeout(state.timeout);
    }
    
    if (!load) {
      return;
    }

    const timeout = setTimeout(() => {
      setState(prev => {
        if (!prev.loaded) {
          return { ...prev, timeout: null, delayed: true };
        }
        return prev;
      });
    }, delay);

    setState({
      loaded: false,
      delayed: false,
      timeout
    });

    load().then(() => {
      clearTimeout(timeout);
      setState(prev => ({ ...prev, timeout: null, loaded: true }));
    });

    return () => {
      if (timeout) clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [load]);

  if (state.loaded) {
    return <>{children}</>;
  } else if (!state.delayed) {
    return null;
  }

  return (
    <Modal>
      <Spinner style={{ color: 'white' }}>
        <p>Waiting for API...</p>
      </Spinner>
    </Modal>
  );
}

export default Loader;
