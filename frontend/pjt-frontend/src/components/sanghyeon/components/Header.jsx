import '../../../css/Header.css';
import Setting from './Setting';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import axios from 'axios';
import store from '../../../store/store.js';
import Swal from 'sweetalert2';

const Header = ({ type = 'default' }) => {
  const navigate = useNavigate();
  const userIcon = '/memberIcon.png';
  const settingIcon = '/settingIcon.png';
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const backPaths = {
    '/record': '/profile',
    '/report': '/profile',
    '/solved': '/profile',
  };
  //뒤로가기 기능
  const currentPath = useLocation().pathname;
  const backToPrevPage = () => {
    console.log('currentPath', currentPath);
    if (currentPath in backPaths) {
      navigate(backPaths[currentPath]);
    } else {
      navigate('/main');
    }
  };
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const { baseURL, accessToken, roomId, setNormalQuit } = store((state) => ({
    baseURL: state.baseURL,
    accessToken: state.accessToken,
    roomId: state.roomId,
    setNormalQuit: state.setNormalQuit,
  }));

  const quitBattleRoom = async () => {
    try {
      const checkQuit = confirm('방을 나가시겠습니까?');

      if (!checkQuit) return;

      const quitRes = await axios({
        method: 'POST',
        url: `${baseURL}/battle/room/${roomId}/leave`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setNormalQuit(true);
      Swal.fire({
        text: '방을 나갔습니다.',
        icon: 'success',
        timer: 3000,
      });
      navigate('/battle-list');
    } catch (error) {
      Swal.fire({
        text: '방 나가기에 실패했습니다.',
        icon: 'error',
        timer: 3000,
      });
      console.log(error);
    }
  };

  return (
    <>
      <div className="header-container">
        <div
          className="header-title"
          onClick={() => {
            navigate('/');
          }}
        >
          Street Coding Figther
        </div>
      </div>
        <div className="header-back-button" onClick={backToPrevPage}>
          <MdOutlineKeyboardBackspace />
        </div>
        <div className='header-right'>
          <div className="header-icon">
            <img
              onClick={() => {
                navigate('/profile');
              }}
              className="user-icon"
              src={userIcon}
              alt="memberIcon"
            />
            <img onClick={openModal} className="setting-icon" src={settingIcon} alt="settingIcon" />
          </div>
        </div>
      <Setting isOpen={modalIsOpen} onClose={closeModal} />
    </>
  );
};

export default Header;
