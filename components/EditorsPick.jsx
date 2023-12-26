import React from 'react'
import { getEditorsPicks } from '@/services'
import { PostCard } from '.';

const EditorsPick = async () => {
    const editorsPicks = await getEditorsPicks();

    return (
        <div className='flex flex-col gap-10'>
            <h1 className='underline text-center'>Editor's Pick</h1>
            <div className='flex flex-col gap-10 px-5 md:px-10 py-5 pb-0 lg:px-40'>
                {editorsPicks.map((pick, index) => (
                    <PostCard post={pick} index={index} />
                )
                )}
            </div> 
        </div>
    )
}

export default EditorsPick