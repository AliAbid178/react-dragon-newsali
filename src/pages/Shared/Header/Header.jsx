import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
           <img className='mx-auto' src={logo} alt="" />
           <p>Journalism Without Fear or Favour</p>
           <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>

           {/* moment().format("dddd, MMMM Do YYYY, h:mm:ss a");  */}

        </div>
    );
};

export default Header;