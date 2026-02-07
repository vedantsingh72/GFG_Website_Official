import ProfileCard from "./ProfileCard";

export default function TeamMemberList() {
  return (
    <div className="px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <ProfileCard
          name="Ashish Yadav"
          title="Vice President"
          handle="javicodes"
          status="Online"
          avatarUrl="https://res.cloudinary.com/dxaq078zo/image/upload/v1770464336/Ashish_wbg_elow3t.png"
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
          avatarUrl="https://res.cloudinary.com/dxaq078zo/image/upload/v1770464338/Shreya_wbg_v00gmo.png"
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
          avatarUrl="https://res.cloudinary.com/dxaq078zo/image/upload/v1770464338/kushagra_wbg_kdge1e.png"
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
