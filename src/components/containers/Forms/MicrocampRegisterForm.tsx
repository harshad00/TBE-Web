const MicrocampRegisterForm = () => {
  return (
    <form className='mx-auto mt-4 w-full  rounded-md bg-white p-4 shadow-md'>
      {/* <h2 className='mb-4 text-xl font-semibold'>My Form</h2> */}
      <div className='mb-4'>
        <label htmlFor='input1' className='mb-1 block font-medium'>
          Your Name
        </label>
        <input
          type='text'
          id='input1'
          className='w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='input2' className='mb-1 block font-medium'>
          Your Contact No.
        </label>
        <input
          type='text'
          id='input2'
          className='w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='dropdown' className='mb-1 block font-medium'>
          Your profession
        </label>
        <select
          id='dropdown'
          className='w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
        >
          <option value='option1'>Student</option>
          <option value='option2'>Working Professional</option>
          <option value='option3'>Other</option>
        </select>
      </div>
      <button
        type='submit'
        className='w-full rounded-md bg-primary px-4 py-2 text-white hover:bg-indigo-600'
      >
        Talk to us
      </button>
    </form>
  );
};

export default MicrocampRegisterForm;
