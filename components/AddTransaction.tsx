"use client";
const AddTransaction = () => {
  const clientAction = async (formData: FormData) => {
    // console.log(formData.get("amount"), formData.get("text"));
  };
  return (
    <div className='w-full lg:w-80 md:w-96 flex flex-col gap-y-2 px-4 py-1'>
      <h1>Add transaction</h1>
      <hr className='border-gray-700 mt-0 ' />
      <form action={clientAction} className='flex flex-col gap-2 p-2'>
        <label htmlFor='text' className='text-sm'>
          Text
        </label>
        <input
          type='text'
          className='lg:p-1 xl:p-1 p-2 w-full outline-none  border-2 border-purple-600 text-sm'
          placeholder='Enter text...'
        />

        <label htmlFor='text' className='text-sm'>
          Amount
        </label>
        <div className='flex gap-x-2'>
          <p className='text-sm'>(negative - expenses positive - income)</p>
        </div>
        <input
          type='text'
          className='lg:p-1 xl:p-1 p-2 w-full outline-none  border-2 border-purple-600 text-sm'
          placeholder='Enter amount...'
        />
        <button
          type='submit'
          className='w-full text-sm  text-white bg-purple-600 lg:p-1 xl:p-1 py-2 my-2'
        >
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
