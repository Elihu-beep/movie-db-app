export default function About() {
    return (
      <div className='flex flex-col min-h-screen'>
        <div className='p-8 max-w-5xl mx-auto flex-grow'>
          <div className='py-10'>
            <span className='sm:text-xl text-base font-semibold text-red-500'>| </span>
            <span className='sm:text-xl text-base font-medium'>ABOUT</span>
            <div className='mb-4 ml-5 sm:text-base text-sm py-8'>
              This movie database website provides you with quick access to the most anticipated upcoming releases, popular hits, and top-rated films. You can easily search for any movie and view detailed information, including release description, release date, rating, and video trailer.
            </div>
          </div>
        </div>
      </div>
    );
  }