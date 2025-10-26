import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import orders from "@/data/order.json";
import { ArrowDown, ArrowDown01Icon } from "lucide-react";

const TableOrder = ({type}: {type: "all" | "upward" | "downward"}) => {
    return (
        <div>
            <Table className="table-fixed">
                <TableHeader className="h-4! mb-2">
                    <TableRow className="border-0!">
                        <TableHead className="text-gray-500 text-xs h-auto mb-2 p-0 w-1/3">Price (USDC)</TableHead>
                        <TableHead className="text-right text-gray-500 text-xs  h-auto mb-2 p-0 w-1/3">Size (BTC)</TableHead>
                        <TableHead className="text-right text-gray-500 text-xs h-auto mb-2 p-0 w-1/3">Sum (BTC)</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="h-2"></TableBody>
                {
                    type === "all" && 
                    <>
                        <TableBody>
                            {
                                orders.downward.map((item, index) => (
                                    <TableRow key={index} className="bg-[#F6465D1A] border-0">
                                        <TableCell className="font-medium text-[#F6465D] text-xs tracking-[0.5px] p-0 py-0.5 truncate">{item.price}</TableCell>
                                        <TableCell className="text-right text-xs p-0 py-0.5 tracking-[0.5px] text-white truncate">{item.size}</TableCell>
                                        <TableCell className="text-right text-xs p-0 py-0.5 tracking-[0.5px] text-white truncate">{item.sum}</TableCell>
                                    </TableRow>
                                ))
                            }
                            <TableRow>
                                <TableCell colSpan={3} className="p-0">
                                    <div className="text-[#F6465D] flex items-center gap-x-1 py-2">
                                        <span className="text-xl leading-8 tracking-[1px]">110,000.0</span>
                                        <ArrowDown width="20px"/>
                                        <span className="text-xs leading-4 text-[#8B8F99] ms-2">110,000.0</span>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                        <TableBody>
                            {
                                orders.upward.map((item, index) => (
                                    <TableRow key={index} className="border-0">
                                        <TableCell className="font-medium text-[#2EBD85] text-xs tracking-[0.5px] p-0 py-0.5 truncate">{item.price}</TableCell>
                                        <TableCell className="text-right text-xs tracking-[0.5px] p-0 py-0.5 text-white  truncate">{item.size}</TableCell>
                                        <TableCell className="text-right text-xs tracking-[0.5px] p-0 py-0.5 text-white truncate">{item.sum}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </>
                }

                {
                    type === "upward" && 
                        <TableBody>
                            {
                                orders.upward.map((item, index) => (
                                    <TableRow key={index} className="border-0">
                                        <TableCell className="font-medium text-[#2EBD85] text-xs tracking-[0.5px] p-0 py-0.5 truncate">{item.price}</TableCell>
                                        <TableCell className="text-right text-xs tracking-[0.5px] p-0 py-0.5 text-white  truncate">{item.size}</TableCell>
                                        <TableCell className="text-right text-xs tracking-[0.5px] p-0 py-0.5 text-white truncate">{item.sum}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                }

                {
                    type === "downward" && 
                        <TableBody>
                            {
                                orders.downward.map((item, index) => (
                                    <TableRow key={index} className="bg-[#F6465D1A] border-0">
                                        <TableCell className="font-medium text-[#F6465D] text-xs tracking-[0.5px] p-0 py-0.5 truncate">{item.price}</TableCell>
                                        <TableCell className="text-right text-xs tracking-[0.5px] p-0 py-0.5 text-white truncate">{item.size}</TableCell>
                                        <TableCell className="text-right text-xs tracking-[0.5px] p-0 py-0.5 text-white truncate">{item.sum}</TableCell>
                                    </TableRow>
                                ))
                            }
                            <TableRow>
                                <TableCell colSpan={3} className="p-0">
                                    <div className="text-[#F6465D] flex items-center gap-x-1 py-2">
                                        <span className="text-xl leading-8 tracking-[1px]">110,000.0</span>
                                        <ArrowDown width="20px"/>
                                        <span className="text-xs leading-4 text-[#8B8F99] ms-2">110,000.0</span>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                }
                
            </Table>
        </div>
    )
}

export default TableOrder;