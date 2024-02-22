function Avatar({ size }) {
  let width = "w-12";
  if (size === "lg") {
    width = "w-36";
  }
  return (
    <div>
      <div className={`${width} rounded-full overflow-hidden`}>
        <img alt="avatar" src={"/ahmed.jpg"} className="w-full" />
      </div>
    </div>
  );
}

export default Avatar;
