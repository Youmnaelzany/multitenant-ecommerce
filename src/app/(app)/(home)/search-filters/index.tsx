import SearchInput from "./search-input";

interface SearchFiltersProps {
  data: any;
}

export default function SearchFilters({ data }: SearchFiltersProps) {
  return (
    <div className="flex w-full flex-col gap-4 border-b px-4 py-8 lg:px-12">
      <SearchInput />
      {JSON.stringify(data, null, 2)}
    </div>
  );
}
