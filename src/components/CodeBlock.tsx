import { CodeEditor } from '@/components/ui/shadcn-io/code-editor';
import { Code } from 'lucide-react';
import { div } from 'motion/react-client';
export const CodeBlock = () => {
  return (
    <div className=' w-full h-auto overflow-hidden'>
      <CodeEditor
      cursor
      className=" w-full lg:w-full h-[480px] overflow-hidden z-50"
      lang="cpp"
      title="SudokuSolver.cpp"
      icon={<Code />}
      duration={15}
      delay={0.5}
      copyButton
    >
      {`function DropdownMenuCheckboxItem({
        className,
        children,
        checked,
        ...props
      }: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
        return (
          <DropdownMenuPrimitive.CheckboxItem
            data-slot="dropdown-menu-checkbox-item"
            className={cn(
              "focus:bg-accent focus:text-accent-foreground relative flex
               cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 
               l-8 text-sm outline-hidden select-none data-[disabled]
               :pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none
                [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              className
            )}
            checked={checked}
            {...props}
          >
            <span className="pointer-events-none absolute left-2 flex size-3.5
             items-center justify-center">
              <DropdownMenuPrimitive.ItemIndicator>
                <CheckIcon className="size-4" />
              </DropdownMenuPrimitive.ItemIndicator>
            </span>
            {children}
          </DropdownMenuPrimitive.CheckboxItem>
        )
      }`}
    </CodeEditor> 
    </div>
  );
};
export default CodeBlock;