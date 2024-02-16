import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Plus, Search } from "lucide-react";

type Props = {};

export const ProductsContainer = (props: Props) => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center py-4">
        <div className="relative">
          <Input placeholder="Search Products" className="w-96 pl-8" />
          <Search
            className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500"
            size={16}
          />
        </div>
        <Button className="gap-1">
          Add Product <Plus size={16} strokeWidth={3} />
        </Button>
      </div>
    </div>
  );
};
