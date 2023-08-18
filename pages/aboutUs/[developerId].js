import { useRouter } from "next/router"
import { Fragment } from "react"

const detail = [ 
    {id: 1 , name : 'Yash' , role: 'Sr. Developer'},
    {id: 2 , name : 'Vaibhav' , role: 'Backened Developer'},
    {id: 3 , name : 'Suresh' , role: 'Frontend Developer'}

]

function DeveloperId(){

    const router = useRouter()
    const developerId = router.query.developerId
    console.log(developerId)

    const data = detail.filter(data=> data.id == developerId)
    console.log(data)

    return (
        <Fragment>
             <ul>
                {data.length>0 ? 
                <li>{data[0].name} -- {data[0].role}</li>
                :
                <p>Developers not found.</p>
                }
             </ul>
        </Fragment>
    )
}
export default DeveloperId