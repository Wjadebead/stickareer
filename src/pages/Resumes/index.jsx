import React from 'react';
import { useNavigate } from 'react-router-dom';
import upload from '../../assets/imgs/upload.png';
import resume from '../../assets/imgs/resume.png';

const ResumeList = () => {
    const navigate = useNavigate();
    
    const resumes = [
        { id: 1, title: "TestName 1", date: "2024.11.04", status: "작성 중" },
        // 필요한 만큼 더 추가
    ];

    const handleCreateResume = () => {
        // 새로운 이력서 작성 페이지로 이동 (예: '/new-resume')
        navigate('/resumes/create');
        console.log('Navigating to create resume');
    };

    const handleFileUpload = () => {
        // 파일 업로드 페이지로 이동 (예: '/upload')
        navigate('/upload');
    };

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">이력서 관리</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                {/* 새 이력서 작성 카드 */}
                <div
                    onClick={handleCreateResume}
                    className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition"
                >
                    <div className="w-16 h-16 flex items-center justify-center bg-gray-300 text-white rounded-full mb-4">
                        {/* 아이콘을 적절하게 넣어주세요 */}
                        <img 
                            src={resume}
                            alt="Resume Icon" 
                            className="w-10 h-10 relative"
                        />
                        <i className="fas fa-file-alt text-3xl"></i>
                    </div>
                    <p className="text-center font-semibold">새 이력서 작성</p>
                </div>

                {/* 파일 업로드 카드 */}
                <div
                    onClick={handleFileUpload}
                    className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition"
                >
                    <div className="w-16 h-16 flex items-center justify-center bg-gray-300 text-gray-600 rounded-full mb-4 relative">
    {/* 회색 배경을 덮기 위한 요소 */}
    <div className="absolute inset-0 bg-gray-300 rounded-full"></div>
    <img 
        src={upload}
        alt="Upload Icon" 
        className="w-10 h-10 relative"
    />
</div>

                    <p className="text-center font-semibold">파일 업로드</p>
                </div>

                {/* 기존 이력서 리스트 */}
                {resumes.map((resume) => (
                    <div
                        key={resume.id}
                        className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition"
                    >
                        <div className="flex justify-between items-start">
                            <span className="font-semibold text-sm text-customBlue bg-gray-300 dark:bg-customBlue dark:text-white px-2 py-1 rounded">
                                기본 이력서
                            </span>
                            <button className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100">
                                <i className="fas fa-ellipsis-v"></i>
                            </button>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{resume.title}</h3>
                            <p className="text-gray-500 dark:text-gray-400">{resume.date}</p>
                        </div>
                        <div className="flex items-center mt-4">
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                {resume.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResumeList;