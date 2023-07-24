"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { TFormInputs } from "@/app/react-form/constants";
import { SelectSingleEventHandler } from "react-day-picker";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";
import { Button } from "../Button";
import { Calendar } from "../Calendar";

export type TDatePicker = {
  onChange: (
    value: React.ChangeEvent<HTMLInputElement> | Date | undefined
  ) => void;
};

export function DatePicker({ onChange }: TDatePicker) {
  const [date, setDate] = React.useState<Date>();
  const handleChange = (currentDate: Date | undefined) => {
    setDate(currentDate);
    onChange(currentDate);
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(day) => {
            handleChange(day);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
