import { features } from '@/data'
import FeatureItem from './FeatureItem'

const Features = () => {
	return (
		<section className='px-6 pb-24 pt-28 md:px-10 md:py-36 lg:px-40 lg:pb-32 lg:pt-40'>
			<ul className='grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-x-[69px] md:gap-y-[72px] lg:grid-cols-4 lg:gap-x-8'>
				{features.map((item) => (
					<li key={item.id}>
						<FeatureItem {...item} />
					</li>
				))}
			</ul>
		</section>
	)
}
export default Features
