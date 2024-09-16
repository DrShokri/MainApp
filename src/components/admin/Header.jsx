import { Button, Input } from "@nextui-org/react";
import { PlusIcon } from "./icons/PlusIcon";
import { SearchIcon } from "./icons/SearchIcon";

function Header() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between gap-3 items-end">
        <Input
          isClearable
          classNames={{
            base: "w-full sm:max-w-[44%]",
            inputWrapper: "border-1",
          }}
          placeholder="Search by name..."
          size="sm"
          startContent={<SearchIcon className="text-default-300" />}
          //value={filterValue}
          variant="bordered"
          //onClear={() => setFilterValue("")}
          //onValueChange={onSearchChange}
        />
        <div className="flex gap-3">
          <Button
            className="bg-foreground text-background"
            endContent={<PlusIcon />}
            size="sm"
          >
            Add New
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-default-400 text-small">Total x users</span>
        <label className="flex items-center text-default-400 text-small">
          Rows per page:
          <select
            className="bg-transparent outline-none text-default-400 text-small"
            //onChange={onRowsPerPageChange}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default Header;
