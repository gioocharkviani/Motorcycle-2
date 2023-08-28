import Maincarusel from "@/components/maincarusel/maincarusel"
import Mpabout from "@/components/mpabout/mpabout"
import Mpbookservice from "@/components/mpbookservice/mpbookservice";
import Mpbrands from "@/components/mpbrands/mpbrands";
import Mpservices from "@/components/mpservices/mpservices"
import Whychooseus from "@/components/whychooseus/whychooseus"

export default function Home({params}:any) {
  console.log(params);
  
  return (
    <div className="w-full bg-[#000] flex flex-col">
      <Maincarusel />
      <Mpservices />
      <Mpabout />
      <Whychooseus />

      <div className="w-full flex justify-center brand-class">
        <div className="flex justify-center w-[95%] py-[100px] gap-[50px] md:flex-row flex-col">
          <Mpbrands />
          <Mpbookservice />
        </div>
      </div>

    </div>
  )
}
