import { defineConfig } from 'windicss/helpers'


export default defineConfig({
    theme:{
        extend: {
            animation:{
                'spin-slow': 'wiggle 3s linear infinite',
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': {transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
            },
        },
    },
    shortcuts:{
        'abs':"absolute"
    }
})
