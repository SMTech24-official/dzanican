"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function ModelSelect({ models }: { models: string[] }) {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string[]>(["Rolex"]);
  console.log(selected);

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="w-full rounded border bg-white shadow-lg"
    >
      <CollapsibleTrigger className="flex w-full items-center justify-between border-b px-4 py-2">
        <span className="text-sm font-medium">Model</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-1 p-1">
        {models?.map((brand) => (
          <label
            key={brand}
            className="flex cursor-pointer items-center justify-between rounded px-3 py-1.5 text-sm hover:bg-slate-50"
          >
            <span
              className={`${
                selected.includes(brand) ? "text-black" : "text-slate-500"
              }`}
            >
              {brand}
            </span>
            <Checkbox
              checked={selected.includes(brand)}
              onCheckedChange={(checked) => {
                setSelected(
                  checked
                    ? [...selected, brand]
                    : selected.filter((b) => b !== brand)
                );
              }}
              className="h-4 w-4 rounded-sm"
            />
          </label>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
