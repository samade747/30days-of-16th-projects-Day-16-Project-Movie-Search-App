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