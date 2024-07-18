import { TailSpin} from "react-loader-spinner"

const PageLoader = () => {
  return (
    <div className="h-screen flex items-center justify-center">
        <TailSpin
  visible={true}
  height="40"
  width="40"
  color="#0a0a0a"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  )
}

export default PageLoader