import { DeliveryTimings } from "@/types";
import { ClockArrowUp } from "lucide-react";

export const deliveryTimings: DeliveryTimings[] = [
    {
        Icon: ClockArrowUp,
        desc: "By default, all the meals will be delivered together in the morning slot between 6:30AM to 10:30 AM"
    },
    {
        Icon: ClockArrowUp,
        desc: "If you want dinner to be delivered individually in the evening slot, kindly contact your nutritionist/ POC"
    }, {
        Icon: ClockArrowUp,
        desc: "An additional charge of ₹50/- per day will be charged for same which can be paid after you have taken the subscription"
    },
    {
        Icon: ClockArrowUp,
        desc: "Timing for evening slot would be 4 to 8 PM"
    },
    {
        Icon: ClockArrowUp,
        desc: "You can choose and change your delivery location and timings daily before 6pm for the next day directly from our app"
    },
    {
        Icon: ClockArrowUp,
        desc: "You can even cancel/block any future meal or day which gets carried forward ahead before 6pmM"
    }
]