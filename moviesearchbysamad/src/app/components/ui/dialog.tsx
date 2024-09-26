// This line makes the component compatible with server-side rendering.
"use client"

// Importing React and Radix UI Dialog components.
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog" // 1
import { X } from "lucide-react" // 2 (Importing the 'X' icon to be used for closing the dialog)

import { cn } from "@/lib/utils" // 3 (Utility function to combine CSS class names)

// Defining the main Dialog component from Radix UI
const Dialog = DialogPrimitive.Root // 4

// Trigger component that opens the dialog when clicked
const DialogTrigger = DialogPrimitive.Trigger // 5

// Portal component for rendering the dialog outside the usual DOM hierarchy
const DialogPortal = DialogPrimitive.Portal // 6

// Close component for closing the dialog
const DialogClose = DialogPrimitive.Close // 7

// Overlay component - the background layer that appears behind the dialog when it's open
const DialogOverlay = React.forwardRef< // 8
  React.ElementRef<typeof DialogPrimitive.Overlay>, // 9 (Defines the type for the 'ref')
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> // 10 (Props type for the overlay)
>(({ className, ...props }, ref) => (
  // Render the overlay with classes for background and animation
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", 
      className
    )}
    {...props}
  />
))
// Display name for easier debugging in React DevTools
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

// Dialog content component - the main dialog box
const DialogContent = React.forwardRef< // 11
  React.ElementRef<typeof DialogPrimitive.Content>, // 12 (Ref type for the content)
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> // 13 (Props type for the content)
>(({ className, children, ...props }, ref) => (
  <DialogPortal> {/* Render in a portal to avoid clipping issues */}
    <DialogOverlay /> {/* Overlay rendered behind the content */}
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children} {/* Content passed into the dialog */}
      {/* Close button with X icon */}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span> {/* Accessible text for screen readers */}
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
// Display name for React DevTools
DialogContent.displayName = DialogPrimitive.Content.displayName

// Header for the dialog (can be customized per dialog instance)
const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader" // Setting display name

// Footer for the dialog (can contain buttons or actions)
const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter" // Setting display name

// Dialog title (can be passed as a prop and customized per dialog)
const DialogTitle = React.forwardRef< // 14
  React.ElementRef<typeof DialogPrimitive.Title>, // 15 (Ref type for the title)
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title> // 16 (Props type for the title)
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
// Display name for React DevTools
DialogTitle.displayName = DialogPrimitive.Title.displayName

// Dialog description (can be passed as a prop and customized)
const DialogDescription = React.forwardRef< // 17
  React.ElementRef<typeof DialogPrimitive.Description>, // 18 (Ref type for the description)
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description> // 19 (Props type for the description)
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
// Display name for React DevTools
DialogDescription.displayName = DialogPrimitive.Description.displayName

// Exporting all components for use in other parts of the app
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
