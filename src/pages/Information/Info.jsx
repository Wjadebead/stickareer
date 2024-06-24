import React, { useState } from 'react';
import Modal from 'react-modal';
import { RiCloseLargeFill } from "react-icons/ri";


Modal.setAppElement('#root');

export default function Info({idx, title, detail, type, startDate, endDate}) {

    const [modalIsOpen, setIsOpen] = useState(false);

    const customModalStyles = {
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          width: "100%",
          height: "100vh",
          zIndex: 10,
          position: "fixed",
          top: 0,
          left: 0,
        },
        content: {
          width: "70vw",
          height: "20rem",
          zIndex: 150,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "0.7rem",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          backgroundColor: "white",
          color: "black",
          justifyContent: "center",
          overflow: "auto",
        },
      };

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }
//모달 관련

    return (
        <>
            <div
                className='flex xl:flex mx-auto mb-4 px-1 md:px-3 justify-between items-center hover:bg-gray-200 hover:dark:bg-slate-600 hover:cursor-pointer transition-all border-myborder shadow-lg border-2 rounded-md h-24 md:w-3/5'
                onClick={openModal}
            >
                <div className='flex flex-col md:flex-row md:w-3/5 w-11/12 ml-2 md:items-center'>
                    <h1 className='md:w-3/4 text-3xl'>{title}</h1>
                    <h2 className='md:w-1/4'>{type}</h2>
                </div>
                <div className='w-4/12 md:w-auto'>
                    {`${startDate} ~ ${endDate}`}
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                style={customModalStyles}
                shouldCloseOnOverlayClick={true}
                shouldCloseOnEsc={true}
                className="flex flex-col p-3 items-center justify-center"
            >
                <div className='h-1 self-end'>
                    <button className='' onClick={closeModal}><RiCloseLargeFill size='2rem' /></button>
                </div>
                <div className='h-full text-center m-2'>
                    <h1 className='text-4xl'>{title}</h1>
                    <h2>{type}</h2>
                    <ul>
                        {detail.map((d) => {
                            return <li>{d}</li>
                        })}
                    </ul>
                    <p>{startDate}</p>
                    ~
                    <p>{endDate}</p>
                </div>
            </Modal>
        </>
    );
}

