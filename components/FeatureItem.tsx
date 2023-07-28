import Image from 'next/image'

const FeatureItem = ({ title, description, logo }: Feature) => {
	return (
		<div className='md:gap-10lg:gap-12 flex flex-col items-center gap-12 md:items-start'>
			<div className='flex h-[65px] w-[65px] items-center justify-center rounded-lg bg-vividOrange'>
				<Image src={logo} alt={title} className='w-auto object-contain' />
			</div>

			<div className='flex flex-col gap-6 text-center md:text-left'>
				<h2 className='text-2xl font-black uppercase text-darkBlue'>{title}</h2>
				<p className='max-w-sm text-base/7 font-medium text-pastelBlue'>
					{description}
				</p>
			</div>
		</div>
	)
}
export default FeatureItem
