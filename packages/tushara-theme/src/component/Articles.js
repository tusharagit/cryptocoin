import { connect } from "frontity"
import React, {useState, useEffect} from 'react';
import Link from "@frontity/components/link"
import Loading from './Dashboard/Loading.js';

const Articles = ({ state })  => {
  const [listdata, listdatafun] = useState({})

  useEffect(() =>{
    listdatafun(state.source.get(state.router.link))
  },[])

    return(
        <>
          {
             ( listdata.items === undefined) ?  <Loading comType="cload" />
            :listdata.items?.map((item, index)=>{
                return <Link className="menu" link={state.source.post[item.id].link}>{state.source.post[item.id].title.rendered}</Link> 
            })
          } 
        </>  
    )
}
export default connect(Articles);

