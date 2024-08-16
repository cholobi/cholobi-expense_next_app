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
      <div className='bg-red-500 p-2 flex flex-col items-center justify-center gap-y-1'>
        <p className="text-xl">
          Welcome <span className="text-lg font-semibold italic">{user.firstName}</span>
        </p>
        <AddTransaction />
      </div>
    </>
  );
};

export default HomePage;
