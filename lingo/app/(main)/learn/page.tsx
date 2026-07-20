import { redirect } from "next/navigation";
import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/stick-wrapper";
import { Header } from "./header";
import { Unit } from "./unit";
import { UserProgress } from "@/components/user-progress";
import { getUnits, getUserProgress } from "@/db/queries";


const LearnPage = async () => {
  const userProgressData = getUserProgress()
  const unitsData = getUnits();

  const [userProgress, units] = await Promise.all([
    userProgressData, unitsData
  ])
//if no course selected or active redirect
//this check prevents cascading optional chaining and typing issues
  if(!userProgress || !userProgress.activeCourse){
    redirect("/courses")
  }
  
  return (
    <div className="flex gap-[48px] px-6">
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />
        {units.map((unit) => (
         <div key={unit.id} className="mb-10">
          <Unit 
          id={unit.id}
          order={unit.order}
          description={unit.description}
          title={unit.title}
          lessons={unit.lessons}
          activeLesson={undefined}
          activeLessonPercentage={0}
          ></Unit>
         </div>
        ))}
      </FeedWrapper>
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        ></UserProgress>
      </StickyWrapper>
    </div>
  );
};

export default LearnPage;
