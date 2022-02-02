import { memo } from "react";

//memo hace que solo se llame el componente cuando las props cambie

const Small = memo(({value}) => {

  console.log('me volvi a llamar :c ')

  return (
    <small>{value}</small>
  )
})

export default Small;
