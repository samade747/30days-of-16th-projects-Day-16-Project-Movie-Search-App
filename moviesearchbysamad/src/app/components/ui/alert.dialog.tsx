"use client"

import * as React from "react"
// Imports the React library, which is needed for using JSX and React features.

import * as AlertDialogPrimitive form "@radix-ui/react-alert-dialog"

// Imports all exports from the "@radix-ui/react-alert-dialog" library as AlertDialogPrimitive. 
// This library provides accessible and customizable dialog components.

import { cn } from "@/lib/utils"

// Imports the 'cn' function, likely a utility function for conditional classNames.

import { buttonVariants } from "@/components/ui/button"

// Imports the 'buttonVariants' function, likely a utility function for creating button variants.


// Root component for the Alert Dialog.
const AlertDialog = AlertDialogPrimitive.Root

// Trigger component for the Alert Dialog.
const AlertDialogTrigger = AlertDialogPrimitive.Trigger

// // Portal for rendering the Alert Dialog outside of the DOM hierarchy for better positioning.
const AlertDialogPortal = AlertDialogPrimitive.Portal 


// // Overlay component for the background when the dialog is open. It makes use of forwardRef for passing refs.

const AlertDialogOverlay = React.forwardRef<
React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({className, ...props }, ref) => (
    <AlertDialogPrimitive.Overlay
    className={cn(
        // Class names used to style the overlay (e.g., full-screen black overlay with fade-in/fade-out animation).
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", 
        className
    )}
    {...props}  //pass ant other proprs to the  overlay

    ref={ref} //Attach reg overaly component

    />
))
// Sets the display name for the component for easier debugging in React DevTools.
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName 

// The content inside the dialog window, using forwardRef for proper ref forwarding.
const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>, 
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    {/* The overlay that dims the background is rendered here */}
    <AlertDialogOverlay />
    {/* Main content of the alert dialog */}
    <AlertDialogPrimitive.Content
      ref={ref} // Forwarded ref.
      className={cn(
        // Class names that style and animate the dialog content, including positioning and transitions.
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", 
        className
      )}
      {...props} // Pass additional props.
    />
  </AlertDialogPortal>
))
// Sets display name for easier debugging in React DevTools.
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName 

// Header section of the alert dialog, with customizable class names.
const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      // Flex styles to space items in the header, either centered or left-aligned depending on screen size.
      "flex flex-col space-y-2 text-center sm:text-left", 
      className
    )}
    {...props} // Pass props to the div.
  />
)
// Sets display name for easier debugging in React DevTools.
AlertDialogHeader.displayName = "AlertDialogHeader" 

// Footer section of the alert dialog, usually containing action buttons (e.g., Cancel, Confirm).
const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      // Flex styles for arranging the footer buttons, responsive to screen size.
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", 
      className
    )}
    {...props} // Pass additional props.
  />
)
// Sets display name for easier debugging in React DevTools.
AlertDialogFooter.displayName = "AlertDialogFooter" 

// Title component for the alert dialog.
const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>, 
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref} // Forward the ref.
    className={cn("text-lg font-semibold", className)} // Applies text styling for title.
    {...props} // Pass additional props.
  />
))
// Sets display name for easier debugging in React DevTools.
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName 

// Description component for the alert dialog, used to describe the action being confirmed.
const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>, 
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref} // Forward the ref.
    className={cn("text-sm text-muted-foreground", className)} // Styles the description text.
    {...props} // Pass additional props.
  />
))
// Sets display name for easier debugging in React DevTools.
AlertDialogDescription.displayName = 
  AlertDialogPrimitive.Description.displayName 

// Action button for the alert dialog (e.g., Confirm action).
const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>, 
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref} // Forward the ref.
    className={cn(buttonVariants(), className)} // Applies button styles and variants.
    {...props} // Pass additional props.
  />
))
// Sets display name for easier debugging in React DevTools.
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName 

// Cancel button for the alert dialog, often styled differently than the confirm button.
const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>, 
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref} // Forward the ref.
    className={cn(
      // Applies button styles with an outline variant and adds top margin on smaller screens.
      buttonVariants({ variant: "outline" }), 
      "mt-2 sm:mt-0", 
      className
    )}
    {...props} // Pass additional props.
  />
))
// Sets display name for easier debugging in React DevTools.
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName 

// Export all components to be used in other parts of the app.
export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}


