import OutsideClickHandler from "react-outside-click-handler";

export default function MyComponent() {
  return (
    <>
      <OutsideClickHandler
        onOutsideClick={() => {
          alert("You clicked outside of this component!!!");
        }}
      >
        Hello World
      </OutsideClickHandler>
    </>
  );
}
