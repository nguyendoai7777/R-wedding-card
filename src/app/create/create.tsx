'use client';

import { useState } from 'react';
import { Calendar, Button, Input, Popover, PopoverContent, PopoverTrigger } from '@shadcn';

import { ChevronDownIcon } from 'lucide-react';
import { ScrollSnapCard } from '@components';

export interface CreateProps {}

export interface XInput {
  label: string;
  onChange?(value: string): void;
  className?: string;
}

export const XInput: FCC<XInput> = ({ onChange, label, className = '' }) => {
  return (
    <label className={`block ` + className}>
      <div className="text-xs mb-2">{label}</div>
      <Input />
    </label>
  );
};

export function XCalendar() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date>();
  return (
    <div className="flex gap-4">
      <div className="">
        <label htmlFor="date-picker" className="text-xs mb-2 block">
          Date
        </label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" id="date-picker" className="w-32 justify-between font-normal">
              {date ? date.toLocaleDateString() : 'Select date'}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              onSelect={(date) => {
                setDate(date);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="">
        <label htmlFor="time-picker" className="text-xs mb-2">
          Time
        </label>
        <Input
          type="time"
          id="time-picker"
          step="1"
          defaultValue="10:30:00"
          className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        />
      </div>
    </div>
  );
}

export const Create: FCC<CreateProps> = () => {
  return (
    /*<div className="grid grid-cols-2 w-full">*/
    <div className=" w-full">
      {/*<div className="p-2">
        <XInput label="Cô dâu" className="mb-2" />
        <XInput label="Chú rể" className="mb-2" />
        <XCalendar />
      </div>*/}
      <div>
        <ScrollSnapCard />
      </div>
    </div>
  );
};
