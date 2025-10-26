import OfferForm from "@/components/common/OfferForm";
import TableOrder from "@/components/common/TableOrders";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils";

const Order = () => {
    return (
        <div className="">
            <Tabs defaultValue="buy" className="">
                <div className="">
                    <TabsList className="w-full bg-[#1F252A]!">
                        <TabsTrigger className="data-[state=active]:bg-[#2EBD85] data-[state=active]:hover:bg-[#2F343D] hover:bg-[#2F343D] text-white" value="buy">
                            Buy/Long
                        </TabsTrigger>
                        <TabsTrigger  className="data-[state=active]:bg-[#2EBD85]  data-[state=active]:hover:bg-[#2F343D] hover:bg-[#2F343D] text-white" value="sell">
                            Sell/Short
                        </TabsTrigger>
                    </TabsList>
                </div>  
                <TabsContent value="buy">
                    <OfferForm/>
                </TabsContent>
                <TabsContent value="sell">
                    <TableOrder type="upward"/>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Order;