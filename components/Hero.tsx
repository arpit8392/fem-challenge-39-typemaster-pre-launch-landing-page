import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
	return (
		<section className='grid grid-cols-1 gap-6 py-16'>
			{/* Top Section */}
			<div className='grid grid-cols-1 gap-16 md:grid-cols-3 lg:gap-32'>
				{/* Content */}
				<div className='flex flex-col gap-8 px-6 md:col-span-2 md:px-10 lg:px-40'>
					<h1 className='text-[48px]/[48px] font-black uppercase text-darkBlue'>
						Typemaster Keyboard
					</h1>
					<p className='max-w-sm text-base/7 font-medium text-pastelBlue md:max-w-none'>
						Improve your productivity and gaming without breaking the bank.
						Upgrade to a high quality mechanical typing experience.
					</p>
					<div className='flex items-center gap-8 md:gap-9 lg:gap-10'>
						<Link
							href={'#'}
							className='rounded-lg bg-vividOrange px-4 py-3 font-bold uppercase text-white hover:bg-peach md:px-7 md:py-4 '>
							Pre-Order Now
						</Link>
						<p className='font-bold uppercase text-pastelBlue '>
							Release on 5/27
						</p>
					</div>
				</div>
				<div className='pl-6 md:col-span-1'>
					<Image
						src={'/assets/mobile/image-keyboard.jpg'}
						alt=''
						width={744}
						height={622}
						className='block w-full rounded-l-3xl object-contain md:hidden'
					/>
					<Image
						src={'/assets/tablet/image-keyboard.jpg'}
						alt=''
						width={956}
						height={850}
						className='hidden rounded-l-3xl object-cover object-center md:block lg:hidden'
					/>
					<Image
						src={'/assets/desktop/image-keyboard.jpg'}
						alt=''
						width={1080}
						height={960}
						className='hidden w-auto rounded-3xl object-contain lg:block'
					/>
				</div>
			</div>
			{/* Bottom Section */}
			<div className='grid grid-cols-1 gap-20 md:px-10 lg:grid-cols-4 lg:px-40'>
				{/* Images */}
				<div className='grid grid-cols-3 gap-6 md:gap-8 lg:col-span-3'>
					<div className='relative col-span-1 overflow-hidden rounded-r-3xl md:rounded-3xl'>
						<div className='absolute inset-0 bg-vividOrange mix-blend-multiply' />
						<Image
							src={'/assets/mobile/image-phone-and-keyboard.jpg'}
							alt=''
							width={258}
							height={386}
							className='block md:hidden'
						/>
						<Image
							src={'/assets/tablet/image-phone-and-keyboard.jpg'}
							alt=''
							width={428}
							height={640}
							className='hidden h-full w-auto rounded-3xl md:block lg:hidden'
						/>
						<Image
							src={'/assets/desktop/image-phone-and-keyboard.jpg'}
							alt=''
							width={510}
							height={960}
							className='hidden w-full rounded-3xl object-contain lg:block'
						/>
					</div>
					{/* Right Image */}
					<div className='col-span-2'>
						<Image
							src={'/assets/mobile/image-glass-and-keyboard.jpg'}
							alt=''
							width={440}
							height={386}
							className='block h-full w-auto rounded-3xl object-contain md:hidden'
						/>
						<Image
							src={'/assets/tablet/image-glass-and-keyboard.jpg'}
							alt=''
							width={888}
							height={640}
							className='hidden rounded-3xl object-cover object-center md:block lg:hidden'
						/>
						<Image
							src={'/assets/desktop/image-glass-and-keyboard.jpg'}
							alt=''
							width={887}
							height={960}
							className='hidden w-auto h-full rounded-3xl object-contain lg:block'
						/>
					</div>
				</div>
				{/* Content */}
				<div className='grid grid-cols-1 gap-6 px-6 text-center md:grid-cols-3 md:gap-9 md:text-left lg:grid-cols-1'>
					<h2 className='text-[32px]/9 font-black uppercase text-darkBlue md:col-span-1'>
						Mechanical Wireless Keyboard
					</h2>
					<p className='text-base/7 font-medium text-pastelBlue md:col-span-2 '>
						The Typemaster keyboard boasts top-notch build and practical design.
						It offers a wide variety of switches and keycaps, along with
						reliable wireless connectivity.
					</p>
				</div>
			</div>
		</section>
	)
}
export default Hero
