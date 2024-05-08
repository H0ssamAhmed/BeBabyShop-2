import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogTitle,
} from '@radix-ui/react-alert-dialog'
import Link from 'next/link'
import React from 'react'

const AddeditemAlert = (itemName: string) => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTitle>{itemName} is already added to cart </AlertDialogTitle>
        <AlertDialogDescription>You can change color size from cart page</AlertDialogDescription>
        <Link href='/cart'>
          <AlertDialogAction>
            Go to cart
          </AlertDialogAction>
        </Link>

        <AlertDialogCancel>Close</AlertDialogCancel>
      </AlertDialog>
    </div>
  )
}

export default AddeditemAlert