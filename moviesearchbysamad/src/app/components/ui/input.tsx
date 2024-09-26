// Importing React for building components.
import * as React from "react"

// Importing the 'cn' utility function from a custom utilities file to manage CSS class names conditionally.
import { cn } from "@/lib/utils"

// Defining the 'InputProps' interface, which extends React's built-in input element attributes.
// This ensures that all standard input attributes (like type, placeholder, etc.) are valid on the Input component.
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

// Defining the 'Input' component using React's 'forwardRef' to pass refs to the input element.
// This makes the component able to forward its ref to the input field for direct DOM manipulation if necessary.
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type} // The type of input, e.g., text, password, email, etc.
        className={cn(
          // Applying a set of default CSS classes for the input field's appearance.
          // These include styles for the size, padding, border, background, and focus state.
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className // This is a custom class name that can be passed in as a prop, allowing the default styles to be extended or overridden.
        )}
        ref={ref} // Attaching the forwarded ref to the input element, allowing for access to the DOM element.
        {...props} // Spreading the remaining props (such as placeholder, value, etc.) onto the input element.
      />
    )
  }
)

// Display name is set for easier debugging in React DevTools.
Input.displayName = "Input"

// Exporting the Input component for use in other parts of the application.
export { Input }
