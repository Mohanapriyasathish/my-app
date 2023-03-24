import "./styles.css";
import "./App.css";
import Details from "./Details";
export default function App() {
  const data=[
    {
      
      user:"✔ Single User",
      heading:"Free",
      DOllar:"0/",
         
    },
    {
      user:" ✔ 5 users",
      heading:"Plus",
      DOllar:"9/",
    },
    {
      user:"✔ Unlimited Users",
      heading:"Pro",
      DOllar:"49/",
    },
  ]
  return (
    <div className="App">
      {
        data.map((item)=>{
                    return<Details user={item.user} heading={item.heading} Dollar={item.DOllar}/>
           
           

        })
      }
     {/* <Details 
      heading="FREE" Dollar="$0/month"

      tag1="✔" user="Single User"
      tag2="✔"storage="5GB user"
      tag3="✔"projects="Unlimited Public Projects"
      tag4="✔" 
      tag5="✔"
      tag6="✔"
      tag7="❌" Access="Community Access"
      tag8="❌" projects1="Unlimited Private Projects"
      tag9="❌" support="Dedicated Phone Support"
      tag10="❌" domain="Free Subdomain"
      tag11="❌"reports="Monthly Status Reports"
            />                                 
      <Details
       heading="PLUS" Dollar="$9/month" 
       tag1="✔" user="5 Users"
       tag2="✔"storage="50GB Storage"
       tag3="✔" projects="Unlimited Public Projects"
       tag4="✔" Access="Community Access"
       tag5="✔"projects1="Unlimited Private Projects"
       tag6="✔"support="Dedicated Phone Support"
       tag7="✔"domain="Free Subdomain"
       tag8="❌" reports="Monthly Status Reports"
                                    
       />
      <Details
       heading="PRO" Dollar="$49/month"  
       tag1="✔"user="Unlimited Users"
       tag2="✔"storage="150GB Storage"
       tag3="✔" projects="Unlimited Public Projects"
       tag4="✔" Access="Community Access"
       tag5="✔" projects1="Unlimited Private Projects"
       tag6="✔"support="Dedicated Phone Support"
       tag7="✔"domain="Free Subdomain"
       tag8="✔" reports="Monthly Status Reports"
       />
  */}
          </div>
  );
}
{/*function Details(props){
  return(
    <div className ="card">
     <div className="container" >
    <p>{props.heading}</p>
    
                  <h2 className="dollar">{props.Dollar}</h2>
                  </div>
    <p><span>{props.tag1}</span>{props.user}</p>
    <p><span>{props.tag2}</span>{props.storage}</p>
    <p><span>{props.tag3}</span>{props.projects}</p>
    <p><span>{props.tag4}</span>{props.Access}</p>
    <p><span>{props.tag5}</span>{props.projects1}</p>
    <p><span>{props.tag6}</span>{props.support}</p>
    <p><span>{props.tag7}</span>{props.domain}</p>
    <p><span>{props.tag8}</span>{props.reports}</p>
     
   
  <button className="btn" >BUTTON</button>
  
  </div>
  
  );
}*/}

