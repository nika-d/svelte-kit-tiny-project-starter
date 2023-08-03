import { Chapter, MenuContent, Route } from './navigation/typesForNavigation'

export const menuContent = new MenuContent([
	new Chapter(new Route('http://localhost:3000/HexagonIconsPattern', 'HexagonIconsPattern'), []),

	new Chapter(new Route('http://localhost:3000/Basics', 'Basics'), []),

	new Chapter(new Route('http://localhost:3000/Components', 'Components'), [
		new Route('http://localhost:3000/Components/Badge', 'Badge'),
		new Route('http://localhost:3000/Components/Tooltip', 'Tooltip'),
		new Route('http://localhost:3000/Components/Button', 'Button'),
		new Route('http://localhost:3000/Components/Switch', 'Switch'),
		new Route('http://localhost:3000/Components/Chip', 'Chip'),
		new Route('http://localhost:3000/Components/TextInput', 'TextInput'),
		new Route('http://localhost:3000/Components/WarningSign', 'WarningSign')
	])
])
