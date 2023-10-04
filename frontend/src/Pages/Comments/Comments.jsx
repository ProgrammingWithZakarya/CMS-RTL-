import React from 'react'

export default function Comments() {
  return (
    <div className='comments-page h-full w-full overflow-y-auto overflow-x-hidden p-5 bg-gray-200 p-5 dark:bg-gray-900 dark:text-white flex flex-col gap-3'>
      <div className="empty-page">
        هیچ کامنتی پیدا نشد .
      </div>
    </div>
  )
}
