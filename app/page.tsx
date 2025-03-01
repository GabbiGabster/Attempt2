import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="w-[100%] h-[1024px] relative bg-white  overflow-hidden">
        <div className="w-[100%] h-[196px] left-0 top-0 absolute bg-[#a9b6d6]" />
        <div className="flex items-center justify-center h-screen">
          <div className="w-[149px] h-[78px] left-[328px] top-[250px] absolute text-[#294ca5] text-[50px] font-normal font-['Inter']">Login</div>
          <div className="w-[766px] h-[65px] left-[328px] top-[415px] absolute bg-[#d9d9d9] rounded-[10px]" />
          <div className="w-[766px] h-[65px] left-[328px] top-[577px] absolute bg-[#d9d9d9] rounded-[10px]" />
          <div className="w-[258px] h-[65px] left-[582px] top-[709px] absolute bg-[#294ca5] rounded-[10px]" />
          <div className="w-[598px] h-[39px] left-[328px] top-[352px] absolute text-[#7085b8] text-3xl font-normal font-['Inter']">username or email</div>
          <div className="w-[178px] h-[39px] left-[308px] top-[509px] absolute text-center text-[#7085b8] text-3xl font-normal font-['Inter']">password</div>
          <div className="w-[186px] h-[18px] left-[946px] top-[519px] absolute text-[#294ca5] text-lg font-normal font-['Inter']">forgot password?</div>
          <div className="w-[311px] h-[18px] left-[821px] top-[362px] absolute"><span class="text-[#808aa4] text-lg font-normal font-['Inter']">New to Alera? </span><span class="text-[#294ca5] text-lg font-normal font-['Inter']">Create an account</span></div>
          <div className="w-[180px] h-[33px] left-[621px] top-[725px] absolute text-center text-white text-3xl font-normal font-['Inter']">Sign In</div>
        </div>
      </div>
    </div>
  );
}
