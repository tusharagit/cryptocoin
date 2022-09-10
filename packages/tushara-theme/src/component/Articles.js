import { connect } from "frontity"
import React, {useState, useEffect} from 'react';
import Link from "@frontity/components/link"

const Articles = ({ state, libraries })  => {
  const Html2React = libraries.html2react.Component;
  const data = state.source.get(state.router.link)
  console.log("in test1.......................................")
  console.log(data) 
  console.log(state) 
  console.log(state.source.post) 
  useEffect(() =>{

  })
    return(
        <>
        <div>NEWS NEWS NEWS NEWS NEWS</div>  
          {
            data.items.map((item)=>{
              return <h1>
                <Link className="menu" link={state.source.post[item.id].link}>{state.source.post[item.id].title.rendered}</Link>
                </h1>
            })
          } 
           
        </>  
    )
}
export default connect(Articles);

