import { useEffect } from 'react';
import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';


import { getTokenDuration } from '../utils/auth';

function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();
  // const navigation = useNavigation();
  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === 'EXPIRED') {
      submit(null, { action: '/logout', method: 'post' });
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);

    setTimeout(() => {
      submit(null, { action: '/logout', method: 'post' });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <>
     
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;