import "./App.css";
import PriceCard from "./PriceCard";

function App() {
  let data =[
    {
      plan:"FREE",
      price:"0$",
      user:"Single User",
      isUser:true,
      storage:"5GB",
      isStorage:true,
      publicProjects:"Unlimited Public Projects",
      isPublicProjects:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProjects:"Unlimited Private Projects",
      isPrivateProjects:false,
      phoneSupport:"Dedicated Phone Support",
      isPhoneSupport:false,
      subDomain:"free subDomain",
      isSubDomain:false,
      reports:"Monthly Status Reports",
      isReports:false
    },{
      plan:"PLUS",
      price:"9$",
      user:"5 Users",
      isUser:true,
      storage:"50GB",
      isStorage:true,
      publicProjects:"Unlimited Public Projects",
      isPublicProjects:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProjects:"Unlimited Private Projects",
      isPrivateProjects:true,
      phoneSupport:"Dedicated Phone Support",
      isPhoneSupport:true,
      subDomain:"free Sub Domain",
      isSubDomain:true,
      reports:"Monthly Status Reports",
      isReports:false
    },{
      plan:"PRO",
      price:"49$",
      user:"Unlimited Users",
      isUser:true,
      storage:"150GB",
      isStorage:true,
      publicProjects:"Unlimited Public Projects",
      isPublicProjects:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProjects:"Unlimited Private Projects",
      isPrivateProjects:true,
      phoneSupport:"Dedicated Phone Support",
      isPhoneSupport:true,
      subDomain:"Unlimited Sub Domain",
      isSubDomain:true,
      reports:"Monthly Status Reports",
      isReports:true
    }
]
  return <>
    <div>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {
              data.map((e,i)=>{
                return <PriceCard data={e} key={i}/> 
              })
            }
          </div>
        </div>
      </section>
    </div>
  </>;
}

export default App;
