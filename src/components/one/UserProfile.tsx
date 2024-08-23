export const UserProfile: React.FC = () => {
  return (
    <div
      id="userProfile"
      className="w-full h-screen m-auto bg-user-profile bg-cover bg-center flex items-center xl:p-0 p-5"
    >
      <div className="card max-w-full w-[500px] bg-white m-auto h-[460px] rounded-[40px] p-[50px] flex flex-col">
        <div className="rounded-[20px] w-[120px] h-[120px] mx-auto">
          <img src="/assets/avt-block-one.png" alt="avatar" />
        </div>
        <h3 className="text-[22px] font-bold mt-1 text-center mx-auto">
          Frances S. Cady
        </h3>
        <div className="text-base text-center mt-2 max-w-[40%] mx-auto">
          Building next-gen energy tech product at Company
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-auto">
          <a
            href="#"
            className="flex items-center justify-center gap-2 rounded-[35px] bg-black text-black p-2 min-w-[180px] text-center bg-gradient-to-r from-[#FA3967] to-[#FA9639]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
              />
            </svg>
            Follow
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-2 rounded-[35px] text-black p-2 min-w-[180px] text-center bg-[#FFEDD2]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            Message
          </a>
        </div>
      </div>
    </div>
  );
};
