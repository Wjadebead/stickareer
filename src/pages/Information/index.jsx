import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import Select from "react-select";
import informationDummy from './../../api/Information/informationDummy';
import Info from './Info';

export default function Information() {

    const {isLoading, error, data: informations} = useQuery({
        queryKey: ['information'],
        queryFn: () => {
            const information = new informationDummy();
            return information.informationInit();
        }
    });

    const [searchValue, setSearchValue] = useState("");
    const searchFilter = [
        {value: "default", label: "----"},
        {value: "starter", label: "공개채용"},
        {value: "intern", label: "인턴"},
        {value: "test", label: "자격증"},
    ];
    const [currentFilter, setCurrentFilter] = useState(searchFilter[0]);

    const handleSearchInput = (e) => {
        setSearchValue(e.target.value);
    };

    // 필터링된 정보를 반환하는 함수, 백엔드 검색로직 추가시 변경 필요
    const filteredInformations = () => {
        if (!informations) return [];
        
        // 필터링 조건: 타입과 제목
        return informations.filter(info => {
            const typeMatch = currentFilter.value === "default" || info.type === currentFilter.label;
            const titleMatch = searchValue === "" || info.title.toLowerCase().includes(searchValue.toLowerCase());
            return typeMatch && titleMatch;
        });
    };

    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <div className='lg:w-1/2 w-2/3 h-10 border rounded-3xl mb-4 pl-1 border-stone-500 flex'>
                    <input type='text' value={searchValue} onChange={handleSearchInput} className='border-none rounded-3xl bg-transparent w-full'></input>
                    <button className='h-full w-12 border-l border-stone-500 flex justify-center items-center'><CiSearch size="24" /></button>
                </div>
                <Select 
                    options={searchFilter}
                    onChange={setCurrentFilter}
                    defaultValue={currentFilter}
                    className='w-1/2 mb-16 dark:bg-slate-500 dark:text-black'
                />
                <div className='w-full flex-col justify-center items-center'>
                    {
                        isLoading &&
                        <>
                        </>
                    }
                    {
                        informations &&
                        filteredInformations().map((info => {
                            return <Info key={info.id} idx={info.id} title={info.title} detail={info.detail} type={info.type} startDate={info.startdate} endDate={info.enddate}/>
                        }))
                    }
                </div>
            </div>
        </>
    );
}
