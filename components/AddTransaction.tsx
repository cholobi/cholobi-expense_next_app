"use client";
const AddTransaction = () => {
  const clientAction = async (formData: FormData) => {
    console.log(formData.get("amount"), formData.get("text"));
  };
  return (
    <div className='w-full lg:w-80 md:w-96 bg-green-500 flex flex-col gap-y-2 px-4 py-1'>
      <h1>Add transaction</h1>
      <hr className='border-gray-100 ' />
      <form action={clientAction} className='bg-yellow-500'>
        <h1>form</h1>
      </form>
    </div>
  );
};

export default AddTransaction;
