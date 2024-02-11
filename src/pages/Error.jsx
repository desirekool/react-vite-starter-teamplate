import { Link, useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError();
  console.log(error);

  if(error.status === 404) {
    return (
      <main className='grid min-h-screen place-items-center px-8'>
        <div className='text-center'>
          <p className='text-9xl font-semibold text-primary'>404</p>
          <h1 className='mt-4 font-bold text-3xl tracking-tight sm:text-5xl'>Page Not Found</h1>
          <p className='mt-6 text-lg leading-7'>
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className='mt-10'>
            <Link to='/' className='btn btn-secondary'> go back home </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className='grid min-h-screen place-items-center px-8'>
      <h4 className='text-center font-bold text-4xl'>there was an Error</h4>
    </main>
  )
}

export default Error