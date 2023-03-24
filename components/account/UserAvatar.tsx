import { UserAddIcon, UserIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";

interface UserAvatarProps {
  /** width as className like w-4 */
  width?: string;
  /** height as className like h-4 */
  height?: string;
  /** determents if the avatar should have initial primary border visible */
  activeBorder?: boolean;
  children?: React.ReactNode;
  centered?: boolean;
  onClick?: () => void;
}

const UserAvatar: React.FC<UserAvatarProps> = ({
  width = "w-10",
  height = "h-10",
  activeBorder = false,
  children,
  onClick,
  centered,
}) => {
  const onClickHandler = () => {
    if (onClick) onClick();
  };
  return (
    <div
      className={`flex items-center justify-center ${width} ${height} ${
        centered ? "mx-auto" : ""
      } ${
        activeBorder ? "border-app-primary-red" : "border-transparent"
      } bg-app-blue-800 rounded-full border-4 cursor-pointer overflow-hidden hover:animate-scale-small hover:border-app-primary-red`}
      onClick={onClickHandler}
    >
      <Link href="/whoiswatching">
        {children ? (
          <a className="flex items-center justify-center">{children}</a>
        ) : (
          <UserIcon className="text-app-blue-300 translate-y-[10%]" />
        )}
      </Link>
    </div>
  );
};

export default UserAvatar;
