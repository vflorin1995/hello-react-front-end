import { useSelector } from 'react-redux';

function Greet() {
  const greetingss = useSelector((state) => state.greeting);
  return (
    <div>
      {greetingss}
    </div>
  );
}

export default Greet;
