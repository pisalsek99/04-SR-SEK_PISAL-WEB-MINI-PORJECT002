import React from "react";

const ProfileComponent = ({ imageUrl ="https://i.pinimg.com/736x/a8/96/9e/a8969e6314a808d97043572d5e98e008.jpg", name = "pisal", email = "Email123@gmail.com" }) => {
  return (
    <div className="flex gap-2 items-center">
      {/* Profile Image */}
      <img
        src={imageUrl}
        alt="Profile"
        className="rounded-full w-10 h-10 object-cover"
      />
      {/* User Information */}
      <div className="flex flex-col items-start justify-evenly">
        <p>{name}</p>
        <p className="text-sm text-amber-500">{email}</p>
      </div>
    </div>
  );
};

export default ProfileComponent;
