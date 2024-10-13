import React, { useState } from 'react';

export default function NewPost() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    
    const handleTitleInput = (e) => {
        setTitle(e.target.value);

    }
    const handleContentInput = (e) => {
        setContent(e.target.value);

    }

    const handleSubmit = () => {
        if(title === "" || content === ""){
            alert("제목과 내용을 전부 입력해 주세요");
        }
    }

    return (
        <div class="w-full max-w-2xl mx-auto text-center bg-white rounded-2xl shadow-xl">
    <header>
        <div class="h-12 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]">
            <div class="h-full flex w-full sm:gap-1 overflow-x-scroll [scrollbar-width:none] px-3">
                <div className='w-full items-center h-12'>
                    <textarea 
                    class="w-full h-full pt-4 pl-2 text-sm text-slate-600 placeholder:text-slate-400 resize-none focus:outline-none" 
                    value={title}
                    onChange={handleTitleInput}
                    name="title" id="title" cols="1" rows="7" placeholder="제목을 입력해주세요"></textarea>
                </div>
            </div>
        </div>
    </header>
    <div>
        <textarea
         class="w-full text-sm text-slate-600 placeholder:text-slate-400 px-3 sm:px-5 py-4 resize-none focus:outline-none"
         value={content}
         onChange={handleContentInput}
         name="editor" id="editor" cols="30" rows="7" placeholder="내용을 입력해주세요"></textarea>
    </div>
    <footer>
        <div class="h-12 border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]">
            <div class="h-full flex justify-end items-center sm:gap-1 overflow-x-scroll [scrollbar-width:none] px-3">
                <div>
                    <button 
                    class="inline-flex items-center justify-center whitespace-nowrap rounded-lg h-8 px-2 text-sm font-medium text-brand hover:text-white hover:bg-brand focus-visible:text-white focus-visible:bg-indigo-500 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors"
                    onClick={handleSubmit}
                    >
                        등록                                                                        
                    </button>
                </div>                                 
            </div>
        </div>
    </footer>
</div>
    );
}

