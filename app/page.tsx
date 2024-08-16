import Guest from "@/components/Guest";
import { SignedIn, SignInButton, SignedOut } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <div className='bg-red-500 p-2'>
      <p>
        Welcome <span>{user.firstName}</span>
      </p>
    </div>
  );
};

export default HomePage;
