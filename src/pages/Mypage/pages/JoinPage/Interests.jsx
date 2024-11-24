import React from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useAtom, useAtomValue } from 'jotai';
import { selectedCompanyAtom, selectedLanguagesAtom } from '../../../../stores/user';

const languages = ['JavaScript', 'Python', 'Java', 'C++', 'Go', 'Ruby', 'Kotlin', 'Swift'];
const companyType = ['대기업', '중소기업', '공기업', '금융권', '외국계', '스타트업', '기타'];

export default function Interests() {
    const selectedLanguages = useAtomValue(selectedLanguagesAtom);
    const selectedCompanyType = useAtomValue(selectedCompanyAtom);
    const [, setSelectedLanguages] = useAtom(selectedLanguagesAtom);
    const [, setSelectedCompanyType] = useAtom(selectedCompanyAtom);

    const handleLanChange = (event, value) => {
        setSelectedLanguages(value);
    };

    const handleCompChange = (event, value) => {
        setSelectedCompanyType(value);
        console.log(selectedCompanyType);
    };

    return (
        <div className='flex flex-col items-center justify-center mx-auto'>
            <h1 className='text-3xl font-semibold xl:inline'>
                관심사 설정
            </h1>
            <div className='m-10 p-3 w-2/3 rounded-xl bg-white'>
                <Autocomplete
                    className='dark:bg-slate-100'
                    multiple
                    options={languages}
                    value={selectedLanguages}
                    onChange={handleLanChange}
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                            <Chip label={option} {...getTagProps({ index })} />
                        ))
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="outlined"
                            label="프로그래밍 언어"
                            placeholder="언어 선택"
                        />
                    )}
                />
            </div>
            <div className='m-10 p-3 w-2/3 rounded-xl bg-white'>
                <Autocomplete
                    className='dark:bg-slate-100'
                    multiple
                    options={companyType}
                    value={selectedCompanyType}
                    onChange={handleCompChange}
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                            <Chip label={option} {...getTagProps({ index })} />
                        ))
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="outlined"
                            label="기업 형태"
                            placeholder="기업 선택"
                        />
                    )}
                />
            </div>
        </div>
    );
}
