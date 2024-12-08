"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import useSatelliteStore from "@/zooStore/satellitesStore"
import { useState, useEffect } from "react"


export function Combobox() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const [ current, setCurrent] = useState(-1)
  const { currentSat, setCurrentSat } = useSatelliteStore() 

  useEffect(() => {
    if(value != "")
    {
      const id = satellites.above.find(item => item.satname == value).satid;
      setCurrentSat(id)
      console.log(id)
    }

  }, [value])

  const { satellites } = useSatelliteStore() 
   

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? satellites.above.find((sat) => sat.satname === value)?.satname
            : "Select satelite..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search satelite..." />
          <CommandList>
            <CommandEmpty>No found.</CommandEmpty>
            <CommandGroup>
              {satellites.above?.map((sat) => (
                <CommandItem
                  key={sat.satname + sat.satid}
                  value={sat.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                    setCurrent(current)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === sat.satname ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {sat.satname}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
