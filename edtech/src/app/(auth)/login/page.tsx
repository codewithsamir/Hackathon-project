
import Headers from "@/components/Landingpage/Header";
import  Cards from "@/components/Landingpage/Card";
import  Course from "@/components/Landingpage/Course";

const page = () => {
  return (

<div>
{/* footer */}
<Headers />

{/* Box */}
{<Cards/>}
<Course/>

</div>

    
  )
}

export default page;