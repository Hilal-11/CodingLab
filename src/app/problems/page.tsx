import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import Header from "@/components/CodeExeComponents/Header"
function problems() {
  return (
    <>
    <Header /> <br /><br />
    <ResizablePanelGroup
      direction="horizontal"
      className="py-8 rounded-lg w-svw h-svh gap-1"
    >
      <ResizablePanel defaultSize={40} className="bg-neutral-100 dark:bg-neutral-900 rounded-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
        <div className="flex h-svh items-center justify-center p-6">
          <span className="font-semibold">Problem Constraints</span>
        </div>
      </ResizablePanel>


      <ResizableHandle withHandle className="bg-transparent hover:bg-[linear-gradient(90deg,hsla(33,100%,53%,1)_0%,hsla(58,100%,68%,1)_100%)] px-[1px]"/>

      
      <ResizablePanel defaultSize={75}>
        <ResizablePanelGroup direction="vertical" className="gap-1">
          <ResizablePanel className="w-[100%] h-svh bg-neutral-100 dark:bg-neutral-900 rounded-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Code Editor</span>
            </div>
          </ResizablePanel>


          <ResizableHandle withHandle className="bg-transparent hover:bg-[linear-gradient(90deg,hsla(33,100%,53%,1)_0%,hsla(58,100%,68%,1)_100%)] py-[1px]"/>


          <ResizablePanel defaultSize={50} className="bg-neutral-100 dark:bg-neutral-900 rounded-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Test Cases</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
    </>
  )
}
export default problems