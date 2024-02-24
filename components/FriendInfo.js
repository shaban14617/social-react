import Avatar from "./Avatar";

function FriendInfo() {
  return (
    <div className="border-b p-4 -mx-4 border-b-gray-100">
      <div className="flex gap-2">
        <Avatar />
        <div>
          <h3 className="font-medium text-xl">ahmed shabaan</h3>
          <div className="text-sm leading-3">5 mutual friends</div>
        </div>
      </div>
    </div>
  );
}

export default FriendInfo;
