import { SignedIn, SignInButton, SignedOut } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
const Guest = async () => {
  const user = await currentUser();
  return (
    <div className=' flex justify-center items-center'>
      <div className='flex flex-col p-2'>
        <h1 className=' py-2 px-2 text-2xl text-center'>
          Welcome 
        </h1>
        {!user && <p className="text-center">Please sign in to manage your transactions</p>}
        <div className=' p-2 flex justify-center items-center'>
          <div className={`${!user && "bg-violet-700"} px-4 py-1 rounded-md `}>
            <SignedOut>
              <SignInButton>
                <span className='text-white text-sm'>Sign In</span>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guest;
