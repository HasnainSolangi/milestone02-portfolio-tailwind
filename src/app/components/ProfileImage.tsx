import Image from 'next/image';

export default function ProfileImage() {
  return (
    <div className="profile-image">
      <Image
        src="/profile.png" // Path to your image
        alt="Profile"
        className="rounded-full mx-auto border-4 border-accent"
        width={256}  
        height={256} 
      />
    </div>
  );
}
