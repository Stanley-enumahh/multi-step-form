import thankIcon from "../assets/images/icon-thank-you.svg";

export default function LastPage() {
  return (
    <div className="py-[60px] md:py-8 gap-7 flex justify-center items-center flex-col  bg-white px-5  w-[90%] md:w-[50%] md:static absolute  top-[120px] md:mr-[70px] md:rounded-none rounded-lg">
      <img src={thankIcon} alt="" className="w-[70px]" />
      <div className="flex flex-col gap-3 text-center">
        <h1 className="text-3xl font-bold text-blue-950">Thank You!</h1>
        <p className="text-gray-500 text-sm">
          Thanks for confirming your subscription! we hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}
