'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { useMutation } from 'convex/react'

import { Id } from '../../convex/_generated/dataModel'
import { api } from '../../convex/_generated/api'

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface RenameDialogProps {
	documentId: Id<'documents'>
	initialTitle: string
	children: React.ReactNode
}

export const RenameDialog = ({
	children,
	documentId,
	initialTitle,
}: RenameDialogProps) => {
	const update = useMutation(api.documents.updateById)
	const [isUpdating, setIsUpdating] = useState(false)

	const [newTitle, setNewTitle] = useState(initialTitle)
	const [open, setOpen] = useState(false)

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsUpdating(true)

		update({
			id: documentId,
			title: newTitle.trim() || 'Untitled',
		})
			.catch(() => toast.error('Something went wrong'))
			.then(() => {
				setOpen(false)
				toast.success('Document renamed')
			})
			.finally(() => {
				setIsUpdating(false)
			})
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent
				onClick={(e) => {
					e.stopPropagation()
				}}
			>
				<form onSubmit={onSubmit}>
					<DialogHeader>
						<DialogTitle>Rename document</DialogTitle>
						<DialogDescription>
							Enter a new name for this document
						</DialogDescription>
					</DialogHeader>
					<div className='my-4'>
						<Input
							value={newTitle}
							onChange={(e) => setNewTitle(e.target.value)}
							placeholder='Document name'
							onClick={(e) => e.stopPropagation()}
						/>
					</div>
					<DialogFooter>
						<Button
							type='button'
							variant='ghost'
							disabled={isUpdating}
							onClick={(e) => {
								e.stopPropagation()
								setOpen(false)
							}}
						>
							Cancel
						</Button>
						<Button
							disabled={isUpdating}
							type='submit'
							onClick={(e) => e.stopPropagation()}
						>
							Save
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	)
}