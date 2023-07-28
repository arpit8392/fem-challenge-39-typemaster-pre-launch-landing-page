import CompatibleIcon from '@/public/assets/shared/icon-compatible.svg'
import BluetoothIcon from '@/public/assets/shared/icon-bluetooth.svg'
import BatteryIcon from '@/public/assets/shared/icon-battery.svg'
import LightIcon from '@/public/assets/shared/icon-light.svg'

export const features: Feature[] = [
	{
		id: 1,
		title: 'Highly Compatible',
		description:
			'Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed.',
		logo: CompatibleIcon,
	},
	{
		id: 2,
		title: 'Wireless with Bluetooth',
		description:
			'Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer.',
		logo: BluetoothIcon,
	},
	{
		id: 3,
		title: 'High Capacity Battery',
		description:
			'Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges.',
		logo: BatteryIcon,
	},
	{
		id: 4,
		title: 'RGB Backlit Modes',
		description:
			'Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions. ',
		logo: LightIcon,
	},
]
