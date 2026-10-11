@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --brand-blue: #2563eb;
  --brand-green: #10b981;
  --brand-gold: #f59e0b;
  --slate-900: #0f172a;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #f8fafc;
  color: #0f172a;
}

* {
  box-sizing: border-box;
}

img {
  display: block;
  max-width: 100%;
}

a {
  text-decoration: none;
}

button,
input,
textarea,
select {
  font: inherit;
}

@layer components {
  .container-shell {
    @apply mx-auto max-w-7xl px-6 md:px-10 lg:px-16;
  }
}
