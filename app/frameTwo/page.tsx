import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Order from "@/components/unique/Order";
import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import { ChevronDown, ChevronLeft } from "lucide-react";

const frameTwo = () => {
    return (
        <div className="h-[630px] w-[340px] p-3 mx-auto bg-[#15191D] rounded-lg">
            <div className="mb-[7px]">
                <Button size="sm" variant="outline" className={cn(
                    "bg-[#2F343D] py-1.5  px-4 border-[#2F343D] border me-2",
                    "text-xs font-medium leading-4 text-white"
                )}>Cross</Button>
                <Button size="sm" variant="outline" className={cn(
                    "bg-[#2F343D] py-1.5 px-4 border-[#2F343D] border me-2",
                    "text-xs font-medium leading-4 text-white"
                )}>20x</Button>
            </div>
            <div className="">
            <Tabs defaultValue="limit" className="">
                <div className="w-full mb-2">
                    <TabsList className="bg-transparent p-0">
                        <TabsTrigger 
                        className={cn(
                            "text-sm leading-5 text-start p-0 me-4 mb-2.5",
                            "data-[state=active]:bg-transparent data-[state=active]:shadow-0 data-[state=active]:rounded-none data-[state=active]:border-0",
                            "text-gray-500 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-b-white data-[state=active]:bg-transparent",
                        )} 
                        value="limit">
                            Limit
                        </TabsTrigger>
                        <TabsTrigger
                        className={cn(
                            "text-sm leading-5 text-start p-0 me-4 mb-2.5",
                            "data-[state=active]:bg-transparent data-[state=active]:shadow-0 data-[state=active]:rounded-none data-[state=active]:border-0",
                            "text-gray-500 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-b-white data-[state=active]:bg-transparent",
                        )}
                        value="market">
                            Market
                        </TabsTrigger>
                        <TabsTrigger
                        className={cn(
                            "text-sm leading-5 text-start p-0 me-4 mb-2.5",
                            "data-[state=active]:bg-transparent data-[state=active]:shadow-0 data-[state=active]:rounded-none data-[state=active]:border-0",
                            "text-gray-500 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-b-white data-[state=active]:bg-transparent",
                        )}
                        value="stopLimit">
                            <div className="flex items-center gap-x-1">
                                <span>Stop Limit</span>
                                <ChevronDown/>
                            </div>
                            
                        </TabsTrigger>
                    </TabsList>
                    <Separator orientation="horizontal" className="bg-[#2F343D] h-0.5 -mt-[7px]"/>
                </div>  
                <TabsContent value="limit">
                    <Order/>
                </TabsContent>
                <TabsContent value="market" className="text-white font-medium text-md">Some Content ...</TabsContent>
                <TabsContent value="stopLimit" className="text-white font-medium text-md">Some Content ...</TabsContent>
            </Tabs>
        </div>
        </div>
    )
}

export default frameTwo;