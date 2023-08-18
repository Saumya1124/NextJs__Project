import Link from "next/link"
import { Fragment } from "react"

const detail = [ 
    {id: 1 , name : 'Yash' , role: 'Sr. Developer'},
    {id: 2 , name : 'Vaibhav' , role: 'Backened Developer'},
    {id: 3 , name : 'Suresh' , role: 'Frontend Developer'}

]

function AboutUs () {

    return (
        <Fragment>
            {detail.map(data => <h3><Link href={`/aboutUs/${data.id}`}>{data.name}</Link></h3>)}
        </Fragment>
    )
}
export default AboutUs