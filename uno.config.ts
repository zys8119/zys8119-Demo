import { defineConfig } from 'unocss';
import presetWind from '@unocss/preset-wind'

export default defineConfig({
    presets:[
        presetWind()
    ],
    shortcuts: {
        'flex-center': 'flex justify-center items-center',
        'flex-center-start': 'flex justify-start items-center',
        'flex-center-end': 'flex justify-end items-center',
        'abs-f': 'fixed',
        'abs-r': 'relative',
        abs: 'absolute',
        'abs-content': 'absolute left-0 top-0 w-100% h-100%',
        'abs-start': 'absolute left-0 top-0',
        'abs-end': 'absolute right-0 top-0',
        'abs-end-bottom': 'absolute right-0 bottom-0',
        'abs-start-bottom': 'absolute left-0 bottom-0',
        'abs-center': 'absolute left-50% top-50% translate--50%',
        bold: 'font-bold',
    },
    rules: [
        [
            /^tr-?([xy])(?:-?(-?.+))?$/,
            (match) => {
                return {
                    transform: `translate${match[1].toUpperCase() || 'Y'}(${
                        match[2] || 0
                    })`,
                };
            },
        ],
        [
            /^frame(?:-?(-?.+))?$/,
            (match) => {
                const [name, start, time, ...timing] = match[1].split('-');
                let timingFn = timing;
                let timeStr = time;
                if (time === 'cubic') {
                    timingFn = [time].concat(timing);
                    timeStr = '';
                }
                return {
                    animation: `${name} calc(1 - var(--sy) / ${start}) ${
                        timeStr || ''
                    } ${timingFn.join('-') || 'linear'} forwards reverse`,
                };
            },
        ],
    ],
});
