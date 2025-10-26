import TableOrder from "@/components/common/TableOrders";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils";
import Image from "next/image";
import all from "@/public/all.png";
import up from "@/public/up.png";
import down from "@/public/down.png";
import { ChevronDown } from "lucide-react";

const OrderTabs = () => {
    return (
        <div className="">
            <Tabs defaultValue="allOrders" className="gap-0.5">
                <div className="w-full flex justify-between items-center">
                    <TabsList className="bg-transparent h-4 p-0">
                        <TabsTrigger 
                        className={cn(
                            "data-[state=active]:bg-transparent data-[state=active]:shadow-0 data-[state=active]:rounded-none data-[state=active]:border-0",
                            "opacity-50 data-[state=active]:opacity-100 data-[state=active]:bg-transparent p-0 me-3 h-4",
                        )} 
                        value="allOrders">
                            <Image src={all} width={16} height={16} alt="all picture" />
                        </TabsTrigger>
                        <TabsTrigger 
                        className={cn(
                            "data-[state=active]:bg-transparent data-[state=active]:shadow-0 data-[state=active]:rounded-none data-[state=active]:border-0",
                            "opacity-50 data-[state=active]:opacity-100 data-[state=active]:bg-transparent p-0 me-3 h-4",
                        )} 
                        value="upwardOrders">
                            <Image src={up} width={16} height={16} alt="all picture" />
                        </TabsTrigger>
                        <TabsTrigger 
                        className={cn(
                            "data-[state=active]:bg-transparent data-[state=active]:shadow-0 data-[state=active]:rounded-none data-[state=active]:border-0",
                            "opacity-50 data-[state=active]:opacity-100 data-[state=active]:bg-transparent p-0 me-3 h-4",
                        )} 
                        value="downwardOrders">
                            <Image src={down} width={16} height={16} alt="all picture" />
                        </TabsTrigger>
                    </TabsList>
                    <div className="flex items-center gap-x-1 text-white">
                        <span className="text-xs font-medium">0.1</span>
                        <ChevronDown width="14px"/>
                    </div>
                </div>  
                <TabsContent value="allOrders">
                    <TableOrder type="all"/>
                </TabsContent>
                <TabsContent value="upwardOrders">
                    <TableOrder type="upward"/>
                </TabsContent>
                <TabsContent value="downwardOrders">
                    <TableOrder type="downward"/>
                    </TabsContent>
            </Tabs>
        </div>
    )
}

export default OrderTabs;