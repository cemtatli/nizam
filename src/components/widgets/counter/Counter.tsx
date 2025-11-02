"use client";

import { MinusIcon, PlusIcon } from "lucide-react";

import { useCounterStore } from "@/stores/counter.store";

import { Button } from "@/components/ui/button";

export function Counter() {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div className="flex items-center gap-2">
      <Button onClick={decrement} variant="outline" size="icon-sm" aria-label="Decrement">
        <MinusIcon />
      </Button>
      <p className="text-sm">Count: {count}</p>
      <Button onClick={increment} variant="outline" size="icon-sm" aria-label="Increment">
        <PlusIcon />
      </Button>
    </div>
  );
}
