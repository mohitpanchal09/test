import { PartnerWithUsProps } from "@/types";
import {
    Users,
    UtensilsCrossed,
    LineChart,
    Star,
    Instagram
} from "lucide-react";

export const partnerWithUsData: PartnerWithUsProps[] = [
    {
        Icon: Users,
        title: "Experience & Team",
        desc: "Leading in healthy space with 7+ years of experience, 80+ team members including in-house dietitians, we help people achieve their fitness goals through our delicious and personalised food.",
        number: 1
    },
    {
        Icon: UtensilsCrossed,
        title: "Menu Variety",
        desc: "350+ menu options ranging from Indian, continental, Lebanese, Mexican, Vietnamese, Italian cuisines.",
        number: 2
    },
    {
        Icon: LineChart,
        title: "Proven Results",
        desc: "50,000+ successful transformations and unique combination of subscription and alacarte that boosts sales.",
        number: 3
    },
    {
        Icon: Star,
        title: "User Ratings",
        desc: "Food that is loved by everyone. 4.3+ rating on Google, Zomato and Swiggy. Astonishing 79% repeat user orders.",
        number: 5
    },
    {
        Icon: Instagram,
        title: "Social Media",
        desc: "Impressive social media presence with over 150k+ followers on Instagram.",
        number: 5
    },
];
