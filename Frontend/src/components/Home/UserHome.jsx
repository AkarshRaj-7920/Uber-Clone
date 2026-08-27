import { useState } from "react"
import useMediaQuery from "../../hooks/useMediaQuery"
import UserHomeDesktop from "./UserHomeComponents/UserHomeDesktop"
import UserHomeMobile from "./UserHomeComponents/UserHomeMobile"

const UserHome = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [DriverFound, setDriverFound] = useState(true)

  return (
    <>
      {isDesktop ? <UserHomeDesktop DriverFound={DriverFound} setDriverFound={setDriverFound} /> : <UserHomeMobile DriverFound={DriverFound} setDriverFound={setDriverFound} />}
    </>
  )
}

export default UserHome