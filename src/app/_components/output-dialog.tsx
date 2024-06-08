import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogClose,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Props {
  showOutput: boolean;
  setShowOutput: (showOutput: boolean) => void;
  children: React.ReactNode;
}

export const OutputDialog = ({
  showOutput,
  setShowOutput,
  children,
}: Props) => {
  return (
    <Dialog open={showOutput} onOpenChange={setShowOutput}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Output</DialogTitle>
          <DialogDescription>
            These are the input field values.
          </DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter>
          <DialogClose>
            <Button variant="outline">Close Output Window</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
