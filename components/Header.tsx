import {
  SignInButton,
  SignUpButton,
  SignedIn,
  UserButton,
  SignedOut,
} from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { checkUser } from "@/lib/checkUser";
const Header = async () => {
  const user = await checkUser();
  return (
    <div className=''>
      <div className='bg-black/80  p-2 flex justify-between'>
        <h1 className='text-white text-lg py-1'>Expense Tracker</h1>
        {!user && (
          <a
            href='#'
            className={`${!user && "bg-violet-700"} px-4 py-1 rounded-md `}
          >
            <SignedOut>
              <SignInButton>
                <span className='text-white text-sm'>Sign In</span>
              </SignInButton>
            </SignedOut>
          </a>
        )}
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Header;
