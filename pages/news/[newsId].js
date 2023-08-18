import {useRouter} from 'next/router';
import { Fragment } from 'react';

const detail = [ 
    {id: 1 , name : 'Yash' , role: 'Sr. Developer'},
    {id: 2 , name : 'Vaibhav' , role: 'Backened Developer'},
    {id: 3 , name : 'Suresh' , role: 'Frontend Developer'}

]

function DetailPage () {

    const router = useRouter()
    const newsId = router.query.newsId

    const data = detail.filter(data=> data.id == newsId)
    console.log(data)

    return (
        <Fragment>
             <div>
                {data.length >0 ?
                    <div>
                        <h4>{data[0].name}</h4>
                        <h4>{data[0].role}</h4>
                    </div>
                    :
                    <p>Developer not found!</p>
                }
             </div>
        </Fragment>
    )
}
export default DetailPage