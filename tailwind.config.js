const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    darkMode: 'class',
    purge: [
        './vendor/laravel/jetstream/**/*.blade.php',
        './vendor/rappasoft/laravel-livewire-tables/resources/views/tailwind/**/*.blade.php',
        './vendor/rappasoft/laravel-livewire-tables/resources/views/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/livewire-tables/select-filter.blade.php',
        './app/Http/Livewire/UsersTable.php',
        './app/Http/Livewire/MyTable.php',
        './app/Http/Livewire/GeneralLedgerTable.php',
        './routes/web.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    variants: {
        extend: {
            backgroundColor: ['disabled'],
            textColor: ['disabled'],
        }
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp')
    ],
};
