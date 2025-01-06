import FileUpload from '../components/file-upload'
import DatasetList from '../components/dataset-list'

export default function FileSharingPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">File Sharing</h1>
      <p className="text-xl">Share your NBA datasets and earn commissions!</p>
      <FileUpload />
      <DatasetList />
    </div>
  )
}

