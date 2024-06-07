import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

interface Props {
  showOutput: boolean;
  setShowOutput: (showOutput: boolean) => void;
  children: React.ReactNode;
}

export const OutputDrawer = ({
  showOutput,
  setShowOutput,
  children,
}: Props) => {
  return (
    <Drawer open={showOutput} onOpenChange={setShowOutput}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Output</DrawerTitle>
          <DrawerDescription>
            These are the input field values.
          </DrawerDescription>
        </DrawerHeader>
        {/* content */}
        {children}
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Close Output Window</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
