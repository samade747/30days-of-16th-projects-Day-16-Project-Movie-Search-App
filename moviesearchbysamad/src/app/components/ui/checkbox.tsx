// "use client" directive for client-side rendering in a Next.js project
"use client"


// Importing necessary modules and utilities
import * as React from "react"; // Importing React for creating components
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"; // Importing Radix UI's checkbox primitive components
import { Check } from "lucide-react"; // Importing the `Check` icon from the lucide-react icon library

import { cn } from "@/lib/utils"; // Importing the custom `cn` function for conditional class name handling


// Defining the `Checkbox` component using `forwardRef` to forward the ref to the checkbox element
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>, // Forwarding the ref to the Radix Checkbox Root element
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> // Accepting all the props that Radix Checkbox Root component supports
>(({ className, ...props }, ref) => (
  // Creating the Root element of the checkbox using Radix UI's `CheckboxPrimitive.Root`
  <CheckboxPrimitive.Root
    ref={ref} // Forwarding the ref to the Root element for direct DOM access
    className={cn(
      // Assigning class names to style the checkbox, combining default styles with any additional classes passed via props
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className // Merging any custom class names passed via props
    )}
    {...props} // Spreading other props (such as event handlers, attributes) to the Root element
  >
    {/* Defining the Indicator component, which renders the checkmark when the checkbox is in the "checked" state */}
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")} // Centering the check icon and applying current text color
    >
      {/* Rendering the `Check` icon inside the Indicator when the checkbox is checked */}
      <Check className="h-4 w-4" /> {/* Icon size is set to 4x4 */}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));

// Setting the display name of the Checkbox to match the Radix Checkbox Root component's display name for better debugging
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// Exporting the `Checkbox` component for use in other parts of the application
export { Checkbox };