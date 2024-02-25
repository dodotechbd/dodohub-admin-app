import { UploadFiles } from "@components/images/UploadFiles";
import { Input } from "@components/ui/input";
import { Search } from "lucide-react";

export const ImageContainer = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center py-4">
        <div className="relative">
          <Input placeholder="Search Products" className="md:w-96 w-48 pl-8" />
          <Search
            className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500"
            size={16}
          />
        </div>
        <UploadFiles />
      </div>
    </div>
  );
};
