"use client";

const DeleteIcon = ({
  onClick,
  itemId,
}: {
  onClick: (id: string) => void;
  itemId: string;
}) => {
  return (
    <svg
      onClick={() => onClick(itemId)}
      width="16px"
      height="16px"
      viewBox="0 0 16 15"
      version="1.1"
    >
      <g id="surface1" transform="translate(8, 9) translate(-8, -7.5)">
        <path
          fill="#7c7c7c"
          d="M 11.976562 4.082031 C 12.164062 3.898438 12.164062 3.601562 11.976562 3.417969 C 11.789062 3.234375 11.484375 3.234375 11.296875 3.417969 L 7.796875 6.835938 L 4.296875 3.417969 C 4.109375 3.234375 3.804688 3.234375 3.617188 3.417969 C 3.429688 3.601562 3.429688 3.898438 3.617188 4.082031 L 7.117188 7.5 L 3.617188 10.917969 C 3.429688 11.101562 3.429688 11.398438 3.617188 11.582031 C 3.804688 11.765625 4.109375 11.765625 4.296875 11.582031 L 7.796875 8.164062 L 11.296875 11.582031 C 11.484375 11.765625 11.789062 11.765625 11.976562 11.582031 C 12.164062 11.398438 12.164062 11.101562 11.976562 10.917969 L 8.476562 7.5 Z M 11.976562 4.082031 "
        />
      </g>
    </svg>
  );
};

export default DeleteIcon;