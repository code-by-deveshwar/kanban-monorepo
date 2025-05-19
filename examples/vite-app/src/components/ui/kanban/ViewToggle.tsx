import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Typography from "@/components/ui/typography";

interface ViewToggleProps {
  viewByEmployee: boolean;
  toggleView: () => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ viewByEmployee, toggleView }) => (
  <div className="flex items-center justify-center gap-2">
    <Typography variant="span" className="font-normal text-sm">
      Adjust board by
    </Typography>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="rounded-full lg:text-base">
          {viewByEmployee ? "Employee" : "Status"}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-4">
        <DropdownMenuCheckboxItem
          checked={!viewByEmployee}
          onCheckedChange={toggleView}
        >
          Status
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={viewByEmployee}
          onCheckedChange={toggleView}
        >
          Employee
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);

export default ViewToggle;
