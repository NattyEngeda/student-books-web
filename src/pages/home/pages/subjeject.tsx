import SubjectCard from '../components/SubjectCard'

export default function Subject() {
  return (
    <div className="w-full relative flex flex-col px-5 md:px-10">
    <div className="w-full mx-auto container grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-5 2xl:grid-cols-4">
      <SubjectCard />
    </div>
  </div>
  )
}
