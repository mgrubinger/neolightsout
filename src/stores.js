import { writable } from 'svelte/store';
import LevelConfig from './levels';

function createMoves() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update((previousState) => previousState + 1),
		decrement: () => update((previousState) => previousState + 1),
		reset: () => {
			set(0);
		}
	};
}

function createCurrentLevel() {
	let currentLevel = 0;
	if (typeof window !== 'undefined' && localStorage.level != null)
		currentLevel = parseInt(localStorage.level);
	const { subscribe, set, update } = writable(currentLevel);

	return {
		subscribe,
		increment: () => {
			update((previousState) => {
				if (typeof window !== 'undefined') localStorage.level = previousState + 1;
				return previousState + 1;
			});
		},
		decrement: () => {
			update((previousState) => {
				if (typeof window !== 'undefined') localStorage.level = previousState + 1;
				return previousState + 1;
			});
		},
		set: (level) => {
			set(level);
			if (typeof window !== 'undefined') localStorage.level = level;
		},
		reset: () => {
			set(0);
			if (typeof window !== 'undefined') localStorage.level = 0;
		}
	};
}

function createItems() {
	const _items = [];
	for (let index = 0; index < 25; index++) {
		_items.push({ active: false });
	}

	const { subscribe, set, update } = writable(_items);

	return {
		subscribe,
		toggleActive: (index) => {
			update((previousState) => {
				if (previousState[index]) previousState[index].active = !previousState[index].active;
				return previousState;
			});
		},
		setActive: (index, active) => {
			update((previousState) => {
				if (previousState[index]) previousState[index].active = active;
				return previousState;
			});
		},
		reset: () => {
			const empty_items = [];
			for (let index = 0; index < 25; index++) {
				empty_items.push({ active: false });
			}
			set(empty_items);
		},
		loadLevel: (level) => {
			const empty_items = [];
			for (let index = 0; index < 25; index++) {
				if (LevelConfig[level].indexOf(index) !== -1) {
					empty_items.push({ active: true });
				} else {
					empty_items.push({ active: false });
				}
			}
			set(empty_items);
		}
	};
}

export const moves = createMoves();
export const items = createItems();
export const currentLevel = createCurrentLevel();
