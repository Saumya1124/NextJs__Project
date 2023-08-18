import { Fragment } from "react";
import Link from 'next/link';

function News () {
    return (
        <Fragment>
            <h1>News</h1>
            <ul>
                <li>
                    <Link href='/news/1'>1</Link>
                </li>
                <li>2</li>
            </ul>
        </Fragment>
    )
    
    

}
export default News