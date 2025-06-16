import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="flex flex-col items-center pb-4">
      <h1 className="text-3xl font-bold pb-5 text-center text-[var(--text-color)]">
        Days I <span className="text-purple-400">Code</span>
      </h1>

      <GitHubCalendar
        username="sharma151"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
        style={{ color: "white" }}
      />
    </div>
  );
}

export default Github;
