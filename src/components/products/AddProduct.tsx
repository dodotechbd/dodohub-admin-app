import { Modal } from "@components/core/Modal";
import { ModalFooter } from "@components/core/Modal/ModalFooter";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { useMediaQuery } from "@hooks";
import { cn } from "@lib/utils";
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
      title="Add a New Product"
      contentProps={{ className: "sm:max-w-xl" }}
      menu={<Menu />}
      open={open}
      onChange={setOpen}
    >
      <form className={cn("grid items-start gap-4")}>
        <div className="grid gap-2">
          <Label htmlFor="title">Product Name/Model</Label>
          <Input
            type="text"
            id="title"
            placeholder="Enter product name or model"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" defaultValue="@shadcn" />
        </div>
      </form>
      <ModalFooter>
        <Button onClick={() => setOpen(false)} variant="ghost">
          Cancel
        </Button>
        <Button>Save Changes</Button>
      </ModalFooter>
    </Modal>
  );
};
