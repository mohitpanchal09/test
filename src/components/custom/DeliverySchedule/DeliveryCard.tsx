import { DeliveryTimings } from "@/types";

function DeliveryCard({ Icon, desc }: DeliveryTimings) {
  return (
    <div className="flex flex-col gap-y-5 justify-center items-center w-[250px] h-[230px]  p-2 inset-0 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20">
      <Icon className="text-white" size={40}/>
      <p className="text-center text-white">{desc}</p>
    </div>
  );
}

export default DeliveryCard;
