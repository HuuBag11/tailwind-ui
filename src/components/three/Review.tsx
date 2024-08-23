import { Input } from "./Input";
import { Stars } from "./Stars";

export const Review: React.FC = () => {
  return (
    <div
      id="review"
      className="overflow-hidden bg-[#EEF2FF] w-full min-h-screen m-auto flex items-center jutify-center mx-auto xl:p-0 p-5 xl:py-10 h-auto"
    >
      <div className="relative after:content-[''] after:w-[calc(100%+250px)] after:h-[calc(100%-180px)] after:absolute after:top-2/4 after:left-2/4 after:translate-y-[-50%] after:translate-x-[-50%]  mx-auto h-auto card sm:min-w-[658px] after:bg-[#FDD4D4] after:rounded-[70px] z-10 after:z-[-1] min-w-full bg-white rounded-[40px] shadow-md text-[#121633] text-[26px]">
        <div className="max-w-[660px] bg-white w-full h-full md:p-[64px] p-[40px] relative z-1 rounded-[40px] flex flex-col space-y-8">
          <div>
            <h3 className="font-medium ">Overall rating</h3>
            <div className="start flex flex-col">
              <Stars />
              <span className="mt-2 text-[14px]">Click to rate</span>
            </div>
          </div>
          <Input
            title="Review title"
            placeholder="Example: Easy to use"
            type="text"
          />
          <div className="flex flex-wrap">
            <label htmlFor="" className="font-semibold text-[14px] mb-3 w-full min-w-full">Would you recommend this product to a friend?</label>
            
            <label htmlFor="yes" className="mr-5 flex gap-2 items-center accent-black text-[16px]"><input type="radio" id="yes" name="fav_language" className="scale-120" value="Yes" />Yes</label>
            
            <label htmlFor="no" className="flex gap-2 items-center accent-black text-[16px]"><input type="radio" id="no" name="fav_language" className="scale-120" value="No" />No</label>
          </div>
          <Input
            title="Product review"
            placeholder="Example: Since I bought this a month ago, it has been used a lot. What I like best/what is worst about this product is ..."
            type="textarea"
          />
          <div className="flex md:flex-row flex-col gap-4">
            <Input title="Nickname" placeholder="Example: bob27" type="text" />
            <Input
              title="Email address (will not be  publish)"
              placeholder="Example: your@email.com"
              type="text"
            />
          </div>
          <label htmlFor="accept" className="flex gap-2 items-center accent-black text-[16px]"><input type="radio" id="accept" className="scale-120" value="accept" />Accept <a href="#" className="text-black underline">Term and Condition</a></label>
          <div className="note font-medium text-[14px]">
            You will be able to receive emails in connection with this review
            (eg if others comment on your review). All emails contain the option
            to unsubscribe. We can use the text and star rating from your review
            in other marketing.
          </div>
          <button className="inline-block w-max rounded-[4px] p-4 text-[16px] font-medium text-white bg-[#121633]">
            Submit product review
          </button>
        </div>
      </div>
    </div>
  );
};
