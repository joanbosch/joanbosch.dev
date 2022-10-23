
import L from 'next/link'
export default function Header() {

  const Link = props => <L {...props}>{props.children}</L>;

  return (
    <div className='sticky top-0 bg-white border-b border-gray-200 z-10'>
      <header className='flex flex-wrap items-center justify-around p-4'>
        <Link href='/'>
          <a className='text-3x1 font-bold text-center'>
            Joan Bosch<span className='text-red-400'>.</span>
          </a>
        </Link>
      </header>
    </div> 
  )
}