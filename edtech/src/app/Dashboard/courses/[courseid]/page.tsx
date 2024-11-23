import VideoSections from "@/components/videosection/Videosection";


const page = ({params}:any) => {
    const courseid = decodeURIComponent(params.courseid);
    console.log(courseid);
  return (
    <div>
        
        
        <VideoSections/>
    </div>
  )
}

export default page