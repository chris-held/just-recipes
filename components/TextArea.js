
const TextArea = ({...props}) => {
  return (
    <>
      <textarea 
      className="my-4 shadow appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-64" 
      {...props} />
    </>
  );
};

export default TextArea;
