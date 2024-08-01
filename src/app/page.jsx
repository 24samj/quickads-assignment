import { company } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { FaLock, FaRegStar } from "react-icons/fa6";
import { MdOutlineShare } from "react-icons/md";
import { RiQuestionMark } from "react-icons/ri";

export default function Home() {
  return (
    <div className="p-8">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-3xl font-extrabold">Youtube, Inc. </h2>
          <button className="flex items-center gap-2 rounded-md border-2 border-gray-300 px-4 py-2">
            <FaRegStar size={20} />
            Swipe
          </button>
          <button className="flex items-center gap-2 rounded-md bg-[#0176b4] px-4 py-2 text-white">
            <MdOutlineShare size={20} />
            Share
          </button>
        </div>
        <span className="font-semibold text-gray-500">
          United State of America (the)
        </span>
      </div>
      <div className="mt-8 grid grid-cols-4 gap-4">
        <div className="flex-1 rounded-xl border-2 p-4">
          <h3 className="mb-2 border-b-2 pb-2 font-bold text-[#4c596b]">
            Company Info
          </h3>
          <div>
            <strong className="text-[#4c596b]">Company: </strong>
            <span className="font-medium text-gray-500">
              {company.data.company.legalName}
            </span>
          </div>
          <div>
            <strong className="text-[#4c596b]">Year Founded: </strong>
            <span className="font-medium text-gray-500">
              {company.data.company.yearFounded}
            </span>
          </div>
          <div>
            <strong className="text-[#4c596b]">Employees: </strong>
            <span className="font-medium text-gray-500">
              {company.data.company.numberOfEmployees}
            </span>
          </div>
          <div>
            <strong className="text-[#4c596b]">HQ: </strong>
            <span className="font-medium text-gray-500">
              {company.data.company.headquarters}
            </span>
          </div>
          <div>
            <strong className="text-[#4c596b]">Category: </strong>
            <a href="#" className="font-medium text-[#3c46e3]">
              Onlne Video
            </a>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-4">
          <div className="rounded-xl border-2 p-4">
            <h6 className="flex items-center gap-2 text-sm text-primary">
              Ad Spend 365
              <RiQuestionMark className="h-4 w-4 rounded-full border-2 border-gray-300 p-[2px] text-gray-500" />
            </h6>
            <span className="text-xl font-bold text-primary">
              ${company.data.company.spend.last365Days}
            </span>
          </div>
          <div className="rounded-xl border-2 p-4">
            <h6 className="flex items-center gap-2 text-sm text-primary">
              Global Rank
              <RiQuestionMark className="h-4 w-4 rounded-full border-2 border-gray-300 p-[2px] text-gray-500" />
            </h6>
            <span className="text-xl font-bold text-[#4c596b]">
              #{company.data.ranks.global.rank}
            </span>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-4">
          <div className="rounded-xl border-2 p-4">
            <h6 className="flex items-center gap-2 text-sm text-primary">
              Country Rank
              <RiQuestionMark className="h-4 w-4 rounded-full border-2 border-gray-300 p-[2px] text-gray-500" />
            </h6>
            <span className="text-xl font-bold text-[#4c596b]">
              #{company.data.ranks.country.rank}
            </span>
          </div>
          <div className="rounded-xl border-2 p-4">
            <h6 className="flex items-center gap-2 text-sm text-primary">
              Category Rank
              <RiQuestionMark className="h-4 w-4 rounded-full border-2 border-gray-300 p-[2px] text-gray-500" />
            </h6>
            <span className="text-xl font-bold text-[#4c596b]">
              #{company.data.ranks.category.rank}
            </span>
          </div>
        </div>
        <div className="rounded-xl border-2 p-4">
          <h3 className="mb-2 border-b-2 pb-2 font-bold text-[#4c596b]">
            Campaign per country
          </h3>
          {company.data.top5Countries.map((country, index) => (
            <div key={index} className="">
              <span className="text-md font-semibold text-[#4c596b]">
                {country.countryId}:{" "}
              </span>
              <span className="text-md font-semibold text-[#4c596b]">
                {country.count}{" "}
              </span>
              <span className="text-md font-semibold text-[#4c596b]">
                ({country.percentage.toFixed(0)}%)
              </span>
            </div>
          ))}
        </div>
      </div>
      {/*this is a placeholder section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-primary">
          Performance and Testing volume
        </h2>
        <div className="relative flex">
          <Image
            src="/analysis.png"
            alt="Performance and Testing volume"
            style={{ width: "50%", height: "8%" }}
            width={1000}
            height={10}
          />
          <Image
            src="/analysis.png"
            alt="Performance and Testing volume"
            style={{ width: "50%", height: "8%" }}
            width={1000}
            height={10}
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center bg-white/10 backdrop-blur-md">
            <FaLock size={36} />
          </div>
        </div>
      </div>
    </div>
  );
}
