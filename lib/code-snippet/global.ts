export const globalCon = `@import "tailwindcss";
:root {
    --background: #ffffff;
    --foreground: #B1B1B1;
    --primary: #2D60FF;
    --primary-foreground: #fcfcfc;
    --secondary: #f5f5f5;
    --secondary-foreground: #1a1a1a;
}

@theme inline {
    --color-background: var(--background);
    --color-foreground: var(--foreground);
    --color-primary: var(--primary);
    --color-primary-foreground: var(--primary-foreground);
    --color-secondary: var(--secondary);
    --color-secondary-foreground: var(--secondary-foreground);
    --font-inter: var(--font-inter);
}

@media (prefers-color-scheme: dark) {
     :root {
        --background: #0a0a0a;
        --foreground: #ededed;
    }
}

body {
    background: var(--background);
    color: var(--foreground);
    font-family: var(--font-inter);
}


/* Hide scrollbar but keep scroll */

.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    /* IE & Edge */
    scrollbar-width: none;
    /* Firefox */
}`