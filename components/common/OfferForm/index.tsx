import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { CirclePlus } from "lucide-react";
import styles from "./style.module.css"
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const OfferForm = () => {
    return (
        <div className="mt-2.5">
            <div className="flex items-center gap-x-1">
                <span className="text-xs leading-4 text-[#8B8F99]">Available</span>
                <span className="text-xs leading-4 text-white">15,000.00 USDC</span>
                <CirclePlus className="text-white w-3 h-3"/>
            </div>
           <div>
                <form className="my-2">
                    <div className="relative">
                        <Input className={cn("text-white py-2.5 ps-2.5 pr-[60px] border-[#2F343D]", styles.noSpin)} type="number" placeholder="Price"></Input>
                        <Label className="absolute right-2.5 top-[50%] translate-y-[-50%] text-white leading-5">USDC</Label>
                    </div>
                    <div className="my-2"></div>
                    <div className="relative mb-4">
                        <Input className={cn("text-white py-2.5 ps-2.5 pr-20 border-[#2F343D]", styles.noSpin)} type="number" placeholder="Size"></Input>
                        <Select>
                            <SelectTrigger className={cn(
                                "absolute right-2.5 top-[50%] translate-y-[-50%] text-white! border-0 p-0",
                                " text-sm leading-5 font-medium",
                                "[&>svg]:stroke-white [&>svg]:opacity-100",
                                "focus-visible:border-0 focus-visible:ring-0"
                                )}>
                                <SelectValue defaultValue="BTC" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>Coins</SelectLabel>
                                <SelectItem value="BTC">BTC</SelectItem>
                                <SelectItem value="TEST1">TEST</SelectItem>
                                <SelectItem value="TEST2">TEST</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <Slider className="dark"></Slider>
                    <div className="h-1"></div>
                    <div className="my-4">
                        <div className="flex items-center gap-2 my-3">
                            <Checkbox id="reduce" className="border-[#2F343D]" />
                            <Label htmlFor="reduce" className="text-xs leading-4 tracking-[1%] text-white">Reduce Only</Label>
                        </div>
                        <div className="flex items-center gap-2 my-3">
                            <Checkbox id="tp/ls" className="border-[#2F343D]"/>
                            <Label htmlFor="tp/ls" className="text-xs leading-4 tracking-[1%] text-white">TP/SL</Label>
                        </div>
                    </div>
                    <Button className="w-full text-sm leading-5 font-medium text-white bg-[#2EBD85] hover:bg-[#2F343D]">Place Order</Button>
                </form>
                <div className="mt-4">
                    <div className="flex justify-between items-center my-2">
                        <span className="text-sm leading-4 text-[#8B8F99]">Liq Price</span>
                        <span className="text-xs leading-4 text-white">-- USDC</span>
                    </div>
                    <div className="flex justify-between items-center my-2">
                        <span className="text-sm leading-4 text-[#8B8F99]">Cost</span>
                        <span className="text-xs leading-4 text-white">0.00 USDC</span>
                    </div>
                    <div className="flex justify-between items-center my-2">
                        <span className="text-sm leading-4 text-[#8B8F99]">Max</span>
                        <span className="text-xs leading-4 text-white">0.000 BTC</span>
                    </div>
                    <div className="flex justify-between items-center my-2">
                        <span className="text-sm leading-4 text-[#8B8F99]">Est Reward</span>
                        <span className="text-xs leading-4 text-white">0.00 BITS</span>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default OfferForm;