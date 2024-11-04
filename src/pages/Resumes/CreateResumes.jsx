import React, { useState, useEffect } from 'react';

const Tooltip = ({ message }) => {
    return (
        <div className="absolute top-full mt-2 left-0 w-72 p-2 text-sm text-white bg-brand rounded-md shadow-md">
            {message.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
            ))}
        </div>
    );
};

const CreateResumes = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        intro: '',
        experiences: [{ role: '', company: '', date: '', description: '' }],
        education: [{ institution: '', degree: '', date: '', description: '' }],
        skills: '',
        awards: '',
        languages: '',
        links: ''
    });

    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleArrayChange = (index, e, field) => {
        const newArray = [...formData[field]];
        newArray[index][e.target.name] = e.target.value;
        setFormData({ ...formData, [field]: newArray });
    };

    const addNewItem = (field) => {
        setFormData({
            ...formData,
            [field]: [...formData[field], { role: '', company: '', date: '', description: '' }]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email) {
            alert("이름과 이메일은 필수입니다.");
            return;
        }
        console.log('Submitted:', formData);
    };

    const handleTooltipToggle = (e) => {
        e.stopPropagation();
        setIsTooltipVisible(!isTooltipVisible);
    };

    useEffect(() => {
        const handleClickOutside = () => {
            if (isTooltipVisible) {
                setIsTooltipVisible(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isTooltipVisible]);

    return (
        <div className="p-8 bg-white dark:bg-gray-800 text-gray-900 dark:text-white max-w-3xl mx-auto relative">
            <h1 className="text-2xl font-bold mb-6">새 이력서 작성</h1>
            <form onSubmit={handleSubmit}>
                {/* 기본 정보 입력 필드 */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">이름</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
                        required
                    />
                </div>
                
                <div className="mb-4">
                    <label className="block text-sm font-medium">이메일</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium">연락처</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
                    />
                </div>

                <div className="mb-4 relative">
                    <div className="flex items-center">
                        <label className="block text-sm font-medium">간단 소개글</label>
                        <span 
                            className="ml-2 w-5 h-5 border border-gray-600 rounded-full flex items-center justify-center text-gray-600 cursor-pointer relative"
                            onClick={handleTooltipToggle}
                        >
                            i
                            {isTooltipVisible && 
                                <Tooltip message={
                                    "• 본인의 업무 경험을 기반으로 핵심역량과 업무 스킬을 간단히 작성해주세요.\n" +
                                    "• 3~5줄로 요약하여 작성하는 것을 추천합니다!"
                                } />
                            }
                        </span>
                    </div>
                    <textarea
                        name="intro"
                        value={formData.intro}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
                    />
                </div>

                {/* Experiences */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">경력</label>
                    {formData.experiences.map((experience, index) => (
                        <div key={index} className="mb-2">
                            <input
                                type="text"
                                name="role"
                                placeholder="역할"
                                value={experience.role}
                                onChange={(e) => handleArrayChange(index, e, 'experiences')}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
                            />
                            <input
                                type="text"
                                name="company"
                                placeholder="회사"
                                value={experience.company}
                                onChange={(e) => handleArrayChange(index, e, 'experiences')}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
                            />
                            <input
                                type="text"
                                name="date"
                                placeholder="날짜"
                                value={experience.date}
                                onChange={(e) => handleArrayChange(index, e, 'experiences')}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
                            />
                            <textarea
                                name="description"
                                placeholder="설명"
                                value={experience.description}
                                onChange={(e) => handleArrayChange(index, e, 'experiences')}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
                            />
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => addNewItem('experiences')}
                        className="text-brand mt-2"
                    >
                        + 추가
                    </button>
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-brand"
                    >
                        이력서 저장
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateResumes;
