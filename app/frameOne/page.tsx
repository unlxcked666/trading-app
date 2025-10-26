import TableOrder from "@/components/common/TableOrders";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import OrderTabs from "@/components/unique/OrderTabs";
import { cn } from "@/lib/utils";
import { Ellipsis } from "lucide-react";

const FrameOne = () => {
    return (
        <div className="h-[630px] w-[340px] p-3 mx-auto bg-[#15191D] rounded-lg pt-2">
            <Tabs defaultValue="orderBook" className="gap-0">
                <div className="w-full flex justify-between">
                    <TabsList className="bg-transparent p-0 pb-1">
                        <TabsTrigger 
                        className={cn(
                            "text-sm leading-5 text-start p-0 me-4 mb-2.5",
                            "data-[state=active]:bg-transparent data-[state=active]:shadow-0 data-[state=active]:rounded-none data-[state=active]:border-0",
                            "text-gray-500 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-b-white data-[state=active]:bg-transparent",
                        )} 
                        value="orderBook">
                            Order Book
                        </TabsTrigger>
                        <TabsTrigger
                        className={cn(
                            "text-sm leading-5 text-start p-0 me-4 mb-2.5",
                            "data-[state=active]:bg-transparent data-[state=active]:shadow-0 data-[state=active]:rounded-none data-[state=active]:border-0",
                            "text-gray-500 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-b-white data-[state=active]:bg-transparent",
                        )}
                        value="trades">
                            Trades
                        </TabsTrigger>
                    </TabsList>
                    <Ellipsis className="text-[#8B8F99]" width="20px"/>
                </div>  
                <Separator orientation="horizontal" className="bg-[#2F343D] h-0.5 -mt-2.5"/>
                <TabsContent value="orderBook">
                    <OrderTabs/>
                </TabsContent>
                <TabsContent value="trades" className="text-white font-medium text-md">Some Content ...</TabsContent>
            </Tabs>
        </div>
    )
}

export default FrameOne;