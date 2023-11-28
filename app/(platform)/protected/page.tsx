import { UserButton, currentUser } from "@clerk/nextjs";

const ProtactedPage = async () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default ProtactedPage;

