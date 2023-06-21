import "./Landing-page.css";
import OurTeam from "./OurTeam"
export default function OurTeamCountainer(){
    return(<>
            <h1 style={{textAlign:"center"}}>Our Team</h1>
            <div  className="HoldOurTeam" style={{display:"flex" }}>
<OurTeam name="HebaAlrrhman"/>
<OurTeam name="ahmadabdelhaddi" />
<OurTeam name="duhamjilani"/>
<OurTeam name="Laith-Alzbaidy" />
<OurTeam name="Mohammadkay"/> 
<OurTeam name="OmarHilwah" />
</div>
    </>
    );
}