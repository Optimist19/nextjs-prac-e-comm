import Image from 'next/image'
import appLogo from "../../public/commercelayer_full_logo_black.svg";

function ImageLogo() {
  return (
	<>
	<Image src={appLogo} alt="logo" priority className="w-[35vw]" />
	</>
  )
}

export default ImageLogo