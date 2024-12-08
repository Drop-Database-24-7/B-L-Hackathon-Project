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

const frameworks = [
  {
    value: "satelite1",
    label: "Satelite1",
  },
  {
    value: "satelite2",
    label: "Satelite2",
  },
  {
    value: "satelite3",
    label: "Satelite3",
  },
  {
    value: "satelite4",
    label: "Satelite4",
  },
  {
    value: "satelite5",
    label: "Satelite5",
  },
]

export function Combobox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

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
            ? satellites.above.find((sat) => sat.satname === value)?.label
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
                  key={sat.satname}
                  value={sat.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
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
