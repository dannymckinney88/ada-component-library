'use client';

import React, { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose } from '@/components/molecules/Dialog/Dialog';
import { Button } from '@/components/atoms/Button/Button';

export default function DialogDemoPage() {
  const [open, setOpen] = useState(false);
  const [openLarge, setOpenLarge] = useState(false);

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Dialog Component</h1>
      
      <div className="grid gap-8">
        {/* Basic Dialog */}
        <div className="space-y-4">
          <h2 className="text-xl font-medium">Basic Dialog</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Basic Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Basic Dialog</DialogTitle>
              <p>This is a basic dialog with a title and content.</p>
              <div className="mt-4 flex justify-end">
                <DialogClose asChild>
                  <Button>Close</Button>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Large Dialog */}
        <div className="space-y-4">
          <h2 className="text-xl font-medium">Large Dialog</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Large Dialog</Button>
            </DialogTrigger>
            <DialogContent className="large">
              <DialogTitle>Large Dialog</DialogTitle>
              <div className="space-y-4">
                <p>This is a large dialog that can contain more content.</p>
                <p>It's useful for displaying forms, detailed information, or complex interactions.</p>
                <p>You can scroll if the content is too long.</p>
                <div className="mt-4 flex justify-end">
                  <DialogClose asChild>
                    <Button>Close</Button>
                  </DialogClose>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Dialog without close button */}
        <div className="space-y-4">
          <h2 className="text-xl font-medium">Dialog without Close Button</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Dialog without Close Button</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>No Close Button</DialogTitle>
              <p>This dialog doesn't have a close button in the top-right corner.</p>
              <p>You can only close it using the button below.</p>
              <div className="mt-4 flex justify-end">
                <DialogClose asChild>
                  <Button>Close</Button>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
} 