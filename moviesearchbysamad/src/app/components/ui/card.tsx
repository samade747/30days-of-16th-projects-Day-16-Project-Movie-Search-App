// Importing necessary modules and utilities
import * as React from "react" // Importing React for creating components
import { cn } from "@/lib/utils" // Importing the custom `cn` utility function to handle conditional class names

// Defining a `Card` component using React's `forwardRef`
// This component will render a <div> element and accept any standard div attributes via `HTMLDivElement`
const Card = React.forwardRef<
  HTMLDivElement, // Forwarding ref to an HTML div element
  React.HTMLAttributes<HTMLDivElement> // Accepting any attributes valid for a div element
>(({ className, ...props }, ref) => (
  <div
    ref={ref} // Forwarding the `ref` to the div element
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm", // Applying default styles (rounded corners, border, shadow, and text color)
      className // Merging additional custom class names passed via props
    )}
    {...props} // Spreading the remaining props (e.g., event handlers, custom attributes)
  />
))
// Setting display name for better debugging in React DevTools
Card.displayName = "Card"

// Defining a `CardHeader` component to render the header section of the card
const CardHeader = React.forwardRef<
  HTMLDivElement, // Forwarding ref to an HTML div element
  React.HTMLAttributes<HTMLDivElement> // Accepting standard div attributes
>(({ className, ...props }, ref) => (
  <div
    ref={ref} // Forwarding the ref to the div
    className={cn("flex flex-col space-y-1.5 p-6", className)} // Applying flexbox for column layout, spacing, and padding
    {...props} // Spreading the remaining props to the div
  />
))
// Setting display name for better debugging
CardHeader.displayName = "CardHeader"

// Defining a `CardTitle` component to render the card's title (as an <h3> element)
const CardTitle = React.forwardRef<
  HTMLParagraphElement, // Forwarding ref to an HTML paragraph element
  React.HTMLAttributes<HTMLHeadingElement> // Accepting attributes for an h3 heading
>(({ className, ...props }, ref) => (
  <h3
    ref={ref} // Forwarding the ref to the h3 element
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight", // Applying text styles: font size, weight, and spacing
      className // Merging additional custom classes
    )}
    {...props} // Spreading other props to the h3 element
  />
))
// Setting display name for better debugging
CardTitle.displayName = "CardTitle"

// Defining a `CardDescription` component to render a description in the card (as a <p> element)
const CardDescription = React.forwardRef<
  HTMLParagraphElement, // Forwarding ref to an HTML paragraph element
  React.HTMLAttributes<HTMLParagraphElement> // Accepting standard paragraph attributes
>(({ className, ...props }, ref) => (
  <p
    ref={ref} // Forwarding the ref to the paragraph element
    className={cn("text-sm text-muted-foreground", className)} // Applying muted text styles and merging additional custom classes
    {...props} // Spreading the remaining props to the paragraph
  />
))
// Setting display name for better debugging
CardDescription.displayName = "CardDescription"

// Defining a `CardContent` component to render the content section of the card
const CardContent = React.forwardRef<
  HTMLDivElement, // Forwarding ref to an HTML div element
  React.HTMLAttributes<HTMLDivElement> // Accepting standard div attributes
>(({ className, ...props }, ref) => (
  <div
    ref={ref} // Forwarding the ref to the div
    className={cn("p-6 pt-0", className)} // Applying padding styles with no padding-top (pt-0) and merging custom classes
    {...props} // Spreading other props to the div element
  />
))
// Setting display name for better debugging
CardContent.displayName = "CardContent"

// Defining a `CardFooter` component to render the footer section of the card
const CardFooter = React.forwardRef<
  HTMLDivElement, // Forwarding ref to an HTML div element
  React.HTMLAttributes<HTMLDivElement> // Accepting standard div attributes
>(({ className, ...props }, ref) => (
  <div
    ref={ref} // Forwarding the ref to the div element
    className={cn("flex items-center p-6 pt-0", className)} // Applying flexbox layout with alignment, padding, and no padding-top (pt-0)
    {...props} // Spreading other props to the div element
  />
))
// Setting display name for better debugging
CardFooter.displayName = "CardFooter"

// Exporting all the Card-related components for use in other parts of the application
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
