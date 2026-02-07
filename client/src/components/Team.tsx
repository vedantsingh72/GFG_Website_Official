import ProfileCard from "./ProfileCard";
import Ashish from "../assets/Ashish_wbg.png"
import Kushagra from "../assets/Kushagra_wbg.png"
import Shreya from "../assets/Shreya_wbg.png"

export default function TeamMemberList() {
  return (
    <div className="px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <ProfileCard
          name="Ashish Yadav"
          title="Vice President"
          handle="javicodes"
          status="Online"
          avatarUrl={Ashish}
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          githubUrl="https://github.com/javicodes"
          linkedinUrl="https://linkedin.com/in/javicodes"
          onGithubClick={() => console.log("GitHub clicked")}
          onLinkedinClick={() => console.log("LinkedIn clicked")}
        />
        <ProfileCard
          name="Shreya"
          title="President"
          handle="javicodes"
          status="Online"
          avatarUrl={Shreya}
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          githubUrl="https://github.com/javicodes"
          linkedinUrl="https://linkedin.com/in/javicodes"
          onGithubClick={() => console.log("GitHub clicked")}
          onLinkedinClick={() => console.log("LinkedIn clicked")}
        />
        <ProfileCard
          name="Kushgra Kumar"
          title="Vice President"
          handle="javicodes"
          status="Online"
          avatarUrl={Kushagra}
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          githubUrl="https://github.com/javicodes"
          linkedinUrl="https://linkedin.com/in/javicodes"
          onGithubClick={() => console.log("GitHub clicked")}
          onLinkedinClick={() => console.log("LinkedIn clicked")}
        />
      </div>
    </div>
  );
}
