import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from 'react-router-dom'


const Navbar = ({authenticate, setAuthenticate}) => {
    const menuList=[
        '여성','Divided','남성','신생아/유아','H&M Home','Sale','지속가능성'
    ];

    const navigate=useNavigate();

    const goToLogin =()=>{
        if (authenticate===false){
            navigate('/login');
        }else if(authenticate){
            setAuthenticate(false);
        }
    };

    const goToHome=()=>{
        navigate('/');
    }

    const search=(event)=>{
        if(event.key==='Enter'){
            //입력한 검색어를 읽어와서
            //url을 바꿔준다
            let keyword=event.target.value;
            navigate(`/?q=${keyword}`);
        }
    };

    return (
    <div>
        <div>
            <div className='login-button'>
            <FontAwesomeIcon icon={faUser}/>
            <div onClick={goToLogin}>
                {authenticate===false?'로그인':'로그아웃'}
            </div>
            </div>
        </div>
        <div className='nav-section'>
            <img width={100}
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png'
            onClick={goToHome}/>
        </div>
        <div className='menu-area'>
                <ul className='menu-list'>
                {menuList.map((menu)=>(<li>{menu}</li>))}
                </ul>
            <div className='search-area'>
                <FontAwesomeIcon icon={faSearch}/>
                <input type='text' onKeyPress={(event)=>search(event)} placeholder='제품검색' className='search-input'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar