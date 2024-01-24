import Header from "../Header/Header"

const DashboardLayout = ({children}) => {
  return (
    <div>
      <div className="min-h-full">
        <Header/>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
