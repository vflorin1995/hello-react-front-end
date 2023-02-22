import { useSelector } from 'react-redux';

function Greet() {
    let greetingss = useSelector((state) => state.greeting);
    return (
      <div>
        {greetingss}
      </div>
    );
  }
  
  export default Greet;