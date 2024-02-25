import { Modal } from "@components/core/Modal";
import { ModalFooter } from "@components/core/Modal/ModalFooter";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { ScrollArea } from "@components/ui/scroll-area";
import { useMediaQuery } from "@hooks";
import { CircleSlash, Upload, UploadCloud, X } from "lucide-react";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

type Props = {};

const IMAGE_MIME_TYPE = "image/png, image/gif, image/jpeg, image/svg+xml";

export const UploadFiles = (props: Props) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const removeFile = (idx: number) => {
    const newFiles = files.filter((file, i) => i !== idx);
    setFiles(newFiles);
  };
  const handleClose = () => {
    setFiles([]);
    setOpen(false);
  };
  return (
    <div>
      <Modal
        contentProps={{ className: "sm:max-w-md" }}
        menu={
          <Button className="gap-1" size={isDesktop ? "default" : "icon"}>
            <Upload size={16} strokeWidth={3} />
            <span className="md:inline hidden">Upload</span>
          </Button>
        }
        open={open}
        onChange={(o) => {
          setFiles([]);
          setOpen(o);
        }}
      >
        <div className="px-4 py-3">
          <div className="pb-4">
            <h1 className="text-lg font-medium">Upload Files</h1>
          </div>
          <div className="w-full">
            <label
              htmlFor="upload-files"
              className="w-full cursor-pointer rounded-md border-dashed border-black/40 bg-black/5 flex flex-col items-center justify-center border-2 py-6"
            >
              <UploadCloud size={28} />
              <p className="font-medium text-sm">
                Drag and Drop files here or{" "}
                <span className="underline">Choose files</span>
              </p>
              <p className="text-xs font-medium opacity-70">
                Supported formats: JPG, PNG, GIF, SVG
              </p>
            </label>
            <Input
              type="file"
              id="upload-files"
              className="hidden"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const fileList = e.target.files;
                if (fileList?.length) {
                  const newFiles = Array.from(fileList);
                  setFiles([...files, ...newFiles]);
                }
              }}
              multiple
              accept={IMAGE_MIME_TYPE}
            />
            <p className="text-end p-1 text-black/80 text-xs font-medium">
              Maximum Size: 32 MB
            </p>
          </div>
          <div>
            {files.length ? (
              <ScrollArea className="h-64">
                <div className="py-3 flex flex-wrap gap-3">
                  {files.map((file, idx) => (
                    <div key={idx} className="relative">
                      <Image
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        width={500}
                        height={500}
                        quality={50}
                        className="w-16 md:w-20 h-16 md:h-20 rounded object-cover object-center"
                      />
                      <button
                        onClick={() => removeFile(idx)}
                        className="absolute -top-1 -right-1 p-0.5 bg-red-500 rounded-full text-white"
                      >
                        <X size={10} />
                      </button>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            ) : (
              <div className="flex flex-col text-black/80 items-center justify-center pt-8 pb-6">
                <CircleSlash size={36} strokeWidth={1} />
                <p>No file selected yet.</p>
              </div>
            )}
          </div>
        </div>
        <ModalFooter>
          <Button onClick={handleClose} variant="ghost">
            Cancel
          </Button>
          <Button onClick={handleClose} disabled={!files.length}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
