import { browser } from '$app/environment';
import { get, writable } from 'svelte/store';
import LevelConfig from './levels';

function createMoves() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update((previousState) => previousState + 1),
		reset: () => {
			set(0);
		}
	};
}

function createProgress() {
	let progressSoFar = [];

  // migration from .level to .progress
	if (typeof window !== 'undefined' && localStorage.level != null) {
		// TODO: migrate to progess array
		let currentLevel = parseInt(localStorage.level);
		for (let index = 0; index < currentLevel; index++) {
			progressSoFar.push(index);
		}
	}

  if(typeof window !== 'undefined' && localStorage.progress != null) {
    try {
      progressSoFar = JSON.parse(localStorage.progress);
    } catch (error) {
      console.log(error);
    }
  }

	const progressStore = writable(progressSoFar);

  progressStore.subscribe((value)=> {
    if(browser) localStorage.progress = JSON.stringify(value);
  });

	return {
    ...progressStore,
    add: (level) => {
      progressStore.update((value)=> {
         let newV = [...value, level];
         newV = [...new Set(newV)];
         return newV;
      })
    },
		reset: () => {
			progressStore.set([]);
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

function createCurrentLevel() {
  let initial = 0;
  if(browser) {
    if(localStorage.level) {
      // migration
      initial = parseInt(localStorage.level);
      delete localStorage.level;
    }
    if(localStorage.currentLevel) initial = parseInt(localStorage.currentLevel);
  }
  let lStore = writable(initial);
  lStore.subscribe((value)=> {
    if(browser) localStorage.currentLevel = JSON.stringify(value);
  });

  return {
    ...lStore,
    increment: () => {
      lStore.update(prevValue => {
        progress.add(prevValue)
        return prevValue + 1;
      });
    }
  }
}

export const moves = createMoves();
export const items = createItems();
export const progress = createProgress();
export const currentLevel = createCurrentLevel();
