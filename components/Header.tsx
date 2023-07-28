import Logo from '@/public/assets/shared/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
	return (
		<header className='flex items-center justify-between p-6 md:p-10 lg:px-40 lg:py-14'>
			<Image
				src={Logo}
				alt='Typemaster Logo'
				className='w-auto object-contain'
			/>
			<Link
				href={'#'}
				className='rounded-lg bg-lightBlue px-4 py-3 font-bold uppercase text-darkBlue hover:bg-darkBlue hover:text-white md:px-7 md:py-4 '>
				Pre Order Now
			</Link>
		</header>
	)
}
export default Header
