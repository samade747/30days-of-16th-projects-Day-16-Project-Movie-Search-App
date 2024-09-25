// Importing necessary modules and types from React and other libraries
import * as React from "react" // Importing React library to use React components and hooks
import { Slot } from "@radix-ui/react-slot" // Importing Slot component from Radix UI, which allows rendering dynamic elements
import { cva, type VariantProps } from "class-variance-authority" // Importing cva (class variance authority) to handle conditional styling logic and VariantProps for type safety

import { cn } from "@/lib/utils" // Importing custom utility function `cn` to merge and handle conditional class names

// Defining button styles using `cva`, which allows applying conditional CSS class names
const buttonVariants = cva(
  // Common base styles for the button
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    // Defining `variants` for different button styles (color and appearance)
    variants: {
      variant: {
        // Default style for the button (primary button)
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        // Destructive style, typically for delete or dangerous actions
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // Outline style button with a border and hover effects
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        // Secondary style button, useful for less important actions
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        // Ghost style button, only shows hover effect with background change
        ghost: "hover:bg-accent hover:text-accent-foreground",
        // Link style button that looks like a text link
        link: "text-primary underline-offset-4 hover:underline",
      },
      // Defining `size` variants to control button dimensions
      size: {
        // Default size of the button
        default: "h-10 px-4 py-2",
        // Smaller size for compact buttons
        sm: "h-9 rounded-md px-3",
        // Larger button size
        lg: "h-11 rounded-md px-8",
        // Icon button size, making it square
        icon: "h-10 w-10",
      },
    },
    // Setting default variants if none are specified
    defaultVariants: {
      variant: "default", // Default style is the primary button
      size: "default", // Default size is medium
    },
  }
)

// Defining ButtonProps interface to extend standard button attributes and VariantProps
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, // Extends HTML button attributes like onClick, type, etc.
    VariantProps<typeof buttonVariants> { // Extends the variant props to apply conditional styles based on the defined variants
  asChild?: boolean // Optional prop `asChild` to allow rendering a different component instead of the default button
}

// Creating a Button component using React's `forwardRef` to pass refs to the button or another component (when `asChild` is true)
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Determine which component to render (button by default, or another component if `asChild` is true)
    const Comp = asChild ? Slot : "button"
    
    return (
      // Rendering the button or custom component with conditional styles based on `variant`, `size`, and additional class names
      <Comp
        className={cn(buttonVariants({ variant, size, className }))} // Apply conditional classes using buttonVariants and custom classes
        ref={ref} // Pass the forwarded ref to the component
        {...props} // Spread remaining props (like onClick, type, etc.) to the button
      />
    )
  }
)

// Setting displayName for easier debugging in React DevTools
Button.displayName = "Button"

// Exporting the Button component and buttonVariants utility
export { Button, buttonVariants }
