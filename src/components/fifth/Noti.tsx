import { useState } from "react";

export const Noti: React.FC = () => {
  const [showNoti, setShowNoti] = useState(false);

  const handleShowNoti = () => {
    setShowNoti(prev => !prev || !prev);    
  }

  return (
    <div
      id="noti"
      className="flex items-center justify-center md:p-10 p-4 min-h-screen w-full bg-[#F5F6FF]"
    >
      <div className="flex justify-end flex-col items-end gap-[20px] max-w-full">
        <button className="p-[20px] rounded-[50%] bg-[#0C0E41] w-max relative" onClick={handleShowNoti}>
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[44px] aspect-square"
          >
            <g clip-path="url(#clip0_2_7)">
              <path
                d="M18.3333 9.16667C18.3333 8.19421 18.7196 7.26158 19.4073 6.57394C20.0949 5.88631 21.0275 5.5 22 5.5C22.9724 5.5 23.9051 5.88631 24.5927 6.57394C25.2803 7.26158 25.6666 8.19421 25.6666 9.16667C27.7721 10.1622 29.5669 11.7119 30.8587 13.6497C32.1506 15.5875 32.8908 17.8403 33 20.1667V25.6667C33.1379 26.8065 33.5416 27.8979 34.1785 28.8532C34.8153 29.8085 35.6676 30.6009 36.6666 31.1667H7.33331C8.33237 30.6009 9.18463 29.8085 9.82149 28.8532C10.4583 27.8979 10.862 26.8065 11 25.6667V20.1667C11.1092 17.8403 11.8494 15.5875 13.1412 13.6497C14.4331 11.7119 16.2279 10.1622 18.3333 9.16667"
                stroke="white"
                stroke-width="2.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.5 31.1667V33C16.5 34.4587 17.0795 35.8576 18.1109 36.8891C19.1424 37.9205 20.5413 38.5 22 38.5C23.4587 38.5 24.8576 37.9205 25.8891 36.8891C26.9205 35.8576 27.5 34.4587 27.5 33V31.1667"
                stroke="white"
                stroke-width="2.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_7">
                <rect width="44" height="44" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <div className={`${showNoti ? 'opacity-1' : 'opacity-0' } duration-300 card mx-auto rounded-[16px] bg-white shadow-xl p-10 max-w-full`}>
          <h3 className="font-semibold text-[22px] text-black">
            You have 1 new message
          </h3>
          <div className="flex mt-[24px] items-center">
            <div className="icon p-[23px] bg-[#FFE9F2] rounded-[8px]">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_15)">
                  <path
                    d="M34.8333 9.16666H9.16667C7.14162 9.16666 5.5 10.8083 5.5 12.8333V31.1667C5.5 33.1917 7.14162 34.8333 9.16667 34.8333H34.8333C36.8584 34.8333 38.5 33.1917 38.5 31.1667V12.8333C38.5 10.8083 36.8584 9.16666 34.8333 9.16666Z"
                    stroke="#C83974"
                    stroke-width="2.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.5 12.8333L22 23.8333L38.5 12.8333"
                    stroke="#C83974"
                    stroke-width="2.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_15">
                    <rect width="44" height="44" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="inline-block ml-6">
              <div className="font-semibold text-[16px]">Feb 22</div>
              <div className="text-[18px]">
                If you like what we do, please tell your friends and share.
              </div>
            </div>
          </div>
          <div className="social flex items-center justify-center mt-[29px] gap-[18px]">
            <a
              href="#"
              title="Twitter"
              className="flex gap-1 items-center border-[#158ABB] font-semibold text-[#158ABB] border rounded-[100px] py-[10px] px-[16px]"
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_26)">
                  <path
                    d="M31.1667 5.68082C29.75 6.37499 28.3617 6.65691 26.9167 7.08332C25.3286 5.29124 22.9741 5.19207 20.7117 6.03924C18.4493 6.88641 16.9674 8.95757 17 11.3333V12.75C12.4029 12.8676 8.30876 10.7737 5.66668 7.08332C5.66668 7.08332 -0.257824 17.6134 11.3333 22.6667C8.68134 24.4332 6.03643 25.6247 2.83334 25.5C7.51968 28.0542 12.6268 28.9326 17.0482 27.6491C22.1198 26.1757 26.2877 22.3748 27.8871 16.6812C28.3642 14.9496 28.6011 13.1606 28.5912 11.3645C28.5883 11.0117 30.7303 7.43749 31.1667 5.6794V5.68082Z"
                    stroke="#158ABB"
                    stroke-width="2.125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_26">
                    <rect width="34" height="34" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Twitter
            </a>
            <a
              href="#"
              title="Twitter"
              className="flex gap-1 items-center border-[#205195] font-semibold text-[#205195] border rounded-[100px] py-[10px] px-[16px]"
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_36)">
                  <path
                    d="M9.91669 14.1667V19.8333H14.1667V29.75H19.8334V19.8333H24.0834L25.5 14.1667H19.8334V11.3333C19.8334 10.9576 19.9826 10.5973 20.2483 10.3316C20.514 10.0659 20.8743 9.91667 21.25 9.91667H25.5V4.25H21.25C19.3714 4.25 17.5697 4.99628 16.2413 6.32466C14.913 7.65304 14.1667 9.45472 14.1667 11.3333V14.1667H9.91669Z"
                    stroke="#205195"
                    stroke-width="2.125"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_36">
                    <rect width="34" height="34" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
