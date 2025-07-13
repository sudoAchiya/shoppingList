# Sikur UI package

# Installation

```bash
npm install @sikur/ui
```

# Usage

```javascript
import { Button } from '@sikur/ui';

function App() {
  return (
    <div>
      <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
    </div>
  );
}
```

# Playground

You can test the components in the package itself. Putting the sample code above in the `src/` folder and running the following commands:

```bash
npm run dev
```

# Notes

- The `@/...` alias is set up to import from the `lib/` folder.
- The `@src/...` alias is set up to import from the `src/` folder.
