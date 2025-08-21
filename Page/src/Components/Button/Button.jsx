
const Button = ({icon,text}) => {
  return (
   <button onClick={() => alert(`You clicked ${text}`)} className= "px-14 py-4 border-gray-300 rounded-full shadow-sm text-full text-center font-medium text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 active:bg-gray-100 ">
     {icon}
     {text}
   </button>
  );
};

export default Button;