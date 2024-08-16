import React, { useMemo, useState } from "react";

interface MockDetailProps {
  index: number;
}

const getRandomString = (length: number) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const MockDetail: React.FC<MockDetailProps> = ({ index }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [clicked, setClicked] = useState(0);
  const randomString = getRandomString(5);
  const title = `${randomString}. Index: ${index}. Clicked ${clicked}`;
  const TagName = Math.random() > 0.5 ? "div" : "span";
  const backgroundColor = getRandomColor();
  const renderChild = useMemo(() => Math.random() < 0.2, []);

  function onSingleClick() {
    setClicked((click) => click + 1);
  }

  if (!isVisible) return null;

  return (
    <TagName
      title={title}
      style={{
        backgroundColor,
      }}
      className="detail"
      onDoubleClick={() => setIsVisible(false)}
      onClick={onSingleClick}
    >
      {renderChild && <div>{title}</div>}
    </TagName>
  );
};

export default MockDetail;
