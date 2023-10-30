export default function ShowPDF() {
    
    return (
    <div className='w-full mx-auto h-full container md:px-20 flex flex-col items-center justify-start'>
        <h1>Grade 12</h1>
        <div className='w-full min-h-screen'>
        <iframe 
        className='w-full'
        height='600'
        src="https://drive.google.com/file/d/1fAIWCeNH6lSsKe2we4OfIoXEZtY_0mQ_/preview" 
        allow="autoplay"/>
    </div>
    </div>
  )
}
