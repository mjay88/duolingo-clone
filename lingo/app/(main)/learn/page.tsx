import { redirect } from "next/navigation";
import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/stick-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress } from "@/db/queries";


const LearnPage = async () => {
  const userProgressData = getUserProgress()

  const [userProgress] = await Promise.all([
    userProgressData
  ])
//if no course selected or active redirect
  if(!userProgress || !userProgress.activeCourse){
    redirect("/courses")
  }
  
  return (
    <div className="flex gap-[48px] px-6">
      <FeedWrapper>
        <Header title="Spanish" />
      </FeedWrapper>
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: "Spanish", imageSrc: "/es.svg" }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        ></UserProgress>
      </StickyWrapper>
    </div>
  );
};

export default LearnPage;
