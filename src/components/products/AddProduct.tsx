import { Modal } from "@components/core/Modal";
import { ModalFooter } from "@components/core/Modal/ModalFooter";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";
import { Textarea } from "@components/ui/textarea";
import { ProductType } from "@enums";
import { useMediaQuery } from "@hooks";
import { Plus } from "lucide-react";
import { useState } from "react";

type Props = {};

export const AddProduct = (props: Props) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const Menu = () =>
    isDesktop ? (
      <Button className="gap-1">
        Add Product <Plus size={16} strokeWidth={3} />
      </Button>
    ) : (
      <Button size="icon" className="gap-1">
        <Plus size={16} strokeWidth={3} />
      </Button>
    );
  return (
    <Modal
      contentProps={{ className: "sm:max-w-xl" }}
      menu={<Menu />}
      open={open}
      onChange={setOpen}
      drawer
      widthClass="w-9/12"
    >
      <div className="px-4 py-6">
        <div className="pb-4">
          <h1 className="text-xl font-medium">Add new product</h1>
        </div>
        <div className="flex gap-6">
          <div className="w-9/12 space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Product Name/Model</Label>
              <Input
                type="text"
                id="title"
                placeholder="Enter product name or model"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Write about product" />
            </div>
          </div>
          <div className="w-3/12 space-y-4">
            <div className="grid gap-2">
              <Label>Product Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Product Type" />
                </SelectTrigger>
                <SelectContent>
                  {Object.values(ProductType).map((type, idx) => (
                    <SelectItem key={idx} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="price">Price BDT</Label>
              <Input type="number" id="price" placeholder="e.g. 60000" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="brand">Brand</Label>
              <Input type="text" id="brand" placeholder="e.g. Apple" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="color">Color</Label>
              <Input type="color" id="color" placeholder="e.g. 1000" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="madeIn">Made In</Label>
              <Input type="text" id="madeIn" placeholder="e.g. Bangladesh" />
            </div>
          </div>
        </div>
      </div>
      <ModalFooter>
        <Button onClick={() => setOpen(false)} variant="ghost">
          Cancel
        </Button>
        <Button>Save Changes</Button>
      </ModalFooter>
    </Modal>
  );
};
