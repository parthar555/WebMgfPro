import { GrCluster, GrDatabase, GrCompare, GrShield, GrInbox, GrCompliance } from "react-icons/gr";

const SiteAdmin = () => {
    const contentBoxes = [
        { title: "Forms Builder", color: "#6e6c9a", fontColor: "white", icon: <GrDatabase />,content:"Create forms for operators to work with and report issues in real time" },
        { title: "Shift Planner", color: "#d8bcbd", fontColor: "white", icon: <GrCluster /> ,content:"Plan and assign operators for a shift"},
        { title: "Shift Leader Planner", color: "#a37f7e", fontColor: "white", icon: <GrCompare />,content:"Plan the shifts assigning production lines to supervise" },
        { title: "Workflows Manager", color: "#6e6c9a", fontColor: "white", icon: <GrCompliance /> ,content:"Build the workflows that staff will perform during their shift"},
        { title: "Digital Quality", color: "#504a7a", fontColor: "white", icon: <GrInbox />,content :"Tracks quality in digital forms" },
        { title: "Holds", color: "#2c2039", fontColor: "white", icon: <GrShield />,content : "Investigate and complete holds process" },
    
      ]
    return (
        <div className='contentBox_cont'>
              {contentBoxes?.map(itm => {
                return (

                  <div className='contentBox' >

                    <div className='contentBoxes_icon' style={{ backgroundColor: itm?.color, borderColor: itm?.color, color: itm?.fontColor }}>
                      {itm?.icon}
                    </div>
                    <div className='contentBoxes_title'>{itm?.title}
                    </div>
                    <div className='contentBoxes_content'>{itm?.content}
                    </div>


                  </div>)
              })}
        </div> 
    )
}

export default SiteAdmin;
