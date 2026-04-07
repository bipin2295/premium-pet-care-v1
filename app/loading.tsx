import { PawPrint } from 'lucide-react'

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-background bg-opacity-90 flex justify-center items-center z-50">
      <div className="flex flex-col items-center">
        <PawPrint
          size={64}
          className="text-primary animate-pulse"
          style={{ animationDuration: '1.5s' }}
        />
        <p className="text-primary font-semibold mt-4">Loading...</p>
      </div>
    </div>
  )
}

export default Loading
