import React, { useState, useEffect } from 'react';
import MainIcon from '../assets/imgs/mainIcon.png';
import BoxDataService from '../api/HomePage/BoxDataService.js'

const HomePage = () => {
  const [boxData, setBoxData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 보이는 박스의 인덱스
  const boxesPerPage = 4; // 한 페이지에 보일 박스 수

  useEffect(() => {
    const fetchBoxData = async () => {
      const service = new BoxDataService();
      const data = await service.getBoxData();
      setBoxData(data);
    };

    fetchBoxData();
  }, []);

  const showPreviousPage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + boxData.length) % boxData.length);
  };

  const showNextPage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % boxData.length);
  };
  
  const getDisplayedBoxes = () => {
    const endIndex = currentIndex + boxesPerPage;
    if (endIndex > boxData.length) {
      return [...boxData.slice(currentIndex, boxData.length), ...boxData.slice(0, endIndex - boxData.length)];
    }
    return boxData.slice(currentIndex, endIndex);
  };

  const displayedBoxes = getDisplayedBoxes();

  return (
    <div>
      <section className="container mx-auto px-6 py-16">
        <div className="bg-brand text-white p-10 rounded-lg flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-10 md:mb-0">
            <h1 className="text-4xl font-bold">Find the perfect job for you</h1>
            <p className="mt-4">12,800개의 직업 공고를 통해 당신의 커리어 가능성을 찾아보세요</p>
            <div className="mt-6 flex space-x-4">
              <input type="text" placeholder="검색어를 입력해 주세요" className="p-3 rounded-lg text-gray-900 w-full md:w-2/3" />
              <input type="text" placeholder="지역" className="p-3 rounded-lg text-gray-900 w-full md:w-1/3" />
              <button className="bg-white text-blue-600 p-3 rounded-lg flex-shrink-0">검색</button>
            </div>
            <div className="mt-4">
              <span className="text-sm text-gray-300">인기 검색어:</span>
              <a href="#" className="text-sm text-gray-200 hover:underline ml-2">웹 개발자</a>,
              <a href="#" className="text-sm text-gray-200 hover:underline">빅데이터 엔지니어</a>,
              <a href="#" className="text-sm text-gray-200 hover:underline">iOS 개발자</a>,
              <a href="#" className="text-sm text-gray-200 hover:underline">그래픽스 엔지니어</a>,
              <a href="#" className="text-sm text-gray-200 hover:underline">기술지원</a>
            </div>
          </div>
          <div className="md:w-1/3 flex items-center justify-center">
            <div className="relative">
              <img src={MainIcon} alt="Person" className="w-80" />
              <div className="absolute top-0 right-0 bg-white text-gray-900 p-4 rounded-lg shadow-lg">
                <p><span className="font-bold">319</span> 채용 공고</p>
                <p><span className="font-bold">265</span> 상시 채용 공고</p>
                <p><span className="font-bold">24</span> 신규 채용 공고</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center">테마로 모아보기</h2>
        {boxData.length > boxesPerPage && (
          <div className="flex justify-end mt-4">
            <button className="bg-brand text-white px-4 py-2 rounded-lg mr-2" onClick={showPreviousPage}>←</button>
            <button className="bg-brand text-white px-4 py-2 rounded-lg" onClick={showNextPage}>→</button>
          </div>
        )}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          {displayedBoxes.map((box, index) => (
            <div key={index} className="box">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center h-50">
                <div className="bg-white p-4 rounded-lg h-32 mx-auto mb-4 flex items-center justify-center">
                  {/* <i className={`fas ${box.icon} text-2xl text-blue-600`}></i> */}
                </div>
                <h3 className="text-black font-bold text-[1.2vw] whitespace-nowrap">{box.title}</h3>
                <p className="text-gray-500">{box.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center">주목할 만한 채용 공고</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-600">Financial Analyst</h3>
            <p className="text-gray-600">Finance - San Diego, CA</p>
            <p className="text-gray-500">Full Time</p>
            <p className="text-gray-400 text-sm">June 12, 2023</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-600">Fullstack Web Developer</h3>
            <p className="text-gray-600">Software Engineering - San Francisco, CA</p>
            <p className="text-gray-500">Full Time</p>
            <p className="text-gray-400 text-sm">June 15, 2023</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-600">Human Resources Coordinator</h3>
            <p className="text-gray-600">Human Resources - Austin, TX</p>
            <p className="text-gray-500">Part Time</p>
            <p className="text-gray-400 text-sm">June 18, 2023</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-600">Technical Writer</h3>
            <p className="text-gray-600">Business Development - Los Angeles, CA</p>
            <p className="text-gray-500">Contract</p>
            <p className="text-gray-400 text-sm">June 20, 2023</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
