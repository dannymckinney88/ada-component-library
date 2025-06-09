# Button Component

A fully accessible button component that follows WCAG 2.1 guidelines and best practices for inclusive design.

## Accessibility Features

- Proper ARIA attributes for loading states
- Keyboard navigation support with visible focus indicators
- High contrast mode support
- Screen reader friendly with proper labeling
- Disabled state handling
- Loading state with appropriate ARIA attributes

## Usage

```tsx
import { Button } from '@/components/atoms/Button/Button';

// Basic usage
<Button>Click me</Button>

// With accessibility label
<Button ariaLabel="Submit form">Submit</Button>

// Loading state
<Button isLoading>Loading...</Button>

// With icon
<Button icon={<IconComponent />}>With Icon</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'primary' \| 'secondary' \| 'tertiary' | 'primary' | Visual style of the button |
| size | 'small' \| 'medium' \| 'large' | 'medium' | Size of the button |
| isLoading | boolean | false | Whether the button is in a loading state |
| icon | React.ReactNode | undefined | Icon to display before the button text |
| ariaLabel | string | undefined | Accessible label for screen readers |

## Accessibility Guidelines

1. **Keyboard Navigation**
   - Button is focusable
   - Visible focus indicator
   - Can be activated with Enter or Space key

2. **Screen Reader Support**
   - Proper ARIA attributes for loading states
   - Descriptive labels
   - Status announcements for loading state

3. **Visual Design**
   - High contrast ratios
   - Clear visual feedback for all states
   - Support for high contrast mode

4. **State Management**
   - Clear disabled state
   - Loading state with appropriate ARIA attributes
   - Hover and focus states

## Testing

The button component should be tested for:

1. Keyboard navigation
2. Screen reader compatibility
3. Color contrast ratios
4. Focus management
5. State changes
6. Loading state announcements

## Examples

### Basic Button
```tsx
<Button>Click me</Button>
```

### Accessible Button with Loading State
```tsx
<Button 
  isLoading 
  ariaLabel="Submitting form"
>
  Submit
</Button>
```

### Button with Icon
```tsx
<Button 
  icon={<IconComponent />}
  ariaLabel="Download file"
>
  Download
</Button>
``` 