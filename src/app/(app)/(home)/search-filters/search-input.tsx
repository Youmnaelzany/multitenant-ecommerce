import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";

interface SearchInputProps {
  disabled?: boolean;
}

export default function SearchInput({ disabled }: SearchInputProps) {
  return (
    <div className="flex w-full items-center gap-2">
      <div className="relative w-full">
        <SearchIcon className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-neutral-500" />
        <Input
          type="search"
          placeholder="Search Product"
          className="p-8"
          disabled={disabled}
        />
      </div>
    </div>
  );
}
