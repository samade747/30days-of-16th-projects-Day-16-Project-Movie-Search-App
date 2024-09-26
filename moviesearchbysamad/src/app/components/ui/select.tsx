// "use client" directive for Next.js to ensure the component is client-side rendered.
"use client"

// Importing React for building components.
import * as React from "react"

// Importing select components from the Radix UI library for building a customizable select dropdown.
import * as SelectPrimitive from "@radix-ui/react-select"

// Importing icons from Lucide-React for visual indicators in the dropdown (Checkmark, ChevronUp, ChevronDown).
import { Check, ChevronDown, ChevronUp } from "lucide-react"

// Importing the 'cn' utility function from a custom utilities file to handle conditional class names.
import { cn } from "@/lib/utils"

// Defining the Select root component using Radix Select primitive.
const Select = SelectPrimitive.Root

// Group component for grouping select items.
const SelectGroup = SelectPrimitive.Group

// Value component that displays the selected value.
const SelectValue = SelectPrimitive.Value

// Trigger component for the dropdown, wrapped in React's forwardRef to allow ref forwarding.
const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref} // Forwarding ref to the trigger element.
    className={cn(
      // Default styles for the trigger element, including borders, padding, text size, and disabled state.
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className // Allowing custom styles to be passed in via the className prop.
    )}
    {...props} // Spreading any additional props (like onClick, onChange).
  >
    {children} {/* Rendering the children passed to the trigger, typically the SelectValue. */}
    <SelectPrimitive.Icon asChild>
      {/* ChevronDown icon used to indicate dropdown */}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
// Setting the display name for easier debugging in React DevTools.
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

// ScrollUpButton component to show when scrolling upwards in the dropdown.
const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      // Styles for the scroll-up button.
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    {/* ChevronUp icon used for upward scrolling */}
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
// Display name for ScrollUpButton.
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

// ScrollDownButton component to show when scrolling downwards in the dropdown.
const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      // Styles for the scroll-down button.
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    {/* ChevronDown icon used for downward scrolling */}
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
// Display name for ScrollDownButton.
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName

// Content component to display the dropdown content, including items, labels, and separators.
const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  // The content is rendered in a portal to avoid rendering issues.
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        // Styles for the dropdown content, including animations and positioning.
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out",
        position === "popper" &&
          // Adjusting positioning based on the position prop.
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton /> {/* Button to scroll up */}
      <SelectPrimitive.Viewport
        className={cn(
          // Viewport for the dropdown items.
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children} {/* Rendering the dropdown items */}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton /> {/* Button to scroll down */}
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
// Display name for Content component.
SelectContent.displayName = SelectPrimitive.Content.displayName

// Label component for labeling groups of select items.
const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)} // Styles for the label.
    {...props}
  />
))
// Display name for Label component.
SelectLabel.displayName = SelectPrimitive.Label.displayName

// Item component to represent each selectable item in the dropdown.
const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      // Styles for each item in the dropdown.
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      {/* Displaying check icon if the item is selected */}
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    {/* Displaying the text for the item */}
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
// Display name for Item component.
SelectItem.displayName = SelectPrimitive.Item.displayName

// Separator component to visually separate select items.
const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)} // Styles for the separator (a horizontal line).
    {...props}
  />
))
// Display name for Separator component.
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

// Exporting all the components to be used in the application.
export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
