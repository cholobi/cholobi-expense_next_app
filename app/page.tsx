import Guest from "@/components/Guest";
import { SignedIn, SignInButton, SignedOut } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import AddTransaction from "@/components/AddTransaction";
const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <>
      <div className=' p-2 flex flex-col items-center justify-center gap-y-1'>
        <div className=' w-full lg:w-80 md:w-96  px-4 py-1'>
          <p className='text-xl'>
            Welcome{" "}
            <span className='text-lg font-semibold '>
              {user.firstName}
            </span>
          </p>
        </div>
        <AddTransaction />
      </div>
    </>
  );
};

export default HomePage;
