import { Products } from "../Products"

function Home({user}) {

  return (
<>
<h1>Ana Sayfa</h1>
<Products user={user}/>

</>
  )
}

export default Home
